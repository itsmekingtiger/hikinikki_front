import React from 'react';
// import './Header.css';

export interface HeaderProps {
    title: string
}

function Header({ title }: HeaderProps) {
    return (
        <header className="App-header">
            <h1 className="text-xl">{title}</h1>
        </header>
    );
}

export default Header
