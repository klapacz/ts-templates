import React from "react";

import App from "@/App";
import { render, screen, fireEvent } from "@/tests/components";

describe("App", () => {
	it("renders without crashing", () => {
		render(<App />);

		expect(screen.getByText(/hello world/i)).toBeInTheDocument();
	});

	it("shows notification when button clicked", () => {
		render(<App />);

		const button = screen.getByRole("button", { name: /hello world/i });
		fireEvent.click(button);

		const alert = screen.getByRole("alert");
		expect(alert).toHaveTextContent("Hello from notification!");
	});
});
