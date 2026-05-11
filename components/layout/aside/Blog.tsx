import { getCategories } from "@/libs/posts";
import ListItem from "./ListItem";
import ListSubItem from "./ListSubItem";
import { formatSlug } from "@/libs/utils";
import IcBlog from "@/components/icons/ic-blog";

export default async function Blog(){
    const categories = await getCategories();
    return(
        <div className="w-full h-fit">
            <ListItem icon={(<IcBlog className="text-on-surface"/>)} target="/blog">Blog</ListItem>
            {categories.map((category, index) => (<ListSubItem key={index} depth={1} line={index==categories.length-1?2:1} target={`/blog/${category}`}>{formatSlug(category)}</ListSubItem>))}
        </div>
    )
}