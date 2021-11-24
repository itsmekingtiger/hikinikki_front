import React, { useEffect, useRef, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import client from './api/nikki_api';
import BodySection from './components/BodySection';
import FloatingActionButton from './components/FloatingActionButton/FloatingActionButton';
import Footer from './components/Footer';
import Header from './components/Header';
import WriteNikkiModal from './components/WriteNikkiModal/WriteNikkiModal';
import { Nikki, NikkiPageData } from './models/nikki';

function App() {

  const [nikkis, setNikkis] = useState<Array<Nikki>>([]);
  const [pageInfo, setPageInfo] = useState<{ current: number, total: number }>({ current: 0, total: 0 });
  let rawSock: WebSocket;

  useEffect(
    () => {
      client.get<NikkiPageData>("/api/nikki/recent").then(
        resp => {
          const data = resp.data;
          setNikkis(data.nikkis);
          setPageInfo({ current: data.currentPage, total: data.totalPage });
        }
      );

      // init raw websocket api
      if (!rawSock || rawSock.CLOSED) {
        rawSock = new WebSocket(`ws://${window.location.host}/ws/nnn`);
        rawSock.onmessage = (e: MessageEvent<any>) => {
          const new_nikki: Nikki = JSON.parse(e.data);
          setNikkis(old_nikki => [new_nikki, ...old_nikki]);
        }
      }
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

  const inputRef = useRef<any>();
  const [isModalOpen, setShowMoal] = useState(false);
  useHotkeys('alt+n', () => { setShowMoal(true); inputRef.current.focus(); });
  const closeModal = () => setShowMoal(false);


  return (
    <div className="App">
      <Header title="Hiki Nikki" />

      <BodySection nikkis={nikkis} />

      <Footer currentPage={pageInfo.current} totalPage={pageInfo.total} onPageChanged={onPageChanged} />

      <WriteNikkiModal isOpen={isModalOpen} closeModal={closeModal} focusRef={inputRef} />

      <FloatingActionButton onClick={() => setShowMoal(true)} />
    </div>
  );
}

export default App;
