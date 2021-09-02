import "./App.css";
import useStyles from "./style";
import React from "react";
import Table from "./components/Table";
import {Button, Chip} from "@material-ui/core";
import {GridCellParams, GridColDef} from "@material-ui/data-grid";
import {RunProcess} from "./interfaces/index";
import {DeleteOutlined} from "@material-ui/icons";
import {getData} from "./services";
import {createTheme, ThemeProvider} from "@material-ui/core/styles";
import {pink} from "@material-ui/core/colors";

function App() {
	const [data, setData] = React.useState<RunProcess[]>([]);
	const [fetching, setFetching] = React.useState<boolean>(true);
	const classes = useStyles();

	const columns: GridColDef[] = React.useMemo(() => {
		return [
			{
				field: "ID",
				headerName: "ID",
				width: 200,
			},
			{
				field: "<ActiveComputer>Computer",
				headerName: "Active Computer",
				width: 200,
			},
			{
				field: "<ParseUser>User",
				headerName: "User",
				width: 250,
			},
			{
				field: "<Process>Process",
				headerName: "Process",
				width: 200,
			},
			{
				field: "Action",
				headerName: "Action",
				width: 200,
			},
			{
				field: "State",
				headerName: "State",
				width: 200,
				renderCell: (params: GridCellParams) => (
					<Chip
						style={{height: 24}}
						className={
							params.value === "Queued"
								? classes.queuedChip
								: params.value === "Finished"
								? classes.finishedChip
								: params.value === "Init"
								? classes.initChip
								: params.value === "Error"
								? classes.errorChip
								: classes.runningChip
						}
						label={params.value}
					/>
				),
			},
			{
				field: "Status",
				headerName: "Status",
				width: 200,
			},
			{
				field: "StartDate",
				headerName: "Date",
				width: 200,
			},
			{
				field: "",
				headerName: "Actions",
				width: 150,
				renderCell: (params: GridCellParams) => (
					<Button
						variant='outlined'
						color='secondary'
						size='small'
						className={classes.deleteBtn}
						endIcon={<DeleteOutlined />}>
						Delete
					</Button>
				),
			},
		];
		//eslint-disable-next-line
	}, [data]);

	React.useEffect(() => {
		const run = async () => {
			const data = await getData();
			setData(data);
			setFetching(false);
		};
		run();
	}, []);
	const theme = createTheme({
		palette: {
			primary: {
				light: pink[100],
				main: pink[400],
				dark: pink[700],
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Table fetching={fetching} data={data} cols={columns} />
		</ThemeProvider>
	);
}

export default App;
