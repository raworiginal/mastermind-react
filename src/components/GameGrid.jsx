import GameRow from "./GameRow";

const GameGrid = () => {
	const rows = Array.from({ length: 5 });
	return (
		<section className="flex flex-col space-y-2 items-center">
			{rows.map((_, idx) => (
				<GameRow key={idx} />
			))}
		</section>
	);
};
export default GameGrid;
