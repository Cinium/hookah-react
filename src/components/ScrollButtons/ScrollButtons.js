import './ScrollButtons.css';

function ScrollButtons({ onClick }) {
	return (
		<div className="scroll-buttons">
			<button
				onClick={e => onClick('left')}
				type="button"
				className="scroll-buttons__button scroll-buttons__button_left"
			>
				<i className="las la-angle-left"></i>
			</button>
			<button
				onClick={e => onClick('right')}
				type="button"
				className="scroll-buttons__button scroll-buttons__button_right"
			>
				<i className="las la-angle-right"></i>
			</button>
		</div>
	);
}

export default ScrollButtons;
