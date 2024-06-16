import { MissionUtils } from "@woowacourse/mission-utils";
import getUserInput from "./getUserInput.js";

class App {
  async play() {
    MissionUtils.Console.print("숫자야구 게임을 시작합니다!");
    // 랜덤으로 숫자 추출
    const RANDOM_NUM = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);

    // 사용자가 입력 완료하는 동안 다른 작업 실시
    const UserInput = await getUserInput()
  }
  
  
}

const one = new App();
one.play();

export default App;
