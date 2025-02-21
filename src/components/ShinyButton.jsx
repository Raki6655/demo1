import React from "react";

function ShinyButton({ name, onClick }) {
	return (
		<div className="button button-rounded" onClick={onClick}>
			{name}
		</div>
	);
}

export default ShinyButton;
