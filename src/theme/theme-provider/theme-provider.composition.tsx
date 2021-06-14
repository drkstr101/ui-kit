/** @format */

import React, { useContext } from "react"
import { ThemeProvider } from "./theme-provider"
import { Theme } from "./theme"

export function MockComponent() {
  const theme = useContext(Theme)

  return (
    <div style={{ color: theme.mode === "light" ? "#eeeeee" : "#111111" }}>
      this should be {theme.mode}
    </div>
  )
}

export const BasicThemeUsage = () => {
  return (
    <ThemeProvider mode="dark">
      <MockComponent />
    </ThemeProvider>
  )
}
