"use client";
import React, { useEffect, useRef, useState } from "react";
import anime from "animejs"; // Assuming you have animejs installed
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";

import "./styles.css";
const FourteenAnimation = () => {
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
            targets: ".ml14 .line",
            scaleX: [0, 1],
            opacity: [0.5, 1],
            easing: "easeInOutExpo",
            duration: 900,
          })
          .add({
            targets: ".ml14 .letter",
            opacity: [0, 1],
            translateX: [40, 0],
            translateZ: 0,
            scaleX: [0.3, 1],
            easing: "easeOutExpo",
            duration: 800,
            offset: "-=600",
            delay: (el, i) => 150 + 25 * i,
          })
          .add({
            targets: ".ml14",
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
      <h1 className="ml14">
        <span className="text-wrapper">
          <span className="letters" ref={textWrapperRef}>
            Find Your Element
          </span>
          <span className="line"></span>
        </span>
      </h1>
    </AbsoluteFill>
  );
};

export default FourteenAnimation;
