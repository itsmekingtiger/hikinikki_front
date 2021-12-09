import moment from 'moment';
import 'moment/locale/ko';
import React from 'react';
import { Nikki } from '../../models/nikki';


export interface NikkiCardProps {
    nikki: Nikki
}

function NikkiCard({ nikki }: NikkiCardProps) {

    return (
        // apply card design
        <div className="p-3 m-6 max-w-sm mx-auto bg-white rounded-xl border-2 border-black space-x-4">
            {/* content text */}
            <code className="whitespace-pre-wrap">
                {nikki.content}
            </code>

            {/* bottom line, include created date */}
            <div className="text-right text-sm text-gray-400">
                {transReadableDate(nikki.createdAt)}
            </div>

        </div>
    );
}

function transReadableDate(createdAt: string): string {
    const recentOffset = moment().subtract({ hour: 12 });
    const m = moment(createdAt);
    return m.isBefore(recentOffset) ? m.format('llll') : m.fromNow();
}

export default NikkiCard
