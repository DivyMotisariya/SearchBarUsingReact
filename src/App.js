// import logo from './logo.svg';
// import './App.css';

import { DATA } from "./data/data";
import FilterableProductTable from "./components/FilterableProductTable.component";

function App() {
	return <FilterableProductTable products={DATA} />;
}

export default App;
