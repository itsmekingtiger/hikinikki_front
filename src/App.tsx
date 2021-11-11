import { queries } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import client from './api/nikki_api';
import BodySection from './components/BodySection';
import Footer from './components/Footer';
import Header from './components/Header';
import { Nikki, NikkiPageData } from './models/nikki';

function App() {

  const [nikkis, setNikkis] = useState<Array<Nikki>>([])
  const [pageInfo, setPageInfo] = useState<{ current: number, total: number }>({ current: 0, total: 0 });

  useEffect(
    () => {
      client.get<NikkiPageData>("/api/nikki/recent").then(
        resp => {
          const data = resp.data;
          setNikkis(data.nikkis);
          setPageInfo({ current: data.currentPage, total: data.totalPage });
        }
      );
    },
    []
  );


  async function onPageChanged(page: number) {
    const resp = await client.get<NikkiPageData>(
      "/api/nikki/recent",
      { params: { "page": page } },
    );

    if (resp.status === 200) {
      const data = resp.data;
      setNikkis(data.nikkis);
      setPageInfo({ current: data.currentPage, total: data.totalPage });
    }
  }

  return (
    <div className="App">
      <Header title="Hiki Nikki" />

      <BodySection nikkis={nikkis} />

      <Footer currentPage={pageInfo.current} totalPage={pageInfo.total} onPageChanged={onPageChanged} />
    </div>
  );
}

export default App;
