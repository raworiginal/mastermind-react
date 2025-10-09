const GameRow = () => {
	const squares = Array.from({ length: 4 });
	return (
		<div className="flex justify-center items-center h-full bg-amber-300">
			<section className="flex flex-row justify-center gap-2 w-full">
				{squares.map((_, idx) => (
					<div key={idx} className="border h-15 aspect-square"></div>
				))}
			</section>
			<section className="flex border w-1/5">
				<div>1</div>
				<div>2</div>
			</section>
		</div>
	);
};
export default GameRow;
