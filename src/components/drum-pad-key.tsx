import { Button } from 'primereact/button';
import { useEventListener } from '../hooks/use-event-listener';

interface AudioI {
	url: string;
	name: string;
}

interface DrumPadKeyProps {
	letter: string;
	sound: AudioI;
}

export const DrumPadKey = ({ letter, sound }: DrumPadKeyProps) => {
	const audio = new Audio(sound.url);
	audio.id = letter;

	const keydownHandler = (event: KeyboardEvent) => {
		if (event.key === letter.toLocaleLowerCase()) {
			onPlay();
		}
	};

	const onPlay = () => {
		audio.play();
	};

	useEventListener('keydown', keydownHandler);

	return (
		<Button onClick={onPlay} type='button' className='drum-pad' id={sound.url}>
			<div dangerouslySetInnerHTML={{ __html: audio.outerHTML }}></div>
			<p>{letter}</p>
		</Button>
	);
};
