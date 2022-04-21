import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-1/2 mt-64 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            <a href="https://riuqlav.github.io/Online-CV/" target="_blank">
              Resume
            </a>
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              Multilingual(EN, FR, PT) front-end developer comfortable working
              with JavaScript(React, React Router, Redux), <br /> CSS(Bootstrap,
              Tailwind, Modules, Styled Components), and HTML. <br />
              Delivering good-looking reusable components to provide and
              excellent UI in websites for clients.
            </code>
          </div>
        </div>
        <br />
        <br />
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">My Work</code>
          </div>
          <div className="w-3/4">
            {" "}
            <code className="text-blue_vs">
              {" "}
              <a href="https://riuqlav.github.io/trebuche/" target="_blank">
                Front-End Website{" "}
              </a>{" "}
            </code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Trebuché E-shop,{" "}
              <a href="https://github.com/Riuqlav/Trebuche" target="_blank">
                &lt;view code&gt;{" "}
              </a>
            </code>
            <br />
            <code className="text-sm">
              <br />• Revamped UI and app interface for the e-commerce site
              using Styled Components.
              <br />• Developed more than 100+ reusable components used
              throughout the organization.
              <br />• Implemented mock data to present the layout of the login,
              register, products, filters, etc.
            </code>
          </div>
        </div>
        <br />
        <div className="flex flex-row pt-10">
          <div className="w-1/4"></div>
          <div className="w-3/4">
            {" "}
            <a
              href="https://riuqlav.github.io/bar-crawl-meetup/ "
              target="_blank"
            >
              {" "}
              <code className="text-blue_vs">Full Stack Application</code>
              <br />
            </a>
            <code className="italic text-sm text-lightblue_vs">
              Project Bar Crawl,
              <a
                href="https://github.com/Riuqlav/bar-crawl-meetup"
                target="_blank "
              >
                {" "}
                &lt;view code&gt;{" "}
              </a>
            </code>
            <br />
            <code className="text-sm">
              <br />• Execute Create, Read, Update, and Delete (CRUD), using
              Realtime Database.
              <br />• Use of React hooks, route, Firebase Database, and Storage.
              <br />• Styled with CSS Modules.
            </code>
          </div>
        </div>
        <br />
        <div className="flex flex-row pt-10">
          <div className="w-1/4"></div>
          <div className="w-3/4">
            <a href="https://riuqlav.github.io/save-your-job/" target="_blank">
              <code className="text-blue_vs">Save Your Job Challenge Game</code>{" "}
            </a>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              The Odin Project,{" "}
              <a
                href="https://github.com/Riuqlav/save-your-job"
                target="_blank"
              >
                {" "}
                &lt;view code&gt;
              </a>
            </code>

            <br />
            <code className="text-sm">
              <br />• Design boolean logical operators and event listeners for
              the game in JS.
              <br />• Followed rules dictated by the challenge.
              <br />• Structured the website with HTML and CSS.
            </code>
          </div>
        </div>{" "}
        <br />
        <br />{" "}
        <div className="flex flex-row pt-10 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              • The Odin Project, JavaScript Paths.
              <br />• Bachelor’s Degree in Computer Science and
              Mathematics,Federal Fluminense University.
              <br />• Installation and maintenance of computers, SESI-SENAI.
              <br />• Maintenance of Local Networks, SESI-SENAI.
              <br />
              <br />
              <br />
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
