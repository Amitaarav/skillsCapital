"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Quote } from "lucide-react";
import next from "next";
import { PrimaryYellowButton } from "@/utils/buttons/PrimaryYellowButton";
const testimonials = [
    {
        quote:"We skipped 2 rounds of interviews because of the Persona report",
        author:"- CTO, AI SaaS"
    },
    {
        quote:"The match accuracy is unreal. Like having our own vetting panel on demand.",
        author:"- VP Engineering, EU Retail"
    },
    {
        quote:"They understand our JD better than our own HR team.",
        author:"- Co-founder, Series B Fintech"
    },
]


export const TestimonialComponent = () => {
    const [index, setIndex] = useState([2]);

    const next = () => setIndex((index + 1) % testimonials.length)
    const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length)

    useEffect(() => {
    const interval = setInterval(() => {
        next()
    },5000)
    return () => clearInterval(interval)
    }
    ,[index])

    return (
        <section className=" py-12 p-4 md:px-20 bg-gray-400 mt-4">
            <div className="text-center max-w-4xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-4 md:text-4xl">
                    Trusted by Global Enterprises & SAP Leaders
                </h2>
                <p className="text-gray-700 mt-2">
                    Genuine outcomes from authentic teams that have experienced the change.
                </p>
            </div>
            <div className="relative max-w-4xl mx-auto bg-gray-50 p-8 flex items-center justify-center rounded-2xl shadow-lg gap-4">
                <motion.div 
                key={index} 
                className="flex flex-col p-4 rounded-2xl gap-3"
                initial={{ opacity: 0, y:20 }}
                animate={{ opacity: 1, y:0 }}
                transition={{ duration: 0.5 }}
                >
                        <Quote className="w-8 h-8 text-gray-800"/>
                        <p className="text-gray-800 font-md max-w-xl text-medium">"{testimonials[index].quote}"</p>
                        <p className="text-sm text-gray-500">{testimonials[index].author}</p>
                </motion.div>
            </div>
            <div className="m-4 flex items-center justify-center">
                    <PrimaryYellowButton label="See More Success Strories" />
            </div>
            
            
        </section>
    )
}