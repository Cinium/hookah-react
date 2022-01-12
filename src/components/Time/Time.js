import './Time.css';

function Time() {
	return (
		<div className="time">
			<i className="las la-clock time__icon"></i>
			<div className="time__container">
				<span className="time__text">вс-чт с 16:00 до 00:00</span>
				<span className="time__text">пт-сб с 16:00 до 04:00</span>
			</div>
		</div>
	);
}

export default Time;
