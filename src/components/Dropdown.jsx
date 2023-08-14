import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleOptionClick = (option) => {
		setIsOpen(false);
		onChange(option);
	};

	const renderedOptions = options.map((option) => {
		return (
			<div
				className='hover:bg-sky-100 rounded cursor-pointer p-1'
				key={option.value}
				onClick={() => handleOptionClick(option)}>
				{option.label}
			</div>
		);
	});

	const handleClick = () => {
		setIsOpen((current) => !isOpen);
	};

	return (
		<div className='w-48 relative'>
			<Panel
				className='flex justify-between items-center cursor-pointer '
				onClick={handleClick}>
				{value?.label || 'Select...'}
				{isOpen ? (
					<GoChevronDown className='text-xl' />
				) : (
					<GoChevronLeft className='text-xl' />
				)}
			</Panel>
			{isOpen && (
				<Panel className='absolute top-full '>{renderedOptions}</Panel>
			)}
		</div>
	);
}

export default Dropdown;
