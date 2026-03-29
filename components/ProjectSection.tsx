"use client"

import * as React from "react"
import { ExternalLink, Github, Layers, Zap, Gamepad2 } from "lucide-react"

const projects = [
  {
    title: "Logic-based Minesweeper",
    description: "재귀 알고리즘을 활용한 지뢰 찾기 시뮬레이션입니다. 효율적인 필드 데이터 생성과 탐색 로직을 구현했습니다.",
    tech: ["JavaScript", "Algorithms"],
    icon: <Gamepad2 className="w-6 h-6 text-emerald-500" />
  },
  {
    title: "5D Tesseract Visualizer",
    description: "5차원 하이퍼큐브의 회전과 투영을 수학적으로 모델링한 시각화 도구입니다. 실시간 기하학 연산을 렌더링합니다.",
    tech: ["TypeScript", "Linear Algebra"],
    icon: <Layers className="w-6 h-6 text-green-500" />
  },
  {
    title: "Digital Camo Generator",
    description: "절차적 생성 기법을 활용한 픽셀 패턴 생성기입니다. 사용자 정의 가중치에 따른 확산 알고리즘을 적용했습니다.",
    tech: ["Next.js", "Canvas"],
    icon: <Zap className="w-6 h-6 text-amber-500" />
  }
]

export default function ProjectSection() {
  const [isVisible, setIsVisible] = React.useState(false)
  const sectionRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="max-w-5xl w-full py-24 px-6 mx-auto">
      <div className={`flex flex-col gap-4 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
        <div className="h-1.5 w-12 bg-green-600 rounded-full" />
        <p className="text-gray-600 dark:text-gray-400">
          복잡한 문제를 해결하기 위한 논리적인 접근과 기술적 시도를 기록합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            style={{ transitionDelay: `${index * 150}ms` }}
            className={`group relative flex flex-col p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-[2rem] transition-all duration-700 
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
              hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-3`}
          >
            <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 w-fit rounded-2xl group-hover:rotate-12 transition-transform duration-300">
              {project.icon}
            </div>
            
            <h3 className="text-xl font-bold mb-3 group-hover:text-green-500 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 text-[10px] font-mono font-bold bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}