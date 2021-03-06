import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { PossibleSizes } from '@watheia/base-ui.theme.sizes';

import styles from './independent-teams.module.scss';

import { Paragraph } from '@watheia/base-ui.text.paragraph';
import { Grid } from '@watheia/base-ui.layout.grid-component';
import { text, marginCenter } from '@watheia/base-ui.layout.align';
import { textColumn } from '@watheia/base-ui.layout.page-frame';

import { H2, H5 } from '@waweb/uikit.elements.heading';
import { Image } from '@waweb/uikit.elements.image';

/**
 * @name IndependentTeams
 * @description
 * A section of static content, showing how different teams can collaborate together while still keeping a separation of concerns.
 * Assumes the consuming component to supply className with width and other styles.
 */

export function IndependentTeams(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={classNames(props.className)}
      data-bit-id="watheia.waweb/sections/independent-teams"
    >
      <div className={classNames(textColumn, marginCenter)}>
        <H2 size={PossibleSizes.sm} className={text.center}>
          Autonomous teams working side by side.
          <br />
          Build everything like microservices.
        </H2>
        <Paragraph className={classNames(text.center, styles.subtitle)}>
          Enable teams to develop features independently in decoupled codebases,
          exposing expandable APIs and continuously integrating with each other.
          Miro Frontends? Try Micro Everything.
        </Paragraph>
      </div>

      <Image
        alt="teams breakdown"
        src="homepage-bit/assets/multi-scope.png"
        fullWidth
        className={styles.mainImage}
      />

      <Grid colL={3} className={classNames(text.left, styles.benefitsGrid)}>
        <div className={styles.benefit}>
          <H5 size={PossibleSizes.xxs}>Decoupled codebases</H5>
          <Paragraph>
            Develop components and build features in simple, decoupled
            codebases.
          </Paragraph>
        </div>

        <div className={styles.benefit}>
          <H5 size={PossibleSizes.xxs}>Autonomous teams</H5>
          <Paragraph>
            Empower product teams to build and ship component APIs to everyone.
          </Paragraph>
        </div>

        <div className={styles.benefit}>
          <H5 size={PossibleSizes.xxs}>Build-time integrations</H5>
          <Paragraph>
            Continuously integrate and compose applications without complexity.
          </Paragraph>
        </div>
      </Grid>
    </div>
  );
}
