import Head from 'next/head';
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getAllPostsForHome } from '../lib/posts';

export default function Home({ allPosts }) {
  return (
    <Layout home>
      <Head>…</Head>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPosts.map(({ postid, date, title, slug }) => (
            <li className={utilStyles.listItem} key={postid}>
              <Link href={`/posts/${slug}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps({ preview }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts },
  }
}