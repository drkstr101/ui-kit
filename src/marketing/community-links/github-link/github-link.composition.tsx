import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { brands } from '@waweb/uikit.theme.brands';
import { GithubLink } from './github-link';

export const GithubLinkExample = () => (
  <ThemeCompositions className={brands}>
    <GithubLink
      href="https://github.com/teambit/bit"
      starCount={500000}
      data-testid="test-link"
    />
  </ThemeCompositions>
);

GithubLinkExample.canvas = {
  height: 90,
};
