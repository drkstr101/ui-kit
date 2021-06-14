/** @format */

import { Theme, ThemeOptions } from "@material-ui/core/styles/createMuiTheme"

declare module "@material-ui/core/styles/createMuiTheme" {
  export interface Theme {
    layout: {
      contentWidth: number | string
    }
  }
  // allow configuration using `createMuiTheme`
  export interface ThemeOptions {
    layout?: {
      contentWidth: number | string
    }
  }
}
