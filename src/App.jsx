import "./App.css";
import GameControls from "./components/GameControls";
import GameGrid from "./components/GameGrid";
import Header from "./components/Header";

function App() {
	return (
		<>
			<main className="flex w-screen h-screen justify-center items-center">
				<div className="flex justify-center flex-col rounded-md w-full h-screen">
					<Header />
					<GameGrid />
					<GameControls />
				</div>
			</main>
		</>
	);
}

export default App;
