const Header = () => {
	return (
		<header className="flex flex-col items-center h-1/4">
			<h1 className="text-3xl">MasterMind</h1>
			<p>Can You Break The Code?</p>
			<section className="border w-3/4">
				<div className="flex border flex-row item">
					<div className="w-4 h-4 bg-blue-400 rounded-full"></div>
					<p>Fully Correct</p>
				</div>
			</section>
		</header>
	);
};
export default Header;
