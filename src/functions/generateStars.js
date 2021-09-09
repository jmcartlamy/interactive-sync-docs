import React from 'react';
import clsx from 'clsx';
import styles from '../pages/index.module.css';

function generateStars(n) {
    /**
     * Adapted for ReactJS
     * Original - https://codepen.io/francesco-allegrini/pen/jeQpaL
     */
    const stars = [];
    const wH = window.innerHeight;
    const wW = window.innerWidth;

    for (let i = 0; i < n; i++) {
        stars.push(
            <div
                key={`star-${i}`}
                className={clsx(
                    styles.star,
                    i % 20 === 0 && styles.starBig,
                    i % 9 == 0 && styles.starMedium
                )}
                style={{
                    top: Math.round(Math.random() * wH) + 'px',
                    left: Math.round(Math.random() * wW) + 'px',
                    animationDuration: Math.round(Math.random() * 3000) + 3000 + 'ms',
                    animationDelay: Math.round(Math.random() * 3000) + 'ms',
                }}
            ></div>
        );
    }
    return stars;
}

export default generateStars;
