/** @format */

import React from "react"

import { BaseImage, BaseImageProps } from "@watheia/base-ui.atoms.image-base"
import { staticStorageUrl } from "@watheia/base-ui.constants.storage"

export type ImageProps = BaseImageProps

/**
 * Concrete image, using our Static Storage CDN.
 *
 * Treats src as relative paths on top of our image storage, and supports all other properties an html `<img>` would.
 * @name Image
 * @example
 * <Image src="homepage-bit/map.png" alt="illustration" fullWidth />
 */
export function Image({ src, ...rest }: ImageProps) {
  return (
    <BaseImage
      data-bit-id="watheia.waweb/elements/image"
      {...rest}
      src={src.startsWith("http") ? src : `${staticStorageUrl}/${src}`}
    />
  )
}
