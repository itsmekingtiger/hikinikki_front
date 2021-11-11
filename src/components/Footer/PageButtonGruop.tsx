import React from 'react';
// import './PageButtonGruop.css';

export interface PageButtonGruopProps {
    title: string
}

function PageButtonGruop({ title }: PageButtonGruopProps) {
    return (
        <div className="inline-flex">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                Prev
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                Next
            </button>
        </div>
    );
}

export default PageButtonGruop
