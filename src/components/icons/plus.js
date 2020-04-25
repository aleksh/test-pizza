import React from "react";

const IconPlus = ({
	style = {},
	fill = "#43B05C",
	width = "64px",
	className = "",
	height = "64px",
	viewBox = "0 0 50 50",
}) => (
	<svg
		width={width}
		style={style}
		fill={fill}
		height={height}
		viewBox={viewBox}
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
	>
		<circle cx="25" cy="25" r="25" />
		<line
			fill="none"
			stroke="#FFFFFF"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeMiterlimit="10"
			x1="25"
			y1="13"
			x2="25"
			y2="38"
		/>
		<line
			fill="none"
			stroke="#FFFFFF"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeMiterlimit="10"
			x1="37.5"
			y1="25"
			x2="12.5"
			y2="25"
		/>
	</svg>
);

export default IconPlus;
