import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { brands } from '@waweb/uikit.theme.brands';
import { CommunityLink } from './community-link';

export const BaseCommunityLink = () => (
  <ThemeCompositions className={brands}>
    <CommunityLink href="https://bit.dev" data-testid="test-link" external>
      bit.dev
    </CommunityLink>
  </ThemeCompositions>
);

BaseCommunityLink.canvas = {
  height: 90,
};
