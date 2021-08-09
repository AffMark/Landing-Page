/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Dollar from 'assets/key-feature/dollar.svg';
import HandShake from 'assets/key-feature/handshake.svg';
import Analytics from 'assets/key-feature/analytics.svg';

const data = [
  {
    id: 1,
    imgSrc: Dollar,
    altText: 'Dollar Sign',
    title: 'Simple Monetization',
    text:
      'Make money by telling your audience about products and services you know they\'ll love.',
  },
  {
    id: 2,
    imgSrc: HandShake,
    altText: 'Shaking Hands',
    title: 'Authentic Connections',
    text:
      'Only promote the best products from the most ethical brands that really understand your value.',
  },
  {
    id: 3,
    imgSrc: Analytics,
    altText: 'Graph',
    title: 'Detailed Analytics',
    text:
      'Recieve actionable insights to improve your metrics and make you a better content creator.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Quality features"
          title="With our platform you get"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
