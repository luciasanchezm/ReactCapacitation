import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(
	(theme) => ({
		card: {
			padding: "0 0",
			margin: "0 10px",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			overflow: "hidden",
			borderRadius: 20,
			boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
			width: "33%",
		},
		container: {
			padding: "10px 40px",
			display: "flex",
		},
		fadeInUp: {
			opacity: 0,
			animation: "$fadeInUp 500ms ease-out forwards",
		},
		delay1: {
			animationDelay: "200ms",
		},
		delay2: {
			animationDelay: "400ms",
		},
		"@keyframes fadeInUp": {
			"0%": {
				opacity: 0,
				transform: "translateY(100px)",
			},
			"100%": {
				opacity: 1,
				transform: "translateY(0)",
			},
		},
		root: {
			overflow: "auto",
			height: "500px",
			border: 0,
			color: theme.palette.type === "light" ? "rgba(0,0,0,.85)" : "rgba(255,255,255,0.85)",
			fontFamily: [
				"-apple-system",
				"BlinkMacSystemFont",
				'"Segoe UI"',
				"Roboto",
				'"Helvetica Neue"',
				"Arial",
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(","),
			WebkitFontSmoothing: "auto",
			letterSpacing: "normal",
		},
	}),
	{index: 1}
);

export default useStyles;
