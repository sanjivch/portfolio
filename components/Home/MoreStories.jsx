import PostPreview from './PostPreview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-xl font-bold tracking-tighter leading-tight">
        Notes
      </h2>
      <div className="">
        {posts.map((post) => (
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
