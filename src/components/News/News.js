import { useState } from 'react';
import Gallery from '../Gallery/Gallery';
import ScrollButtons from '../ScrollButtons/ScrollButtons';
import './News.css';
import './NewsCard.css'

function News({ news }) {
	const [scroll, setScroll] = useState(0);

	function handleScroll(e) {
		e === 'right' ? setScroll(scroll + 600) : setScroll(scroll - 600);
	}

	return (
		<section className="news" id="news">
			<div className="news__container">
				<div className="news__head">
					<h2 className="title news__title">Новости</h2>
					<ScrollButtons onClick={handleScroll} />
				</div>
				<div className="news__feed gallery">
					<Gallery setScroll={setScroll} scroll={scroll}>
						{news.map((n, i) => (
							<div className="news-card" key={i}>
								<img src={n.image} alt="новость" className="news-card__image" />
								<span className="news-card__date">{n.date}</span>
								<h4 className="news-card__title">{n.title}</h4>
							</div>
						))}
					</Gallery>
				</div>
			</div>
		</section>
	);
}

export default News;
