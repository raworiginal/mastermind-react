import Peg from "./Peg";
import { pegLegend } from "../constants/gameConstants";
const Header = () => {
	return (
		<header className="flex flex-col border justify-center items-center h-1/4">
			<h1 className="text-3xl">MasterMind</h1>
			<p>Can You Break The Code?</p>
			{pegLegend.map((item, idx) => (
				<section key={idx} className="flex w-1/2 items-center">
					<Peg bgColor={item.pegColor} />
					<p>{item.text}</p>
				</section>
			))}
		</header>
	);
};
export default Header;
