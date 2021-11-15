import React from 'react';
export interface HeaderProps {
    title: string
}

function Header({ title }: HeaderProps) {
    // const responsive_test = ' bg-gray-500 sm:bg-red-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500';

    return (
        <header className={"m-6 text-center"}>
            <h1 className="text-3xl font-serif">{title}</h1>
            <p className="italic text-gray-400">Press <kbd>Alt</kbd> + <kbd>N</kbd> to add new nikki.</p>
        </header>
    );
}

export default Header
