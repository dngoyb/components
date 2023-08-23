import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import Table from './Table';
import useSort from '../hooks/use-sort';

function SortableTable(props) {
	const { data, config } = props;
	const { sortedData, setSortColumn, sortBy, sortOrder } = useSort(
		data,
		config
	);

	const updatedConfig = config.map((column) => {
		if (!column.sortValue) {
			return column;
		}
		return {
			...column,
			header: () => (
				<th
					className='cursor-pointer hove:bg-gray-100'
					onClick={() => setSortColumn(column.label)}>
					<div className='flex items-center'>
						{getIcons(column.label, sortBy, sortOrder)}
						{column.label}
					</div>
				</th>
			),
		};
	});

	return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
	if (sortBy !== label) {
		return (
			<div className=''>
				<GoTriangleUp />
				<GoTriangleDown />
			</div>
		);
	}
	if (sortOrder === null) {
		return (
			<div className=''>
				<GoTriangleUp />
				<GoTriangleDown />
			</div>
		);
	} else if (sortOrder === 'asc') {
		return (
			<div className=''>
				<GoTriangleUp />
			</div>
		);
	} else if (sortOrder === 'desc') {
		return (
			<div className=''>
				<GoTriangleDown />
			</div>
		);
	}
}

export default SortableTable;
