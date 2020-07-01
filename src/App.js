import React, { useEffect, useState } from "react"
import "./App.css"
import ImageContainer from "./components/imageContainer"

function App() {
  const [images, setImages] = useState(null)

  useEffect(() => {
    const fetchData = fetch(
      `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages({ imgs: data })
      })
      .catch((err) => {
        console.log("Error happened during fetching!", err)
      })

    return () => fetchData
  }, [])

  return (
    <div className="app">
      <div className="container">
        {images &&
          images.imgs.map((image) => (
            <div key={image.id} className="wrapper">
              <ImageContainer
                src={image.urls.regular}
                thumb={image.urls.thumb}
                height={image.height}
                width={image.width}
                alt={image.alt_description}
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default App
