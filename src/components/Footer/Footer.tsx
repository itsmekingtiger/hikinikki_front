import React from 'react';

export interface FooterProps {
    currentPage: number,
    totalPage: number,
    onPageChanged: Function,
}

function Footer({ currentPage, totalPage, onPageChanged }: FooterProps) {
    const BISIDE_NUMBER = 4;

    function drawPaginationButtons() {
        const range = evalPageRange();

        let buttons: Array<JSX.Element> = [];

        for (let i = range.start; i < range.end; i++) {
            const color = i === currentPage ? "indigo" : "gray";
            const style = `border-${color}-300 text-${color}-500 hover:bg-${color}-100 relative inline-flex items-center px-4 py-2 border text-sm font-medium`;

            buttons = buttons.concat(
                <button
                    className={style}
                    onClick={(_) => onPageChanged(i)}
                >
                    {i + 1}
                </button>
            );
        }

        return buttons;
    }

    const evalPageRange = () => (
        {
            start: Math.max(0, currentPage - BISIDE_NUMBER),
            end: Math.min(currentPage + BISIDE_NUMBER, totalPage),
        }
    );


    return (
        <div className="px-4 py-3 flex justify-center">
            <nav className="shadow-sm -space-x-px" aria-label="Pagination">
                {drawPaginationButtons()}
            </nav>
        </div>
    );
}

export default Footer
