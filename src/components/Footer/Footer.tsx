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
            const color = i === currentPage ? "indigo" : "gray";
            const style = `border-${color}-300 text-${color}-500 hover:bg-${color}-100 relative inline-flex items-center px-4 py-2 border text-sm font-medium`;

            com = com.concat(
                <button
                    className={style}
                    onClick={(e) => onPageChanged(i)}
                >
                    {i + 1}
                </button>
            );
        }
        return com;
    }

    return (
        <div className="px-4 py-3 flex justify-center">
            <nav className="shadow-sm -space-x-px" aria-label="Pagination">
                {evalRange()}
            </nav>
        </div>
    );
}

export default Footer
