const Die = (props) => {
	return(
		<div onClick={props.handleClick} className={`die${props.held ? ' held' : ''}`}>
			{props.dieNum}
		</div>
	);
}

export default Die;
