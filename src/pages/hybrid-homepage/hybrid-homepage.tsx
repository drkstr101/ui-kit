import React, { PureComponent, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './hybrid-homepage.module.scss';

import { backgrounds } from '@watheia/base-ui.surfaces.background';
import { centerColumn, wideColumn } from '@watheia/base-ui.layout.page-frame';

import { CarouselSection } from '@waweb/uikit.sections.carousel-section';
import { CtaSection } from '@waweb/uikit.sections.cta';
import { EnterpriseSection } from '@waweb/uikit.sections.enterprise-section';
import { CommunitySection } from '@waweb/uikit.sections.community';
import { ComponentsAdvantages } from '@waweb/uikit.sections.component-advantages';
import { IndependentTeams } from '@waweb/uikit.sections.independent-teams';
import { TalkToExperts } from '@waweb/uikit.sections.talk-to-experts';
import { Hero } from '@waweb/uikit.sections.hero';
import { DevelopComponents } from '@waweb/uikit.sections.develop-components';
import { ReuseComponents } from '@waweb/uikit.sections.reuse-components';
import { BuildTogether } from '@waweb/uikit.sections.build-together';
import { DiscoverComponents } from '@waweb/uikit.sections.discover-components';
import { EnterpriseLogos } from '@waweb/uikit.marketing.enterprise-logos';

export type HybridHomepageProps = {
  /** placeholder for content, after the first purple background fold. */
  communityCollections?: ReactNode;
  /** placeholder for content, at the bottom of the first purple background fold */
  mainCta?: ReactNode;
  /** show github star count at the community section */
  githubStars?: number;
  /** handles 'book meeting' call to action */
  onBookMeeting?: () => any | Promise<any>;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Full, responsive page, showing the many benefits of bit, in a simple application.
 *
 * Developing this component in isolation allowed us to use new technology not available in the consuming project,
 * namely TypeScript and @testing-library/react.
 * @name HybridHomepage
 */
export class HybridHomepage extends PureComponent<HybridHomepageProps> {
  render() {
    const {
      communityCollections = null,
      mainCta,
      githubStars,
      onBookMeeting,
      className,
      ...rest
    } = this.props;

    return (
      <div {...rest} className={classNames(backgrounds.bedrock, className)}>
        <div
          className={classNames(
            styles.purpleBackground,
            styles.purpleFold,
            styles.margin180
          )}
        >
          <Hero className={classNames(styles.landingSection)} />

          {mainCta}
        </div>

        {communityCollections}

        <EnterpriseSection
          className={classNames(centerColumn, styles.margin100)}
        />

        <EnterpriseLogos className={styles.margin130} />

        <CarouselSection className={classNames(wideColumn)} />

        <div className={styles.uEllipse}></div>

        <div
          className={classNames(
            styles.greyBackground,
            styles.greyBgPadding,
            styles.foldMargin
          )}
        >
          <DevelopComponents
            className={classNames(centerColumn, styles.foldMargin)}
          />

          <ComponentsAdvantages className={classNames(centerColumn)} />
        </div>

        <ReuseComponents
          className={classNames(centerColumn, styles.foldMargin)}
        />

        <TalkToExperts
          className={classNames(centerColumn, styles.foldMargin)}
          onBookMeeting={onBookMeeting}
        />

        <div
          className={classNames(
            styles.greyBackground,
            styles.greyBgPadding,
            styles.foldMargin
          )}
        >
          <BuildTogether className={classNames(centerColumn)} />
        </div>

        <DiscoverComponents
          className={classNames(centerColumn, styles.foldMargin)}
        />

        <div
          className={classNames(
            styles.greyBackground,
            styles.greyBgPadding,
            styles.foldMargin
          )}
        >
          <IndependentTeams className={classNames(centerColumn)} />
        </div>

        <CommunitySection
          className={classNames(centerColumn, styles.foldMargin)}
          githubStars={githubStars}
        />

        <CtaSection className={classNames(centerColumn, styles.foldMargin)} />
      </div>
    );
  }
}
