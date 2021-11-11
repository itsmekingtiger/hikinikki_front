import React from 'react';

export type WriteNikkiModalProps = {
    open: boolean,
}

// Modal with pure css
// from https://www.w3schools.com/howto/howto_css_modals.asp
//
// ```css
// .modal {
//     display: none; /* Hidden by default */
//     position: fixed; /* Stay in place */
//     z-index: 1; /* Sit on top */
//     left: 0;
//     top: 0;
//     width: 100%; /* Full width */
//     height: 100%; /* Full height */
//     overflow: auto; /* Enable scroll if needed */
//     background-color: rgb(0,0,0); /* Fallback color */
//     background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
// }
//
// .modal-content {
//     background-color: #fefefe;
//     margin: 15% auto; /* 15% from the top and centered */
//     padding: 20px;
//     border: 1px solid #888;
//     width: 80%; /* Could be more or less, depending on screen size */
// }
// ```

export default function WriteNikkiModal({ open }: WriteNikkiModalProps) {

    const display = open ? "block" : "hidden";

    const backgroundStyle = `${display} fixed z-1 left-0 top-0 w-full h-full overflow-auto flex`
    const contentStyle = `m-3 m-auto bg-pink-200 w-1/2 border-black border-2`

    const btnStyle = `
    relative inline-flex items-center px-4 py-2
    border border-gray-400
    bg-gray-50 hover:bg-gray-200
    text-gray-500 text-sm font-medium`;

    return (
        <div className={backgroundStyle}>
            <div className={contentStyle}>

                <p>Add new Nikki</p>

                <div className="justify-center flex">
                    <textarea className="w-4/5" />
                </div>

                <div className="justify-center flex">
                    <button className={btnStyle}>ADD</button>
                    <button className={btnStyle}>CLOSE</button>
                </div>
            </div>
        </div>
    );
}
