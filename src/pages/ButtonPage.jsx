import { GoBell, GoDatabase, GoCloudOffline } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
	console.log('her');
	return (
		<div className='px-5'>
			<div className='py-2 '>
				<Button primary rounded outlined className='mb-10'>
					<GoBell />
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

export default ButtonPage;
