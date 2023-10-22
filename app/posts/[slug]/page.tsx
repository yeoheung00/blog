// app/posts/[slug]/page.tsx
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
// import './markdown.css'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
    return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
    if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
    const Content = getMDXComponent(post.body.code);

    return (
        <article className="mx-auto max-w-5xl py-28">
            <div className="mb-8 text-center">
                <time dateTime={post.date} className="mb-1 text-xs">
                    {format(parseISO(post.date), 'yyyy. MM. d. a h : mm')}
                </time>
                <h1 className="text-3xl font-bold">{post.title}</h1>
            </div>
            <div className='markdown'>
                <Content />
            </div>
        </article>
    )
}

export default PostLayout