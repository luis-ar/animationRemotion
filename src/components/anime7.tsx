"use client";
import React, { useEffect, useRef, useState } from "react";
import anime from "animejs"; // Assuming you have animejs installed
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";

import "./styles.css";
const SeventhAnimation = () => {
  const textWrapperRef = useRef<HTMLHeadingElement>(null);
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const [animation, setAnimation] = useState<anime.AnimeInstance | null>(null);

  // Using a useEffect, because anime needs to get the ref once it's mounted
  useEffect(() => {
    if (textWrapperRef.current) {
      const textWrapper = textWrapperRef.current;

      textWrapper.innerHTML = textWrapper.textContent!.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
      setAnimation(() => {
        return anime
          .timeline({ loop: true })
          .add({
            targets: ".ml7 .letter",
            translateY: ["1.1em", 0],
            translateX: ["0.55em", 0],
            translateZ: 0,
            rotateZ: [180, 0],
            duration: 750,
            easing: "easeOutExpo",
            delay: (el, i) => 50 * i,
          })
          .add({
            targets: ".ml7",
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000,
          });
      });
    }
  }, []);

  useEffect(() => {
    if (!animation) {
      return;
    }
    animation.seek(((frame / fps) * 1000) % animation.duration);
  }, [animation, fps, frame]);
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="ml7" ref={textWrapperRef}>
        <span className="text-wrapper">
          <span className="letters">Reality is broken</span>
        </span>
      </h1>
    </AbsoluteFill>
  );
};

export default SeventhAnimation;
