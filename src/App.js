import logo from "./logo.svg";
import "./App.css";
import MainComponent from "./Main/MainComponent";
import LeftSection from "./leftSection";
import BottomSection from "./BottomSection";
import MiddleSection from "./MiddleSection";
const App = () => {
	return (
		<div>
			<LeftSection />
			<MainComponent />
      <BottomSection />
	  <MiddleSection />
		</div>
	);
};

export default App;