import PageTitle from "../components/PageTitle.jsx";
import PageBody from "../components/PageBody.jsx";
import {TrophyIcon} from "@heroicons/react/24/outline/index.js";
import Skills from "../components/sections/Skills.jsx";

const assessments = [
  {"title": "PHP assessment", "desc": "Top 5% of 690k"},
  {"title": "HTML assessment", "desc": "Top 30% of 3.1M"},
  {"title": "CSS assessment", "desc": "Top 5% of 1.6M"},
]

const skills = [
  {title: 'Backend', desc: ' PHP + Laravel + MySQL + Docker'},
  {title: 'Frontend', desc: 'Vue + Tailwind + Bootstrap + npm'},
  {title: 'Practices', desc: 'Scrum + SOLID + GIT + Tests'}
];

const text = "Passionate about what I do, I have always believed that technology can and\n" +
  "                should enable and facilitate people's access to products and services and I\n" +
  "                believe that putting yourself in the customer's shoes is the best way to\n" +
  "                understand their pain, their difficulties and especially how technology can solve\n" +
  "                their problems.";

const text2 = "During years of experience I learned to build systems from scratch without\n" +
  "                using frameworks or ORMs, writing SQL queries directly. I currently work with\n" +
  "                technologies like laravel and Vue.js, but I'm also responsible for migrating legacy\n" +
  "                code to new technologies.";

const Home = () => {
  return (
    <div className="header text-center bg-cv-color-3">
      <section id="home">
        <PageTitle title="WHO AM I" />
        <div className="grid grid-cols-1 content-between text-cv-tertiary-color h-screen-90">
          <div></div>
          <div>
            <h2 className="text-5xl pb-3">Hi, I'm Alisson Fernandes</h2>
            <h3 className="text-4xl mb-6">PHP Full Stack Developer</h3>
            <p className="text-2xl text-green-100 grid grid-cols-1">
              <div>
                <span className="text-white font-bold"> &#123;&#123; </span>
                "More than 6 years of experience"
                <span className="text-white font-bold"> &#125;&#125;</span>
              </div>
              <div>
                <span className="text-white font-bold"> &#123;&#123; </span>
                "Graduated by the federal institute <a className="underline text-blue-600" href="https://www.ifnmg.edu.br/januaria" target="_blank"> IFNMG</a>"
                <span className="text-white font-bold"> &#125;&#125;</span>
              </div>
              <div>
                <span className="text-white font-bold"> &#123;&#123; </span>
                "93% of proficient English Level by the <a className="underline text-blue-600" href="https://www.efset.org/" target="_blank"> efset.org</a>"
                <span className="text-white font-bold"> &#125;&#125;</span>
              </div>
            </p>

          </div>
          <div className="mb-8">
            <p className="text-3xl text-green-100 italic">/** If it’s BAD, fix it. If it’s GOOD, make it BETTER */</p>
          </div>
        </div>
      </section>

      <section id="projects"><Skills /></section>
    </div>
  )
}

export default Home