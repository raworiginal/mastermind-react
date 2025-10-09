import { pegLegend } from "../constants/gameConstants";
import Peg from "./Peg";

const GameRow = () => {
	const squares = Array.from({ length: 4 });
	return (
		<div className="flex items-center h-full">
			<section className="flex flex-row justify-center gap-2 w-full">
				{squares.map((_, idx) => (
					<div key={idx} className="border h-15 aspect-square"></div>
				))}
			</section>
			<section className="flex w-1/5 justify-start">
				<section className="grid grid-cols-2">
					{squares.map((_, idx) => (
						<Peg key={idx} bgColor={"bg-white"} />
					))}
				</section>
			</section>
		</div>
	);
};
export default GameRow;
