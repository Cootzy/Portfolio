import React from "react";
import GradientSpheres from "../components/GradientSpheres";

const Hero = () => {
  return (
    <section id="home" className="h-dvh relative text-white-50 px-5 md:p-0">
      <GradientSpheres
        sphere1class={"gradient-sphere sphere-1"}
        sphere2class={"gradient-sphere sphere-2"}
      />
      <div className="w-full h-full flex-center">
        <div className="container relative w-full h-full">
          <div className="md:mt-40 mt-20">
            <p className="font-medium md:text-2xl text-base">
              👋 Hey, I'm Here
            </p>
            <h1 className="font-bold md:text-9xl text-5xl">
              Revrico Ramadhino
            </h1>
            <h1 className="font-bold md:text-9xl text-5xl">Creative</h1>
          </div>

          <div className="absolute w-full z-30 bottom-20 right-0">
            <div className="flex justify-between items-end">
              <div className="flex flex-col items-center md:gap-5 gap-1">
                <p className="md:text-base text-xs">Explore</p>
                <img
                  className="size-7 animate-bounce"
                  src="images/arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-col items-center">
                <img src="/images/shape.svg" alt="shape" />
                <h1 className="font-bold md:text-9xl text-5xl">Developer</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
