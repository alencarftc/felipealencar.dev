/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from "react";

import Header from "@components/Header";
import Button from "@components/Button";
import ArrowButton from "@components/ArrowButton";
import FelipeImage from "@images/_felipe.png";
import { ReactComponent as AuthorBackground } from "@images/author_stroke_bg.svg";
import { ReactComponent as LightContactImage } from "@images/contact__light.svg";
import { ReactComponent as DarkContactImage } from "@images/contact__dark.svg";

import { ColorContext } from "@providers/ColorContext";
import { MenuContext } from "@providers/MenuContext";

import Aside from "@components/Aside/Aside";

import "./Home.css";
import SocialIcons from "@components/SocialIcons";

const Home = () => {
  const { open, close } = useContext(MenuContext);
  const { colorMode } = useContext(ColorContext);

  return (
    <>
      <Aside open={open} close={close} />
      <section id="inicio" className="landing container">
        <Header />
        <div className="landing__cta container">
          <div className="animate_animated animate__lightSpeedInLeft">
            <h2 className="title landing__title">
              Desenvolvendo sonhos com tecnologia e precisão
            </h2>
          </div>
          <ArrowButton href="#sobre">Quero conhecer mais</ArrowButton>
        </div>
        <SocialIcons />
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
            <div className="about__image-container">
              <AuthorBackground className="animate_animated animate__fadeInDown with-stroke" />
              <AuthorBackground className="animate_animated animate__fadeInDown with-stroke" />
              <img src={FelipeImage} alt="Imagem de Felipe Alencar" />
            </div>
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
          <h3 className="projects__coming-soon ">Em breve...</h3>
          {/* <ul className="projects__list">
            <li className="projects__list-item" />
            <li className="projects__list-item" />
            <li className="projects__list-item" />
          </ul> */}

          <ArrowButton white href="#contato">
            Quero saber mais
          </ArrowButton>
        </div>
      </section>

      <section id="contato" className="contact container">
        <h2 className="contact__title">Contato</h2>

        <div className="contact__inner">
          <div>
            {colorMode === "dark" ? (
              <DarkContactImage className="contact__image" />
            ) : (
              <LightContactImage className="contact__image" />
            )}
          </div>
          <form className="contact__form" action="">
            <label htmlFor="name">
              Nome
              <input name="name" type="text" placeholder="Nick" />
            </label>
            <label htmlFor="email">
              Email
              <input name="email" type="text" placeholder="nick@email.com" />
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
