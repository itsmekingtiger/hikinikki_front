import React from 'react';

export type WriteNikkiModalProps = {
    open: boolean,
    onClose: Function,
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

export default function WriteNikkiModal({ open, onClose }: WriteNikkiModalProps) {

    const display = open ? "block" : "hidden";

    const backgroundStyle = `${display} fixed z-1 left-0 top-0 w-full h-full overflow-auto flex`
    const contentStyle = `border-disable p-3 m-auto bg-gray-100 w-1/2 border-black border-2`

    const btnStyle = `
    relative inline-flex items-center px-4 py-2
    border border-gray-400
    bg-gray-50 hover:bg-gray-200
    text-gray-500 text-sm font-medium select-none`;

    return (
        <div className={backgroundStyle}>
            <div className={contentStyle}>

                <p className="text-center italic font-serif">Add new Nikki</p>
                <div className="h-5" />

                <div className="justify-center flex">
                    <textarea className="w-4/5 outline-none" />
                </div>
                <div className="h-5" />

                <div className="justify-center flex">
                    <button className={btnStyle}>ADD</button>
                    <div className="w-3" />
                    <button className={btnStyle} onClick={(_) => onClose()}>CLOSE</button>
                </div>
            </div>
        </div>
    );
}
