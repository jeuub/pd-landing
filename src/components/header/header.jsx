import './header.css';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return(
    <header className={'header'}>
      <div className={'header__inner'}>
        <span className={'header__logo'}>
          SENT.
        </span>
        <nav className={'header__nav nav'} >
          <ul className={'nav__list'}>
            <li className={'nav__item'}>
              <HashLink to={'/#project'} className={'nav__link'}>Проект</HashLink> 
            </li>
            <li className={'nav__item'}>
              <HashLink to={'/#team'} className={'nav__link'}>Команда</HashLink>
            </li>
            <li className={'nav__item'}>
              <HashLink to={'/#stack'} className={'nav__link'}>Stack</HashLink>
            </li>
            <li className={'nav__item'}>
              <a href={'https://github.com/jeuub/sent'} target={'_blank'} rel='noreferrer' className={'nav__link'}>Github</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};

export default Header;