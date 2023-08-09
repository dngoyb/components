import Button from './components/Button';

function App() {
	return (
		<div>
			<div>
				<Button primary rounded outlined>
					Button 1
				</Button>
			</div>
			<div>
				<Button success outlined>
					Click me!
				</Button>
			</div>
			<div>
				<Button warning>Button 2</Button>
			</div>
			<div>
				<Button secondary>BUTTON 3</Button>
			</div>
			<div>
				<Button danger rounded>
					Now Click
				</Button>
			</div>
		</div>
	);
}

export default App;
