import './App.css';
import Basic from "./components/basic";
import {Clock} from "./components/Clock";
import ExampleForm from "./components/ExampleForm";
import Calculator from "./components/Calculator";
import Base from "./components/composition-vs-inheritence/mother-children/Base";

function App() {
	const exampleObj = {
		name : 'sabir',
		age : 23
	}
	
	return (
		<>
			<Basic />
			<Clock Hello={"hi there"} />
			<ExampleForm data={exampleObj}/>
			<br/>
			<Calculator />
			<br/><br/><br/><hr/>
			<Base />
		</>
	);
}

export default App;
