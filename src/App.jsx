import Button from './components/Button';

function App() {
	return (
		<div>
			<div>
				<Button success rounded outlined>
					Button 1
				</Button>
			</div>
			<div>
				<Button danger outlined>
					Click me!
				</Button>
			</div>
			<div>
				<Button>Button 2</Button>
			</div>
			<div>
				<Button>BUTTON 3</Button>
			</div>
			<div>
				<Button>Now Click</Button>
			</div>
		</div>
	);
}

export default App;
