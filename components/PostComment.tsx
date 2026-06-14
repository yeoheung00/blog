"use client";
import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import { useEffect, useState, startTransition } from "react";
import useSWR from "swr"; // SWR 임포트

interface Comment {
  id: number;
  author: string;
  content: string;
  createdAt: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function PostComment({ postSlug }: { postSlug: string }) {
  const { data: comments = [], mutate } = useSWR(
    `/api/comments?postSlug=${postSlug}`,
    fetcher,
  );

  const [author, setAuthor] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !password || !content)
      return alert("모든 필드를 입력해주세요.");

    setIsLoading(true);
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postSlug, author, password, content }),
      });

      if (res.ok) {
        setAuthor("");
        setPassword("");
        setContent("");

        // SWR의 mutate를 호출하면 캐시를 새로고침하며 자동으로 DB 데이터를 다시 읽어옵니다.
        mutate();
      } else {
        alert("댓글 등록에 실패했습니다.");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <footer className="p-4">
      <Giscus
        repo="yeoheung00/blog"
        repoId="R_kgDORzx9bQ"
        category="Announcements"
        categoryId="DIC_kwDORzx9bc4C5iTz"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={resolvedTheme === "dark" ? "dark" : "light"} // 여기서 실시간 반영!
        lang="ko"
      />

      <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
        <h3 className="text-xl font-bold mb-6 text-gray-950 dark:text-gray-50">
          댓글 ({comments.length})
        </h3>

        {/* 댓글 입력 폼 */}
        <form onSubmit={handleSubmit} className="mb-8 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="작성자"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="rounded-lg border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900"
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-lg border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900"
            />
          </div>
          <textarea
            placeholder="따뜻한 댓글을 남겨주세요."
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:bg-gray-400"
            >
              {isLoading ? "등록 중..." : "댓글 등록"}
            </button>
          </div>
        </form>

        {/* 댓글 리스트 */}
        <div className="space-y-4">
          {comments.length === 0 ? (
            <p className="text-sm text-gray-500 text-center py-4">
              첫 댓글을 남겨보세요!
            </p>
          ) : (
            comments.map((comment) => (
              <div
                key={comment.id}
                className="rounded-xl bg-gray-50 p-4 dark:bg-gray-900/50"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                    {comment.author}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
                  {comment.content}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </footer>
  );
}
