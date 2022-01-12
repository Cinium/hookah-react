import './Logo.css';
import logo from '../../images/logo.svg'

function Logo() {
	return (
		<div className="logo">
			<img src={logo} alt="лого" className="logo__image" />
		</div>
	);
}

export default Logo;
