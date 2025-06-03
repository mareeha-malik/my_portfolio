"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Database } from "lucide-react"

// Tech icons and categories
const technologies = {
  design: [
{ name: "Figma", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
    { name: "Adobe Photoshop", icon: "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg" },
    // { name: "Adobe Illustrator", icon: "https://cdn.worldvectorlogo.com/logos/adobe-illustrator-cc-icon.svg" },
    // { name: "Adobe XD", icon: "https://cdn.worldvectorlogo.com/logos/adobe-xd-1.svg" },
    // { name: "Sketch", icon: "https://cdn.worldvectorlogo.com/logos/sketch-2.svg" },
  ],
  frontend: [
    { name: "HTML5", icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { name: "CSS3", icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
{ name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Next.js", icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
    { name: "TypeScript", icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
  ],
  mobile: [
    { name: "Flutter", icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
    // { name: "React Native", icon: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg" },
    // { name: "Swift", icon: "https://cdn.worldvectorlogo.com/logos/swift-15.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "Firebase", icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
    { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
  ],
}

export default function TechStack() {
  return (
    <section className="py-24 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-outfit font-bold text-3xl md:text-4xl mb-4">Tech Stack & Tools</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(technologies).map(([category, techs], categoryIndex) => (
            <div key={category}>
              <h3 className="text-xl font-medium mb-6 capitalize">{category}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
                {techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: techIndex * 0.05 + categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="flex flex-col items-center justify-center p-4 h-full hover:shadow-md transition-shadow duration-300 group">
                      <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={tech.icon} 
                          alt={tech.name} 
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <p className="text-sm text-center font-medium">{tech.name}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}