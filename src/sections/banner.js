/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Heading, Text, Image, Button } from 'theme-ui';
import React, { useState } from 'react';
import BannerBG from 'assets/bannerBg.png';
import BannerThumb from 'assets/banner-influencer-pic.png';

export default function Banner() {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Monetize your social media following
          </Heading>
          <Text as="p" variant="heroSecondary">
            Get paid to tell your audience about products they would love from brands
            that understand the value of influencer marketing.
          </Text>
          <Flex>
            <a href='https://app.affmark.shop/register'>
            <Button variant="whiteButton" aria-label="Get Started">
              Create Account
            </Button>
            </a>
            <>
            <a href='https://app.affmark.shop/signin'>
              <Button
                variant="textButton"
                aria-label="Watch Video"
                onClick={handleClick}
              >
                Sign In
              </Button>
            </a>
            </>
          </Flex>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image src={BannerThumb} alt="banner" style={{borderTopRightRadius: '7.5%',
                                                        borderTopLeftRadius: '7.5%',
                                                        borderBottomRightRadius: '7.5%',
                                                        borderBottomLeftRadius: '7.5%',
                                                        top: '50%'
            }}/>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundImage: `url(${BannerBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ['150px', null, null, null, null, null, '140px', '130px'],
    pb: ['100px', null, null, '110px', null, 10, '150px'],
    backgroundColor: 'primary',
    container: {
      display: 'flex',
    },
    contentBox: {
      width: ['100%', null, '85%', '55%', '50%', '55%'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
    },
    imageBox: {
      display: ['none', null, null, 'block'],
      justifyContent: 'right',
      float: 'right',
      ml: [0, null, null, '20px', '25px', '35px', '30px', '63px'],
      mr: [0, null, null, '-145px', '-160px', '-180px', '-220px', '-290px'],
      mt: [0, null, null, '40px', 4, 7, 0],
      mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],
      overflow: 'hidden',
      width: '48%',
    },
  },
};
