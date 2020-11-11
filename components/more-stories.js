import PostPreview from '../components/post-preview'
import utilStyles from '../styles/utils.module.css';

export default function MoreStories({ posts }) {
  return (
    <section className="moreStories">
      <h2 className="moreStories__h2">
        More Stories
      </h2>
      <div className={`moreStories__item ${utilStyles.flexRSS}`}>
        {posts.map(post => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
