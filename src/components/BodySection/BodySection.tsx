import React, { useEffect, useState } from 'react';
import client from '../../api/nikki_api';
import { Nikki, NikkiPageData } from '../../models/nikki';
import NikkiCard from '../NikkiCard/NikkiCard';
// import './BodySection.css';

export interface BodySectionProps {
    nikkis: Array<Nikki>
}


function BodySection({ nikkis }: BodySectionProps) {

    const drawNikkiVeiw = (nikkis: Array<Nikki>) => nikkis.map(nikki => NikkiCard(nikki));


    return (
        <li>
            {drawNikkiVeiw(nikkis)}
        </li>
    );
}

export default BodySection
