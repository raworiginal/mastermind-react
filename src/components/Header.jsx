const Header = () => {
	const legend = [
		{ pegColor: "bg-black", text: "fully correct" },
		{
			pegColor: "bg-gradient-to-r from-white from-50% to-black to-50%",
			text: "partially correct",
		},
		{ pegColor: "bg-white", text: "incorrect" },
	];
	return (
		<header className="flex flex-col border items-center h-1/4">
			<h1 className="text-3xl">MasterMind</h1>
			<p>Can You Break The Code?</p>
			{legend.map((item, idx) => (
				<section key={idx} className="flex w-1/2 items-center">
					<div
						className={`${item.pegColor} h-4 w-4 rounded-full outline m-2`}></div>
					<p className={``}>{item.text}</p>
				</section>
			))}
		</header>
	);
};
export default Header;
