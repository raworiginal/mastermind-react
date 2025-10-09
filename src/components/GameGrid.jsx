import GameRow from "./GameRow";

const GameGrid = () => {
	const rows = Array.from({ length: 5 });
	return (
		<section className="border flex flex-col">
			{rows.map((_, idx) => (
				<GameRow key={idx} />
			))}
		</section>
	);
};
export default GameGrid;
