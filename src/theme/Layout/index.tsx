import React, { type ReactNode } from 'react';
import Layout from '@theme-original/Layout';
import type { Props } from '@theme/Layout';
import Head from '@docusaurus/Head';

interface LayoutWrapperProps extends Props {
  children?: ReactNode;
}

/**
 * Swizzled Layout wrapper.
 * Adds the amber top-rule accent and Google Fonts preconnect globally.
 */
export default function LayoutWrapper(props: LayoutWrapperProps): React.ReactElement {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Amber gradient top rule — fixed, always visible above navbar */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #c47d0e, #dda030, #c47d0e)',
          zIndex: 999,
          pointerEvents: 'none',
        }}
      />

      <Layout {...props} />
    </>
  );
}
