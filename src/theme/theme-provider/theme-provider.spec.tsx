/** @format */

import React from "react"
import { BasicThemeUsage } from "./theme-provider.composition"
import { render } from "@testing-library/react"

it("should render the button in the dark palette", () => {
  const { getByText } = render(<BasicThemeUsage />)
  const rendered = getByText("this should be dark")
  expect(rendered).toBeTruthy()
})
