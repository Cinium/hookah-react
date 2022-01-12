import './About.css';
import hookahImage from '../../images/about/hookah.png'

function About() {
	return (
		<section className="about" id="about">
			<div className="about__container">
				<div className="about__text">
					<h2 className="about__title title">Возраждаем традицию</h2>
					<p className="about__paragraph paragraph">
						Сигара в достойной компании, оттененная бокалом бренди, всегда была
						не только обязательным атрибутом джентльмена, но и данью традициям.
						Поклонники сигар встречались в курительных клубах, обсуждали
						последние новости и вершили судьбы мира. Прошло время, и теперь
						традицию курительных клубов возрождает «Дым кудрявый» в
						Екатеринбурге.
					</p>
				</div>

				<div className="about__sections">
					<img
						src={hookahImage}
						alt="кальян"
						className="about__image"
					/>
					<div className="about__section">
						<h3 className="about__section-title">Услуги</h3>
						<p className="about__section-paragraph">
							Серьезная сигарная карта и достойный выбор кальянов – standart,
							premium или de luxe. Всегда в наличии элитный алкоголь, который
							составляет отличную партию сигарам. Всем, кто за рулем бармен
							предложит авторский чай.
						</p>
					</div>
					<div className="about__section about__section-entertainment">
						<h3 className="about__section-title">Развлечения</h3>
						<p className="about__section-paragraph">
							В клубе «Дым кудрявый» установлены плазменные панели, на которых
							можно посмотреть спортивный матч. Также в гостевом зале вы найдете
							шахматы и шашки, в том числе интересные авторские коллекции.
						</p>
					</div>
					<div className="about__section">
						<h3 className="about__section-title">Для кого</h3>
						<p className="about__section-paragraph">
							Курительный клуб №1 «Дым кудрявый» создан для деловых и
							неформальных встреч. В отличии от традиционных английских
							курительных клубов, заведение в Екатеринбурге ждет и джентльменов,
							и леди.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
