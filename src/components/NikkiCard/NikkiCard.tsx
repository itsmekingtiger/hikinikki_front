import React from 'react';
import { Nikki } from '../../models/nikki';

export interface NikkiCardProps {
    title: string
}

function NikkiCard(nikki: Nikki) {
    return (
        // apply card design
        <div className="p-3 m-6 max-w-sm mx-auto bg-white rounded-xl border-2 border-black space-x-4">
            {/* content div, show text */}
            <div>
                <code>
                    {nikki.content}
                </code>
            </div>

            {/* bottom line, include created date */}
            <div className="text-right text-sm text-gray-400">
                {nikki.createdAt}
            </div>

        </div>
    );
}

export default NikkiCard
