import React from "react";

import { SnackbarProvider } from "notistack";
import { createRoot } from "react-dom/client";

import App from "./App";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<SnackbarProvider>
			<App />
		</SnackbarProvider>
	</React.StrictMode>
);
