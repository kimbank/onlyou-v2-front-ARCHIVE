const jongsung = (word: string) => {
  // 마지막 글자를 가져옵니다.
  const lastChar = word.charAt(word.length - 1);

  // 유니코드 값을 계산합니다.
  const uniValue = lastChar.charCodeAt(0);

  // 한글 유니코드 시작 값과 종성의 개수
  const HANGUL_START = 0xAC00;
  const JONGSUNG_COUNT = 28;

  // 종성 인덱스를 계산합니다. (0이면 종성이 없는 것)
  const jongIndex = (uniValue - HANGUL_START) % JONGSUNG_COUNT;

  return jongIndex === 0 ? '를' : '을';
}

export default jongsung;

// 예시 사용
/**
console.log(chooseParticle("사과"));  // "를" 반환
console.log(chooseParticle("바나나")); // "를" 반환
console.log(chooseParticle("책"));    // "을" 반환
 */
