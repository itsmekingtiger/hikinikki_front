import React from 'react';
import { Nikki } from '../../models/nikki';

export interface NikkiCardProps {
    title: string
}

function NikkiCard(nikki: Nikki) {
    return (
        // apply card design
        <div className="p-6 m-6 max-w-sm mx-auto bg-white rounded-xl shadow-md items-center space-x-4">
            {/* content div, show text */}
            <div>
                {nikki.content}
            </div>

            {/* bottom line, include created date */}
            <div>
                {nikki.createdAt}
            </div>

        </div>
    );
}

export default NikkiCard
