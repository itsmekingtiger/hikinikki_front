import React from 'react';
import { Nikki } from '../../models/nikki';
import NikkiCard from '../NikkiCard/NikkiCard';
// import './BodySection.css';

export interface BodySectionProps {
    nikkis: Array<Nikki>
}


function BodySection({ nikkis }: BodySectionProps) {

    const drawNikkiVeiw = (nikkis: Array<Nikki>) => nikkis.map(nikki => NikkiCard(nikki));


    return (
        <div>
            {drawNikkiVeiw(nikkis)}
        </div>
    );
}

export default BodySection
