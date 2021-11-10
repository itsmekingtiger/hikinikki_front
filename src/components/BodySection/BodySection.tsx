import React, { useEffect, useState } from 'react';
import client from '../../api/nikki_api';
import { Nikki } from '../../models/nikki';
import NikkiCard from '../NikkiCard/NikkiCard';
// import './BodySection.css';

export interface BodySectionProps {
    title: string
}

function BodySection() {


    const [nikkis, setNikkis] = useState<Array<Nikki>>([])

    useEffect(
        () => {
            client.get<Array<Nikki>>("/api/nikki/recent").then(
                resp => setNikkis(resp.data)
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
