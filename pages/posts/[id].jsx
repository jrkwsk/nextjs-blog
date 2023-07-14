import Head from "next/head";
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';

const Post = ({postData}) => {
  return (
    <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>
    {postData.title}
    <br />
    {postData.id}
    <br />
    <Date dateString={postData.date} />
    <br />
    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  </Layout>);
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
    // fallback: blocking,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id); // async because of remark, so await here
  return {
    props: {
      postData,
    },
  };
}

export default Post;