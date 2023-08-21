import { Slider } from 'primereact/slider';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../context/store';
import {
	updateDisplay,
	updateVolume,
} from '../context/features/drum-pad-slice';
import { useEffect } from 'react';

export const VolumeSlider = () => {
	const powerState = useSelector((state: RootState) => state.drumPad.power);
	const volumeState = useSelector((state: RootState) => state.drumPad.volume);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(updateDisplay(`Volume: ${volumeState}`));
	}, [volumeState]);

	return (
		<Slider
			className='volume-slider'
			value={volumeState}
			disabled={!powerState}
			onChange={(e) => dispatch(updateVolume(e.value as number))}
		/>
	);
};
