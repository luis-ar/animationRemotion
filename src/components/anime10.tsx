"use client";
import React, { useEffect, useRef, useState } from "react";
import anime from "animejs"; // Assuming you have animejs installed
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";

import "./styles.css";
const TenthAnimation = () => {
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
            targets: ".ml10 .letter",
            rotateY: [-90, 0],
            duration: 1300,
            delay: (el, i) => 45 * i,
          })
          .add({
            targets: ".ml10",
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
      <h1 className="ml10">
        <span className="text-wrapper">
          <span className="letters" ref={textWrapperRef}>
            Domino Dreams
          </span>
        </span>
      </h1>
    </AbsoluteFill>
  );
};

export default TenthAnimation;
