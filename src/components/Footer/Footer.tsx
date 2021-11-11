import React from 'react';

export interface FooterProps {
    currentPage: number,
    totalPage: number,
    onPageChanged: Function,
}

function Footer({ currentPage, totalPage, onPageChanged: onPageChanged }: FooterProps) {
    const BISIDE_NUMBER = 4;



    function evalRange() {
        const start = Math.max(0, currentPage - BISIDE_NUMBER)
        const end = Math.min(currentPage + BISIDE_NUMBER, totalPage)

        let com: Array<JSX.Element> = [];

        for (let i = start; i < end; i++) {
            com = com.concat(
                <button
                    className={
                        i === currentPage
                            ? "bg-white border-indigo-300 text-indigo-500 hover:bg-indigo-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                            : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    }
                    onClick={(e) => onPageChanged(i)}
                >
                    {i + 1}
                </button>
            );
        }
        return com;
    }

    return (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    {evalRange()}
                </nav>
            </div>
        </div>
    );
}

export default Footer
