import { Card, Row, Col } from 'antd'
// const Meta = Card

export default function Home() {
  return (
    <Row style={{ padding: 20 }}>
      <Col span={10}>
        <Card
          hoverable
          style={{ width: 350 }}
          cover={
            <img
              draggable={false}
              alt="example"
              src="fabio.jpg"
            />
          }
        >
          <p><b>Fabio Pereira dos Santos</b></p>
          <p>pereira.fabio.santos@outlook.com</p>
        </Card>
      </Col>

      <Col span={10} offset={3}>
        <p>
          Desenvolvedor focado principalmente na plataforma .NET
        </p>
        <br />
        <p><b>Formação</b></p>
        <p>Análise e Desenvolvimento de Sistemas, 2014</p>
        <p>Universidade Anhanguera</p>

        <br />
        <p><b>Interesses de estudo</b></p>
        <ul>
          <li>.NET</li>
          <li>C# Programing Language</li>
          <li>Assembly</li>
          <li>React Native</li>
        </ul> 
      </Col>

    </Row>
  )
}
