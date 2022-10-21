import React from "react";
import {GrFormClose} from "react-icons/gr"
import "./task.scss"

export default function Section({item, setItem}){
    const delClick = (e) =>{
        const data = JSON.parse(localStorage.getItem("item")).filter((elem)=>{
            return e.target.id != elem.id
        })
        localStorage.setItem("item", JSON.stringify(data))
        setItem(JSON.parse(localStorage.getItem("item")))
    }
    return(
        <section>
            <div className="container">
            {item.map((elem, index)=>{
            return <div key={index} className="card">{elem.cards}
            <GrFormClose className="delete" onClick={delClick} id={elem.id}/>
            </div>
            })}
            </div>
        </section>
    )
}