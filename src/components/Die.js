const Die = (props) => {
	return(
		<div className={`die${props.held ? ' held' : ''}`}>
			{props.dieNum}
		</div>
	);
}

export default Die;
