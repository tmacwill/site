import React, { useState } from "react";
import classNames from "classnames";

import { config, IconProp } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Links: React.FC<{ large?: boolean }> = ({ large }) => (
  <div className="pt-4">
    <a
      href="https://twitter.com/tmacwill"
      target="_blank"
      className={classNames("pr-6", {
        "text-5xl": large,
        "text-2xl": !large,
      })}
    >
      <FontAwesomeIcon icon={faTwitter} />
    </a>
    <a
      href="https://linkedin.com/in/tmacwill"
      target="_blank"
      className={classNames("pr-6", {
        "text-5xl": large,
        "text-2xl": !large,
      })}
    >
      <FontAwesomeIcon icon={faLinkedinIn} />
    </a>
    <a
      href="https://github.com/tmacwill"
      target="_blank"
      className={classNames("pr-6", {
        "text-5xl": large,
        "text-2xl": !large,
      })}
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a
      href="https://unicodesnowmanforyou.com"
      target="_blank"
      className={classNames({
        "text-5xl": large,
        "text-2xl": !large,
      })}
    >
      ☃
    </a>
  </div>
);

const Menu: React.FC<{ gearClasses: string }> = ({ gearClasses }) => {
  const [shown, setShown] = useState(false);
  const spring = useSpring({
    opacity: shown ? 1 : 0,
  });

  const onGearClick = (e: any) => {
    e.preventDefault();
    setShown((e) => !e);
  };

  const onLinkClick = (e: any, page: string) => {
    e.preventDefault();
    setShown(false);

    document.querySelectorAll(".page").forEach((page) => {
      page.classList.add("hidden");
    });

    document.querySelector(`.${page}`).classList.remove("hidden");
  };

  return (
    <div className="absolute bottom-0 right-0 p-4 text-2xl md:text-3xl">
      <animated.div style={spring}>
        <a href="#" className="block pb-4" onClick={(e) => onLinkClick(e, "baseball")}>
          ⚾️
        </a>
        <a href="#" className="block pb-4" onClick={(e) => onLinkClick(e, "retro")}>
          📺
        </a>
        <a href="#" className="block pb-4" onClick={(e) => onLinkClick(e, "gradient")}>
          ⚡️
        </a>
        <a href="#" className="block pb-4" onClick={(e) => onLinkClick(e, "minimal")}>
          💭
        </a>
      </animated.div>
      <a href="#" className="block" onClick={(e) => onGearClick(e)}>
        <FontAwesomeIcon icon={faGear} className={gearClasses} />
      </a>
    </div>
  );
};

const Index = () => {
  return (
    <>
      <div className="bg-gray-100 minimal page">
        <Menu gearClasses="text-gray-400" />
        <div className="flex items-center justify-center text-center w-screen h-screen">
          <h1
            className="text-xl md:text-2xl font-thin text-gray-400 border-t border-gray-300 pt-4 px-8 md:pt-5 md:px-12"
            style={{ letterSpacing: "0.25em" }}
          >
            <div>TOMMY MACWILLIAM</div>
            <Links />
          </h1>
        </div>
      </div>
      <div className="gradient-background gradient hidden page">
        <Menu gearClasses="text-slate-700" />
        <div className="flex items-center w-screen h-screen">
          <div className="px-6 md:px-12 text-slate-700">
            <h1 className="text-5xl md:text-9xl roc font-bold">
              <div>Tommy ✨</div>
              <div className="pt-6">MacWilliam</div>
            </h1>
            <Links large={true} />
          </div>
        </div>
      </div>
      <div className="bg-amber-900 retro hidden page">
        <Menu gearClasses="text-blue-100" />
        <div className="flex flex-col items-center justify-center text-center w-screen h-screen">
          <h1 className="text-7xl md:text-9xl font-thin text-zinc-50 arbotek text-left">
            <div>
              <span className="text-orange-600 pr-1">T</span>
              <span className="text-red-600 pr-1">O</span>
              <span className="text-emerald-600 pr-1">M</span>
              <span className="text-cyan-600 pr-1">M</span>
              <span className="text-blue-100 pr-1">Y</span>
            </div>
            <div>
              <span className="text-emerald-600 pr-1">M</span>
              <span className="text-cyan-600 pr-1">A</span>
              <span className="text-orange-600 pr-1">C</span>
              <span className="text-blue-100 pr-1">W</span>
              <span className="text-red-600 pr-1">I</span>
            </div>
            <div>
              <span className="text-red-600 pr-4">L</span>
              <span className="text-blue-100 pr-4">L</span>
              <span className="text-cyan-600 pr-4">I</span>
              <span className="text-emerald-600 pr-4">A</span>
              <span className="text-orange-600 pr-4">M</span>
            </div>
          </h1>
          <div className="pt-8">
            <a href="https://twitter.com/tmacwill" target="_blank" className="text-emerald-600">
              <FontAwesomeIcon icon={faTwitter} className="pr-6 text-3xl md:text-5xl" />
            </a>
            <a href="https://linkedin.com/in/tmacwill" target="_blank" className="text-red-600">
              <FontAwesomeIcon icon={faLinkedinIn} className="pr-6 text-3xl md:text-5xl" />
            </a>
            <a href="https://github.com/tmacwill" target="_blank" className="text-blue-100">
              <FontAwesomeIcon icon={faGithub} className="pr-6 text-3xl md:text-5xl" />
            </a>
            <a
              href="https://unicodesnowmanforyou.com"
              target="_blank"
              className="text-cyan-600 text-3xl md:text-5xl"
            >
              ☃
            </a>
          </div>
        </div>
      </div>
      <div className="bg-blue-900 baseball hidden page">
        <Menu gearClasses="text-white" />
        <div className="flex items-center justify-center text-center w-screen h-screen text-white">
          <div>
            <h1 className="text-7xl md:text-9xl fenway">
              <div style={{ textShadow: "3px 3px 2px #dc2626" }}>Tommy MacWilliam</div>
            </h1>
            <div className="pt-4">
              <Links large={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
