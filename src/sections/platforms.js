/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import Platform from 'assets/platforms.png';

const data = {
  subTitle: 'Versatile',
  title: 'Leverage your collective social presence across the internet',
  description:
    'Our platform holistically evaluate your combined influence from all of your social media accounts in order to learn about your audience and get you the best brand partnerships possible.',
  btnName: 'Get Started',
  btnURL: 'https://form.jotform.com/212235987072055',
};

export default function Platforms() {
  return (
    <section sx={{ variant: 'section.partner' }} id='platforms'>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={{ px: [0, null, '40px', 0] }}>
          <Image src={Platform} alt="Social Media Logos" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', 450, 550, '350px', '410px', '485px'],
    mx: 'auto',
    pb: ['30px', null, null, 0],
    '.description': {
      pr: [0, null, null, null, 4],
    },
  },
};
