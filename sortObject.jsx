const data = [
	{ name: 'Orange', cost: 58, weight: 5 },
	{ name: 'Apple', cost: 38, weight: 3 },
	{ name: 'Lime', cost: 13, weight: 9 },
	{ name: 'Banana', cost: 78, weight: 2 },
];

const sortOrder = 'asc';

function getSortValue(value) {
	return value.cost;
}

data.sort((a, b) => {
	const valueA = getSortValue(a);
	const valueB = getSortValue(b);

	const reverseOrder = sortOrder === 'asc' ? 1 : -1;

	if (typeof valueA === 'number' && typeof valueB === 'number') {
		return (valueA - valueB) * reverseOrder;
	}
	return valueA.localeCompare(valueB) * reverseOrder;
});
