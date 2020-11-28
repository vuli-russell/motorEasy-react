import React from "react";
import { render } from "@testing-library/react";
import TyreCard from "./TyreCard";

describe("TyreCard tests", () => {
  it("should render", () => {
    expect(render(<TyreCard />)).toBeTruthy();
  });
});
