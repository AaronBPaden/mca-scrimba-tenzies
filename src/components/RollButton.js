const RollButton = (props) => {
	const gameFinished = () => {
		const testNum = props.dice[0].num;
		return(
			props.dice.filter(die => die.held
				&& (die.num === testNum))
					.length === 10
		);
	};
	return (
		<button onClick={() => gameFinished() ? props.resetDice() : props.rollDice()}>{gameFinished() ? 'Reset Game' : 'Roll'}</button>
	);
};
export default RollButton;
