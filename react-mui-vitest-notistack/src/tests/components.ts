/* eslint-disable import/export */
import type { ReactElement } from "react";

import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";
import { createBrowserHistory } from "history";

import { createProviders, mock } from "./common";

type CustomRenderProps = Omit<RenderOptions, "wrapper"> & {
	path?: string;
	push?: string;
};

/**
 * {@link https://testing-library.com/docs/example-react-router/ Resources}
 */
const renderWithProviders = (
	ui: ReactElement,
	{ path, push, ...options }: CustomRenderProps = {}
) => {
	const history = createBrowserHistory();
	if (path) {
		history.push(push || path);
	}
	return {
		...render(ui, { wrapper: createProviders({ history, path }), ...options }),
		history,
	};
};

const setupDesktop = () => {
	beforeAll(() => {
		Object.defineProperty(window, "matchMedia", {
			writable: true,
			value: (query: unknown) => ({
				media: query,
				matches: query === "(pointer: fine)",
				onchange: () => null,
				addEventListener: () => null,
				removeEventListener: () => null,
				addListener: () => null,
				removeListener: () => null,
				dispatchEvent: () => false,
			}),
		});
	});

	afterAll(() => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		delete (window as any).matchMedia;
	});
};

export * from "@testing-library/react";
export { renderWithProviders as render, mock, setupDesktop };
