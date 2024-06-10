import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    MissionUtils.Random.pickNumberInRange(1, 10); // 1
  }
}

const one = new App();
one.play();

export default App;
