/* eslint-disable react/no-unused-prop-types */
import { graphql, useStaticQuery } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import React from 'react';

import { css } from '@emotion/react';

import config from '../../website-config';

type SiteNavLogoProps = {
    logo?: any;
};

function SubscribeLogo() {
    const data: SiteNavLogoProps = useStaticQuery(graphql`
    query SubscribeOverlayLogo {
      logo: file(relativePath: { eq: "img/ghost-logo.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, width: 500, layout: FIXED)
        }
      }
    }
  `);

    const { logo } = data;

    if (!logo) {
        return null;
    }

    return (
        <img
            css={SubscribeOverlayLogo}
            className="subscribe-overlay-logo"
            src={getSrc(logo)}
            alt={config.title}
        />
    );
}

const SubscribeOverlayLogo = css`
  position: fixed;
  top: 23px;
  left: 30px;
  height: 30px;
`;

export default SubscribeLogo;
