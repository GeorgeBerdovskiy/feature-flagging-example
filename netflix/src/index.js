import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import tools from Unleash
import { FlagProvider } from '@unleash/proxy-client-react';

const config = {
	url: 'http://localhost:4242/api/frontend',
	clientKey: process.env.REACT_APP_CLIENT_KEY,
	refreshInterval: 30,
	appName: 'netflix',
	environment: 'dev',
  };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<FlagProvider config={config}>
			<App />
		</FlagProvider>
	</React.StrictMode>
);

reportWebVitals();
