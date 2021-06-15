/** @format */

import React, { ReactNode } from "react"
import { createTheme, Theme } from "./theme"
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider, CssBaseline } from "@material-ui/core"

export type ThemeProviderProps = {
  /**
   * primary mode of theme.
   */
  mode?: "light" | "dark"

  /**
   * children to be rendered within this theme.
   */
  children: ReactNode
}

export function ThemeProvider({ mode, children }: ThemeProviderProps) {
  const theme = createTheme("light")

  return (
    <>
      <CssBaseline />
      <Theme.Provider value={{ mode }}>
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
      </Theme.Provider>
    </>
  )
}
