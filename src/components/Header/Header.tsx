import React from 'react';
export interface HeaderProps {
    title: string
}

function Header({ title }: HeaderProps) {
    return (
        <header className="m-6 text-center">
            <h1 className="text-3xl font-serif">{title}</h1>
            <p className="italic text-gray-400">Press <kbd>Alt</kbd> + <kbd>N</kbd> to add new nikki.</p>
        </header>
    );
}

export default Header
