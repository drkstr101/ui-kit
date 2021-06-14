/* eslint-disable no-undef */
import React from "react"
import testRenderer from "react-test-renderer"
import { NotFoundExample } from "./not-found-page.composition"

describe("Not found page component", () => {
  it("should render correctly", () => {
    testRenderer.create(<NotFoundExample />)
  })
})
