import React, {useEffect, useMemo, useState} from "react";
import {useTheme} from "@material-ui/core";
import {DataGrid, GridColDef, GridColumnHeaderParams} from "@material-ui/data-grid";
import {Chip, Grid, TextField, Typography, IconButton} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";
import RemoveCircle from "@material-ui/icons/RemoveCircle";

import _ from "lodash";
import useStyles from "./style";

interface Props {
	fetching: boolean;
	data: any[];
	cols: GridColDef[];
}

interface TableFilters {
	[key: string]: Array<any>;
}

const MaterialFilterTableView: React.FC<Props> = ({data, cols, fetching}) => {
	const theme = useTheme();
	const classes = useStyles();
	const [filteredData, setFilteredData] = useState<any[]>([]);
	const [filters, setFilters] = useState<TableFilters>({});
	const [pageSize, setPageSize] = useState<number>(30);

	var columns: Array<GridColDef> = useMemo(() => {
		let arr: Array<GridColDef> = [];
		for (let col of cols) {
			const numberOfChipsByColumn = filters[col.field] ? filters[col.field].length : 0;
			col.sortable = true;
			col.hideSortIcons = true;
			col.renderHeader = (params: GridColumnHeaderParams) => (
				<Grid container className={classes.mainHeader}>
					<Grid item xs={12}>
						<Typography className={classes.tableHeader}>
							{col.headerName}
							{numberOfChipsByColumn > 0 && ` (${numberOfChipsByColumn})`}
						</Typography>
					</Grid>
					{col.field !== "" && (
						<Grid item xs={12}>
							<Autocomplete
								// Dependiendo si hay o no hay filtros aplicados
								// se muestran los Chips en el header
								value={filters[col.field] ?? []}
								fullWidth
								multiple
								size='small'
								autoComplete={false}
								autoHighlight={false}
								disableListWrap
								disableClearable
								disableCloseOnSelect
								renderTags={(value: any[], getTagProps: any) => undefined}
								className={classes.autocomplete}
								options={_.uniqBy(
									data.map((d) => d[col.field]),
									(dat) => dat
								)}
								getOptionLabel={(option) => option.toString()}
								style={{width: "100%"}}
								renderInput={(params) => (
									<TextField
										{...params}
										placeholder={`Select ${col.headerName}...`}
										variant='outlined'
									/>
								)}
								onChange={(e, val) => {
									let newfilters = {...filters};
									if (val && val.length > 0) {
										if (!newfilters[col.field]) {
											newfilters[col.field] = [];
											newfilters[col.field].push(...val);
										} else {
											newfilters[col.field] = val;
										}
									} else {
										delete newfilters[col.field];
									}
									setFilters(newfilters);
								}}
							/>
						</Grid>
					)}
				</Grid>
			);
			//Agregar al array de GridColDefs
			arr.push(col);
		}
		return arr;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [theme.palette.type, data, filters]);

	useEffect(
		() => {
			filterTable();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[filters, data]
	);

	const filterTable = () => {
		var newData = data;
		for (let f of Object.keys(filters)) {
			newData = newData.filter((x) => filters[f].includes(x[f]));
		}
		setFilteredData(newData);
	};

	// Botón para limpiar todos los filtros aplicados en una columna
	const buttonRemoveAllFiltersByColumn = (f: string) => {
		// Extraigo el nombre de la columna
		const columnName = f.includes(">") ? f.split(">")[1] : f;
		return (
			<IconButton
				title={`Remove all ${columnName} filters`}
				color='primary'
				onClick={() => {
					// Creo una copia del objeto filters
					let newfilters = {...filters};
					// Borro todos los filtros de la columna en cuestión
					delete newfilters[f];
					// Actualizo el objeto filters con la nueva copia
					setFilters(newfilters);
				}}>
				<RemoveCircle />
			</IconButton>
		);
	};

	// Botón para eliminar un Chip
	const deleteChip = (f: string, index: number) => {
		let newFilters = {...filters};
		// En el caso de que nomás quede un elemento, se elimina la columna completa
		if (newFilters[f].length === 1) {
			delete newFilters[f];
			return setFilters(newFilters);
		}
		// Se elimina el elemento seleccionado mediante el índice
		newFilters[f].splice(index, 1);

		// Se actualiza el objeto filters
		setFilters(newFilters);
	};

	const StringifyFilters = () => {
		let keys = Object.keys(filters);
		if (keys.length > 0) {
			var items = keys.map((f) => {
				let chips = filters[f].map((item, index) => {
					return (
						<Chip
							key={item}
							variant='outlined'
							className={classes.filterChip}
							onDelete={() => deleteChip(f, index)}
							color='primary'
							onClick={() => deleteChip(f, index)}
							title={"Remove filter"}
							label={item}
						/>
					);
				});

				// Refactoricé un poco el condicional de abajo haciendo uso
				// del Nullish Coalescing Operator (??)
				return (
					<Grid key={f}>
						{buttonRemoveAllFiltersByColumn(f)} {f.split(">")[1] ?? f} in {chips}
					</Grid>
				);

				/* if (f.includes(">")) {
					return (
						<p>
							{buttonRemoveFiltersByColumn} {f.split(">")[1]} in {chips}
						</p>
					);
				} else {
					return (
						<p>
							{buttonRemoveFiltersByColumn} {f} in {chips}
						</p>
					);
				} */
			});
			return [<h4 key='key'>Applied filters:</h4>, ...items];
		}
		return [];
	};

	const stringifyFilters = StringifyFilters();

	return (
		<Grid container>
			<Grid item xs={12}>
				{stringifyFilters.length !== 0 ? (
					<Grid className={"fade-down"} item xs={12} md={6} lg={6}>
						{stringifyFilters}
					</Grid>
				) : null}

				<DataGrid
					density='compact'
					className={classes.root}
					loading={fetching}
					rows={filteredData}
					columns={columns}
					pageSize={pageSize}
					onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
					rowsPerPageOptions={[10, 20, 30, 50, 100]}
					disableColumnMenu
					headerHeight={100}
					checkboxSelection={false}
				/>
			</Grid>
		</Grid>
	);
};

export default MaterialFilterTableView;
