"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight } from "lucide-react"

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Redesign",
    category: "web development",
    image: "./web.png",
    link: "https://github.com/mareeha-malik/Web_Project.git"
  },
  {
    id: 2,
    title: "Mobile App",
    category: "mobile app development",
    image: "./app.png",
    link: "https://github.com/mareeha-malik/MW_App_final.git"
  },
  // {
  //   id: 3,
  //   title: "Brand Identity",
  //   category: "graphic",
  //   image: "https://images.pexels.com/photos/6434629/pexels-photo-6434629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   link: "#"
  // },
  // {
  //   id: 4,
  //   title: "Travel Blog Website",
  //   category: "development",
  //   image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   link: "#"
  // },
  // {
  //   id: 5,
  //   title: "Social Media Campaign",
  //   category: "graphic",
  //   image: "https://images.pexels.com/photos/5797913/pexels-photo-5797913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   link: "#"
  // },
  {
    id: 3,
    title: "Planly Mobile App",
    category: "ui-ux",
    image: "planly.png",
    link: "https://www.figma.com/design/Myw09ZiCnfL3Kh6iBFnd8V/Untitled?node-id=0-1&p=f&t=P7B9XUI0hXJzbVmp-0"
  },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")
  
  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab)
  
  return (
    <section id="projects" className="py-24 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-outfit font-bold text-3xl md:text-4xl mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work across design and development
          </p>
        </motion.div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-x-1 bg-secondary/60">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="web development">Web Dev</TabsTrigger>
              <TabsTrigger value="mobile app development">Mobile App</TabsTrigger>
              <TabsTrigger value="ui-ux">UI/UX</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg aspect-square"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-medium text-xl">{project.title}</h3>
                      <a 
                        href={project.link}
                        className="mt-2 text-white/80 inline-flex items-center text-sm hover:text-white transition-colors"
                      >
                        View Project <ArrowUpRight className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center">
          <Button variant="outline" size="lg" className="font-medium">
            See More Projects
          </Button>
        </div>
      </div>
    </section>
  )
}