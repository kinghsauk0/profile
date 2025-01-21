"use client";

import React from "react";

const BackgroundVideo = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Element */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/background.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col ">
        {children}
      </div>
    </div>
  );
};

export default BackgroundVideo;
