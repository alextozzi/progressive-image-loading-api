import React, { useState } from "react"
import "./image.css"
const Image = (props) => {
  const { alt, src, thumb } = props
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <React.Fragment>
      <img
        className="image thumb"
        alt={alt}
        src={thumb}
        style={{ visibility: isLoaded ? "hidden" : "visible" }}
      />
      <img
        onLoad={() => {
          setIsLoaded(true)
        }}
        className="image full"
        style={{ opacity: isLoaded ? 1 : 0 }}
        alt={alt}
        src={src}
      />
    </React.Fragment>
  )
}
export default Image
