// Import pages and components
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';

// Import assets (images and styles)
import './styles.css';

function App() {
	return (
		<>
			<NavigationBar></NavigationBar>
			<Home></Home>
		</>
	);
}

export default App;
