import { useEffect } from 'react';
import '../styles/TopBar.css'

export default function TopBar() {

    useEffect(() => {
        const handleScroll = () => {
            const topnav = document.getElementById("topnav");
            const link = document.getElementById("link");

            if (!topnav || !link) return;

            if (window.scrollY > 50) {
                topnav.classList.add("scrolled");
            } else {
                topnav.classList.remove("scrolled");
            }
        };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="topnav" className="topnav">
            <a id="link" className="active" href="#home">Lesesteder</a>
        </div>
    )

}