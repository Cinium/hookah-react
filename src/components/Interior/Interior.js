import './Interior.css';
import interior1 from '../../images/interior/interior1.png';
import interior2 from '../../images/interior/interior2.png';
import interior3 from '../../images/interior/interior3.png';
import interior4 from '../../images/interior/interior4.png';
import Gallery from '../Gallery/Gallery';
import ScrollButtons from '../ScrollButtons/ScrollButtons';
import { useState } from 'react';

function Interior() {
	const [scroll, setScroll] = useState(0);

	function handleClick(e) {
		e === 'right' ? setScroll(scroll + 600) : setScroll(scroll - 600);
	}

	return (
		<section className="interior" id="interior">
			<div className="interior__container">
				<div className="interior__head">
					<h2 className="title title_dark interior__title">Интерьер</h2>
					<ScrollButtons onClick={handleClick} />
				</div>
				<div className="interior__gallery">
					<Gallery setScroll={setScroll} scroll={scroll}>
						<img src={interior1} alt="фото интерьера" className="interior__gallery-image" />
						<img src={interior2} alt="фото интерьера" className="interior__gallery-image" />
						<img src={interior3} alt="фото интерьера" className="interior__gallery-image" />
						<img src={interior4} alt="фото интерьера" className="interior__gallery-image" />
						<img src={interior1} alt="фото интерьера" className="interior__gallery-image" />
						<img src={interior2} alt="фото интерьера" className="interior__gallery-image" />
						<img src={interior3} alt="фото интерьера" className="interior__gallery-image" />
						<img src={interior4} alt="фото интерьера" className="interior__gallery-image" />
					</Gallery>
				</div>
			</div>
		</section>
	);
}

export default Interior;
