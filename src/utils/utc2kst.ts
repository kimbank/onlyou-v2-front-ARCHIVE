const UTCtoKST = (date: string | Date): Date => {
  // ISO 8601 문자열을 Date 객체로 변환
  const utcDate = new Date(date);


  // UTC에서 KST로 변환 (9시간 더하기)
  const kstOffset = 0;
  // const kstOffset = 0; // 9 * 60 * 60 * 1000; // 9시간을 밀리초로 변환
  
  return new Date(utcDate.getTime() + kstOffset);
}

// 함수 사용 예시
// const kstDate = toKST('2023-12-29T08:42:18.903Z');

export default UTCtoKST;

