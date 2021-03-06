import React from "react"
import { ThemeCompositions } from "@teambit/documenter.theme.theme-compositions"
import { EnterpriseSection } from "./enterprise-section"

export const EnterpriseSectionExample = () => (
  <ThemeCompositions>
    <EnterpriseSection data-testid="test-enterprise" />
  </ThemeCompositions>
)

EnterpriseSectionExample.canvas = {
  width: 1400,
  height: 400,
  overflow: "scroll",
}
