import './App.css';
import Basic from "./components/basic";
import {Clock} from "./components/Clock";
import ExampleForm from "./components/ExampleForm";
import Calculator from "./components/Calculator";
import Base from "./components/composition-vs-inheritence/mother-children/Base";
import FilterableProductTable from "./components/thinking-in-react/FilterableProductTable";

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
			<br/><br/><br/><hr/>
			<FilterableProductTable />
		</>
	);
}

export default App;
