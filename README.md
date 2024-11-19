# onlyou v2 front

## 개발 환경

### Next.js 구동

- [pakage.json](/package.json) 의 dependency를 사용 중
- [pakage.json](/package.json) 의 "scripts"의 `dev`로 로컬 개발환경에서 구동

0. (required) 환경변수 파일(`.env`) 설정

```plaintext
{{비공개}}
```

1. (conditional) dependency 설치

```bash
npm install
```

2. Next.js 개발 환경으로 구동

```bash
npm run dev
```

3. 구동 확인

- http://127.0.0.1
- 개발 배포 테스트시
  - {{비공개}}


### API 통신 구조

- 로컬 환경에서 개발 시에는 `Next.js`의 proxy기능으로 API 통신
- `develop` & `production` 배포 상황에서는 proxy하지 않고 client에서 직접 통신함
  - Axios사용과 연관성이 있으므로 해당 사항을 인지해야함
- 백엔드 API 주소는 `NEXT_PUBLIC_V2_BACK_URL` 로 `https://{주소}` 형태로 저장해야함


### Middleware 와 Axios

- 회원 페이지와 비로그인 페이지를 middleware가 관리함
- _회원의 로그아웃을 middleware (프론트)에서 관리함_
- 로그아웃 원리는 Axios authed 통신에서 access token 유효하지 않을 때 refresh token으로 access 재발급 및 API 통신 시도
- 재발급 및 통신 시도 실패시 signout 페이지로 이동하며 middleware가 access, refresh token을 삭제함
- 해당 로직은 [middleware](/src/middleware.ts)와 [authedAxios](/src/api/base/axisoInstance.ts#L11) 소스코드 참고가 필요함

<br/><br/>
