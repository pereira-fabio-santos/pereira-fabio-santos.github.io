import { Row } from 'antd'

import arrayProjects from './projects.json'

export default function Page() {
  return (
    <>
      <Row>
        {
          arrayProjects.map(p => {
            return (
              <div 
                style={{ 
                  borderLeftWidth: 3,
                  borderBottomWidth: 3, 
                  borderColor: 'navy', 
                  marginLeft: 20, 
                  width: '30%',
                  marginTop: 20,
                  padding: 20
                }}
              >
                <Row>
                  <b>Projeto:&nbsp;</b>  {p.name}
                </Row>
                <Row>
                  <b>Descrição:&nbsp;</b> {p.description}
                </Row>
                <Row>
                  <b>Licença:&nbsp;</b> {p.project.license}
                </Row>
                <Row>
                  <b><a href={p.project.source_url} target='_blank'>Source</a></b>
                  &nbsp;|&nbsp; 
                  <b><a href={p.project.download_url} target='_blank'>Download</a>&nbsp;</b> 
                </Row>
              </div>
            )
          })
        }
      </Row>
    </>
  )
}