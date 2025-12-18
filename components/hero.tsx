"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Code, Terminal } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Full-Stack Developer"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background">
        <div className="absolute inset-0 bg-[url('/geometric-pattern-code-background.jpg')] opacity-5"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Code className="h-8 w-8 text-primary/30" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
        <Terminal className="h-6 w-6 text-accent/30" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "2s" }}>
        <div className="w-4 h-4 bg-primary/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-foreground">Hello, I am</span>
            <span className="block gradient-text animate-glow">Amândio Silva</span>
          </h1>

          <div className="text-2xl md:text-3xl text-muted-foreground mb-8 font-mono">
            <span className="text-accent">{">"}</span> {text}
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Computer Science student at <span className="text-primary font-semibold">UMAIA</span> and{" "}
            <span className="text-primary font-semibold">42 Porto</span>. Passionate about creating innovative solutions
            with clean and efficient code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg bg-transparent">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
