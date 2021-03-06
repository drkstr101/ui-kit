import React from "react"
import { ThemeCompositions } from "@teambit/documenter.theme.theme-compositions"
import { CarouselSection } from "./carouselSection"

export const CarouselSectionExample = () => (
  <ThemeCompositions style={{ display: "block", width: 1400, maxWidth: "100vw", minHeight: 410 }}>
    <CarouselSection data-testid="test-carousel" />
  </ThemeCompositions>
)
