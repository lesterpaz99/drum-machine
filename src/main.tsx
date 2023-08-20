import App from './App.tsx';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './context/store.ts';
import { PrimeReactProvider } from 'primereact/api';

//theme
import 'primereact/resources/themes/lara-light-indigo/theme.css';
//core
import 'primereact/resources/primereact.min.css';
import './index.css';

// import ReactDOM  from 'react-dom/client';

// react 17
ReactDOM.render(
	<Provider store={store}>
		<PrimeReactProvider>
			<App />
		</PrimeReactProvider>
	</Provider>,
	document.getElementById('root')
);

// react 18
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
