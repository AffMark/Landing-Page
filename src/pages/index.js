import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import KeyFeature from 'sections/key-feature';
import Platforms from 'sections/platforms';
import Process from 'sections/process';
import Faq from 'sections/faq';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="AffMark" />
          <Banner />
          <KeyFeature />
          <Platforms />
          <Process />
          <Faq />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
