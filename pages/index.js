import { Table } from 'semantic-ui-react'
import Betline from '../src/component/Betline'
export default function Home() {
  return (
    <div>
      <div style={{ textAlign: "center", margin: "30px" }}>
        <h2>League of Legends
          /
          Most Popular</h2>
      </div>
      <Betline></Betline>
      <Betline></Betline>
      <Betline></Betline>
    </div>
  )
}
