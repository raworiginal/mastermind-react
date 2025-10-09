import "./App.css";
import GameControls from "./components/GameControls";
import GameGrid from "./components/GameGrid";
import Header from "./components/Header";

function App() {
	return (
		<>
			<main className="flex justify-center">
				<div className="flex justify-start flex-col rounded-md h-dvh">
					<Header />
					<GameGrid />
					<GameControls />
				</div>
			</main>
		</>
	);
}

export default App;
