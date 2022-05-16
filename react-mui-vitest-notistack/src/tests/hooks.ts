import type { RenderHookOptions } from "@testing-library/react-hooks/lib/types";
import { renderHook } from "@testing-library/react-hooks/native/pure";
import { createBrowserHistory } from "history";

import { createProviders, mock } from "./common";

type CustomRenderHookProps<TProps> = Omit<RenderHookOptions<TProps>, "wrapper"> & {
	path?: string;
	push?: string;
};

const renderHookWithProviders = <TProps, TResult>(
	callback: (props: TProps) => TResult,
	{ path, push, ...options }: CustomRenderHookProps<TProps> = {}
) => {
	const history = createBrowserHistory();
	if (path) {
		history.push(push || path);
	}
	return {
		...renderHook<TProps, TResult>(callback, {
			wrapper: createProviders({ path, history }),
			...options,
		}),
		history,
	};
};

// eslint-disable-next-line import/export
export * from "@testing-library/react-hooks/native/pure";
// eslint-disable-next-line import/export
export { renderHookWithProviders as renderHook, mock };
