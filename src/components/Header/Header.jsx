import React, { useContext } from "react";

import { ColorContext } from "@providers/ColorContext";
import LightColorToggler from "@images/color-toggler__light.svg";
import DarkColorToggler from "@images/color-toggler__dark.svg";
import Button from "@components/Button";
import { ReactComponent as LightLogoImage } from "@images/logo__light.svg";
import { ReactComponent as DarkLogoImage } from "@images/logo__dark.svg";

import Hamburger from "@components/Hamburger/Hamburger";
import { MenuContext } from "@providers/MenuContext";

import "./Header.css";

const Header = () => {
  const { colorMode, toggleColorMode } = useContext(ColorContext);
  const { open, close } = useContext(MenuContext);

  const links = [
    { url: "#inicio", label: "Início", highlight: true },
    { url: "#sobre", label: "Sobre" },
    { url: "#projetos", label: "Projetos" },
  ];

  return (
    <header className="header">
      <div className="header__inner container">
        <h1>
          <div className="header__logo">
            {colorMode === "dark" ? (
              <DarkLogoImage id="logo" />
            ) : (
              <LightLogoImage id="logo" />
            )}
          </div>
        </h1>

        <nav className="header__nav">
          <ul className="header__nav-list">
            {links.map(({ url, label, highlight }) => (
              <li
                key={label}
                className={`header__nav-item ${
                  highlight ? "header__nav-item--highlight" : ""
                }`}
              >
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

        <Hamburger onOpen={() => close()} open={open} />

        <img
          className="header__color-toggler-desktop animate_animated animate__rotateInDownRight"
          onClick={() => toggleColorMode()}
          src={colorMode === "dark" ? LightColorToggler : DarkColorToggler}
          alt="Alternar cores"
        />
      </div>
    </header>
  );
};

export default Header;
