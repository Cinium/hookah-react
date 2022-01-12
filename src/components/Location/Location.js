import './Location.css';

function Location({ lines }) {
	return (
		<div className="location">
			<i className="las la-map-marker location__icon"></i>
			<div className="location__text-container">
				{lines.map((line, i) => (
					<span key={i} className="location__text">{line}</span>
				))}
			</div>
		</div>
	);
}

export default Location;
