"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-8 lg:px-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,hsl(var(--chart-1)/0.1)_0%,hsl(var(--background))_100%)]" />
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h1 className="font-outfit font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-4">
              <span className="text-primary">Crafting Digital</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-950 bg-clip-text text-transparent">Experiences</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mb-8">
              I build sleek and responsive web and mobile apps that deliver seamless user experiences and lasting impact.
            </p>
            <div className="flex flex-wrap gap-4">
             <a
  href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSHwCrzsjfzkQrssVjxFdgxqKFRwbnKxHvlBgmCwJrbzxtrTnBcpjNGNcKlHHhVXXJNztgKn"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Send email to Awais"
  className="inline-block"
>
  <Button className="group text-base" size="lg">
    Hire Me
    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
  </Button>
</a>

              <Button
    variant="outline"
    size="lg"
    className="text-base"
    onClick={() => {
      const element = document.getElementById("projects");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    View Projects
  </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-chart-1/40 via-chart-2/40 to-chart-3/40 blur-3xl -z-10" />
              <Image
                src="./pfp.png"
                alt="Jane Doe - Graphic & Web Designer"
                fill
                className="object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
