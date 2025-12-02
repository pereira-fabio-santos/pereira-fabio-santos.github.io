import Image from "next/image";

const AboutMe = () => {
  return (
    <div>
      <p class="font">
        Fabio Pereira dos Santos é um desenvolvedor focado principalmente na plataforma .NET
      </p>

      <p class="font"><b>Formação</b></p>
      <p class="font">Análise e Desenvolvimento de Sistemas, 2014</p>
      <p class="font">Universidade Anhanguera</p>

      <p class="font"><b>Interesses de estudo</b></p>
      <ul class="font">
        <li>.NET</li>
        <li>C# Programing Language</li>
        <li>Assembly</li>
        <li>React Native</li>
      </ul>
    </div>
  )
}

const MyLayout = (rightContent) => {
  return (
    <div style="display: grid; grid-template-columns: 40% 60%">

      <div style="margin-right: 5%;">

        <a href="index.html" style="text-decoration: none; text-align: right;">

          <h2 class="font">
            Fabio Pereira dos Santos
          </h2>

        </a>

        <h4 class="font" style="text-align: right;">
          pereira.fabio.santos@outlook.com
        </h4>

        <a href="cv.html" style="text-decoration: none; text-align: right;">

          <h4 class="font">
            CV
          </h4>

        </a>

        <a href="projects.html" style="text-decoration: none; text-align: right;">

          <h4 class="font">
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
