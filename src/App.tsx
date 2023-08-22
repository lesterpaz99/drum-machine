import { useScreen } from './hooks/use-screen';

// Styles
import './App.css';

// Components
import { DrumPadKey } from './components/drum-pad-key';
import { Display } from './components/display';
import { Power } from './components/power';
import { Bank } from './components/bank';
import { VolumeSlider } from './components/volume-slider';
import { Splitter, SplitterPanel } from 'primereact/splitter';

// Audios
import heater1Url from './assets/audio/Heater-1.mp3';
import heater2Url from './assets/audio/Heater-2.mp3';
import heater3Url from './assets/audio/Heater-3.mp3';
import heater4Url from './assets/audio/Heater-4_1.mp3';
import clapUrl from './assets/audio/Heater-6.mp3';
import openHHUrl from './assets/audio/Dsc_Oh.mp3';
import kickNHatUrl from './assets/audio/Kick_n_Hat.mp3';
import kickUrl from './assets/audio/RP4_KICK_1.mp3';
import closedHHUrl from './assets/audio/Cev_H2.mp3';

// Audio Data
const audioData = [
	{ key: 'Q', url: heater1Url, name: 'Heater 1' },
	{ key: 'W', url: heater2Url, name: 'Heater 2' },
	{ key: 'E', url: heater3Url, name: 'Heater 3' },
	{ key: 'A', url: heater4Url, name: 'Heater 4' },
	{ key: 'S', url: clapUrl, name: 'Clap' },
	{ key: 'D', url: openHHUrl, name: 'Open-HH' },
	{ key: 'Z', url: kickNHatUrl, name: "Kick-n'-Hat" },
	{ key: 'X', url: kickUrl, name: 'Kick' },
	{ key: 'C', url: closedHHUrl, name: 'Closed-HH' },
];

function App() {
	const screen = useScreen();
	const width = screen?.width as number;

	return (
		<Splitter
			style={{
				height: width > 425 ? '350px' : '',
				width: width > 425 ? '650px' : '',
				padding: '1rem',
			}}
			layout={width <= 425 ? 'vertical' : 'horizontal'}
			id='drum-machine'
		>
			<SplitterPanel className='pad'>
				{audioData.map((audio) => (
					<DrumPadKey key={audio.key} letter={audio.key} sound={audio} />
				))}
			</SplitterPanel>
			<SplitterPanel className='controls-pad'>
				<Power />
				<Display />
				<VolumeSlider />
				<Bank />
			</SplitterPanel>
		</Splitter>
	);
}

export default App;
