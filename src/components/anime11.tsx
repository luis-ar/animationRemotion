"use client";
import React, { useEffect, useRef, useState } from "react";
import anime from "animejs"; // Assuming you have animejs installed
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";

import "./styles.css";
const ElevenAnimation = () => {
  const textWrapperRef = useRef<HTMLHeadingElement>(null);
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const [animation, setAnimation] = useState<anime.AnimeInstance | null>(null);

  // Using a useEffect, because anime needs to get the ref once it's mounted
  useEffect(() => {
    if (textWrapperRef.current) {
      const textWrapper = textWrapperRef.current;

      textWrapper.innerHTML = textWrapper.textContent!.replace(
        /([^\x00-\x80]|\w)/g,
        "<span class='letter'>$&</span>"
      );
      setAnimation(() => {
        return anime
          .timeline({ loop: true })
          .add({
            targets: ".ml11 .line",
            scaleY: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700,
          })
          .add({
            targets: ".ml11 .line",
            translateX: [
              0,
              textWrapperRef!.current!.getBoundingClientRect().width + 100,
            ],
            easing: "easeOutExpo",
            duration: 700,
            delay: 100,
          })
          .add({
            targets: ".ml11 .letter",
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 600,
            offset: "-=775",
            delay: (el, i) => 34 * (i + 1),
          })
          .add({
            targets: ".ml11",
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
      <h1 className="ml11">
        <span className="text-wrapper">
          <span className="line line1"></span>
          <span className="letters" ref={textWrapperRef}>
            Hello
          </span>
        </span>
      </h1>
    </AbsoluteFill>
  );
};

export default ElevenAnimation;
