import AboutMe from './components/AboutMe'

const MyLayout = () => {
  return (
    <div>

      <div>

        <a href="index.html">

          <h2>
            Fabio Pereira dos Santos
          </h2>

        </a>

        <h4>
          pereira.fabio.santos@outlook.com
        </h4>

        <a href="cv.html">

          <h4>
            CV
          </h4>

        </a>

        <a href="projects.html">

          <h4>
            Projetos
          </h4>

        </a>

      </div>

      <AboutMe />

    </div>
  )
}

export default function Home() {
  return <MyLayout />
}
