import React, {useState} from "react";
import Header from "./Header";
import Section from "./Section";
import Aside from "./Aside";
import Footer from "./Footer";
import "./task.scss"

if(!localStorage.getItem("id")){
    localStorage.setItem("id", 1)
}
if(!localStorage.getItem("item")){
    localStorage.setItem("item", JSON.stringify([]))
}
export default function Task(){
    const [item, setItem] = useState(JSON.parse(localStorage.getItem("item")))
    return(
        <main className="task">
            <div className="cont">
                <Header setItem={setItem}/>
                <Section item={item} setItem={setItem}/>
                <Footer/>
            </div>
            <div className="asideCont">
                <Aside/>
            </div>
        </main>
    )
}