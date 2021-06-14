import React from "react"
import { ThemeProvider } from "@watheia/base-ui.theme.theme-provider"
import { NotFound } from "./not-found-page"

export const NotFoundExample = () => {
  return (
    <ThemeProvider>
      <NotFound />
    </ThemeProvider>
  )
}
