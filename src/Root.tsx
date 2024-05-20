import { Composition } from "remotion";
import FirstAnime from "./components/anime1";
import SecondAnimation from "./components/anime2";
import ThirdAnimation from "./components/anime3";
import FourthAnimation from "./components/anime4";
import FifthAnimation from "./components/anime5";
import SixthAnimation from "./components/anime6";
import SeventhAnimation from "./components/anime7";
import EighthAnimation from "./components/anime8";
import NinthAnimation from "./components/anime9";
import TenthAnimation from "./components/anime10";
import ElevenAnimation from "./components/anime11";
import TwelveAnimation from "./components/anime12";
import ThirteenAnimation from "./components/anime13";
import FourteenAnimation from "./components/anime14";
import FifteenAnimation from "./components/anime15";
import SixteenAnimation from "./components/anime16";
export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="FirstAnime"
        component={FirstAnime}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="SecondAnimation"
        component={SecondAnimation}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="ThirdAnimation"
        component={ThirdAnimation}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="FourthAnimation"
        component={FourthAnimation}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="FifthAnimation"
        component={FifthAnimation}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="SixthAnimation"
        component={SixthAnimation}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
      />{" "}
      <Composition
        id="SeventhAnimation"
        component={SeventhAnimation}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="EighthAnimation"
        component={EighthAnimation}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
      />{" "}
      <Composition
        id="NinthAnimation"
        component={NinthAnimation}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="TenthAnimation"
        component={TenthAnimation}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
      />{" "}
      <Composition
        id="ElevenAnimation"
        component={ElevenAnimation}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="TwelveAnimation"
        component={TwelveAnimation}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="ThirteenAnimation"
        component={ThirteenAnimation}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="FourteenAnimation"
        component={FourteenAnimation}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="FifteenAnimation"
        component={FifteenAnimation}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="SixteenAnimation"
        component={SixteenAnimation}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};
