import './Advantages.css';
import leaveImage from '../../images/advantages/leaveImage.svg';
import advantagesBackground from '../../images/advantages/advantagesBackground.png';

function Advantages() {
	return (
		<section className="advantages" id="advantages">
			<div className="advantages__wrapper">
				<div className="advantages__container">
					<h3 className="advantages__title title title_dark">У нас уютно</h3>
					<ul className="advantages__list">
						<li className="advantages__item">
							<div className="advantages__point-wrapper">
								<div className="advantages__point"></div>
							</div>
							<p className="advantages__paragraph">
								Шикарный вид на город с 50-го этажа БЦ «Высоцкий»
							</p>
						</li>
						<li className="advantages__item">
							<div className="advantages__point-wrapper">
								<div className="advantages__point"></div>
							</div>
							<p className="advantages__paragraph">
								Авторские миксы, которые меняются каждый месяц и способны
								удовлетворить каждого требовательного гостя
							</p>
						</li>
						<li className="advantages__item">
							<div className="advantages__point-wrapper">
								<div className="advantages__point"></div>
							</div>
							<p className="advantages__paragraph">
								Уникальная атмосфера уединения и комфорта
							</p>
						</li>
						<li className="advantages__item">
							<div className="advantages__point-wrapper">
								<div className="advantages__point"></div>
							</div>
							<p className="advantages__paragraph">
								Персонал — подготовленные мастера своего дела
							</p>
						</li>
					</ul>

					<img src={leaveImage} alt="лист" className="advantages__image" />
				</div>
			</div>
			<img
				src={advantagesBackground}
				alt="интерьер"
				className="advantages__background"
			/>
		</section>
	);
}

export default Advantages;
