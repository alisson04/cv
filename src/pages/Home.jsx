import PageTitle from "../components/PageTitle.jsx";
import PageBody from "../components/PageBody.jsx";
import {TrophyIcon} from "@heroicons/react/24/outline/index.js";

const assessments = [
  {"title": "PHP assessment", "desc": "Top 5% of 690k"},
  {"title": "HTML assessment", "desc": "Top 30% of 3.1M"},
  {"title": "CSS assessment", "desc": "Top 5% of 1.6M"},
]

const skills = [
  {title: 'Backend:', desc: ' PHP + Laravel + MySQL + Docker'},
  {title: 'Frontend:', desc: 'Vue + Tailwind + Bootstrap + npm'},
  {title: 'Practices:', desc: 'Scrum + SOLID + GIT + Tests'}
];

const Home = () => {
  return (
    <div className="header text-center bg-cv-color-3">
      <PageTitle title="Home" />
      <PageBody content={
        <div className="overflow-hidden shadow h-full grid grid-cols-1 gap-4 content-between text-cv-tertiary-color">
          <div className="grid grid-cols-3 p-3">
            <div className="text-left p-3">
              <h2 className="text-3xl pb-3">PHP Full Stack Developer</h2>

              <div className="text-1xl">
                <p className="grid grid-cols-1">
                  {skills.map((skillTime, index) => (
                    <span key={ index} className="pr-5 text-stroke-black">
                      { skillTime.title }
                      <span className="text-cv-borders-color font-bold "> &#123;&#123; </span>
                      { skillTime.desc }
                      <span className="text-cv-borders-color font-bold"> &#125;&#125;</span>
                    </span>
                  ))}
                </p>
              </div>
            </div>

            <div className="p-3 text-xl text-center italic col-span-2 text-stroke-black">
              <p>
                Passionate about what I do, I have always believed that technology can and
                should enable and facilitate people's access to products and services and I
                believe that putting yourself in the customer's shoes is the best way to
                understand their pain, their difficulties and especially how technology can solve
                their problems.
              </p>
              <p>
                During years of experience I learned to build systems from scratch without
                using frameworks or ORMs, writing SQL queries directly. I currently work with
                technologies like laravel and Vue.js, but I'm also responsible for migrating legacy
                code to new technologies.
              </p>
            </div>
          </div>
          <div className="pt-5">
            <h2 className="text-3xl">LinkedIn Trophies</h2>
            <div className="flex justify-center p-3">
              {assessments.map((assessment, index) => (
                <div key={ index } className="flex flex-col text-center p-6">
                  <p className="flex justify-center">
                    <span className="rounded-full border-2 p-3">
                      <TrophyIcon strokeWidth={2} className="h-16 w-16" />
                    </span>
                  </p>
                  <p>{ assessment.title }</p>
                  <p>{ assessment.desc }</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      } />
    </div>
  )
}

export default Home