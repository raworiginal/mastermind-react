import "./App.css";
import GameControls from "./components/GameControls";
import GameGrid from "./components/GameGrid";
import Header from "./components/Header";
import { useState } from "react";
function createBoard() {
	return Array.from({ length: 5 }, () => []);
}
function App() {
	const [currentRow, setCurrentRow] = useState(0);
	const [isWinner, setIsWinner] = useState(false);
	const [gameBoard, setGameBoard] = useState(createBoard);

	const handleColorBtn = (e) => {
		console.log(e.target.id);
		gameBoard[currentRow].push(e.target.id);
		setGameBoard(...gameBoard);
	};

	return (
		<>
			<main className="flex justify-center">
				<div className="flex justify-start flex-col rounded-md h-dvh">
					<Header />
					<GameGrid gameBoard={gameBoard} currentRow={currentRow} />
					<GameControls handleColorBtn={handleColorBtn} />
				</div>
			</main>
		</>
	);
}

export default App;
