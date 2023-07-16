import {useState, useEffect } from "react";
import SCROLL_STATE from "../scroll-state.js";

export default function useScrollY(){

    const [scrollState, setScrollState] = useState(SCROLL_STATE.IN_HEADER);
    const [lastScrollTop, setLastScrollTop] = useState(0);


    useEffect(() =>{
        const onScroll = () =>{
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            
            if(scrollY <= 73){
                setScrollState(SCROLL_STATE.IN_HEADER)
            } else if(scrollY < lastScrollTop){
                setScrollState(SCROLL_STATE.UP)
            } else{
                setScrollState(SCROLL_STATE.DOWN)
            }
            setLastScrollTop(scrollY);
        }

        window.addEventListener("scroll", onScroll)

        return () =>{
            window.removeEventListener("scroll", onScroll);
        }
    }, [lastScrollTop]);

    return {scrollState}
}