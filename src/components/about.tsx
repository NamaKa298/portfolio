import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function About() {
  return (
    <div className="w-full flex flex-col gap-6 text-lg max-w-7xl mx-auto">
      <div>
        <button>My cv</button>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/NamaKa298"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          Github →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/marionsaint-martin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          LinkedIn →
        </a>
      </div>
      <div>
        Mes outils favoris :
        <div>- Langages : TypeScript, JavaScript, Python, HTML, CSS</div>
      </div>
    </div>
  );
}
