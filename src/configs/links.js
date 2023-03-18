import { ReactComponent as LinkedinIcon } from "@icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "@icons/instagram.svg";
import { ReactComponent as GithubIcon } from "@icons/github.svg";
import { ReactComponent as WhatsappIcon } from "@icons/whatsapp.svg";

export const LINKS = {
  nav: [
    { url: "#inicio", label: "Início" },
    { url: "#sobre", label: "Sobre" },
    { url: "#projetos", label: "Projetos" },
    { url: "#contato", label: "Contato" },
  ],
  social: {
    whatsapp: {
      icon: <WhatsappIcon />,
      alt: "Whatsapp",
      href: "https://web.whatsapp.com/send/?phone=5541991670918&text=Ol%C3%A1,%20tudo%20bem?%20Eu%20gostaria%20de...",
    },
    linkedin: {
      icon: <LinkedinIcon />,
      alt: "Linkedin",
      href: "https://linkedin.com/in/alencarftc",
    },
    github: {
      icon: <GithubIcon />,
      alt: "Github",
      href: "https://github.com/alencarftc",
    },
    instagram: {
      icon: <InstagramIcon />,
      alt: "Instagram",
      href: "https://instagram.com/fecasti.tech/",
    },
  },
};
