"use client"

import { motion } from "framer-motion"
import { Brush, Code, Layers, TrendingUp, TabletSmartphone,Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Globe className="h-10 w-10 text-chart-1" />,
    title: "Web App Development",
    description: "Building responsive, high-performance websites that deliver seamless user experiences."
  },
  {
    icon: <TabletSmartphone className="h-10 w-10 text-chart-2" />,
    title: "Mobile App development",
    description: "Crafting sleek, user-friendly mobile applications for both Android and iOS platforms."
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-chart-4" />,
    title: "Scalable Architecture",
    description: "Designing robust system architectures that grow effortlessly with your product and users."
  }
]

export default function Services() {
  return (
    <section className="py-24 px-4 sm:px-8 lg:px-16 bg-secondary/50">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-outfit font-bold text-3xl md:text-4xl mb-4">What I Do</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combining creative design with technical expertise to deliver complete digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-md transition-all duration-300 hover:shadow-lg overflow-hidden group">
                <CardHeader className="relative pb-0">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-chart-1 to-chart-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  {service.icon}
                  <CardTitle className="mt-4 font-outfit">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}