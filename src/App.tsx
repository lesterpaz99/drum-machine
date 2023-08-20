// components
import { DrumPadKey } from './components/drum-pad-key';

// audios
import heater1Url from './assets/audio/Heater-1.mp3';
import heater2Url from './assets/audio/Heater-2.mp3';
import heater3Url from './assets/audio/Heater-3.mp3';
import heater4Url from './assets/audio/Heater-4_1.mp3';
import clapUrl from './assets/audio/Heater-6.mp3';
import openHHUrl from './assets/audio/Dsc_Oh.mp3';
import kickNHatUrl from './assets/audio/Kick_n_Hat.mp3';
import kickUrl from './assets/audio/RP4_KICK_1.mp3';
import closedHHUrl from './assets/audio/Cev_H2.mp3';

// styles
import './App.css';

function App() {
	const audios = {
		heater1: { url: heater1Url, name: 'Heater 1' },
		heater2: { url: heater2Url, name: 'Heater 2' },
		heater3: { url: heater3Url, name: 'Heater 3' },
		heater4: { url: heater4Url, name: 'Heater 4' },
		clap: { url: clapUrl, name: 'Clap' },
		openHH: { url: openHHUrl, name: 'Open-HH' },
		kickNHat: { url: kickNHatUrl, name: "Kick-n'-Hat" },
		kick: { url: kickUrl, name: 'Kick' },
		closedHH: { url: closedHHUrl, name: 'Closed-HH' },
	};

	return (
		<div id='drum-machine'>
			<DrumPadKey letter='Q' sound={audios.heater3} />
		</div>
	);
}

export default App;
