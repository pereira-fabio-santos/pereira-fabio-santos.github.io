import { Col, Row } from 'antd'

import Meta from "antd/es/card/Meta"
import Link from "next/link"
import { Card } from 'antd'

const Grid = Card

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

export default function Page() {
  return (
    <div style={{ backgroundColor: 'green' }}>
      {/* <Row style={{ padding: 20 }}>

        <Col span={5}> */}

          <Card
            actions={[
              <span>MIT License</span>,
              <Link
                target="_blank"
                href="https://github.com/pereira-fabio-santos/extension_tool.git"
              >
                Source
              </Link>,
              <Link
                target="_blank"
                href="https://marketplace.visualstudio.com/items?itemName=PereiraFabioSantos.extensiontool"
              >
                View in marketplace
              </Link>
            ]}
            style={{ width: 500 }}
          >
            <Meta
              title="Extension Tool"
              description={
                <>
                  <p>Tipo: Extensão para Visual Studio Code</p>
                  <p>Ferramenta que permite a criação de template de extensão para o Visual Studio Code</p>
                </>
              }
            />
          </Card>

        {/* </Col> */}

        {/* <Col span={10}> */}

          {/* <Card
            actions={[
              <span>MIT License</span>,
              <Link
                target="_blank"
                href="https://github.com/pereira-fabio-santos/snippets_csharp.git"
              >
                Source
              </Link>,
              <Link
                target="_blank"
                href="https://marketplace.visualstudio.com/items?itemName=PereiraFabioSantos.snippetscsharp"
              >
                View in marketplace
              </Link>
            ]}
            style={{ width: 500, marginTop: 20 }}
          >
            <Meta
              title="Snippets C#"
              description={
                <>
                  <p>Tipo: Snippets para Visual Studio Code</p>
                  <p>Snippets em português para a linguagem C#</p>
                </>
              }
            />
          </Card> */}

        {/* </Col>

      </Row> */}
{/* 
      <Row style={{ padding: 20 }}>

        <Col span={10}> */}
          {/* <Card
            actions={[
              <span>MIT License</span>,
              <Link
                target="_blank"
                href="https://marketplace.visualstudio.com/items?itemName=PereiraFabioSantos.extensiontool"
              >
                Source
              </Link>,
              <Link
                target="_blank"
                href="https://marketplace.visualstudio.com/items?itemName=PereiraFabioSantos.extensiontool"
              >
                View in marketplace
              </Link>
            ]}
            style={{ width: 500 }}
          >
            <Meta
              title="Extension Tool"
              description={
                <>
                  <p>Tipo: Extensão para Visual Studio Code</p>
                  <p></p>
                </>
              }
            />
          </Card> */}
        {/* </Col>

        <Col span={10}> */}
          {/* <Card
            actions={[
              <span>MIT License</span>,
              <Link
                target="_blank"
                href="https://marketplace.visualstudio.com/items?itemName=PereiraFabioSantos.extensiontool"
              >
                Source
              </Link>,
              <Link
                target="_blank"
                href="https://www.nuget.org/packages/CLibForDotnet"
              >
                View in nuget
              </Link>
            ]}
            style={{ width: 500 }}
          >
            <Meta
              title="CLibForDotnet"
              description={
                <>
                  <p>Tipo: Library para C#</p>
                  <p>Biblioteca com métodos equivalentes entre a linguagem C e C#</p>
                </>
              }
            />
          </Card> */}
        {/* </Col>

      </Row> */}

    </div>
  )
}