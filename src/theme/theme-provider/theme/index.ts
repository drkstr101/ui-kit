/** @format */

import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"
import { light, dark } from "./palette"
import { createContext } from "react"

export type ThemeProps = {
  /**
   * primary color of theme.
   */
  mode?: "light" | "dark"
}

export const Theme = createContext<ThemeProps>({
  mode: "light",
})

export const createTheme = (mode) =>
  responsiveFontSizes(
    createMuiTheme({
      palette: mode === "light" ? light : dark,
      layout: {
        contentWidth: 1236,
      },
      typography: {
        fontFamily: "Adobe Clean",
      },
      zIndex: {
        appBar: 1200,
        drawer: 1100,
      },
    })
  )

export default createTheme
