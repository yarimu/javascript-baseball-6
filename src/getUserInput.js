// 사용자가 입력한 숫자 유효성 검사
import { MissionUtils } from "@woowacourse/mission-utils";

async function getUserInput () {
    const answer = await MissionUtils.Console.readLineAsync("숫자를 입력하세요:")
    if (answer.length === 3){
      // 입력받은 값을 배열로 바꾸기
      const answerToString = String(answer);
      const answerToNum = () => Number();
      const newAnswer = Array.from(answerToString,answerToNum );

      // 중복검사 함수
      const setAnswer = new Set(newAnswer)
      const isDuplicate = setAnswer.size < newAnswer.length;
      
      // 배열로 바꾼 숫자를 중복이 없는 경우와 있는 경우로 또 가르기
      if (isDuplicate === false) { MissionUtils.Console.print("굿");

      }
      else{MissionUtils.Console.print("잘못된 입력입니다. 1~9사이 중복되지 않은 3개의 수를 입력해주세요.");
        getUserInput();}

    }
    else {MissionUtils.Console.print("잘못된 입력입니다. 1~9사이 중복되지 않은 3개의 수를 입력해주세요.");
      getUserInput();
    }
  }

  export default getUserInput;