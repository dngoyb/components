import { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';

function ModalPage() {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(true);
	};

	const handleClose = () => {
		setShowModal(false);
	};

	const actionBar = (
		<div>
			<Button primary onClick={handleClose}>
				I Accept
			</Button>
		</div>
	);

	const modal = (
		<Modal onClose={handleClose} actionBar={actionBar}>
			<p>Here is an important agreement for you to accept</p>
		</Modal>
	);
	return (
		<div>
			<Button onClick={handleClick} primary>
				Open Modal
			</Button>
			{showModal && modal}
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet
				ut elit porttitor hendrerit. Vestibulum ante ipsum primis in faucibus
				orci luctus et ultrices posuere cubilia curae; Donec eu arcu viverra,
				pharetra elit vitae, luctus massa. Vestibulum aliquet nibh ante, ut
				venenatis justo mattis imperdiet. Nullam tortor nulla, mattis ut
				pellentesque sit amet, egestas quis arcu. Sed nibh ante, imperdiet ac
				ante ut, cursus tempor mauris. Etiam rutrum, nisi ut condimentum
				imperdiet, ipsum risus elementum justo, non maximus magna nisi ut erat.
				Suspendisse potenti. Nullam vestibulum quam non libero lobortis, at
				blandit leo euismod. Pellentesque aliquet nibh quis commodo porta. Fusce
				purus sapien, vestibulum at nibh vitae, iaculis bibendum mauris. Nunc
				venenatis ultricies lorem vitae consequat. Ut pellentesque interdum
				tellus, interdum rhoncus quam sollicitudin eu. Sed eleifend in sem vitae
				fermentum. Aliquam malesuada sodales odio non bibendum.{' '}
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet
				ut elit porttitor hendrerit. Vestibulum ante ipsum primis in faucibus
				orci luctus et ultrices posuere cubilia curae; Donec eu arcu viverra,
				pharetra elit vitae, luctus massa. Vestibulum aliquet nibh ante, ut
				venenatis justo mattis imperdiet. Nullam tortor nulla, mattis ut
				pellentesque sit amet, egestas quis arcu. Sed nibh ante, imperdiet ac
				ante ut, cursus tempor mauris. Etiam rutrum, nisi ut condimentum
				imperdiet, ipsum risus elementum justo, non maximus magna nisi ut erat.
				Suspendisse potenti. Nullam vestibulum quam non libero lobortis, at
				blandit leo euismod. Pellentesque aliquet nibh quis commodo porta. Fusce
				purus sapien, vestibulum at nibh vitae, iaculis bibendum mauris. Nunc
				venenatis ultricies lorem vitae consequat. Ut pellentesque interdum
				tellus, interdum rhoncus quam sollicitudin eu. Sed eleifend in sem vitae
				fermentum. Aliquam malesuada sodales odio non bibendum.{' '}
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet
				ut elit porttitor hendrerit. Vestibulum ante ipsum primis in faucibus
				orci luctus et ultrices posuere cubilia curae; Donec eu arcu viverra,
				pharetra elit vitae, luctus massa. Vestibulum aliquet nibh ante, ut
				venenatis justo mattis imperdiet. Nullam tortor nulla, mattis ut
				pellentesque sit amet, egestas quis arcu. Sed nibh ante, imperdiet ac
				ante ut, cursus tempor mauris. Etiam rutrum, nisi ut condimentum
				imperdiet, ipsum risus elementum justo, non maximus magna nisi ut erat.
				Suspendisse potenti. Nullam vestibulum quam non libero lobortis, at
				blandit leo euismod. Pellentesque aliquet nibh quis commodo porta. Fusce
				purus sapien, vestibulum at nibh vitae, iaculis bibendum mauris. Nunc
				venenatis ultricies lorem vitae consequat. Ut pellentesque interdum
				tellus, interdum rhoncus quam sollicitudin eu. Sed eleifend in sem vitae
				fermentum. Aliquam malesuada sodales odio non bibendum.{' '}
			</p>
		</div>
	);
}

export default ModalPage;
