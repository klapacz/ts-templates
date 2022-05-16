import { rest } from "msw";
import { setupServer } from "msw/node";

const handlers = [
	rest.get("/hello-world", (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				message: "Hello World!",
			})
		);
	}),
];

export const server = setupServer(...handlers);
