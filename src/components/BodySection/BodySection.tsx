import React, { useEffect, useState } from 'react';
import client from '../../api/nikki_api';
import { Nikki, NikkiPageData } from '../../models/nikki';
import NikkiCard from '../NikkiCard/NikkiCard';
// import './BodySection.css';

export interface BodySectionProps {
    title: string
}


function BodySection() {


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

    const drawNikkiVeiw = (nikkis: Array<Nikki>) => nikkis.map(nikki => NikkiCard(nikki));


    return (
        <li>
            {drawNikkiVeiw(nikkis)}
        </li>
    );
}

export default BodySection
