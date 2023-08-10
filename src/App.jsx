import Accordion from './components/Accordion';

function App() {
	const items = [
		{
			id: 1,
			label: 'Title 1',
			content: 'You can use title 1 whenever you want',
		},
		{
			id: 2,
			label: 'Title 2',
			content: 'You can use title 2 whenever you want',
		},
		{
			id: 3,
			label: 'Title ',
			content: 'You can use title 3 whenever you want',
		},
	];
	return <Accordion items={items} />;
}

export default App;
