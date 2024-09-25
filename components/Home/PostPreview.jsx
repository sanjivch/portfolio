import Avatar from '../Image/Avatar'
import DateFormatter from '../Utils/DateFormatter'
import CoverImage from '../Image/CoverImage'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        {/* <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        /> */}
      </div>
      <h3 className="text-l mb-1 leading-snug">
      
        
      
      <Link href={`/posts/${slug}`}>
        <DateFormatter dateString={date} /> 
        
        <span className="hover:underline">  {title}</span>
        </Link>
      </h3>
      
      {/* <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} /> */}
    </div>
  )
}
