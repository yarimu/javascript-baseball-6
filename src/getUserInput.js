// 사용자가 입력한 숫자 유효성 검사
import { MissionUtils } from "@woowacourse/mission-utils";

async function getUserInput () {
    const answer = await MissionUtils.Console.readLineAsync("숫자를 입력하세요:");
    if ( answer.length === 3 ){
      // 입력받은 값을 배열로 바꾸기
      const answerToString = String(answer);
      const mapfn = (arg) => Number(arg);
      const newAnswer = answerToString.split('').map(mapfn); 

      // 중복제거 후 중복검증으로 활용
      const setAnswer = new Set(newAnswer)
      // const isDuplicate = setAnswer.size < newAnswer.length;
      
      // 배열로 바꾼 숫자를 중복이 없는 경우와 있는 경우로 또 가르기
      if (setAnswer.size !== 3) { MissionUtils.Console.print("1부터 9까지의 숫자 중 중복 없는 3자리 숫자를 입력해주세요.")
        getUserInput();
      }
      else {MissionUtils.Console.print("굿");}

    }
    else {MissionUtils.Console.print("잘못된 입력입니다. 1부터 9까지의 숫자 중 중복 없는 3자리 숫자를 입력해주세요.");
      getUserInput();
    }
  }

  export default getUserInput;