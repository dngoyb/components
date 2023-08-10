import { GoBell, GoDatabase, GoCloudOffline } from 'react-icons/go';
import Button from './components/Button';

function App() {
	return (
		<div className='px-5'>
			<div className='py-2 '>
				<Button primary rounded>
					<GoBell className='mr-1' />
					Button 1
				</Button>
			</div>
			<div className='py-2 '>
				<Button success outlined>
					<GoCloudOffline />
					Click me!
				</Button>
			</div>
			<div className='py-2 '>
				<Button warning>
					<GoDatabase />
					Button 2
				</Button>
			</div>
			<div className='py-2 '>
				<Button secondary outlined>
					BUTTON 3
				</Button>
			</div>
			<div className='py-2 '>
				<Button danger rounded>
					Now Click
				</Button>
			</div>
		</div>
	);
}

export default App;
