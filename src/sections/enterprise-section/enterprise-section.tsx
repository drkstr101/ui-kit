import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { PossibleSizes } from '@watheia/base-ui.theme.sizes';
import { Paragraph } from '@watheia/base-ui.text.paragraph';

import { text, alignItems } from '@watheia/base-ui.layout.align';
import { Grid } from '@watheia/base-ui.layout.grid-component';
import { colSpanMd } from '@watheia/base-ui.layout.col-span';

import { Image } from '@waweb/uikit.elements.image';
import { H2 } from '@waweb/uikit.elements.heading';
import { Icon } from '@waweb/uikit.elements.icon';
import { Link } from '@waweb/uikit.elements.link';
import { Button } from '@waweb/uikit.elements.button';

import styles from './enterprise-section.module.scss';

/**
 * @name EnterpriseSection
 * @description
 * A section of static content, presenting Bit's cloud platform.
 * Assumes the consuming component to supply className with width and other styles.
 */

export function EnterpriseSection(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={classNames(text.center, props.className)}
      data-bit-id="watheia.waweb/sections/enterprise-section"
    >
      <Grid
        col={1}
        colMd={12}
        className={classNames(text.left, alignItems.center, styles.content)}
      >
        <div className={colSpanMd[7]}>
          <H2 size={PossibleSizes.sm}>
            Join the world's best teams on the enterprise component cloud
          </H2>
          <Paragraph size={PossibleSizes.lg} className={styles.paragraph}>
            Empower teams in your organization with a component hub where all
            teams can easily share, discover, and integrate each other's
            features to increase delivery and drive rapid innovation.
          </Paragraph>
          <Link href="/contact-sales">
            <Button
              className={styles.contactButton}
              importance="cta"
              elevation="medium"
            >
              Contact sales
              <Icon of="right_arrow" className={styles.linkArrow} />
            </Button>
          </Link>
        </div>
        <div className={colSpanMd[5]}>
          <Image
            fullWidth
            alt="cloud components"
            src="homepage-bit/reuse-page/cloud-components.png"
          />
        </div>
      </Grid>
    </div>
  );
}
