import Peg from "./Peg";
import { pegLegend } from "../constants/gameConstants";
const Header = () => {
	return (
		<header className="flex flex-col justify-center items-center h-1/5">
			<div>
				<h1 className="text-3xl">MasterMind</h1>
				<p>Can You Break The Code?</p>
			</div>
			<div>
				{pegLegend.map((item, idx) => (
					<section key={idx} className="flex items-center">
						<Peg bgColor={item.pegColor} />
						<p>{item.text}</p>
					</section>
				))}
			</div>
		</header>
	);
};
export default Header;
