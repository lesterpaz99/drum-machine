import { useSelector } from 'react-redux';
import { RootState } from '../context/store';

import { Message } from 'primereact/message';

export const Display = () => {
	const displayState = useSelector((state: RootState) => state.drumPad.display);

	return (
		<Message
			style={{
				border: 'solid #696cff',
				borderWidth: '0 6px 0 6px',
				color: '#696cff',
				width: '200px',
			}}
			className='border-primary w-full justify-content-start'
			id='display'
			severity='info'
			content={displayState}
		/>
	);
};
