import { ReactComponent as LinkedinIcon } from "@icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "@icons/instagram.svg";
import { ReactComponent as GithubIcon } from "@icons/github.svg";
import { ReactComponent as MediumIcon } from "@icons/medium.svg";

export const LINKS = {
  nav: [
    { url: "#inicio", label: "Início" },
    { url: "#sobre", label: "Sobre" },
    { url: "#projetos", label: "Projetos" },
    { url: "#contact", label: "Contato" },
  ],
  social: {
    linkedin: {
      icon: <LinkedinIcon />,
      alt: "Linkedin",
      href: "https://linkedin.com/in/alencarftc",
    },
    instagram: {
      icon: <InstagramIcon />,
      alt: "Instagram",
      href: "https://instagram.com/fecasti.tech/",
    },
    github: {
      icon: <GithubIcon />,
      alt: "Github",
      href: "https://github.com/alencarftc",
    },
    medium: {
      icon: <MediumIcon />,
      alt: "Medium",
      href: "https://medium.com/@alencarftc",
    },
  },
};
