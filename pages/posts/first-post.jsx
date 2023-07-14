import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Image from "next/image";
import Layout from '../../components/layout';


const FirstPost = () => {
  return (
      <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <Image
        src="/images/profile2.jpg"
        height={144}
        width={144}
        alt="Your Name"
      />
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      </Layout>
  );
};

export default FirstPost;
