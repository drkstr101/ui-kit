/** @format */

import React, { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import Typewriter from 'typewriter-effect';

import { PossibleSizes } from '@watheia/base-ui.theme.sizes';
import { text, marginCenter } from '@watheia/base-ui.layout.align';
import { Paragraph } from '@watheia/base-ui.text.paragraph';
import { Grid } from '@watheia/base-ui.layout.grid-component';
import { textColumn } from '@watheia/base-ui.layout.page-frame';

import { H1, H2 } from '@waweb/uikit.elements.heading';
import { IconLine } from '@waweb/uikit.elements.icon-line';
import { Link } from '@waweb/uikit.elements.link';
import { Image } from '@waweb/uikit.elements.image';
import { Button } from '@waweb/uikit.elements.button';
import styles from './hero.module.scss';

const iconsArray = [
  'logo-react',
  'logo-vue',
  'logo-angular',
  'logo-web-components',
  'logo-nodejs',
  'logo-ts',
  'logo-js',
];

const typeWriterArray = [
  'increase customer focus',
  'release features faster',
  'do more with less',
  'build web apps together',
  'build micro frontends',
];

type ReuseLandingProps = {
  /**
   * Placeholder for content, at the bottom of this section
   */
  mainCta?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

/**
 * @name Hero
 * @description
 * The Main and first section the user sees as he enters the page.
 * Assumes a dark purplish background behind it.
 */

export function Hero(props: ReuseLandingProps) {
  return (
    <div
      className={styles.hero}
      data-bit-id="watheia.waweb/sections/hero"
      {...props}
    >
      <Grid
        colL={2}
        className={classNames(styles.mainGrid, text.center, text.l.left)}
      >
        <div>
          <div>
            <H1 size={PossibleSizes.sm} className={styles.headline}>
              How the best teams
              <br />
              <Typewriter
                onInit={() => {}}
                options={{
                  strings: typeWriterArray,
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 50,
                }}
              />
            </H1>
            <H2>We build micro frontends!</H2>
            <Paragraph
              size={PossibleSizes.lg}
              className={classNames(styles.paragraph, textColumn, marginCenter)}
            >
              Watheia Labs, LLC is a modern engineering and digital design
              agency offering consulting services in the Greater Northwest.
            </Paragraph>
          </div>

          <Paragraph
            size={PossibleSizes.sm}
            element="div"
            className={classNames(styles.buttons)}
          >
            <Link href="/support">
              <Button importance="cta" elevation="medium">
                Get Support
              </Button>
            </Link>
            <div className={styles.spacer} />
            <Link href="/home">
              <Button elevation="medium">Learn More</Button>
            </Link>
          </Paragraph>
          <IconLine icons={iconsArray} className={styles.icons} />
        </div>

        <Image
          src="homepage-bit/process-2.svg"
          className={marginCenter}
          alt="illustration"
          fullWidth
        />
      </Grid>
    </div>
  );
}
