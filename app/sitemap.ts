import { MetadataRoute } from 'next'
import { getAllPosts } from '@/libs/posts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    let all_posts = await getAllPosts();
    let post_map = all_posts.map((post) => (
        {
            url: `https://mink-stud.io/${post.category}/${post.slug}`,
            lastModified: post.date,
            priority: 0.6,
        }
    ));
    return [
        {
            url: 'https://mink-stud.io',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        ...post_map,
    ]
}