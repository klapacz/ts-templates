import React from "react";

import { Button } from "@mui/material";
import { useSnackbar } from "notistack";

function App() {
	const { enqueueSnackbar } = useSnackbar();

	const handleClick = () => {
		enqueueSnackbar("Hello from notification!");
	};

	return (
		<Button variant="contained" onClick={handleClick}>
			Hello world
		</Button>
	);
}

export default App;
