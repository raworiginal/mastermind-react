import "./App.css";
import GameControls from "./components/GameControls";
import GameGrid from "./components/GameGrid";
import Header from "./components/Header";

function App() {
	return (
		<>
			<main className="flex w-screen h-screen p-4 justify-center items-center">
				<div className="flex justify-between flex-col rounded-md border w-lg h-3/4">
					<Header />
					<GameGrid />
					<GameControls />
				</div>
			</main>
		</>
	);
}

export default App;
