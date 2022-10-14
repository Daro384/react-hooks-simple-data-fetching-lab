import React,{useEffect, useState } from "react"

const api = "https://dog.ceo/api/breeds/image/random"

const App = () => {
    const [image, setImage] = useState(<p>Loading...</p>)

    useEffect(() => {
        fetch(api).then(resp => resp.json())
        .then(fetchedIMG => {
            setImage(
                <img src={fetchedIMG.message} alt="A Random Dog"></img>
            )
        })
    }, [])

    return (
        image
    )
}

export default App