import React, { useContext } from "react";

import { ColorContext } from "@providers/ColorContext";
import LightColorToggler from "@images/light-mode.svg";
import DarkColorToggler from "@images/dark-mode.svg";
import Button from "@components/Button";
import LightLogoImage from "@images/light-logo.svg";
import DarkLogoImage from "@images/dark-logo.svg";

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
      <h1>
        <img
          className="header__logo"
          src={colorMode === "dark" ? DarkLogoImage : LightLogoImage}
          alt="Fecasti Tecnologia"
        />
      </h1>

      <nav className="header__nav">
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

      <button
        type="button"
        className="header__color-toggler"
        onClick={() => handleOnColorChange()}
      >
        <img
          src={colorMode === "dark" ? DarkColorToggler : LightColorToggler}
          alt="Alternar cores"
        />
      </button>
    </header>
  );
};

export default Header;
