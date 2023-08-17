import { useContext } from 'react';
import NaviationContext from '../context/Navigation';

function Route({ path, children }) {
	const { currentPath } = useContext(NaviationContext);

	if (path === currentPath) {
		return children;
	}

	return null;
}

export default Route;
