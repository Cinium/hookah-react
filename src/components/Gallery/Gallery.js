import { useEffect, useRef } from 'react';
import './Gallery.css';

function Gallery({ children, setScroll, scroll }) {
	const ref = useRef();

	useEffect(() => {
		const maxScrollWidth = ref.current.scrollWidth - ref.current.clientWidth;

		if (maxScrollWidth <= scroll) {
			ref.current.scrollLeft = maxScrollWidth;
			setScroll(maxScrollWidth);
		} else if (scroll < 0) {
			setScroll(0);
		} else {
			ref.current.scrollLeft = scroll;
		}
	}, [scroll, setScroll]);

	let isDown = false,
		startX;

	function handleMouseDown(e) {
		isDown = true;
		ref.current.style.scrollBehavior = 'auto';
		startX = e.pageX - ref.current.offsetLeft;
		setScroll(ref.current.scrollLeft);
	}

	function handleMouseUp() {
		isDown = false;
		ref.current.style.scrollBehavior = 'smooth';
	}

	function handleMouseMove(e) {
		if (!isDown) return;
		const x = e.pageX - ref.current.offsetLeft;
		const walk = x - startX;
		ref.current.scrollLeft = scroll - walk;
	}

	function handleMouseLeave() {
		isDown = false;
	}

	return (
		<div
			className="gallery"
			ref={ref}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			{children}
		</div>
	);
}

export default Gallery;
