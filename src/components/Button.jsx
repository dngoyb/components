import className from 'classnames';
import { twMerge } from 'tailwind-merge';
function Button({
	children,
	primary,
	secondary,
	success,
	warning,
	danger,
	outlined,
	rounded,
	...rest
}) {
	const classes = twMerge(
		className(
			rest.className,
			'flex items-center px-3 py-1.5 border text-white ',
			{
				'border-blue-600 bg-blue-500 ': primary,
				'border-gray-900 bg-gray-900 ': secondary,
				'border-green-600 bg-green-500 ': success,
				'border-yellow-400 bg-yellow-400 ': warning,
				'border-red-600 bg-red-500 ': danger,
				'rounded-full': rounded,
				'bg-white': outlined,
				'text-blue-500': outlined && primary,
				'text-gray-900': outlined && secondary,
				'text-green-500': outlined && success,
				'text-yellow-500': outlined && warning,
				'text-red-500': outlined && danger,
			}
		)
	);
	return (
		<button {...rest} className={classes}>
			{children}
		</button>
	);
}

Button.propTypes = {
	checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
		const count =
			Number(!!primary) +
			Number(!!secondary) +
			Number(!!success) +
			Number(!!warning) +
			Number(!!danger);
		if (count > 1) {
			return new Error(
				'Only one of primary, secondary, success, warning, danger can be true'
			);
		}
	},
};

export default Button;
