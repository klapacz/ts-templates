import "@testing-library/jest-dom";
import { server } from "@tests/msw";

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

afterEach(() => {
	server.resetHandlers();
	vi.resetAllMocks();
});
afterAll(() => server.close());
