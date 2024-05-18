"use client";
import FirstAnime from "@/components/anime1";
import { Composition } from "remotion";
export default function Home() {
  return (
    <div className="flex flex-col ">
      <div className="h-[100px] bg-black text-white text-xl flex justify-center items-center">
        Animate Letters
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="bg-[#9ba5b5] h-[300px] font-[Inter] flex justify-center items-center text-[60px] font-bold">
          <Composition
            id="MyComp"
            component={FirstAnime}
            durationInFrames={240}
            fps={30}
            width={1280}
            height={720}
          />
        </div>
      </div>
    </div>
  );
}
