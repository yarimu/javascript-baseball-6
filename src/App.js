import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자야구 게임을 시작합니다!");
    // 랜덤으로 숫자 추출
    const randomNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);

    // 사용자가 입력 완료하는 동안 다른 작업 실시
    async function getUserInput() {
      const answer = await MissionUtils.Console.readLineAsync(
        "숫자를 입력하세요:"
      );
      //3자리인 경우
      if (answer.length === 3) {
        // 입력받은 값을 배열로 바꾸기
        const answerToString = String(answer);
        const mapfn = (arg) => Number(arg);
        const newAnswer = answerToString.split("").map(mapfn);

        // 중복제거 후 중복검증으로 활용
        const setAnswer = new Set(newAnswer);
        // 배열로 바꾼 숫자를 중복이 없는 경우와 있는 경우로 또 가르기
        // 입력한 값이 중복 없는 경우 -> 게임시작
        if (setAnswer.size === 3) {
          // 볼 검증 식
          const checkBall = randomNum.filter((x) => newAnswer.includes(x));
          let BALL = checkBall.length;
          // 스트라이크 검증 식
          let STRIKE = 0;
          for (let i = 0; i < randomNum.length; i++) {
            if (randomNum[i] === newAnswer[i]) {
              STRIKE++;
            }
          }
          // 검사 후 화면에 출력하기
          if (BALL > 0) {
            MissionUtils.Console.readLineAsync(
              `${STRIKE}` + "스트라이크" + "," + `${BALL}` + "볼"
            );
            //
          } else {
            MissionUtils.Console.readLineAsync("낫싱");
          }
          // 스트라이크 3개인 경우 게임끝낼건지 추가해야함
        }
        // 3자리인데 중복 있는 경우
        else {
          MissionUtils.Console.print(
            "1부터 9까지의 숫자 중 중복 없는 3자리 숫자를 입력해주세요."
          );
        }
      }
      //3자리가 아닌 경우
      else {
        MissionUtils.Console.print(
          "잘못된 입력입니다. 1부터 9까지의 숫자 중 중복 없는 3자리 숫자를 입력해주세요."
        );
        getUserInput();
      }
    }
    // 처음 입력
    getUserInput();
  }
}

const one = new App();
one.play();

export default App;
