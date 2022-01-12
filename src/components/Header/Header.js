import './Header.css';
import Socials from '../Socials/Socials';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Phone from '../Phone/Phone';
import Time from '../Time/Time';
import Location from '../Location/Location';
import Logo from '../Logo/Logo';

function Header({ isMobile }) {
	return (
		<header className="header">
			<div className="header__content">
				<div className="header__head">
					<Logo />

					<Socials />

					{isMobile ? (
						<BurgerMenu>
							<li className="burger-menu__item">
								<a href="#about" className="header__menu-link">
									О клубе
								</a>
							</li>
							<li className="burger-menu__item">
								<a href="#interior" className="header__menu-link">
									Интерьер
								</a>
							</li>
							<li className="burger-menu__item">
								<a href="#menu" className="header__menu-link">
									Меню
								</a>
							</li>
							<li className="burger-menu__item">
								<a href="#advantages" className="header__menu-link">
									Преимущества
								</a>
							</li>
							<li className="burger-menu__item">
								<a href="#news" className="header__menu-link">
									Новости
								</a>
							</li>
							<li className="burger-menu__item">
								<a href="#contacts" className="header__menu-link">
									Контакты
								</a>
							</li>
							<Socials />
						</BurgerMenu>
					) : (
						<nav className="header__nav">
							<ul className="header__menu">
								<li className="header__menu-item">
									<a href="#about" className="header__menu-link">
										О клубе
									</a>
								</li>
								<li className="header__menu-item">
									<a href="#interior" className="header__menu-link">
										Интерьер
									</a>
								</li>
								<li className="header__menu-item">
									<a href="#menu" className="header__menu-link">
										Меню
									</a>
								</li>
								<li className="header__menu-item">
									<a href="#advantages" className="header__menu-link">
										Преимущества
									</a>
								</li>
								<li className="header__menu-item">
									<a href="#news" className="header__menu-link">
										Новости
									</a>
								</li>
								<li className="header__menu-item">
									<a href="#contacts" className="header__menu-link">
										Контакты
									</a>
								</li>
							</ul>
						</nav>
					)}
				</div>

				<h1 className="header__title">Самый шикарный курительный клуб Урала</h1>

				<div className="header__contacts">
					<Phone />
					<Time />
					<Location lines={['Екатеринбург,', 'БЦ Высоцкий, 50 этаж']} />
				</div>
			</div>

			<div className="header__background">
				<div className="header__background_left"></div>
				<div className="header__background_right"></div>
			</div>
		</header>
	);
}

export default Header;
