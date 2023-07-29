import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import styles from './Lobby.module.scss';


const Lobby = () => {
    return (
        <Layout>
            <Head>
                <title>Crypto Duels | The 1st Cyberpunk Cowboys NFT Game</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.playerCard}>
                        <div className={styles.dp}>
                            <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' />
                        </div>
                        <div className={styles.name}>
                            <div className={styles.edit}>
                                <input type="text" placeholder="NAME" maxLength={18} value="" />
                            </div>
                        </div>
                        <div className={styles.details}>
                            <p>TICKETS BALANCE: 0.00 </p>
                        </div>
                    </div>
                    <div className={styles.pfpBtn}>
                        <button className={`${styles.secondaryBtn}`}>CHANGE PFP</button>
                    </div>
                    <div className={styles.disconnectBtn}>
                        <button className={`${styles.secondaryBtn}`}>DISCONNECT</button>
                    </div>
                    <div className={styles.refundArea}>
                        <div className={styles.plus}>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 10h-4v-4c0-1.104-.896-2-2-2s-2 .896-2 2l.071 4h-4.071c-1.104 0-2 .896-2 2s.896 2 2 2l4.071-.071-.071 4.071c0 1.104.896 2 2 2s2-.896 2-2v-4.071l4 .071c1.104 0 2-.896 2-2s-.896-2-2-2z"></path>
                            </svg>
                        </div>
                        <div className={styles.thirdBtn}>
                            <button className={styles.returnBtn}>WITHDRAW 0 TICKETS
                            </button>
                        </div>
                        <div className={styles.minus}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 11h-12c-1.104 0-2 .896-2 2s.896 2 2 2h12c1.104 0 2-.896 2-2s-.896-2-2-2z"></path>
                        </svg>
                        </div>
                    </div>
                    <div className={styles.leaderBoardArea}>
                        <button className={styles.mainBtn}>HISTORIC</button>
                        <button className={styles.mainBtn}>LEADERBOARD</button>
                    </div>
                </div>
                <div className={styles.middle}>
                    <div className={styles.pfpContainer}>
                        <h3>CHOOSE YOUR PROFILE PICTURE</h3>
                        <p>It does not affect your gameplay</p>
                        <div className={styles.scroll}>
                            <div className={styles.box}>
                                <div className={styles.selected}>
                                    <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' />
                                </div>
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' 
                                style={{opacity: "0.5;", cursor: "not-allowed"}}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' 
                                style={{opacity: "0.5;", cursor: "not-allowed"}}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' 
                                style={{opacity: "0.5;", cursor: "not-allowed"}}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' 
                                style={{opacity: "0.5;", cursor: "not-allowed"}}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' 
                                style={{opacity: "0.5;", cursor: "not-allowed"}}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' 
                                style={{opacity: "0.5;", cursor: "not-allowed"}}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' 
                                style={{opacity: "0.5;", cursor: "not-allowed"}}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' 
                                style={{opacity: "0.5;", cursor: "not-allowed"}}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' 
                                style={{opacity: "0.5;", cursor: "not-allowed"}}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' 
                                style={{opacity: "0.5;", cursor: "not-allowed"}}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' 
                                style={{opacity: "0.5;", cursor: "not-allowed"}}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' 
                                style={{opacity: "0.5;", cursor: "not-allowed"}}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' 
                                style={{opacity: "0.5;", cursor: "not-allowed"}}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' 
                                style={{opacity: "0.5;", cursor: "not-allowed"}}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' 
                                style={{opacity: "0.5;", cursor: "not-allowed"}}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' 
                                style={{opacity: "0.5;", cursor: "not-allowed"}}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' 
                                style={{opacity: "0.5;", cursor: "not-allowed"}}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' 
                                style={{opacity: "0.5;", cursor: "not-allowed"}}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' 
                                style={{opacity: "0.5;", cursor: "not-allowed"}}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' 
                                style={{opacity: "0.5;", cursor: "not-allowed"}}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' 
                                style={{opacity: "0.5;", cursor: "not-allowed"}}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' 
                                style={{opacity: "0.5;", cursor: "not-allowed"}}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' 
                                style={{opacity: "0.5;", cursor: "not-allowed"}}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp' 
                                style={{opacity: "0.5;", cursor: "not-allowed"}}
                                />
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className={styles.right}>Right Div</div>
            </div>
        </Layout>
    )
}

export default Lobby