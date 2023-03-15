/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from "react";

import Header from "@components/Header";
import Button from "@components/Button";
import ArrowButton from "@components/ArrowButton";
import FelipeImage from "@images/felipe.png";
import LightContactImage from "@images/light-contact.svg";
import DarkContactImage from "@images/dark-contact.svg";
import { LINKS } from "@configs/links";

import "./Home.css";
import { ColorContext } from "@providers/ColorContext";

const Home = () => {
  const { colorMode, handleOnColorChange } = useContext(ColorContext);

  return (
    <>
      <section id="inicio" className="landing container">
        <Header />
        <div className="landing__cta">
          <h2 className="title landing__title">
            Desenvolvendo sonhos com tecnologia e precisão.
          </h2>
          <ArrowButton href="#sobre">Quero conhecer mais</ArrowButton>
        </div>
        <ul className="landing__social">
          {Object.values(LINKS.social).map(({ icon, alt, href }) => (
            <li key={alt} className="landing__social-item">
              <a target="_blank" href={href} rel="noreferrer">
                <img
                  className="landing__social-item-image"
                  src={icon}
                  alt={alt}
                />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section id="sobre" className="about container">
        <h2 className="about__title">Sobre</h2>
        <div className="about__inner">
          <div className="about__text">
            <p>
              A <b>Fecasti Tecnologia</b> é uma empresa especializada no
              desenvolvimento de <b>websites e aplicações web</b> com ênfase nas
              melhores experiências de navegação, performance e usabilidade,
              prezando sempre pelo bom uso das tecnologias.
            </p>
            <ArrowButton href="#projetos">Conhecer projetos</ArrowButton>
          </div>
          <div className="about__image">
            <img src={FelipeImage} alt="Imagem de Felipe Alencar" />
            <div className="about__image-caption">
              <h3>Felipe Alencar</h3>
              <span>Fundador e Especialista Técnico</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className="projects">
        <div className="projects__inner container">
          <h2 className="projects__title">Projetos</h2>
          <ul className="projects__list">
            <li className="projects__list-item" />
            <li className="projects__list-item" />
            <li className="projects__list-item" />
          </ul>

          <ArrowButton white href="#contato">
            Quero saber mais
          </ArrowButton>
        </div>
      </section>

      <section id="contato" className="contact container">
        <h2 className="contact__title">Contato</h2>

        <div className="contact__inner">
          <img
            className="contact__image"
            src={colorMode === "dark" ? LightContactImage : DarkContactImage}
            alt="Pessoas montando um website em conjunto."
          />
          <form className="contact__form" action="">
            <div className="row">
              <label htmlFor="first-name">
                Nome
                <input name="first-name" type="text" placeholder="João" />
              </label>
              <label htmlFor="last-name">
                Sobrenome
                <input name="last-name" type="text" placeholder="Silva" />
              </label>
            </div>
            <label htmlFor="email">
              Email
              <input
                name="email"
                type="text"
                placeholder="joao.silva@gmail.com"
              />
            </label>
            <label htmlFor="summary">
              Assunto
              <input name="summary" type="text" placeholder="Novo projeto" />
            </label>
            <label htmlFor="message">
              Mensagem
              <textarea
                name="message"
                type="text"
                placeholder="Olá, eu gostaria de..."
              />
            </label>
            <Button type="submit">Enviar</Button>
          </form>
        </div>
      </section>

      <footer>
        <p>© 2023 Fecasti Tecnologia. Todos os direitos reservados.</p>
      </footer>
    </>
  );
};
export default Home;
