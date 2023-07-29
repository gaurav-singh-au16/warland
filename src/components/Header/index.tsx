import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`${styles.menu} ${styles.left}`}>
                <div className={styles.menuItem}>
                    <button className={styles.blueBtn}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M235.4 176c0-11.4 9.3-19.9 20.5-19.9 11.4 0 20.7 8.5 20.7 19.9s-9.3 20-20.7 20c-11.2.1-20.5-8.6-20.5-20zm1.4 35.8H275v144.1h-38.2V211.8z"></path></svg>
                    </button>

                </div>
            </div>
            <div className={styles.logo}>
                <img alt='logo' src={'https://cryptoduels.gq/title.webp'} />
            </div>
            <div className={`${styles.menu} ${styles.right}`}>
                <div className={styles.menuItem}>
                    <div className={styles.secondaryBtn}>
                        EN
                    </div>
                </div>
                <div className={styles.menuItem}>
                <div className={styles.thirdBtn}>
                <img src="https://cryptoduels.gq/sound%20off%20icon.webp" alt="mute/unmute" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
