import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export interface PostMeta {
  title: string;
  date: Date;
  description?: string;
}

export interface Post extends PostMeta {
  slug: string;
  category: string;
}

export async function getPost(category: string, post: string) {
  const filePath = path.join(process.cwd(), 'posts', category, post, 'post.mdx');
  
  // 파일이 없을 경우를 대비한 예외 처리
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(source);

  return {
    meta: data as PostMeta, // Frontmatter 데이터
    content,                // MDX 본문 텍스트
  };
}

export async function getPostsByCategory(category: string) {
  const categoryPath = path.join(process.cwd(), 'posts', category);


  if (category === "all_posts") {
    const categories = await getCategories();
    
    const nestedPosts:Post[][] = await Promise.all(
      categories.map((item) => getPostsByCategory(item))
    );
    
    return nestedPosts
      .flat()
      .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
  }

  const postFolders = fs.readdirSync(categoryPath);

  const posts = postFolders
    .map((postSlug) => {
      const filePath = path.join(categoryPath, postSlug, 'post.mdx');
      
      if (fs.existsSync(filePath)) {
        const source = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(source);
        
        return {
          ...data as PostMeta,
          slug: postSlug,
          category
        } as Post;
      }
      return null;
    })
    .filter((post) => post !== null) // 유효하지 않은 포스트 제외
    .sort((a, b) => (a.date > b.date ? -1 : 1)); // 최신순 정렬

  return posts;
}

// libs/posts.ts 내부에 추가

export async function getCategories() {
  const postsPath = path.join(process.cwd(), 'posts');

  // posts 폴더 존재 확인
  if (!fs.existsSync(postsPath)) {
    return [];
  }

  // 폴더 내의 항목 중 '디렉토리'인 것만 골라내기
  const folders = fs.readdirSync(postsPath, { withFileTypes: true });
  
  const categories = folders
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  return categories; // ['category1', 'category2', ...] 형태의 배열 리턴
}