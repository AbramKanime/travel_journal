import React from "react"
import Header from "./components/Header"
import Experience from "./components/Experience"
import data from "./data"

export default function App() {
    const newExperience = data.map(item => {
        return <Experience
            key={item.imageUrl}
            item={item}
        />
    })
    return (
        <>
            <Header />
            {newExperience}
        </>
    )
}
