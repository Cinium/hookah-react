import './Restaurant.css';

function Restaurant() {
	return (
		<section className="restaurant" id="restaurant">
			<div className="restaurant__container">
				<div className="restaurant__text">
					<h2 className="restaurant__title">
						Наш клуб входит в состав ресторана Panorama ASP
					</h2>
					<p className="restaurant__subtitle">
						Поэтому гости могут не только насладиться дымным, но и попробовать
						самые разнообразные коктейли, а также вкусно поесть
					</p>
				</div>

				<button className="restaurant__button">
					Подробнее о ресторане <i className="las la-long-arrow-alt-right"></i>
				</button>
			</div>
		</section>
	);
}

export default Restaurant;
