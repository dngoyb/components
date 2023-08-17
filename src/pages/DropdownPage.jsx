import { useState } from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage() {
	const [selection, setSelection] = useState(null);
	const handleSelect = (option) => {
		setSelection((currentSelect) => option);
	};
	const options = [
		{ label: 'Red', value: 'red' },
		{ label: 'Green', value: 'green' },
		{ label: 'Blue', value: 'blue' },
	];
	return (
		<Dropdown options={options} value={selection} onChange={handleSelect} />
	);
}

export default DropdownPage;