/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

import Header from "@components/Header";
import Button from "@components/Button";
import ArrowButton from "@components/ArrowButton";
import FelipeImage from "@images/felipe.webp";
import { ReactComponent as AuthorBackground } from "@images/author_stroke_bg.svg";
import { ReactComponent as LightContactImage } from "@images/contact__light.svg";
import { ReactComponent as DarkContactImage } from "@images/contact__dark.svg";

import { ColorContext } from "@providers/ColorContext";
import { MenuContext } from "@providers/MenuContext";

import SocialIcons from "@components/SocialIcons";
import Aside from "@components/Aside/Aside";

import "./Home.css";

const Home = () => {
  const { open, close } = useContext(MenuContext);
  const { colorMode } = useContext(ColorContext);
  const [state, handleSubmit] = useForm("xgebzgdd");

  useEffect(() => {
    var el = document.getElementById("g-recaptcha-response");
    if (el) {
      el.setAttribute("required", "required");
    }
  }, []);

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
            <p className="landing__description">
              Serviços especializados em criação, manutenção e otimização de
              websites e aplicações para a web.
            </p>
          </div>
          <ArrowButton href="#sobre" contrast>
            Quero conhecer mais
          </ArrowButton>
        </div>
        <SocialIcons />
      </section>

      <section id="sobre" className="about container">
        <h2 className="about__title">Sobre</h2>
        <div className="about__inner">
          <div className="about__text">
            <p>
              Desenvolvedor de Software com mais de 4 anos de experiência
              especializando-se no desenvolvimento de websites, aplicações para
              a web e UI design. Além disso, forte histórico trabalhando em
              projetos complexos projetando, testando, desenvolvendo e
              entregando software de qualidade.
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
          <div className="contact__form-container">
            <form
              id="contact__form"
              className="contact__form"
              action="https://formspree.io/f/mayzdoeb"
              onSubmit={(values) => {
                handleSubmit(values);
                document.querySelector("#contact__form").reset();
                document.querySelector(".g-recaptcha").style.display = "none";
              }}
              method="POST"
            >
              <label htmlFor="name">
                Nome
                <input name="name" type="text" placeholder="José" required />
                <ValidationError
                  prefix="Text"
                  field="text"
                  errors={state.errors}
                />
              </label>

              <label htmlFor="email">
                Email
                <input
                  name="email"
                  type="text"
                  placeholder="jose@email.com"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </label>

              <label htmlFor="summary">
                Assunto
                <input
                  name="summary"
                  type="text"
                  placeholder="Novo projeto"
                  required
                />
                <ValidationError
                  prefix="Summary"
                  field="summary"
                  errors={state.errors}
                />
              </label>
              <label htmlFor="message">
                Mensagem
                <textarea
                  name="message"
                  type="text"
                  placeholder="Olá, eu gostaria de..."
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </label>
              <label htmlFor="g-recaptcha">
                <div
                  className="g-recaptcha"
                  data-sitekey="6LehhR0lAAAAAPkK0F3BRdsK3cJZVZHIr81ana3w"
                  required
                ></div>
              </label>
              {state.succeeded ? (
                <p className="contact__success">
                  Obrigado por submeter sua mensagem.
                  <br />
                  Em breve estaremos entrando em contato.
                </p>
              ) : (
                <Button disabled={state.submitting} type="submit">
                  Enviar
                </Button>
              )}
            </form>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2023 Fecasti Tecnologia. Todos os direitos reservados.</p>
      </footer>
    </>
  );
};
export default Home;
