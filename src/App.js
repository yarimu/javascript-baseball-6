import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print("숫자야구 게임을 시작합니다!");
    // 랜덤으로 숫자 추출
    let randomNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);

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

        // 중복제거 후 중복검증으로 활용 -> 중복 있는 경우, 중복 없는 경우
        const setAnswer = new Set(newAnswer);

        // 입력한 값이 중복 없는 경우 -> 게임시작
        if (setAnswer.size === 3) {
          // 스트라이크, 볼 검증 식
          let BALL = 0;
          let STRIKE = 0;
          for (let i = 0; i < randomNum.length; i++) {
            if (randomNum[i] === newAnswer[i]) {
              STRIKE++;
            } else if (newAnswer.includes(randomNum[i])) {
              BALL++;
            }
          }

          // 검증 후 화면에 출력하기
          if (STRIKE !== 0 && BALL !== 0) {
            MissionUtils.Console.print(
              `${STRIKE}` + "스트라이크" + "," + `${BALL}` + "볼"
            );
          }
          // 스트라이크만 있는 경우
          else if (STRIKE !== 0) {
            MissionUtils.Console.print(`${STRIKE}` + "스트라이크");
          }
          // 볼만 있는 경우
          else if (BALL !== 0) {
            MissionUtils.Console.print(`${BALL}` + "볼");
          }
          // 낫싱인 경우
          else {
            MissionUtils.Console.print("낫싱");
          }
          // 스트라이크 3개인 경우 1,2 입력에따라 게임 재실행, 종료
          if (STRIKE === 3) {
            MissionUtils.Console.print("세 자리의 숫자를 모두 맞추었습니다.");
            MissionUtils.Console.print(
              "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
            );
            const restartAnswer = await MissionUtils.Console.readLineAsync(
              "숫자를 입력하세요:"
            );
            if (restartAnswer === "1") {
              MissionUtils.Console.print("숫자야구 게임을 시작합니다!");
              randomNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
              getUserInput();
            } else {
              MissionUtils.Console.print("게임을 종료합니다.");
            }
          }
          // 3스트라이크가 아니라면 계속 반복
          else {
            getUserInput();
          }
        }

        // 3자리인데 중복 있는 경우
        else {
          MissionUtils.Console.print(
            "1부터 9까지의 숫자 중 중복 없는 3자리 숫자를 입력해주세요."
          );
          getUserInput();
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
