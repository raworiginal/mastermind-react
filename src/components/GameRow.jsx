const GameRow = () => {
	return (
		<div className="flex justify-center items-center">
			<section className="flex flex-row justify-center w-full bg-amber-50">
				<div className="border m-1 w-10 h-10"></div>
				<div className="border m-1 w-10 h-10"></div>
				<div className="border m-1 w-10 h-10"></div>
				<div className="border m-1 w-10 h-10"></div>
			</section>
			<section className="flex border w-1/5">
				<div>1</div>
				<div>2</div>
			</section>
		</div>
	);
};
export default GameRow;
