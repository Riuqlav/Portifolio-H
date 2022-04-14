import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";

const ReactLogo = require("../assets/logos/ReactLogo.png");
const TypescriptLogo = require("../assets/logos/TypescriptLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const TailwindLogo = require("../assets/logos/TailwindLogo.png");
const ReduxLogo = require("../assets/logos/ReduxLogo.png");
const FirebaseLogo = require("../assets/logos/FirebaseLogo.png");
const NodeJSLogo = require("../assets/logos/NodeJSLogo.png");
const BootstrapLogo = require("../assets/logos/BootstrapLogo.png");
const StyledComponentsLogo = require("../assets/logos/StyledComponentsLogo.png");

const About = () => {
  return (
    <div
      id="About"
      className="mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
            I've pivoted my career from import and supply for retail companies,
            to web development,
            <br /> When I had the chance to assist the Product Manager at a
            startup a year ago.
            <br />
            Since then, I've been in different boot camps and working on a range
            of projects,
            <br />
            My desire is to create tools to make the lives of people easier.{" "}
          </code>
          <br />
          <br />

          <div className="grid grid-cols-3 gap-2 text-sm mt-5 text-brown_vs">
            <div className="flex flex-row  mb-3">
              <img
                src={JsLogo}
                alt="Js Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>JavaScript (ES6+)</code>
            </div>

            <div className="flex flex-row mb-3">
              <img
                src={ReactLogo}
                alt="React Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>React</code>
            </div>
            <div className="flex flex-row mb-3">
              <img
                src={TypescriptLogo}
                alt="Typescript Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>TypeScript</code>
            </div>

            <div className="flex flex-row mb-3">
              <img
                src={StyledComponentsLogo}
                alt="Styled Components Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Styled Components</code>
            </div>

            <div className="flex flex-row  mb-3">
              <img
                src={TailwindLogo}
                alt="Tailwind Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Tailwind CSS</code>
            </div>

            <div className="flex flex-row mb-3">
              <img
                src={ReduxLogo}
                alt="Redux Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Redux</code>
            </div>

            <div className="flex flex-row mb-3">
              <img
                src={FirebaseLogo}
                alt="Firebase Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Firebase</code>
            </div>

            <div className="flex flex-row mb-3">
              <img
                src={NodeJSLogo}
                alt="NodeJS Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>NodeJS</code>
            </div>

            <div className="flex flex-row mb-3">
              <img
                src={BootstrapLogo}
                alt="Bootstrap Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code>Bootstrap</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
