import { Button } from 'primereact/button';
import { useEventListener } from '../hooks/use-event-listener';

import { useSelector, useDispatch } from 'react-redux';
import { updateDisplay } from '../context/features/drum-pad-slice';
import { RootState } from '../context/store';
import { useRef } from 'react';

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

	const audioRef = useRef<HTMLAudioElement | null>(null);

	const keydownHandler = (event: KeyboardEvent) => {
		if (event.key === letter.toLocaleLowerCase()) {
			onPlay();
		}
	};

	const onPlay = () => {
		if (!powerState || !audioRef.current) return;

		dispatch(updateDisplay(sound.name));
		audioRef.current.volume = volumeState / 100;
		audioRef.current.play();
	};

	useEventListener('keydown', keydownHandler);

	return (
		<Button
			onClick={onPlay}
			type='button'
			className='drum-pad key'
			id={sound.name}
			disabled={!powerState}
		>
			{letter}
			<audio ref={audioRef} id={letter} className='clip' src={sound.url} />
		</Button>
	);
};
