
import { useState } from "react"
import { Logo ,ArrowDown } from "./icons.jsx"
import useScrollY from "../hooks/useScrollY.js";
import SCROLL_STATE from "../scroll-state.js";

export default function Header(){

    const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const { scrollState } = useScrollY();


    const classLayout = showResponsiveMenu? "header__layout header__layout--show" : "header__layout";
    const classMain = showResponsiveMenu? "header__main header__main--show" : "header__main";
    const classMore = showMore? "header__more header__more--show" : "header__more";
    const classSecondNav = scrollState == SCROLL_STATE.UP? "header__secondNav header__secondNav--fixed"
                            : scrollState === SCROLL_STATE.DOWN? "header__secondNav header__secondNav--hide"
                            : "header__secondNav"; 


    return (
        <header className="header">
            <nav className="header__firstNav">
                <div className={classMain}>
                    <a href="/" className="header__link header__link--logo"><Logo /></a>
                    <button className="header__button header__button--menu" onClick={() => setShowResponsiveMenu(!showResponsiveMenu)}>Menu <ArrowDown/></button>
                </div>
                <div className={classLayout}>
                    <ul className="header__primary">
                        <li className="header__li"><a className="header__link" href="/live">Live</a></li>
                        <li className="header__li"><a className="header__link" href="/push">Push</a></li>
                        <li className="header__li"><a className="header__link" href="/note">Note</a></li>
                        <li className="header__li"><a className="header__link" href="/link">Link</a></li>
                        <li className="header__li"><a className="header__link" href="/shop">Shop</a></li>
                        <li className="header__li"><a className="header__link" href="/packs">Packs</a></li>
                        <li className="header__li"><a className="header__link" href="/help">Help</a></li>
                        <li className="header__li">
                            <button className="header__button header__button--more" onClick={() => setShowMore(!showMore)}>
                                {`More ${showMore? "-" : "+"}`}
                            </button>
                        </li>
                        <li className="header__li header__li--promotion"><a href="/promotion" className="header__link">Try Live for free</a></li>
                        <li className="header__li"><a href="/login" className="header__link header__link--login">Log in or register</a></li>
                    </ul>
                    <div className={classMore}>
                        <section className="header__webpage">
                            <h3 className="header__title">More on Ableton.com:</h3>
                            <ul className="header__secondary">
                                <li className="header__webpagei"><a href="/blog" className="header__link">Blog</a></li>
                                <li className="header__webpagei"><a href="/classroom" className="header__link">Ableton for the Classroom</a></li>
                                <li className="header__webpagei"><a href="/schools" className="header__link">Ableton for collaeges and Universities</a></li>
                                <li className="header__webpagei"><a href="/training" className="header__link">Certified Training</a></li>
                                <li className="header__webpagei"><a href="/about" className="header__link header__link--orange">About Ableton</a></li>
                                <li className="header__webpagei"><a href="/jobs" className="header__link">Jobs</a></li>
                                <li className="header__webpagei"><a href="/apprentices" className="header__link">Aprenticeships</a></li>
                            </ul>
                        </section>
                        <section className="header__about">
                            <h3 className="header__title">More from Ableton:</h3>
                            <ul className="header__third">
                                <li className="header__abouti">
                                    <a href="/loop" className="header__link">
                                        <h4 className="header__subtitle">Loop</h4>
                                        <p className="header__description">Watch Talks, Performances and Features from Ableton&apos;s Summit for Music Makers</p>
                                    </a>
                                </li>
                                <li className="header__abouti">
                                    <a href="/music" className="header__link">
                                        <h4 className="header__subtitle">Learning Music</h4>
                                        <p className="header__description">Learn the fundamentals of music making right in your browser.</p>
                                    </a>
                                </li>
                                <li className="header__abouti">
                                    <a href="/synths" className="header__link">
                                        <h4 className="header__subtitle">Learning Synths</h4>
                                        <p className="header__description">Get started with synthesis using a web-based synth and accompanying lessons.</p>
                                    </a>
                                </li>
                                <li className="header__abouti">
                                    <a href="/make" className="header__link">
                                        <h4 className="header__subtitle">Making Music</h4>
                                        <p className="header__description">Some tips from 74 Creative Strategies for Electronic Producers.</p>
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>                
            </nav>
            <div className={`${scrollState === SCROLL_STATE.UP? "separator separator--mg": "separator"}`}></div>
            <nav className={classSecondNav}>
                <ul className="header__fourth">
                    <li className="header__li"><a href="/about" className="header__link header__link--orange">About</a></li>
                    <li className="header__li"><a href="Jobs" className="header__link">Jobs</a></li>
                    <li className="header__li"><a href="apprenticeships" className="header__link">Apprenticeships</a></li>
                </ul>
            </nav>

        </header>
        
    )
}