import React from "react"
import { Icon } from "@watheia/base-ui.atoms.icon"
import { ErrorPage } from "@watheia/base-ui.design.error-page"
import { ExternalLink } from "@watheia/base-ui.design.external-link"
import styles from "./not-found-page.module.scss"
import { Image } from "@watheia/base-ui.atoms.image"

export type NotFoundProps = Record<string, unknown> & React.HTMLAttributes<HTMLDivElement>

export function NotFound({ ...rest }: NotFoundProps) {
  return (
    <ErrorPage {...rest} code={404} title="Page not found">
      <div className={styles.iconLine}>
        <ExternalLink href="https://gitlab.com/watheia/micro">
          <Icon of="github-logo" className={styles.github} />
        </ExternalLink>
        <ExternalLink href="https://watheia.io/support">
          <Image alt="wa-logo" className={styles.logo} src="/favicon-32x32.png" />
        </ExternalLink>
      </div>
    </ErrorPage>
  )
}
