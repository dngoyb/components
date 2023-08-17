import Route from './components/Route';
import Sidebar from './components/Sidebar';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage';

function App() {
	return (
		<div>
			<Sidebar />
			<div className=''>
				<Route path='/accordion'>
					<AccordionPage />
				</Route>
				<Route path='/'>
					<DropdownPage />
				</Route>
				<Route path='/buttons'>
					<ButtonPage />
				</Route>
			</div>
		</div>
	);
}

export default App;
