"use client";
import React, { useEffect, useRef, useState } from "react";
import anime from "animejs"; // Assuming you have animejs installed
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";

import "./styles.css";
const SecondAnimation = () => {
  const animationRef = useRef<HTMLHeadingElement>(null);
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const [animation, setAnimation] = useState<anime.AnimeInstance | null>(null);

  // Using a useEffect, because anime needs to get the ref once it's mounted
  useEffect(() => {
    if (animationRef.current) {
      setAnimation(() => {
        return anime
          .timeline({ loop: true })
          .add({
            targets: ".ml5 .line",
            opacity: [0.5, 1],
            scaleX: [0, 1],
            easing: "easeInOutExpo",
            duration: 700,
          })
          .add({
            targets: ".ml5 .line",
            duration: 600,
            easing: "easeOutExpo",
            translateY: (el: any, i: number) => -0.625 + 0.625 * 2 * i + "em",
          })
          .add({
            targets: ".ml5 .ampersand",
            opacity: [0, 1],
            scaleY: [0.5, 1],
            easing: "easeOutExpo",
            duration: 600,
            offset: "-=600",
          })
          .add({
            targets: ".ml5 .letters-left",
            opacity: [0, 1],
            translateX: ["0.5em", 0],
            easing: "easeOutExpo",
            duration: 600,
            offset: "-=300",
          })
          .add({
            targets: ".ml5 .letters-right",
            opacity: [0, 1],
            translateX: ["-0.5em", 0],
            easing: "easeOutExpo",
            duration: 600,
            offset: "-=600",
          })
          .add({
            targets: ".ml5",
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
      <h1 className="ml5" ref={animationRef}>
        <span className="text-wrapper">
          <span className="line line1"></span>
          <span className="letters letters-left">Signal </span>
          <span className="letters ampersand">&amp;</span>
          <span className="letters letters-right">Noise</span>
          <span className="line line2"></span>
        </span>
      </h1>
    </AbsoluteFill>
  );
};

export default SecondAnimation;
