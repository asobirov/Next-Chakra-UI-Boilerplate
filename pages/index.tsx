import type { NextPage } from 'next';
import { Stack, Heading } from '@chakra-ui/react';
import { Link } from '../components/Link';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Stack
        align='center'
        justify='center'
        direction='column'
        spacing={6}
        h='100vh'
      >
        <Heading>
          <Link href='https://nextjs.org/'>
            Next.js
          </Link>
          &nbsp;+&nbsp;
          <Link href='https://chakra-ui.com/'>
            Chakra UI
          </Link>
          &nbsp;Template
        </Heading>
        <ColorModeSwitcher />
      </Stack>
    </Layout>
  )
}

export default Home;
