import PostList from "@/components/PostList";

export default function Home() {
  return(
    <div className="w-full max-w-5xl">
      <PostList category="all_posts"/>
    </div>
  );
}