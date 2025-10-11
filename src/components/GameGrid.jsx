import GameRow from "./GameRow";

const GameGrid = ({ gameBoard }) => {
	return (
		<section className="flex flex-col space-y-2 items-center">
			{gameBoard.map((_, idx) => (
				<GameRow key={idx} />
			))}
		</section>
	);
};
export default GameGrid;
