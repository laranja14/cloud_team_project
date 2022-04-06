import Axios from 'axios';
import { useEffect, useState } from 'react'
import Link from 'next/link';
// import { Table } from 'semantic-ui-react'
import RanNumTest from '../src/component/RanNumTest';
import Betline from '../src/component/Betline'

export default function Home() {
  const [list, setList] = useState([]);

  function getData() {
    Axios.get('/api/betline').then((res) => {
      console.log(res.data);
      setList(res.data)
    })
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center", margin: "30px" }}>
        <h2>League of Legends
          /
          Most Popular</h2>
      </div>
      <Link href="/betting">
        <a>
          <Betline list={list} />
        </a>
      </Link>
      <RanNumTest />
    </div>
  )
}
