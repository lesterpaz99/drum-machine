import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../context/store';

import { InputSwitch } from 'primereact/inputswitch';
import { togglePower } from '../context/features/drum-pad-slice';

export const Power = () => {
	const powerState = useSelector((state: RootState) => state.drumPad.power);
	const dispatch = useDispatch();

	return (
		<div>
			<p className='power-label'>Power</p>
			<InputSwitch
				checked={powerState}
				onChange={() => dispatch(togglePower())}
			/>
		</div>
	);
};
