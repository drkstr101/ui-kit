import React from "react"
import { ThemeCompositions } from "@teambit/documenter.theme.theme-compositions"
import { Button } from "./button"

export const CallToActionButton = ({ ...rest }) => {
  return (
    <ThemeCompositions>
      <Button importance="cta" style={{ width: 120 }} {...rest}>
        Submit
      </Button>
    </ThemeCompositions>
  )
}

export const MainButton = () => {
  return (
    <ThemeCompositions>
      <Button importance="ghost" style={{ width: 120 }}>
        Update
      </Button>
    </ThemeCompositions>
  )
}

export const LightButton = ({ ...rest }) => {
  return (
    <ThemeCompositions>
      <Button style={{ width: 120 }} {...rest}>
        learn more
      </Button>
    </ThemeCompositions>
  )
}

export const CallToActionLoading = () => {
  return (
    <ThemeCompositions>
      <Button importance="cta" loading style={{ width: 120 }}>
        Submit
      </Button>
    </ThemeCompositions>
  )
}

export const Loading = () => {
  return (
    <ThemeCompositions>
      <Button importance="ghost" loading style={{ width: 120 }}>
        Update
      </Button>
    </ThemeCompositions>
  )
}

export const LightButtonLoading = () => {
  return (
    <ThemeCompositions>
      <Button loading style={{ width: 120 }}>
        Learn more
      </Button>
    </ThemeCompositions>
  )
}

export const CallToActionButtonDisabled = ({ ...rest }) => {
  return (
    <ThemeCompositions>
      <Button importance="cta" style={{ width: 120 }} {...rest} disabled>
        Submit
      </Button>
    </ThemeCompositions>
  )
}

export const MainButtonDisabled = () => {
  return (
    <ThemeCompositions>
      <Button importance="ghost" style={{ width: 120 }} disabled>
        Update
      </Button>
    </ThemeCompositions>
  )
}

export const LightButtonDisabled = ({ ...rest }) => {
  return (
    <ThemeCompositions>
      <Button style={{ width: 120 }} {...rest} disabled>
        learn more
      </Button>
    </ThemeCompositions>
  )
}

const compositions = [CallToActionButton, MainButton, LightButton, CallToActionLoading, Loading, LightButtonLoading]
// @ts-ignore
compositions.map((comp) => (comp.canvas = { height: 90 }))
