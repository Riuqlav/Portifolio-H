import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Img1 = require("../assets/logos/Img1.png");
const Img2 = require("../assets/logos/Img2.png");
const Img3 = require("../assets/logos/Img3.png");
const Img4 = require("../assets/logos/Img4.png");

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
        <div className="flex flex-row pt-10">
          <div className="w-1/4 ">
            <code className="text-yellow_vs">2020-2022</code>{" "}
          </div>{" "}
          <br />
          <div className="w-3/4">
            {" "}
            <a href="https://meetiqs.de/" target="_blank">
              <code className="text-blue_vs">Junior Front End Developer</code>{" "}
            </a>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              <a href="https://meetiqs.de/" target="_blank">
                {" "}
                Meetiqs
              </a>
            </code>
            <br />
            <code className="text-sm">
              <br />• Maintenance and update of features on the front page.
              <br />• Assist the copyright and design team in the development of
              the UX.
              <br />• Experienced AGILE/ Scrum methodology with Jira.
            </code>
          </div>
        </div>
        <div>
          <a href="https://meetiqs.de/" target="_blank">
            <br /> <img src={Img1} alt="Meetiqs screen DEMO" />{" "}
          </a>{" "}
          <br />
          <br />
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            {" "}
            <code className="text-yellow_vs">2022</code>{" "}
          </div>
          <div className="w-3/4">
            <a href="https://riuqlav.github.io/trebuche/" target="_blank">
              <code className="text-blue_vs">Front-End Website</code>
            </a>{" "}
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
        </div>{" "}
        <a href="https://riuqlav.github.io/trebuche/" target="_blank">
          <br /> <img src={Img2} alt="Trebuché screen DEMO" />
        </a>{" "}
        <br />
        <br />
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            {" "}
            <code className="text-yellow_vs">2022</code>{" "}
          </div>
          <div className="w-3/4">
            {" "}
            <a href="https://riuqlav.github.io/Chattons/ " target="_blank">
              {" "}
              <code className="text-blue_vs">FullStack Chat App</code>
              <br />
            </a>
            <code className="italic text-sm text-lightblue_vs">
              Chattons chat app,{" "}
              <a href="https://github.com/Riuqlav/Chattons/" target="_blank ">
                {" "}
                &lt;view code&gt;{" "}
              </a>
            </code>
            <br />
            <code className="text-sm">
              <br />• Powered with React and Typescript for building components.
              <br />• Created a minimalist(CRUD) chat app using Simple APIs and
              UI Kits.
              <br />• Hosted using Github Pages and chat data on Chat Engine.
            </code>
          </div>
        </div>
        <a href="https://riuqlav.github.io/Chattons/" target="_blank ">
          <br /> <img src={Img3} alt="Chattons chat app" />
        </a>{" "}
        <br />
        <br />
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            {" "}
            <code className="text-yellow_vs">2021</code>{" "}
          </div>
          <div className="w-3/4">
            {" "}
            <a
              href="https://riuqlav.github.io/bar-crawl-meetup/ "
              target="_blank"
            >
              {" "}
              <code className="text-blue_vs">FullStack Application</code>
              <br />
            </a>
            <code className="italic text-sm text-lightblue_vs">
              Project Bar Crawl Meetups,
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
        <a href="https://riuqlav.github.io/bar-crawl-meetup/" target="_blank ">
          <br /> <img src={Img4} alt="Project Bar Crawl Meetups" />
        </a>{" "}
        <br />
        <br />
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
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
