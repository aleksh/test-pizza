import React from "react";

const IconMinus = ({
	style = {},
	fill = "#ED8A19",
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
			x1="38"
			y1="25"
			x2="12"
			y2="25"
		/>
	</svg>
);

export default IconMinus;
