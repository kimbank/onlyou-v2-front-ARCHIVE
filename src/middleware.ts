import { NextRequest, NextResponse } from 'next/server'

// 로그인 상태에서만 접근할 수 있는 페이지
const USER_PAGE = [
  '/matching', // 매칭
  '/agreement', // 성사
  '/event', // 이벤트
  '/board', // 게시판
  '/myinfo', // 내 정보

  '/application', // 신청서
]

// 로그인 상태에서 접근할 수 없는 페이지
const GUEST_PAGE = [
  '/signin', // 로그인
  '/signup', // 회원가입
]

export async function middleware(req: NextRequest) {
  const REQ_URL = req.nextUrl.pathname;
  const USER = req.cookies.has('refresh');

  /* 유저, 게스트 여부에 따라 분기 */
  if (USER) { // 로그인 상태
    for (const PAGE of GUEST_PAGE) {
      if (REQ_URL.startsWith(PAGE)) {
        return NextResponse.redirect(new URL('/matching', req.url))
      }
    }
  } else { // 비로그인 상태
    for (const PAGE of USER_PAGE) {
      if (REQ_URL.startsWith(PAGE)) {
        return NextResponse.redirect(new URL('/signin', req.url))
      }
    }
  }

  if (REQ_URL === "/") {
    return NextResponse.redirect(new URL('/matching', req.url))
  }

  /* 쿠키 삭제로 로그아웃 처리 */
  if (REQ_URL.startsWith("/signout")) {
    const res = NextResponse.next();
    // console.log(req.cookies.getAll())

    res.cookies.set({
      name: 'access',
      value: '',
      maxAge: 0,
      path: '/',
      domain: process.env.TOKEN_COOKIE_DOMAIN ? process.env.TOKEN_COOKIE_DOMAIN : undefined,
    });
    res.cookies.set({
      name: 'refresh',
      value: '',
      maxAge: 0,
      path: '/',
      domain: process.env.TOKEN_COOKIE_DOMAIN ? process.env.TOKEN_COOKIE_DOMAIN : undefined,
    });

    // res.cookies.delete('access'); // access 토큰 삭제
    // res.cookies.delete('refresh'); // refresh 토큰 삭제

    return res;
  }
}
