import { LINKS } from "@configs/links";
import React from "react";

import "./SocialIcons.css";

const SocialIcons = () => (
  <ul className="social">
    {Object.values(LINKS.social).map(({ icon, alt, href }) => (
      <li key={alt} className="social__item">
        <a
          className="social__link"
          aria-label={alt}
          target="_blank"
          href={href}
          rel="noreferrer"
        >
          {icon}
        </a>
      </li>
    ))}
  </ul>
);

export default SocialIcons;
