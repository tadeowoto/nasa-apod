import React from "react";
export function NasaFooter() {

    return (
        <footer className="w-full h-16 bg-mainbg flex justify-center items-center">
            <p className="text-white">© 2022 Nasa. All rights reserved.</p>
            <p className="text-white ml-4">
                <a href="https://github.com/tadeowoto" className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-400"> 
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" className="w-6 h-6 " /> 
                tadeowoto
                </a>
            </p>
        </footer>
    )

}  