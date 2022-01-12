import './BurgerMenu.css';

function BurgerMenu({ content, children }) {
	return (
		<div className="burger-menu">
			<input id="burger-toggle" type="checkbox" />

			<label className="burger-menu__button" htmlFor="burger-toggle">
				<span className="burger-menu__icon"></span>
			</label>
			<ul className="burger-menu__menu">
				{children}
			</ul>
		</div>
	);
}

export default BurgerMenu;
