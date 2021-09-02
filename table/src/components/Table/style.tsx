import {makeStyles} from "@material-ui/core";
import {blue, green, grey, orange, red} from "@material-ui/core/colors";
import {pink} from "@material-ui/core/colors";

const useStyles = makeStyles(
	(theme) => ({
		queuedChip: {
			color: "white",
			width: "100px",
			backgroundColor: theme.palette.type === "dark" ? orange[200] : orange[700],
		},
		finishedChip: {
			color: "white",
			width: "100px",
			backgroundColor: grey[400],
		},
		initChip: {
			color: "white",
			width: "100px",
			backgroundColor: green.A400,
		},
		runningChip: {
			color: "white",
			width: "100px",
			backgroundColor: theme.palette.type === "dark" ? blue[300] : blue[600],
		},
		errorChip: {
			color: "white",
			width: "100px",
			backgroundColor: theme.palette.type === "dark" ? red[300] : red[600],
		},
		deleteBtn: {
			textTransform: "inherit",
		},
		gridRight: {
			display: "flex",
			justifyContent: "flex-end",
		},
		loadingBadge: {
			color: "white",
		},
		replayCont: {
			marginBottom: theme.spacing(1),
		},
		replayBtn: {
			color: theme.palette.type === "dark" ? blue[200] : blue[700],
		},
		customBadge: {
			display: "flex",
			justifyContent: "center",
			paddingTop: "4px",
			borderRadius: "4px",
			marginBottom: theme.spacing(1),
			height: "30px",
			width: "30px",
			backgroundColor: theme.palette.type === "dark" ? red[300] : red[600],
			color: "white",
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
			"& .wrapHeader .MuiDataGrid-colCellTitle": {
				overflow: "hidden",
				lineHeight: "20px",
				whiteSpace: "normal",
			},
			"& .MuiDataGrid-columnsContainer": {
				backgroundColor:
					theme.palette.type === "light" ? theme.palette.grey[100] : "#1d1d1d",
			},
			"& .MuiDataGrid-iconSeparator": {
				display: "none",
			},
			"& .MuiDataGrid-colCell, .MuiDataGrid-cell": {
				borderRight: `1px solid ${theme.palette.type === "light" ? "#f0f0f0" : "#303030"}`,
			},
			"& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
				borderBottom: `1px solid ${theme.palette.type === "light" ? "#f0f0f0" : "#303030"}`,
			},
			"& .MuiDataGrid-cell": {
				color:
					theme.palette.type === "light" ? "rgba(0,0,0,.85)" : "rgba(255,255,255,0.65)",
			},
			"& .MuiPaginationItem-root": {
				borderRadius: 0,
			},
		},
		tableHeader: {
			fontSize: theme.typography.pxToRem(13),
			fontWeight: "bold",
			color: theme.palette.type === "dark" ? grey[200] : grey[700],
		},
		mainHeader: {
			paddingTop: theme.spacing(5),
		},
		autoCont: {
			width: "10%",
			height: "100px",
			overflowY: "scroll",
		},
		autocomplete: {},
		filterChip: {
			marginRight: 4,
			boxShadow: "0 2px 2px rgba(0, 0, 0, 0.2)",
			transition: "all 0.2s",
			animation: "bounce 0.3s",
			backgroundColor: pink[300],
			"&:hover": {
				boxShadow: "0 3px 6px rgba(0, 0, 0, 0.3)",
				transform: "translateY(-2px)",
			},
		},
	}),
	{index: 1}
);

export default useStyles;
