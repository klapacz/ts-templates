import React from "react";

import type { History } from "history";
import { SnackbarProvider } from "notistack";
import { Route, Router, Routes } from "react-router-dom";
import type { SpyInstanceFn } from "vitest";

type ProviderProps = {
	children?: React.ReactNode;
};

type ProvidersOptions = {
	history: History;
	path?: string;
};

export const createProviders = ({ history, path }: ProvidersOptions) => {
	const Providers = ({ children }: ProviderProps) => {
		return (
			<SnackbarProvider>
				<Router location={history.location} navigator={history}>
					{path ? (
						<Routes>
							<Route path={path} element={children} />
						</Routes>
					) : (
						children
					)}
				</Router>
			</SnackbarProvider>
		);
	};

	return Providers;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mock = <T extends (...args: any[]) => any>(
	func: T,
	values: Partial<ReturnType<T>>
) => {
	(func as unknown as SpyInstanceFn).mockReturnValue(values);
};
