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
        anime
          .timeline({ loop: false, autoplay: false })
          .add({
            targets: ".ml8 .circle-white",
            scale: [0, 3],
            opacity: [1, 0],
            easing: "easeInOutExpo",
            rotateZ: 360,
            duration: 1100,
          })
          .add({
            targets: ".ml8 .circle-container",
            scale: [0, 1],
            duration: 1100,
            easing: "easeInOutExpo",
            offset: "-=1000",
          })
          .add({
            targets: ".ml8 .circle-dark",
            scale: [0, 1],
            duration: 1100,
            easing: "easeOutExpo",
            offset: "-=600",
          })
          .add({
            targets: ".ml8 .letters-left",
            scale: [0, 1],
            duration: 1200,
            offset: "-=550",
          })
          .add({
            targets: ".ml8 .bang",
            scale: [0, 1],
            rotateZ: [45, 15],
            duration: 1200,
            offset: "-=1000",
          })
          .add({
            targets: ".ml8",
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1400,
          });

        return anime({
          targets: ".ml8 .circle-dark-dashed",
          rotateZ: 360,
          duration: 8000,
          easing: "linear",
          loop: true,
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
      <h1 className="ml8" ref={animationRef}>
        <span className="letters-container">
          <span className="letters letters-left mr-3">Hi</span>
          <span className="letters bang">!</span>
        </span>
        <span className="circle circle-white"></span>
        <span className="circle circle-dark"></span>
        <span className="circle circle-container">
          <span className="circle circle-dark-dashed"></span>
        </span>
      </h1>
    </AbsoluteFill>
  );
};

export default SecondAnimation;
