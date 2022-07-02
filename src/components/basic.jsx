import React from "react";

const Basic = () => {
	const customElement = React.createElement(
		'h1',
		{className: 'greeting'},
		'Hello, world!'
	);
	
	const time = new Date().toLocaleTimeString();
	
	const oldClock = (
		<h3>It is {time}</h3>
	);
	
	function CustomComponent(props) {
		return <div>{props.text}</div>
	}
	
	return (
		<>
			<div>
				<label htmlFor="ex-input">This is label for input</label>
				<input type="text" id="ex-input" placeholder={"write something"}/>
				<h4>hello h4</h4>
			</div>
			<div className={"clock"}>
				{oldClock}
			</div>
			{customElement}
			<CustomComponent text={'this is text passed to the props'}/>
		</>
	);
}

export default Basic;