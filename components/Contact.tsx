"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Github, Linkedin, Mail, Send } from "lucide-react"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })
    
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 lg:px-16 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-outfit font-bold text-3xl md:text-4xl mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss a collaboration? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-chart-1/20 to-chart-2/20 blur-lg -z-10" />
              <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg shadow-lg">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      className="w-full min-h-[120px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg 
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24"
                        >
                          <circle 
                            className="opacity-25" 
                            cx="12" 
                            cy="12" 
                            r="10" 
                            stroke="currentColor" 
                            strokeWidth="4"
                          ></circle>
                          <path 
                            className="opacity-75" 
                            fill="currentColor" 
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <h3 className="text-2xl font-outfit font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-chart-1" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:hello@janedoe.com" className="text-muted-foreground hover:text-primary transition-colors">
                    usernameawais310gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-outfit font-semibold mb-6">Connect With Me</h3>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/AwaisAli310" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-max"
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </Button>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/malik-awais-892684347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-max"
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </Button>
              </a>
            </div>
            
            <div className="mt-12 p-6 bg-card rounded-lg border shadow-sm">
              {/* <h4 className="font-medium text-lg mb-3">Working Hours</h4> */}
             
              <p className="text-sm text-muted-foreground">
                For urgent inquiries, please email me directly and I'll get back to you as soon as possible.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
