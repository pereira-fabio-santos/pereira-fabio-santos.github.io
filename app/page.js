const AboutMe = () => {
  return (
    <div>
      <p>
        Fabio Pereira dos Santos é um desenvolvedor focado principalmente na plataforma .NET
      </p>

      <p><b>Formação</b></p>
      <p>Análise e Desenvolvimento de Sistemas, 2014</p>
      <p>Universidade Anhanguera</p>

      <p><b>Interesses de estudo</b></p>
      <ul>
        <li>.NET</li>
        <li>C# Programing Language</li>
        <li>Assembly</li>
        <li>React Native</li>
      </ul>
    </div>
  )
}

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
