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
                                    style={{ opacity: "0.5;", cursor: "not-allowed" }}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp'
                                    style={{ opacity: "0.5;", cursor: "not-allowed" }}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp'
                                    style={{ opacity: "0.5;", cursor: "not-allowed" }}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp'
                                    style={{ opacity: "0.5;", cursor: "not-allowed" }}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp'
                                    style={{ opacity: "0.5;", cursor: "not-allowed" }}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp'
                                    style={{ opacity: "0.5;", cursor: "not-allowed" }}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp'
                                    style={{ opacity: "0.5;", cursor: "not-allowed" }}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp'
                                    style={{ opacity: "0.5;", cursor: "not-allowed" }}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp'
                                    style={{ opacity: "0.5;", cursor: "not-allowed" }}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp'
                                    style={{ opacity: "0.5;", cursor: "not-allowed" }}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp'
                                    style={{ opacity: "0.5;", cursor: "not-allowed" }}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp'
                                    style={{ opacity: "0.5;", cursor: "not-allowed" }}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp'
                                    style={{ opacity: "0.5;", cursor: "not-allowed" }}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp'
                                    style={{ opacity: "0.5;", cursor: "not-allowed" }}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp'
                                    style={{ opacity: "0.5;", cursor: "not-allowed" }}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp'
                                    style={{ opacity: "0.5;", cursor: "not-allowed" }}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp'
                                    style={{ opacity: "0.5;", cursor: "not-allowed" }}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp'
                                    style={{ opacity: "0.5;", cursor: "not-allowed" }}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp'
                                    style={{ opacity: "0.5;", cursor: "not-allowed" }}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp'
                                    style={{ opacity: "0.5;", cursor: "not-allowed" }}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp'
                                    style={{ opacity: "0.5;", cursor: "not-allowed" }}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp'
                                    style={{ opacity: "0.5;", cursor: "not-allowed" }}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp'
                                    style={{ opacity: "0.5;", cursor: "not-allowed" }}
                                />
                            </div>
                            <div className={styles.box}>
                                <img alt='dp' src='https://cryptoduels.gq/pfp/frames/frame_20.webp'
                                    style={{ opacity: "0.5;", cursor: "not-allowed" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <p className={styles.heading}>SELECT TICKETS</p>
                    <div className={styles.buy}>
                        <div className={styles.editBuy}>
                            <input min="1" step="1" maxLength={6} value="1" />
                        </div>
                    </div>
                    <p className={styles.priceText}>85 GQ + 100.14 GQ (Relayer + BSC fees) = 185.14 GQ</p>
                    <button className={styles.thirdBtn}>BUY 1 TICKETS</button>
                    <p className={styles.heading}>SELECT ENTRY TICKETS</p>
                    <div className={styles.selectContainer}>
                        <div className={styles.select}>1<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path>
                        </svg>
                        </div>
                        <div className={styles.options} style={{ "display": "none;" }}>
                            <div className={styles.opt}>1</div>
                            <div className={styles.opt}>3</div>
                            <div className={styles.opt}>5</div>
                            <div className={styles.opt}>7</div>
                            <div className={styles.opt}>10</div>
                            <div className={styles.opt}>12</div>
                            <div className={styles.opt}>15</div>
                            <div className={styles.opt}>20</div>
                        </div>
                    </div>
                    <div className={styles.gameMode}>
                        <p>SELECT GAME MODE</p>
                        <div className={styles.buttons}>
                            <button className={styles.selected}>1 vs 1</button>
                            <button className={styles.false}>1 vs 5</button>
                        </div>
                    </div>
                    <div className={styles.thirdBtn}>
                        <button className={styles.inviteBtn} style={{ marginTop: "10px;", height: "40px;" }}>PLAY WITH FRIENDS</button>
                    </div>
                    <div className={styles.startBtn}>
                        <button className={styles.mainBtn}>START DUEL!</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Lobby