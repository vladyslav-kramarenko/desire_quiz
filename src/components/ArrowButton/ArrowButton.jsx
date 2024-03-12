import React from 'react';
import './ArrowButton.css';

const ArrowButton = ({ variant, direction, ...props }) => {
    return (
        <button className={`arrow-button ${variant}`} {...props}>
            {direction === 'backward' && (
                <svg width="44" height="15" viewBox="0 0 44 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M7.5 15L0 7.49994L7.5 0V5.49994L44 5.49994V9.5L7.5 9.5V15Z" fill="white"
                          fillOpacity="0.3"></path>
                </svg>
            )}
            {direction === 'forward' && (
                <svg width="34" height="12" viewBox="0 0 34 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M28.5 0L34 6.29025L28.5 12V7.43311H0L0 5.1474H28.5V0Z"
                          fill="white"></path>
                </svg>
            )}
        </button>
    );
};

export default ArrowButton;
