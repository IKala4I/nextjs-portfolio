import React from "react";
import {DiAtom} from "react-icons/di";

const Footer = () => {
    return (
        <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
            <div className="container p-10 flex justify-between">
                <DiAtom size={40}/>
                <p className="text-slate-600">All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
