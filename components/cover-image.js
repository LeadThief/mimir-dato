import { Image } from 'react-datocms'
import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({ title, responsiveImage, slug, src }) {
  const image = (
    <>
    <img src={responsiveImage.src} alt={title} title={title}/>
  </>
  )
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
