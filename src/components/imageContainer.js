import React, { useState, useRef } from "react"
import "./imageContainer.css"
import useIntersectionObserver from "../hooks/useIntersectionObserver"
import Image from "./image"

export default function ImageContainer(props) {
  const { height, width, src, alt } = props
  const ref = useRef()
  const [isVisible, setIsVisible] = useState(false)
  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setIsVisible(true)
        observerElement.unobserve(ref.current)
      }
    },
  })
  const aspectRatio = (height / width) * 100
  return (
    <div
      ref={ref}
      className="image-container"
      style={{ paddingBottom: `${aspectRatio}%` }}
    >
      {isVisible && <Image src={src} alt={alt} />}
    </div>
  )
}
