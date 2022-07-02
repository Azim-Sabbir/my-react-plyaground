import './App.css';
import Basic from "./components/basic";
import {Clock} from "./components/Clock";

function App() {
	return (
		<>
			<Basic />
			<Clock Hello={"hi there"} />
		</>
	);
}

export default App;
