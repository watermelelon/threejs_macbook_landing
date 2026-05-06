import React, { useEffect, useRef } from 'react'

function Hero() {

    //Having more control over the video speed 
    const videoRef = useRef();

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    },[]);

  return (
    <section id='hero'>
        <div>
        <h1> Macbook Pro</h1>
        <img src="/title.png" alt= "Macbook Pro title image"/>
        </div>

        <video ref = {videoRef} src="/videos/hero.mp4" autoPlay muted playsInline/>

        <button>Buy</button>
        <p>From $1599 or 133/mo for 12 motnhs</p>
    </section>
  )
}

export default Hero