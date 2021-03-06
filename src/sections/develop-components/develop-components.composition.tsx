import React from "react"
import { ThemeCompositions } from "@teambit/documenter.theme.theme-compositions"
import { DevelopComponents } from "./develop-components"

export const DevelopComponentsExample = () => (
  <ThemeCompositions>
    <DevelopComponents data-testid="test-develop" />
  </ThemeCompositions>
)

DevelopComponentsExample.canvas = {
  width: 1400,
  height: 400,
  overflow: "scroll",
}
