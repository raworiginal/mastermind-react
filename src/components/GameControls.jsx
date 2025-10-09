const GameControls = () => {
	const btnColors = ["yellow", "orange", "red", "purple", "blue", "green"];
	const btnClassList = "btn btn-outline";
	return (
		<section className="flex flex-col justify-around items-center h-1/5">
			<div className="grid grid-cols-3 gap-4">
				{btnColors.map((color, idx) => (
					<button
						key={idx}
						className={`btn btn-square btn-xl bg-${color}-500 hover:outline`}></button>
				))}
			</div>
			<div className="flex gap-2">
				<button className={btnClassList}>Delete</button>
				<button className={btnClassList}>Clear</button>
				<button className={btnClassList}>Submit</button>
			</div>
		</section>
	);
};
export default GameControls;
