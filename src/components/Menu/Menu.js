import './Menu.css';
import './MenuCard.css';
import ashtray from '../../images/menu/ashtray.svg';
import ScrollButtons from '../ScrollButtons/ScrollButtons';
import { useState } from 'react/cjs/react.development';
import Gallery from '../Gallery/Gallery';

function Menu({ isMobile }) {
	const [activeTab, setActiveTab] = useState('menu-branded');
	const [scroll, setScroll] = useState(0);

	function handleTabChange(e) {
		setActiveTab(e.target.id);
	}

	function handleScroll(e) {
		e === 'right' ? setScroll(scroll + 600) : setScroll(scroll - 600);
	}

	return (
		<section className="menu" id="menu">
			<div className="menu__container">
				<h2 className="menu__title title">Меню</h2>

				<div className="menu__switches">
					<button
						className={`menu__button ${
							activeTab === 'menu-branded' ? 'menu__button_active' : ''
						} `}
						id="menu-branded"
						type="button"
						onClick={handleTabChange}
					>
						Фирменные кальяны
					</button>
					<button
						className={`menu__button ${
							activeTab === 'menu-cigars' ? 'menu__button_active' : ''
						} `}
						id="menu-cigars"
						type="button"
						onClick={handleTabChange}
					>
						Сигары и сигарилы
					</button>
					<button
						className={`menu__button ${
							activeTab === 'menu-classic' ? 'menu__button_active' : ''
						} `}
						id="menu-classic"
						type="button"
						onClick={handleTabChange}
					>
						Классические кальяны
					</button>

					<img src={ashtray} alt="пепельница" className="menu__image" />

					{isMobile && (
						<div className="menu__scroll-buttons">
							<ScrollButtons onClick={handleScroll} />
						</div>
					)}
				</div>

				{/* СДЕЛАТЬ ОТДЕЛЬНЫЕ КОМПОНЕНТЫ КАРТОЧЕК */}

				<div
					className="menu__cards menu-branded"
					style={{ display: activeTab === 'menu-branded' ? 'flex' : 'none' }}
				>
					<Gallery setScroll={setScroll} scroll={scroll}>
						<article className="menu-card ">
							<div className="menu-card__head">
								<h3 className="menu-card__name">«Баунти»</h3>
								<span className="menu-card__price">3000 &#8381;</span>
							</div>

							<p className="menu-card__property">
								<span className="menu-card__property_hilighted">Добавки: </span>
								шоколад, молоко, кокосовый сироп
							</p>
							<p className="menu-card__property">
								<span className="menu-card__property_hilighted">Чаша: </span>
								ананас
							</p>
							<p className="menu-card__property">
								<span className="menu-card__property_hilighted">
									Крепость:{' '}
								</span>
								средняя
							</p>
						</article>

						<article className="menu-card">
							<div className="menu-card__head">
								<h3 className="menu-card__name">«Мохито»</h3>
								<span className="menu-card__price">3000 &#8381;</span>
							</div>

							<p className="menu-card__property">
								<span className="menu-card__property_hilighted">Добавки: </span>
								мята, лайм, белый ром и много-много льда
							</p>
							<p className="menu-card__property">
								<span className="menu-card__property_hilighted">
									Чаша на выбор:
								</span>
								яблоко, апельсин, грейпфрут
							</p>
							<p className="menu-card__property">
								<span className="menu-card__property_hilighted">
									Крепость:{' '}
								</span>
								крепкий
							</p>
						</article>
						<article className="menu-card">
							<div className="menu-card__head">
								<h3 className="menu-card__name">«Пина колада»</h3>
								<span className="menu-card__price">3000 &#8381;</span>
							</div>

							<p className="menu-card__property">
								<span className="menu-card__property_hilighted">Добавки: </span>
								молоко, ананасовый сок, кокосовый сироп, лед
							</p>
							<p className="menu-card__property">
								<span className="menu-card__property_hilighted">Чаша: </span>
								ананас
							</p>
							<p className="menu-card__property">
								<span className="menu-card__property_hilighted">
									Крепость:{' '}
								</span>
								средняя
							</p>
						</article>
					</Gallery>
				</div>

				<div
					className="menu__cards menu-cigars"
					style={{ display: activeTab === 'menu-cigars' ? 'flex' : 'none' }}
				>
					<Gallery setScroll={setScroll} scroll={scroll}>
						<article className="menu-card ">
							<div className="menu-card__head">
								<h3 className="menu-card__name">Куба</h3>
							</div>
							<ul className="menu-card__body">
								<li className="menu-card__cigars-li">Cohiba Panatelas</li>
								<li className="menu-card__cigars-li">Cohiba Siglo II</li>
								<li className="menu-card__cigars-li">Cohiba Siglo IV</li>
								<li className="menu-card__cigars-li">Cohiba Siglo V</li>
								<li className="menu-card__cigars-li">Cohiba Robustos</li>
								<li className="menu-card__cigars-li">H. Upmann Magnum</li>
								<li className="menu-card__cigars-li">
									Hoyo De Mont. Epicure №
								</li>
								<li className="menu-card__cigars-li">Montecristo №4</li>
								<li className="menu-card__cigars-li">Partagas Serie №4</li>
								<li className="menu-card__cigars-li">
									Romeo & Julieta Churchliss.
								</li>
								<li className="menu-card__cigars-li">Romeo & Julieta №2</li>
							</ul>
						</article>
						<article className="menu-card">
							<div className="menu-card__head">
								<h3 className="menu-card__name">Доминикана</h3>
							</div>
							<ul className="menu-card__body">
								<li className="menu-card__cigars-li">
									CT Reserva Decadencia Churchill
								</li>
								<li className="menu-card__cigars-li">
									Arturo Fuente Anejo №77 Shark
								</li>
								<li className="menu-card__cigars-li">
									Davidoff Escurio Gran Perfecto
								</li>
								<li className="menu-card__cigars-li">Davidoff WSC Churchill</li>
								<li className="menu-card__cigars-li">Zino Platinum XS</li>
								<li className="menu-card__cigars-li">Zino Platinum Barrel</li>
								<li className="menu-card__cigars-li">Macanudo Cafe Ascots</li>
								<li className="menu-card__cigars-li">Macanudo Maduro Ascots</li>
							</ul>
						</article>
						<article className="menu-card">
							<div className="menu-card__head">
								<h3 className="menu-card__name">Никарагуа</h3>
							</div>
							<ul className="menu-card__body">
								<li className="menu-card__cigars-li">
									Nub Sun Grown 460 Tubos
								</li>
							</ul>
						</article>
					</Gallery>
				</div>

				<div
					className="menu__cards menu-classic"
					style={{ display: activeTab === 'menu-classic' ? 'block' : 'none' }}
				>
					<Gallery setScroll={setScroll} scroll={scroll}>
						<article className="menu-card" >
							<div className="menu-card__head">
								<h3 className="menu-card__name">Кальяны на глиняной чаше</h3>
							</div>
							<div className="menu-card__body">
								<div className="menu-card__section">
									<p className="menu-card__property">
										<span className="menu-card__property_hilighted">
											Standart:{' '}
										</span>
										<span className="menu-card__price"> 1200 &#8381;</span>
									</p>
									<p className="menu-card__property-note">
										<span className="menu-card__property_hilighted">
											Крепость:{' '}
										</span>
										легкий
									</p>
									<p className="menu-card__property">
										<span className="menu-card__property_hilighted">
											Premium:{' '}
										</span>
										<span className="menu-card__price">1500 &#8381;</span>
									</p>
									<p className="menu-card__property-note">
										<span className="menu-card__property_hilighted">
											Крепость:{' '}
										</span>
										крепкий
									</p>
								</div>
								<div className="menu-card__section">
									<h4 className="menu-card__section-name">Замена чаши</h4>
									<p className="menu-card__property">
										<span className="menu-card__property_hilighted">
											Standart:{' '}
										</span>
										<span className="menu-card__price"> 900 &#8381;</span>
									</p>
									<p className="menu-card__property">
										<span className="menu-card__property_hilighted">
											Premium:{' '}
										</span>
										<span className="menu-card__price"> 1200 &#8381;</span>
									</p>
								</div>
							</div>
						</article>
						<article className="menu-card">
							<div className="menu-card__head">
								<h3 className="menu-card__name">Кальяны на фруктовой чаше</h3>
							</div>
							<div className="menu-card__body">
								<div className="menu-card__section">
									<h4 className="menu-card__section-name">Апельсин</h4>
									<p className="menu-card__property">
										<span className="menu-card__property_hilighted">
											Standart:{' '}
										</span>
										<span className="menu-card__price"> 1600 &#8381;</span>
									</p>
									<p className="menu-card__property">
										<span className="menu-card__property_hilighted">
											Premium:{' '}
										</span>
										<span className="menu-card__price">1900 &#8381;</span>
									</p>
								</div>
								<div className="menu-card__section">
									<h4 className="menu-card__section-name">Яблоко</h4>
									<p className="menu-card__property">
										<span className="menu-card__property_hilighted">
											Standart:{' '}
										</span>
										<span className="menu-card__price"> 1600 &#8381;</span>
									</p>
									<p className="menu-card__property">
										<span className="menu-card__property_hilighted">
											Premium:{' '}
										</span>
										<span className="menu-card__price">1900 &#8381;</span>
									</p>
								</div>
								<div className="menu-card__section">
									<h4 className="menu-card__section-name">Грейпфрут</h4>
									<p className="menu-card__property">
										<span className="menu-card__property_hilighted">
											Standart:{' '}
										</span>
										<span className="menu-card__price"> 1900 &#8381;</span>
									</p>
									<p className="menu-card__property">
										<span className="menu-card__property_hilighted">
											Premium:{' '}
										</span>
										<span className="menu-card__price">2300 &#8381;</span>
									</p>
								</div>
								<div className="menu-card__section">
									<h4 className="menu-card__section-name">Ананас</h4>
									<p className="menu-card__property">
										<span className="menu-card__property_hilighted">
											Standart:{' '}
										</span>
										<span className="menu-card__price"> 2200 &#8381;</span>
									</p>
									<p className="menu-card__property">
										<span className="menu-card__property_hilighted">
											Premium:{' '}
										</span>
										<span className="menu-card__price">2700 &#8381;</span>
									</p>
								</div>
							</div>
						</article>
						<article className="menu-card">
							<div className="menu-card__head">
								<h3 className="menu-card__name">Добавки в колбу</h3>
							</div>
							<div className="menu-card__body">
								<div className="menu-card__section">
									<p className="menu-card__property">
										<span className="menu-card__property_hilighted">Вино:</span>
										<span className="menu-card__price">600 &#8381;</span>
									</p>
									<p className="menu-card__property">
										<span className="menu-card__property_hilighted">Мята:</span>
										<span className="menu-card__price">100 &#8381;</span>
									</p>
									<p className="menu-card__property">
										<span className="menu-card__property_hilighted">
											Молоко:
										</span>
										<span className="menu-card__price">200 &#8381;</span>
									</p>
									<p className="menu-card__property">
										<span className="menu-card__property_hilighted">
											Сок в ассортименте:
										</span>
										<span className="menu-card__price">300 &#8381;</span>
									</p>
								</div>
							</div>
							<p className="menu-card__note">
								Вы можете добавить в кальян любой алкоголь из барной карты
								ресторана Panorama A.S.P.
							</p>
						</article>
					</Gallery>
				</div>
			</div>
		</section>
	);
}

export default Menu;
