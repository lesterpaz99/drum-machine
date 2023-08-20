import App from './App.tsx';
import ReactDOM from 'react-dom';
import { PrimeReactProvider } from 'primereact/api';

//theme
import 'primereact/resources/themes/lara-light-indigo/theme.css';
//core
import 'primereact/resources/primereact.min.css';
import './index.css';

// import ReactDOM  from 'react-dom/client';

// react 17
ReactDOM.render(
	<PrimeReactProvider>
		<App />
	</PrimeReactProvider>,
	document.getElementById('root')
);

// react 18
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
