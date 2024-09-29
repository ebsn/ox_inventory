import React from 'react';

export const ShirtIcon: React.FC = () => {
    return (
        <svg
            className='header-icon-spl'
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 4c0 2.5 -2 3.5 -2 6c0 1 1 4 2 4h10c1 0 2 -3 2 -4c0 -2.5 -2 -3.5 -2 -6c0 0 -2 -1 -3 0c-1 0 -1 1 -1 1c0 0 0 -1 -1 -1c-1 -1 -3 0 -3 0z" />
            <path d="M9 12v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-6" />
        </svg>
    );
};

export default ShirtIcon;