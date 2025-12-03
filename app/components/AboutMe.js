import { Button } from "antd"

const AboutMe = () => {
  return (
    <div
      style={{
        padding: 20 
      }}
    >
      <Button type="primary">
        Curriculo
      </Button>
      <p>
        Fabio Pereira dos Santos é um desenvolvedor focado principalmente na plataforma .NET
      </p>

      <br/>
      <p><b>Formação</b></p>
      <p>Análise e Desenvolvimento de Sistemas, 2014</p>
      <p>Universidade Anhanguera</p>

      <br/>
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

export default AboutMe