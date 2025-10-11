import { codeColors } from "../constants/gameConstants";
const GameControls = ({ handleColorBtn }) => {
	const btnClassList = "btn btn-outline";
	return (
		<section className="flex flex-row my-2 space-y-4 items-center">
			<div className="grid w-4/5 grid-cols-3 gap-4">
				{codeColors.map((color, idx) => (
					<div
						onClick={handleColorBtn}
						id={color}
						key={idx}
						className={`btn btn-wide justify-self-stretch h-20 w-20 ${color} hover:outline`}></div>
				))}
			</div>
			<div className="flex flex-col justify-start space-y-6.5 h-full">
				<button className={btnClassList}>Submit</button>
				<button className={btnClassList}>Clear</button>
				<button className={btnClassList}>Delete</button>
			</div>
		</section>
	);
};
export default GameControls;
