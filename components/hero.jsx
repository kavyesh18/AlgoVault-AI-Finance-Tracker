"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { useEffect, useRef } from "react"

const HeroSection = () => {
        const imageRef = useRef();

        useEffect(()=>{

            const handleScroll = ()=>{
                const scrollposition = window.scrollY;
                const scrollThreshold = 100;

                if(scrollposition>scrollThreshold){
                    imageElement.classList.add("scrolled")
                }else{
                    imageElement.classList.remove("scrolled")
                }
            }
            const imageElement = imageRef.current;
            window.addEventListener("scroll",handleScroll)

            return ()=> window.removeEventListener("scroll", handleScroll)
        }, [])
  return (
    <div className="pb-20 px-4">
        <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
                Manage Your Finances <br/> with Intelligence
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A cutting-edge AI-driven financial management platform that empowers you to monitor, 
            evaluate, and enhance your spending habits with intelligent real-time insights tailored to your goals.
            </p>
            <div className="flex justify-center space-x-4">
                <Link href={"/dashboard"}>
                <Button size="lg" className="px-8 ">Get Started</Button>
                </Link>
                <Link href={"/dashboard"}>
                <Button size="lg" variant="outline" className="px-8 ">Watch Demo</Button>
                </Link>
            </div>
            <div className="hero-image-wrapper">
                <div ref={imageRef} className="hero-image">
                    <Image src="/Banner.jpg"
                    width={1280} 
                    height={720} 
                    alt="dash preview"
                    className="rounded-lg shadow-2xl border mx-auto"
                    priority
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection