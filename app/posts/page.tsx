'use client';

import { Post, allPosts } from '@/.contentlayer/generated';
import { compareDesc } from 'date-fns';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import PostCard from '@/components/PostCard';

export default function Page() {
  const postsList = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  const [tags, setTags] = useState<{ [k: string]: number }>({});
  const [selectedTag, setSelectedTag] = useState('전체');
  const posts: Post[] = useMemo(() => {
    if (selectedTag === '전체') return postsList;
    const postsTemp = postsList.filter((post) =>
      post.tag.split(' ').includes(selectedTag)
    );
    return postsTemp;
  }, [selectedTag]);

  useEffect(() => {
    let temp_tags: { [k: string]: number } = {};
    postsList.forEach((post) => {
      post.tag.split(' ').forEach((tag) => {
        if (!Object.keys(temp_tags).includes(tag)) temp_tags[tag] = 0;
        temp_tags[tag]++;
      });
    });
    setTags(temp_tags);
  }, [postsList]);

  const handlerTagChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedTag(e.target.value);
  };

  return (
    <main className="max-w-5xl mx-auto px-4 pt-20">
      <h2 className='font-bold text-[--color-primary] mb-2'>태그</h2>
      <div className="w-fill flex gap-4 flex-wrap mb-8">
        <div className="h-fit">
          <input
            type="radio"
            id="all"
            value="전체"
            checked={selectedTag === '전체'}
            onChange={handlerTagChanged}
          ></input>
          <label htmlFor="all">전체({postsList.length})</label>
        </div>
        {Object.keys(tags).map((tag, idx) => (
          <div key={idx}>
            <input
              type="radio"
              id={tag}
              value={tag}
              checked={selectedTag === tag}
              onChange={handlerTagChanged}
            ></input>
            <label htmlFor={tag}>
              {tag}({tags[tag]})
            </label>
          </div>
        ))}
      </div>
      <h2 className='font-bold text-[--color-primary] mb-2'>글 목록</h2>
      <div className="flex flex-wrap gap-x-8 gap-y-16">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </main>
  );
}
