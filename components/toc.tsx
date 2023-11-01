'use client'

import Link from "next/link";
import { useEffect, useState } from "react";


export default function Toc({ url, source }: { url: string, source: string }) {
  let lines = source.split('\n').filter(line => /^#{1,3}/.test(line.trim()));
  const [current, setCurrent] = useState<string | null>(null);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target?.id) {
          setCurrent(entry.target?.id);
        }
      })
    }, {
      root: null,
      rootMargin: '0px 0px -90% 0px',
      threshold: 0.3,
    })
    const heads = document.querySelectorAll("h2, h3");
    heads.forEach(head => {
      io.observe(head);
    });
    setCurrent(heads[0].id);
  }, []);

  const Index = ({ id, title }: { id: string | undefined, title: string }) => {
    let data = title.split(" ");
    let hierarchy = data[0].length - 2;
    data.shift();
    return (
      <div style={{
        background: id == current ? "var(--color-surface-container)" : "transparent",
        fontWeight: id == current ? "bolder" : "normal",
        padding: "5px",
        borderRadius: "4px"
      }}>
        <Link href={`${url}#${id}`} style={{
          color: "var(--color-surface-on)",
          fontWeight: id === current ? "black" : "normal",
          paddingLeft: 10 * hierarchy + "px",
        }}>{data.join(' ')}</Link>
      </div>
    )
  }
  return (
    <div>
      <div className="mt-8 mb-4 text-2xl font-bold text-[--color-primary]">목차</div>
      {
        lines.map((line, idx) => (
          <Index key={idx} id={line.match(/[A-Za-z가-힣\s]/g)?.join('').trim().replaceAll(" ", "-").toLowerCase()} title={line} />
        ))
      }
    </div>
  )
}