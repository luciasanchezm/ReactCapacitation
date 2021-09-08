import {Button} from "@material-ui/core";
import ReactPlayer from "react-player";
import {Link} from "react-router-dom";

import useStyles from "./style";

export const VideoPlayer = () => {
	const classes = useStyles();

	const azureUrl =
		"//amssamples.streaming.mediaservices.windows.net/3b970ae0-39d5-44bd-b3a3-3136143d6435/AzureMediaServicesPromo.ism/manifest";

	return (
		<div>
			<Link
				to={"/"}
				style={{
					textDecoration: "none",
				}}>
				<Button color='primary'>Ir a Table</Button>
			</Link>
			<h1 className={classes.container}>Video Players</h1>

			<div className={classes.container}>
				<div className={`${classes.card} ${classes.fadeInUp}`}>
					<h2
						style={{
							color: "#86c9ef",
						}}>
						Vimeo
					</h2>
					<ReactPlayer width='108%' controls url='https://www.vimeo.com/133396066' />
				</div>
				<div className={`${classes.card} ${classes.fadeInUp} ${classes.delay1}`}>
					<h2
						style={{
							color: "#c4302b",
						}}>
						Youtube
					</h2>
					<ReactPlayer
						width='100%'
						controls
						url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
					/>
				</div>
				<div className={`${classes.card} ${classes.fadeInUp} ${classes.delay2}`}>
					<h2
						style={{
							color: "#0086be",
						}}>
						Azure Storage
					</h2>
					<ReactPlayer
						controls
						width='100%'
						config={{file: {forceHLS: true}}}
						url={`${azureUrl}(format=m3u8-aapl)`}
					/>
				</div>
			</div>
		</div>
	);
};
