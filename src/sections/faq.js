/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'Is your platform open to the public?',
    contents: (
      <div>
        Not yet! We're trying to launch as soon as possible.  For now, just hold
        tight as we make our experience even better.
      </div>
    ),
  },
  {
    title: 'How many followers do I need?',
    contents: (
      <div>
        Due to restrictions on Instagrams's API you need to have at least 100
        followers to join our platform.  However, we recommend growing to a
        few thousand followers before trying to monetize your account!
      </div>
    ),
  },
  {
    title: `Can brands join the platform to find influencers?`,
    contents: (
      <div>
        That's the plan!  However, we want to grow our portfolio
        of influencers before onboarding too many brands in order
        to provide you with the best experience.  We plan to launch
        the brand side of our platform in the next 3 to 4 months!
      </div>
    ),
  },
  {
    title: `Who's making this product?`,
    contents: (
      <div>
        AffMark was founded by <a href='http://mcilie.github.io/' style={{ color: '#09c' }}>Michael Ilie</a> and <a href='https://vijayrs.ml' style={{ color: '#09c' }}>Vijay Shanmugam</a>.  We are two
        high school students from Washington DC.  We're passionate about technology and we understand the value of influencer marketing.  We want
        to allow startups and small businesses to leverage the power of influencers at scale which has traditionally been limited to large corporations.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: 'section.faq' }} id="faq">
      <Container>
        <SectionHeader
          title="Frequently asked questions"
          slogan="Get your question answered"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
