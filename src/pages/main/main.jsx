import React from 'react';
import Header from '@components/header/header';
import Three from '@components/three/three'
import Message from '@components/message/message';
import './main.css';



const Landing = () => {
  return(
    <>
    <Header />
    <section className={'section promo'}>
      <div className="promo__inner">
        <Three />
        <h1 className="promo__title">
          Покажи свою индивидуальность.<span> <br/> </span> Одна фраза на все. Навсегда.
        </h1>
      </div>
    </section>
    <section className={'section project'} id={'project'}>
      <div className="project__inner">
        <h2 className={'project__title'}>Проект</h2>
        <Message className={'project__message'} name={'🤴🏻Матвей'} time={'23:55'}>
          ААА ПД
        </Message>
        <Message className={'project__message'} name={'🧠Эййюб'} time={'23:56'} self>
          Что ПД?
        </Message>
        <Message className={'project__message'} name={'🤴🏻Матвей'} time={'23:56'}>
          Завтра сдача, пора бы и идею для приложения придумать. Есть варианты?
        </Message>
        <Message className={'project__message'} name={'🧠Эййюб'} time={'23:56'} self>
          Хым, что насчёт голубей, которые разносят письма?
        </Message>
        <Message className={'project__message'} name={'🤴🏻Матвей'} time={'23:56'}>
          Да не, это надо рисовать ещё.
        </Message>
        <Message className={'project__message'} name={'🧠Эййюб'} time={'23:57'} self>
          А помнишь прикол с Yo и Bro?<br/>
          Мем в том, что можно только одно сообщение отправлять
        </Message>
        <Message className={'project__message'} name={'🤴🏻Матвей'} time={'23:56'}>
          Ну, давай сделаем. Классно.<br/>
          Ну и название нужно.
        </Message>
        <Message className={'project__message'} name={'🤴🏻Матвей'} time={'23:56'}>
          Давай sent. Типа, сообщение отправлено. И ещё это как сокращение от sentence.
        </Message>
        <Message className={'project__message'} name={'🧠Эййюб'} time={'23:57'} self>
          Берём! А что с отчетом-то делать будем? :D
        </Message>
        <Message className={'project__message'} name={'🤴🏻Матвей'} time={'23:56'}>
          Ща сформулирую.
        </Message>
        <Message className={'project__message project__message--important'} name={'🤴🏻Матвей'} time={'23:59'}>
          С приложением “Sent.” у пользователей предоставляется множество возможностей, Совместное творчество даёт простор для воображения и позволяет креативить в своё удовольствие. У нас люди не просто общаются и знакомятся, они обретают совершенно новую площадку для самовыражения и экспериментов. Ждите мемы и прочие приколы! Это приложение ещё удивит.
        </Message>
        <Message className={'project__message'} name={'🧠Эййюб'} time={'23:60'} self>
          О, норм тема. Я ща это и в лендинг запихну
        </Message>
      </div>
    </section>
    <section className={'section team'} id={'team'}>
      <div className={'team__inner'}>
        <h2 className={'team__title'}>Наша команда</h2>
        <div className={'team_devs devs'}>
          <article className={'devs_dev dev'}>
            <h3 className={'dev__name'}>Эййюб Бодур</h3>
            <h4 className={'dev__resp'}>Full-stack разработчик</h4>
          </article>
          <article>
            <h3 className={'dev__name'}>Матвей Бухарцев</h3>
            <h4 className={'dev__resp'}>Front-end разработчик</h4>
          </article>
        </div>
      </div>
    </section>
    </>  
  )
};

export default Landing;