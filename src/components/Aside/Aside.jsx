import React, { useContext } from "react";
import { LINKS } from "@configs/links";
import Switch from "@components/Switch";

import "./Aside.css";
import { ColorContext } from "@providers/ColorContext";

function Aside({ open, close }) {
  const { colorMode, toggleColorMode } = useContext(ColorContext);

  return (
    <>
      <aside className={open ? "open" : ""}>
        <div className="aside__inner">
          <ul className="aside__nav-list">
            {LINKS.nav.map(({ url, label }) => (
              <li key={label} className="aside__nav-item">
                <a className="aside__nav-link" href={url}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="aside__toggler">
            <h3 className="aside__toggler-title">
              Mudar para tema {colorMode === "dark" ? "claro" : "escuro"}
            </h3>
            <Switch onToggle={toggleColorMode} />
          </div>

          <ul className="aside__nav-social-list">
            {Object.values(LINKS.social).map(({ icon, alt, href }) => (
              <li key={alt} className="aside__nav-social-item">
                <a target="_blank" href={href} rel="noreferrer">
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <span
        onClick={() => close()}
        className={`overlay ${open ? "open" : ""}`}
      />
    </>
  );
}

export default Aside;
