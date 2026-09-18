import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Dashboard from "@/app/dashboard/page";
import Navbar from "@/components/Navbar";
import Projects from "@/app/projects/page";

describe("Dashboard", () => {
  it("renders the Dashboard heading", () => {
    const { getByRole } = render(<Dashboard />);

    expect(
      getByRole("heading", { name: "Dashboard" })
    ).toBeInTheDocument();
  });

  it("renders the dashboard placeholder", () => {
    const { getByRole, getByText } = render(<Dashboard />);

    expect(
      getByRole("heading", { name: "Dashboard Placeholder" })
    ).toBeInTheDocument();

    expect(
      getByText(
        "This routed screen is ready for the core dashboard implementation."
      )
    ).toBeInTheDocument();
  });
});

describe("Navbar", () => {
  it("renders the Capstone App brand", () => {
    const { getByRole } = render(<Navbar />);

    expect(
      getByRole("link", { name: "Capstone App" })
    ).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    const { getByRole } = render(<Navbar />);

    expect(getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(getByRole("link", { name: "Dashboard" })).toBeInTheDocument();
    expect(getByRole("link", { name: "Projects" })).toBeInTheDocument();
    expect(getByRole("link", { name: "Settings" })).toBeInTheDocument();
    expect(getByRole("link", { name: "Health" })).toBeInTheDocument();
  });

  it("links Dashboard to the dashboard page", () => {
    const { getByRole } = render(<Navbar />);

    expect(
      getByRole("link", { name: "Dashboard" })
    ).toHaveAttribute("href", "/dashboard");
  });
});

describe("Projects", () => {
  it("renders the Projects heading", () => {
    const { getByRole } = render(<Projects />);

    expect(
      getByRole("heading", { name: "Projects" })
    ).toBeInTheDocument();
  });

  it("renders the Projects placeholder", () => {
    const { getByRole, getByText } = render(<Projects />);

    expect(
      getByRole("heading", { name: "Projects Placeholder" })
    ).toBeInTheDocument();

    expect(
      getByText(
        "Project content will be implemented in a later phase."
      )
    ).toBeInTheDocument();
  });
});