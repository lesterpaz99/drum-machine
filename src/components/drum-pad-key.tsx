import { Button } from 'primereact/button';
import { useEventListener } from '../hooks/use-event-listener';

import { useSelector, useDispatch } from 'react-redux';
import { updateDisplay } from '../context/features/drum-pad-slice';
import { RootState } from '../context/store';

interface AudioI {
	url: string;
	name: string;
}

interface DrumPadKeyProps {
	letter: string;
	sound: AudioI;
}

export const DrumPadKey = ({ letter, sound }: DrumPadKeyProps) => {
	const powerState = useSelector((state: RootState) => state.drumPad.power);
	const volumeState = useSelector((state: RootState) => state.drumPad.volume);
	const dispatch = useDispatch();

	const audio = new Audio(sound.url);
	audio.id = letter;
	audio.volume = volumeState / 100;

	const keydownHandler = (event: KeyboardEvent) => {
		if (event.key === letter.toLocaleLowerCase()) {
			onPlay();
		}
	};

	const onPlay = () => {
		if (!powerState) return;

		dispatch(updateDisplay(sound.name));
		audio.play();
	};

	useEventListener('keydown', keydownHandler);

	return (
		<Button
			onClick={onPlay}
			type='button'
			className='drum-pad'
			id={sound.name}
			disabled={!powerState}
		>
			<div dangerouslySetInnerHTML={{ __html: audio.outerHTML }}></div>
			<p>{letter}</p>
		</Button>
	);
};
