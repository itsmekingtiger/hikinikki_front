import React, { useEffect, useState } from 'react';
import client from './api/nikki_api';
import BodySection from './components/BodySection';
import Header from './components/Header';
import { Nikki, NikkiPageData } from './models/nikki';

function App() {

  const [nikkis, setNikkis] = useState<Array<Nikki>>([])
  const [pageInfo, setPageInfo] = useState<{ current: number, total: number }>({ current: 0, total: 0 });

  useEffect(
    () => {
      client.get<NikkiPageData>("/api/nikki/recent").then(
        resp => {
          setNikkis(resp.data.nikkis);
        }
      );
    },
    []
  );

  return (
    <div className="App">
      <Header title="Hiki Nikki" />

      <BodySection nikkis={nikkis} />
    </div>
  );
}

export default App;
