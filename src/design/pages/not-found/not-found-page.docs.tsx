import React from "react"
import { Section } from "@watheia/base-ui.mdx.ui.section"
import { ThemeProvider } from "@watheia/base-ui.theme.theme-provider"
import { Separator } from "@watheia/base-ui.mdx.ui.separator"
import { NotFound } from "./not-found-page"

export default function Overview() {
  return (
    <ThemeProvider>
      <>
        <Section>A page component that displays a 404 error message.</Section>
        <Separator />
      </>
    </ThemeProvider>
  )
}

Overview.abstract = "A 404 error page."

Overview.labels = ["react", "typescript", "404", "error", "page"]

Overview.examples = [
  {
    scope: {
      NotFound,
    },
    title: "404 page",
    description: "404 error message",
    jsx: <NotFound />,
  },
]
