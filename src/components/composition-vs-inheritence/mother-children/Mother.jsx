import React from "react";

const Mother = ({children}) => {
	return (
		<>
			<div className={'FancyBorder FancyBorder-'}>
				{/* eslint-disable-next-line array-callback-return */}
				{children.map((child) => {
					return child;
				})}
			</div>
		</>
	);
}
export default Mother;