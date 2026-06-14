// src/app/api/comments/route.ts
import { NextResponse } from "next/server";
import { db } from "@/libs/db";

// 1. 특정 글의 댓글 목록 조회 (GET)
// 요청 URL 예시: /api/comments?postSlug=my-first-post
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postSlug = searchParams.get("postSlug");

  if (!postSlug) {
    return NextResponse.json(
      { error: "postSlug가 누락되었습니다." },
      { status: 400 },
    );
  }

  try {
    const comments = await db.comment.findMany({
      where: { postSlug },
      orderBy: { createdAt: "desc" }, // 최신 댓글 순 정렬
      select: {
        id: true,
        author: true,
        content: true,
        createdAt: true,
        // 보안상 password는 프론트엔드로 내려주지 않습니다.
      },
    });
    return NextResponse.json(comments);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "댓글 조회 실패" }, { status: 500 });
  }
}

// 2. 새로운 댓글 작성 (POST)
export async function POST(request: Request) {
  try {
    const { postSlug, author, password, content } = await request.json();

    if (!postSlug || !author || !password || !content) {
      return NextResponse.json(
        { error: "모든 항목을 입력해주세요." },
        { status: 400 },
      );
    }

    const newComment = await db.comment.create({
      data: { postSlug, author, password, content },
    });

    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "댓글 등록 실패" }, { status: 500 });
  }
}
