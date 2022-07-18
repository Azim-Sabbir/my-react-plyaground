import React from "react";
import Mother from "./Mother";
import ChildrenComponent from "./ChildrenComponent";
import AnotherChildren from "./AnotherChildren";

const Base = () => {
	return (
		<Mother color="blue" firstChildren={<ChildrenComponent number={10} />}>
			<ChildrenComponent number={1} />
			<AnotherChildren number={2} />
		</Mother>
	);
}
export default Base;