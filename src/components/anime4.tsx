"use client";
import React, { useEffect, useRef, useState } from "react";
import anime from "animejs"; // Assuming you have animejs installed
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";

import "./styles.css";
const FourthAnimation = () => {
  const animationRef = useRef(null);
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const [animation, setAnimation] = useState<anime.AnimeInstance | null>(null);

  // Using a useEffect, because anime needs to get the ref once it's mounted
  useEffect(() => {
    if (animationRef.current) {
      const ml4 = {
        opacityIn: [0, 1],
        scaleIn: [0.2, 1],
        scaleOut: 3,
        durationIn: 800,
        durationOut: 600,
        delay: 500,
      };
      setAnimation(() => {
        return anime
          .timeline({ loop: true })
          .add({
            targets: ".ml4 .letters-1",
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn,
          })
          .add({
            targets: ".ml4 .letters-1",
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: "easeInExpo",
            delay: ml4.delay,
          })
          .add({
            targets: ".ml4 .letters-2",
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn,
          })
          .add({
            targets: ".ml4 .letters-2",
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: "easeInExpo",
            delay: ml4.delay,
          })
          .add({
            targets: ".ml4 .letters-3",
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn,
          })
          .add({
            targets: ".ml4 .letters-3",
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: "easeInExpo",
            delay: ml4.delay,
          })
          .add({
            targets: ".ml4",
            opacity: 0,
            duration: 500,
            delay: 500,
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
      <h1 ref={animationRef} className="ml4">
        <span className="letters letters-1">Ready</span>
        <span className="letters letters-2">Set</span>
        <span className="letters letters-3">Go!</span>
      </h1>
    </AbsoluteFill>
  );
};

export default FourthAnimation;
