import PageTitle from "../components/PageTitle.jsx";
import PageBody from "../components/PageBody.jsx";

const Home = () => {
  return (
    <div className="header text-center bg-cv-color-3 text-cv-tertiary-color">
      <PageTitle title="Home" />
      <PageBody content={<div className="p-3 overflow-hidden shadow sm:rounded-lg grid grid-cols-2">
        <div>
          <div>
            <h1 className="text-7xl">&lt;/Alisson Fernandes&gt;</h1>
            <h2 className="text-4xl">&lt;/PHP Full Stack Developer&gt;</h2>
          </div>
        </div>
        <div>
          <div className="text-2xl">
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
      </div>} />
    </div>
  )
}

export default Home