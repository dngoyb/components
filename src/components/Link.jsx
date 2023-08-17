import { useContext } from 'react';
import NaviationContext from '../context/Navigation';

function Link({ to, children }) {
	const { navigate } = useContext(NaviationContext);
	const handleClick = (event) => {
		event.preventDefault();
		navigate(to);
	};
	return <a onClick={handleClick}>{children}</a>;
}

export default Link;
