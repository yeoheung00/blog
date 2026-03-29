
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import rehypePrettyCode from "rehype-pretty-code";
import {img} from "./mdx/Image"
import {a} from "./mdx/Link"
export default function PostBody({ source }: { source: string }) {

    const rehypeOptions = {
        theme: {
            dark: "one-dark-pro",
            light: "one-light",
        },
    };
    const components = {
        img: img,
        a: a,
    }
    
    return (
        <article className='prose dark:prose-invert max-w-none p-4'>
            <MDXRemote
                source={source}
                options={{
                    parseFrontmatter: true,
                    mdxOptions: {
                        remarkPlugins: [remarkGfm, remarkBreaks],
                        rehypePlugins: [[rehypePrettyCode, rehypeOptions]]
                    }
                }}
                components={components}
            />
        </article>
    );
}