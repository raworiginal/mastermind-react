const GameControls = () => {
	const btnColors = ["yellow", "orange", "red", "purple", "blue", "green"];
	const btnClassList = "btn btn-outline";
	return (
		<section className="flex flex-col my-2 space-y-4 items-center">
			<div className="grid w-4/5 grid-cols-3 gap-4">
				{btnColors.map((color, idx) => (
					<div
						key={idx}
						className={`btn btn-wide justify-self-stretch h-20 w-20 bg-${color}-500 hover:outline`}></div>
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
