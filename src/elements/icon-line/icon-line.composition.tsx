import React from "react"
import { ThemeCompositions } from "@teambit/documenter.theme.theme-compositions"
import { IconLine } from "./icon-line"

export const IconLineExample = () => (
  <ThemeCompositions>
    <IconLine
      icons={["logo-react", "logo-vue", "logo-angular", "logo-web-components", "logo-ts", "logo-js"]}
      data-testid="test-iconline"
    />
  </ThemeCompositions>
)

IconLineExample.canvas = {
  height: 90,
}
