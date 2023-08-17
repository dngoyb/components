import { useContext } from 'react';
import NaviationContext from '../context/Navigation';

function useNavigation() {
	return useContext(NaviationContext);
}

export default useNavigation;
