import React from "react";

export default function Header({setItem}){
    const handleClick = ()=>{
        const arr = [
            {
                id: localStorage.getItem("id"),
                cards: Math.floor(Math.random() * 1000)
            }
        ]
        localStorage.setItem("id", +localStorage.getItem("id")+1)
        localStorage.setItem("item", JSON.stringify([...JSON.parse(localStorage.getItem("item")),...arr]))
           
        setItem(JSON.parse(localStorage.getItem("item")))
        console.log(setItem(JSON.parse(localStorage.getItem("item"))))
    }
    const sort = () =>{
        const cardSort = JSON.parse(localStorage.getItem("item")).sort((a, b)=>{
            return a.cards - b.cards
        })
        localStorage.setItem("item", JSON.stringify(cardSort))
        setItem(JSON.parse(localStorage.getItem("item")))
    }
    return(
        <header className="header">
            <div>
                <button onClick={handleClick}>Add Cards</button>
                <button onClick={sort}>Sort Cards</button>
            </div>
        </header>
    )
}