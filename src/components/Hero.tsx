"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/textGenratorEffect";
import Ripple from "./ui/rippleBG";

const Hero = () => {
  return (
    <>
      <Ripple />
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="blue"
        />
        <Spotlight
          className="top-10 left-full md h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="w-full max-w-7xl sm:px-10 px-5">
        <div className=" relative pb-20 pt-36  flex flex-col items-center gap-8">
          <div className="grid gap-3 text-center">
            <h2 className="text-4xl font-bold drop-shadow-xl relative bg-clip-text text-transparent bg-no-repeat bg-gradiant">
              Hello I&apos;m{" "}
              <span className="tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                Ankit Maurya
              </span>
            </h2>
            <p className="uppercase text-copy-light">Software Developer</p>
          </div>
          <div className="flex flex-col items-center sm:gap-4 gap-8 lg:max-w-7xl">
            <h1 className="text-5xl font-medium capitalize text-center text-copy">
              Building user-centric{" "}
              <span className="text-blue-400">web applications</span> focused on{" "}
              <span className="text-blue-400">performance</span>,
              <span className="text-blue-400">scalability</span>, and seamless
              interactions.
            </h1>
            <TextGenerateEffect
              className="text-xl text-center w-full lg:max-w-6xl"
              words="I turn ideas into functional, scalable web applications. With a focus on modern frameworks like Next.js and Tailwind CSS, I build performant, user-centric solutions that bring real value to users and businesses alike."
            />
          </div>
          <div className="flex justify-center relative my-20">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <h2 className="uppercase ">Dynmic web magic with next js</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
