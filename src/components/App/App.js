import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import news from '../../constants/news';
import About from '../About/About';
import Advantages from '../Advantages/Advantages';
import Contacts from '../Contacts/Contacts';
import Header from '../Header/Header';
import Interior from '../Interior/Interior';
import Menu from '../Menu/Menu';
import News from '../News/News';
import Restaurant from '../Restaurant/Restaurant';
import './App.css';

function App() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		checkIfMobile();
		window.addEventListener('resize', checkIfMobile);
	}, []);

	function checkIfMobile() {
		if (window.innerWidth >= 1130) {
			setIsMobile(false);
		} else {
			setIsMobile(true);
		}
	}

	return (
		<div className="App">
			<Header isMobile={isMobile} />
			<About />
			<Interior />
			<Menu isMobile={isMobile} />
			<Advantages />
			<News news={news} />
			<Restaurant />
			<Contacts />
		</div>
	);
}

export default App;
