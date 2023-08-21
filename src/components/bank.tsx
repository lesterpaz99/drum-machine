import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../context/store';

import { InputSwitch } from 'primereact/inputswitch';
import { toggleBank } from '../context/features/drum-pad-slice';
import { useState } from 'react';

export const Bank = () => {
	const [bank, setBank] = useState(true);
	const powerState = useSelector((state: RootState) => state.drumPad.power);
	const bankState = useSelector((state: RootState) => state.drumPad.bank);

	const dispatch = useDispatch();

	const bankHandler = () => {
		setBank(!bank);
		if (bank) {
			dispatch(toggleBank('Heater Kit'));
			return;
		}

		dispatch(toggleBank('Smooth Piano Kit'));
	};

	return (
		<div>
			<p className='power-label'>Bank</p>
			<InputSwitch
				checked={bankState === 'Heater Kit' ? true : false}
				onChange={bankHandler}
				disabled={!powerState}
			/>
		</div>
	);
};
