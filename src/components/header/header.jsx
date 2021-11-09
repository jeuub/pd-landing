import './header.css';

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
              <a href="#/#project" className={'nav__link'}>Проект</a>
            </li>
            <li className={'nav__item'}>
              <a href="#team" className={'nav__link'}>Команда</a>
            </li>
            <li className={'nav__item'}>
              <a href="#stack" className={'nav__link'}>Stack</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};

export default Header;