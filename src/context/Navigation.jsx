import { useState } from 'react';
import { createContext } from 'react';

const NaviationContext = createContext();

function NavigationProvider({ children }) {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	return (
		<NaviationContext.Provider value={{}}>
			{currentPath}
			{children}
		</NaviationContext.Provider>
	);
}

export { NavigationProvider };
export default NaviationContext;
