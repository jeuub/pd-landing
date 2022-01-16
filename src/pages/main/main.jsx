import React from "react";
import Header from "@components/header/header";
import Three from "@components/three/three";
import Message from "@components/message/message";
import "./main.css";
import matvey from "@img/matvey.webp";
import bebup from "@img/bebup.webp";
import ruslan from "@img/ruslan.webp";
import Dev from "@components/dev/dev";
import SocialLink from "@components/socialLink/socialLink";
import GithubIcon from "@img/GitHub.svg";
import TelegramIcon from "@img/telegram.svg";
import LandingFooter from "@components/footer/footer";

const Landing = () => {
  return (
    <>
      <Header />
      <section className={"section promo"}>
        <div className="promo__inner">
          <Three />
          <h1 className="promo__title">
            Покажи свою индивидуальность.
            <br />
            Одна фраза на все. Навсегда.
          </h1>
        </div>
      </section>
      <section className={"section project"} id={"project"}>
        <div className="project__inner">
          <h2 className={"project__title"}>Проект</h2>
          <Message
            className={"project__message"}
            name={"🤴🏻Матвей"}
            time={"23:55"}
          >
            ААА ПД
          </Message>
          <Message
            className={"project__message"}
            name={"🧠Эййюб"}
            time={"23:56"}
            self
          >
            Что ПД?
          </Message>
          <Message
            className={"project__message"}
            name={"🤴🏻Матвей"}
            time={"23:56"}
          >
            Завтра сдача, пора бы и идею для приложения придумать. Есть
            варианты?
          </Message>
          <Message
            className={"project__message"}
            name={"🧠Эййюб"}
            time={"23:56"}
            self
          >
            Хым, что насчёт голубей, которые разносят письма?
          </Message>
          <Message
            className={"project__message"}
            name={"🤴🏻Матвей"}
            time={"23:56"}
          >
            Да не, это надо рисовать ещё.
          </Message>
          <Message
            className={"project__message"}
            name={"🧠Эййюб"}
            time={"23:57"}
            self
          >
            А помнишь прикол с Yo и Bro?
            <br />
            Мем в том, что можно только одно сообщение отправлять
          </Message>
          <Message
            className={"project__message"}
            name={"🤴🏻Матвей"}
            time={"23:56"}
          >
            Ну, давай сделаем. Классно.
            <br />
            Ну и название нужно.
          </Message>
          <Message
            className={"project__message"}
            name={"🤴🏻Матвей"}
            time={"23:56"}
          >
            Давай sent. Типа, сообщение отправлено. И ещё это как сокращение от
            sentence.
          </Message>
          <Message
            className={"project__message"}
            name={"🧠Эййюб"}
            time={"23:57"}
            self
          >
            Берём! А что с отчетом-то делать будем? :D
          </Message>
          <Message
            className={"project__message"}
            name={"🤴🏻Матвей"}
            time={"23:56"}
          >
            Ща сформулирую.
          </Message>
          <Message
            className={"project__message project__message--important"}
            name={"🤴🏻Матвей"}
            time={"23:59"}
          >
            С приложением “Sent.” у пользователей предоставляется множество
            возможностей, Совместное творчество даёт простор для воображения и
            позволяет креативить в своё удовольствие. У нас люди не просто
            общаются и знакомятся, они обретают совершенно новую площадку для
            самовыражения и экспериментов. Ждите мемы и прочие приколы! Это
            приложение ещё удивит.
          </Message>
          <Message
            className={"project__message"}
            name={"🧠Эййюб"}
            time={"23:60"}
            self
          >
            О, норм тема. Я ща это и в лендинг запихну
          </Message>
        </div>
      </section>
      <section className={"section team"} id={"team"}>
        <div className={"team__inner"}>
          <h2 className={"team__title"}>Наша команда</h2>
          <div className={"team_devs devs"}>
            <Dev
              className={"devs_dev"}
              name={"Эййюб Бодур"}
              img={bebup}
              resp={"Full-stack разработчик"}
              text={"Группа: 201-321"}
            >
              <div className={"devs__links"}>
                <SocialLink
                  image={GithubIcon}
                  link={"https://github.com/jeuub"}
                  alt={"jeuub github"}
                />
                <SocialLink
                  image={TelegramIcon}
                  link={"https://t.me/meowken"}
                  alt={"jeuub telegram"}
                />
              </div>
            </Dev>
            <Dev
              className={"devs_dev"}
              name={"Матвей Бухарцев"}
              img={matvey}
              resp={"Front-end разработчик"}
              text={"Группа: 201-321"}
            >
              <div className={"devs__links"}>
                <SocialLink
                  image={GithubIcon}
                  link={"https://github.com/bouhartsev"}
                  alt={"bouhartsev github"}
                />
                <SocialLink
                  image={TelegramIcon}
                  link={"https://t.me/bouhartsev"}
                  alt={"bouhartsev telegram"}
                />
              </div>
            </Dev>
            <Dev
              className={"devs_dev"}
              name={"Руслан Адигамов"}
              img={ruslan}
              resp={"Front-end разработчик"}
              text={"Группа: 201-321"}
            >
              <div className={"devs__links"}>
                <SocialLink
                  image={GithubIcon}
                  link={"https://github.com/AdRuslan"}
                  alt={"ruslan github"}
                />
                <SocialLink
                  image={TelegramIcon}
                  link={"https://t.me/Mashiro1499"}
                  alt={"ruslan telegram"}
                />
              </div>
            </Dev>
          </div>
        </div>
      </section>
      <section className={"section stack"} id={"stack"}>
        <div className={"stack__inner"}>
          <h2 className={"stack__title"}>Stack</h2>
          <Message
            className={"project__message"}
            name={"🤴🏻Матвей"}
            time={"2:31"}
          >
            Так, а что у нас со стеком
          </Message>
          <Message
            className={"project__message"}
            name={"🧠Эййюб"}
            time={"2:40"}
            self
          >
            Так, ну на фронте у нас <strong>React</strong> в связке с{" "}
            <strong>Typescript</strong> и <strong>Apollo client</strong>.<br />
            Типизациця поможет нам делать меньше ошибок, а Apollo client вместе
            с <strong>Apollo server</strong> обеспечит легкое взаимодействие с{" "}
            <strong>GraphQL</strong> на сервере.
            <br />
            На беке у нас будет <strong>Nodejs</strong> +{" "}
            <strong>Express</strong>, а как СУБД я выбрал{" "}
            <strong>MongoDB</strong>. <wbr />А еще инструменты{" "}
            <strong>Figma</strong>, <strong>Docker</strong>
          </Message>
          <Message
            className={"project__message project__message--important"}
            name={"🤴🏻Матвей"}
            time={"2:42"}
          >
            Суммирую: <br />
            front: React + Typescript + Apollo Client <br />
            back: Nodejs + Express + MongoDB + Apollo Server <br />
            <br />
          </Message>
          <Message
            className={"project__message"}
            name={"🤴🏻Матвей"}
            time={"2:42"}
          >
            Все ок?
          </Message>
          <Message
            className={"project__message"}
            name={"🧠Эййюб"}
            time={"2:42"}
            self
          >
            👌
          </Message>
        </div>
      </section>
      <LandingFooter />
    </>
  );
};

export default Landing;
