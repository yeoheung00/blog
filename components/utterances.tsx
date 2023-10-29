'use client';
import { useTheme } from 'next-themes';

const Utterances: React.FC = () => {
  const { theme } = useTheme();

  const utterances_theme = theme === 'dark' ? 'github-dark' : 'github-light';

  return (
    <section
      className="mx-auto mt-32"
      ref={(elem) => {
        if (!elem) {
          return;
        }
        const scriptElem = document.createElement('script');
        scriptElem.src = 'https://utteranc.es/client.js';
        scriptElem.async = true;
        scriptElem.setAttribute('repo', 'yeoheung00/mink-blog');
        scriptElem.setAttribute('issue-term', 'pathname');
        scriptElem.setAttribute('theme', utterances_theme);
        scriptElem.setAttribute('label', 'blog-comment');
        scriptElem.crossOrigin = 'anonymous';
        elem.replaceChildren(scriptElem);
      }}
    />
  );
};

export default Utterances;
