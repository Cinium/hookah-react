import './Contacts.css';
import map from '../../images/contacts/map.png';
import lighter from '../../images/contacts/lighter.svg';
import Phone from '../Phone/Phone';
import Location from '../Location/Location';
import Time from '../Time/Time';

function Contacts() {
	return (
		<section className="contacts" id="contacts">
			<img src={map} alt="карта" className="contacts__map" />

			<div className="contacts__container">
				<h2 className="title contacts__title">Контакты</h2>

				<div className="contacts__info">
					<Phone />
					<Location
						lines={['Екатеринбург, ул. Малышева 51,', 'БЦ Высоцкий, 50 этаж']}
					/>
					<Time />
				</div>

				<div className="contacts__links">
					<button type="button" href="#" className="contacts__link">
						<i className="contacts__icon lab la-facebook-f"></i> Facebook
					</button>
					<button type="button" href="#" className="contacts__link">
						<i className="contacts__icon lab la-instagram"></i>Instagram
					</button>
				</div>

				<img src={lighter} alt="" className="contacts__image" />
			</div>
		</section>
	);
}

export default Contacts;
