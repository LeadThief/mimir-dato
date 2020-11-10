import Head from 'next/head';
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getAllPostsForHome } from '../lib/posts';

export default function Home({ allPosts }) {
  return (
    <Layout home>
      <Head>
        <title>
          Cosamin Blog
        </title>
      </Head>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <div className='blogs'>
          {allPosts.map(({ postid, title, slug, excerpt, coverImage}) => (
            <Link href={`/posts/${slug}`} key={postid} >
              <div id={`blog${postid}`} className={`blog__item item${postid} blogs`}>
                  <div className="blog__image">
                    <img src={coverImage.responsiveImage.src} alt={title}/>
                  </div>
                  <div className="blog__link">
                    <h2 className="contentAdmin__h2">{title}</h2>
                  </div>
                  <div className="blog__intro">
                    <p>{excerpt}</p>
                  </div>
              </div>
            </Link>
          ))}
        </div>
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