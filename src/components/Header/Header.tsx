import React from 'react';
export interface HeaderProps {
    title: string
}

function Header({ title }: HeaderProps) {
    return (
        <header className="m-6">
            <h1 className="text-3xl text-center font-serif">{title}</h1>
        </header>
    );
}

export default Header
