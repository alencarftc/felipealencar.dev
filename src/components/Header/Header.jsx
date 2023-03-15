import React, { useContext } from "react";

import { ColorContext } from "@providers/ColorContext";
import LightColorToggler from "@images/color-toggler__light.svg";
import DarkColorToggler from "@images/color-toggler__dark.svg";
import Button from "@components/Button";
import { ReactComponent as LightLogoImage } from "@images/logo__light.svg";
import { ReactComponent as DarkLogoImage } from "@images/logo__dark.svg";

import "./Header.css";

const Header = () => {
  const { colorMode, handleOnColorChange } = useContext(ColorContext);

  const links = [
    { url: "#inicio", label: "Início" },
    { url: "#sobre", label: "Sobre" },
    { url: "#projetos", label: "Projetos" },
  ];

  return (
    <header className="header">
      <h1 className="animate__animated animate__lightSpeedInLeft">
        <div className="header__logo">
          {colorMode === "dark" ? <DarkLogoImage /> : <LightLogoImage />}
        </div>
      </h1>

      <nav className="header__nav animate__animated animate__lightSpeedInRight">
        <ul className="header__nav-list">
          {links.map(({ url, label }) => (
            <li key={label} className="header__nav-item">
              <a className="header__nav-link" href={url}>
                {label}
              </a>
            </li>
          ))}
          <li className="header__nav-item">
            <Button>
              <a className="header__nav-link" href="#contato">
                Contato
              </a>
            </Button>
          </li>
        </ul>
      </nav>

      <img
        className="header__color-toggler animate_animated animate__rotateInDownRight"
        onClick={() => handleOnColorChange()}
        src={colorMode === "dark" ? LightColorToggler : DarkColorToggler}
        alt="Alternar cores"
      />
    </header>
  );
};

export default Header;
