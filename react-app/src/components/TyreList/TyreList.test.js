import React from "react";
import { render } from "@testing-library/react";
import TyreList from "./TyreList";

describe("TyreList tests", () => {
  it("should render", () => {
    expect(render(<TyreList />)).toBeTruthy();
  });
});
