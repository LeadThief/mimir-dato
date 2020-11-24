import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Alert from '../components/alert';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getAllPostsForHome } from '../lib/posts';

export default function Home({ allPosts, preview }) {
  return (
    <Layout home>
      <Head>
        <title>
          Cosamin Blog
        </title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Alert preview={preview} />
        <div className='blogs'>
          {allPosts.map(({ postid, title, slug, excerpt, coverImage}) => (
            <Link as={`/blog/${slug}`} href={`/blog/${slug}`} key={postid} >
            <a className="hover:underline">
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
              </a>
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