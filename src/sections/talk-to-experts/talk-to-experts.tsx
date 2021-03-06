import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './talk-to-experts.module.scss';

import { PossibleSizes } from '@watheia/base-ui.theme.sizes';
import { Paragraph } from '@watheia/base-ui.text.paragraph';
import {
  justifyItems,
  alignItems,
  text,
  marginCenter,
} from '@watheia/base-ui.layout.align';

import { H2 } from '@waweb/uikit.elements.heading';
import { Link } from '@waweb/uikit.elements.link';
import { Button } from '@waweb/uikit.elements.button';

export type TalkToExpertsProps = {
  /** handles 'book meeting' call to action */
  onBookMeeting?: () => any | Promise<any>;
} & HTMLAttributes<HTMLDivElement>;

/**
 * @name TalkToExperts
 * @description
 * A static section, calling users to contact us.
 * Assumes the consuming component to supply className with width and other styles.
 */
export function TalkToExperts({
  onBookMeeting,
  className,
  ...rest
}: TalkToExpertsProps) {
  return (
    <div
      className={classNames(
        className,
        styles.talkToExperts,
        justifyItems.center,
        alignItems.center,
        text.center,
        text.sm.left
      )}
      data-bit-id="watheia.waweb/sections/talk-to-experts"
      {...rest}
    >
      <div className={marginCenter}>
        <H2 size={PossibleSizes.xs}>
          What are you waiting for? Let us show you
        </H2>
        <Paragraph size={PossibleSizes.xl}>
          We help the world's best teams build and ship modern apps better
          together. Let us show you what Bit can do for you.
        </Paragraph>
      </div>
      <div>
        <Button importance="cta" onClick={onBookMeeting}>
          Book a Demo
        </Button>
      </div>
    </div>
  );
}
