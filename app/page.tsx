"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Facebook,
  Instagram,
  Linkedin,
  Coffee,
  Check,
  Phone,
  Mail,
  Star,
  Settings,
  Clock,
  Shield,
  Zap,
  ClipboardList,
  Truck, 
  Repeat,
  ChevronRight, 
  MapPin
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#benefits", label: "Benefits" },
    { href: "#machines", label: "Machines" },
    { href: "#premix", label: "Premix" },
    { href: "#plans", label: "Plans" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Contact Bar */}
      <header className="bg-black/80 hidden md:block">
        <div className="container mx-auto py-2 px-4 md:px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-red-500" />
              <span className="text-base">072 3333 015</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-red-500" />
              <span className="text-base">ceyloncafevending@gmail.com</span>
            </div>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-red-500 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Coffee className="h-6 w-6 text-red-500" />
                <span className="text-xl font-bold">Ceylon Cafe Vending</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <motion.div 
              className="hidden md:flex items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium hover:text-red-500 transition-colors relative group"
                >
                  {link.label}
                  <motion.span 
                    className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </a>
              ))}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {mobileMenuOpen ? (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  transition: {
                    height: { duration: 0.3 },
                    opacity: { duration: 0.2, delay: 0.1 }
                  }
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  transition: {
                    height: { duration: 0.3 },
                    opacity: { duration: 0.1 }
                  }
                }}
                className="md:hidden bg-black/95 overflow-hidden"
              >
                <div className="flex flex-col gap-2 py-4">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      className="px-4 py-3 text-lg text-white hover:text-red-500 hover:bg-white/5 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        transition: {
                          x: { type: "spring", stiffness: 300, damping: 24 },
                          opacity: { duration: 0.3 },
                          delay: index * 0.05
                        }
                      }}
                      exit={{ x: -20, opacity: 0 }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

   {/* Hero Section */}
<section className="relative py-12 md:py-24 overflow-hidden bg-black">
  {/* Container with flex layout */}
  <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
    {/* Text content - left side */}
    <div className="w-full md:w-1/2 relative z-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">FREE Coffee Machines for Your Business</h1>
      <p className="text-xl md:text-2xl mb-8 text-gray-300">
        Ceylon Cafe Vending offers subscription-based coffee vending solutions with no upfront costs. Get premium
        Nestlé coffee for your workplace with our hassle-free service.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#contact">
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white rounded-full py-3 px-6 flex items-center justify-center"
          >
            Claim Your Free Machine
            <span className="ml-2">→</span>
          </Button>
        </a>

        <a href="#plans">
          <Button
            size="lg"
            variant="outline"
            className="bg-black border-2 border-red-600 text-red-600 hover:bg-black hover:text-white font-medium rounded-full py-3 px-6"
          >
            View Plans
          </Button>
        </a>
      </div>
    </div>

    {/* Image - right side on desktop, hidden on mobile */}
    <div className="hidden md:block md:w-1/2 relative">
      <img 
        src="/images/ness.png" 
        alt="Coffee machine illustration"
        className="w-full h-auto rounded-lg shadow-xl"
      />
    </div>

    {/* Image - shown only on mobile (below content) */}
    <div className="md:hidden w-full mt-8">
      <img 
        src="/images/ness.png" 
        alt="Coffee machine illustration"
        className="w-full h-auto rounded-lg shadow-xl"
      />
    </div>
  </div>
</section>


      {/* Benefits Section */}
<section id="benefits" className="py-16 md:py-24 bg-black">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center mb-12">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Why Choose Ceylon Cafe Vending
      </motion.h2>
      <motion.p 
        className="text-xl text-gray-300 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        We provide comprehensive coffee solutions that make your workplace better without any hassle.
      </motion.p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: <Coffee className="h-6 w-6 text-red-500" />,
          title: "FREE Coffee Machines",
          description: "No upfront investment required for premium coffee machines."
        },
        {
          icon: <Settings className="h-6 w-6 text-red-500" />,
          title: "Full Maintenance",
          description: "Complete servicing and maintenance included in all subscriptions."
        },
        {
          icon: <Clock className="h-6 w-6 text-red-500" />,
          title: "Fast Setup",
          description: "Machines delivered and installed within 48 hours of approval."
        },
        {
          icon: <Star className="h-6 w-6 text-red-500" />,
          title: "Premium Quality",
          description: "Nestlé coffee and tea premix options for superior taste."
        },
        {
          icon: <Shield className="h-6 w-6 text-red-500" />,
          title: "Zero Downtime",
          description: "Responsive support ensures your coffee is always available."
        },
        {
          icon: <Zap className="h-6 w-6 text-red-500" />,
          title: "Flexible Plans",
          description: "Scalable subscriptions to fit businesses of any size perfectly."
        }
      ].map((benefit, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Card className="bg-black border border-red-600/30 transition-all duration-300 hover:border-red-600 hover:shadow-lg hover:shadow-red-500/20">
            <CardHeader className="pb-2">
              <motion.div 
                className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center mb-4"
                whileHover={{ scale: 1.05 }}
              >
                {benefit.icon}
              </motion.div>
              <CardTitle className="text-white">{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{benefit.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Machines Section */}
<section id="machines" className="py-16 md:py-24 bg-black">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Premium Coffee Machines</h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Choose from our selection of high-quality vending machines, all available at no upfront cost with our
        subscription plans.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
      <Card className="bg-black border border-red-600/30 overflow-hidden transition-all duration-300 hover:border-red-600 hover:shadow-lg hover:shadow-red-500/20">
        <div className="aspect-square relative bg-black">
          <Image
            src="/images/spectra.png"
            alt="Spectra Double Option Coffee Machine"
            fill
            className="object-cover p-0"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-white">Spectra Double Option</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-red-500" />
              <span>Double beverage options</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-red-500" />
              <span>Hot Water</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-red-500" />
              <span>6 cups/per minute</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <a href="#contact" className="w-full">
            <Button className="w-full bg-red-600 hover:bg-red-700">Get This Machine</Button>
          </a>
        </CardFooter>
      </Card>
      
      <Card className="bg-black border border-red-600/30 overflow-hidden transition-all duration-300 hover:border-red-600 hover:shadow-lg hover:shadow-red-500/20">
        <div className="aspect-square relative bg-black">
          <Image src="/images/multi.png" alt="Multi Option Coffee Machine" fill className="object-cover p-0" />
        </div>
        <CardHeader>
          <CardTitle className="text-white">Multi Option Machine</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-red-500" />
              <span>4 Beverage options</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-red-500" />
              <span>Hot Water</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-red-500" />
              <span>6 cups/per minute</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <a href="#contact" className="w-full">
            <Button className="w-full bg-red-600 hover:bg-red-700">Get This Machine</Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  </div>
</section>

{/* Premix Section */}
<section id="premix" className="py-16 md:py-24 bg-black">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Premium Coffee & Tea Premix</h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Explore our range of high-quality coffee and tea premix options from Nestlé
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      <Card className="bg-black border border-red-600/30 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/20">
        <div className="aspect-square relative bg-black p-6 flex items-center justify-center">
          <Image 
            src="/images/nescafe.png" 
            alt="Nescafe Premix" 
            fill 
            className="object-cover p-0" 
          />
        </div>
        <CardHeader className="pb-2 border-t border-gray-800">
          <div className="flex justify-between items-start">
            <CardTitle className="text-white text-xl">Nescafe Premix</CardTitle>
            <Badge className="bg-red-600 text-white font-bold">Best</Badge>
          </div>
          <CardDescription className="text-gray-300">Premium coffee premix</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center py-1">
            <span className="text-gray-300">1kg</span>
            <span className="font-bold text-2xl text-red-500">Rs 2600</span>
          </div>
          <div className="flex justify-between bg-gray-900 p-2 rounded-md items-center">
            <span className="text-gray-300">Makes</span>
            <span className="text-white font-medium">50 Cups</span>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black border border-red-600/30 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/20">
        <div className="aspect-square relative bg-black p-6 flex items-center justify-center">
          <Image src="/images/nestea.png" alt="Nestea Premix" fill className="object-cover p-0" />
        </div>
        <CardHeader className="pb-2 border-t border-gray-800">
          <div className="flex justify-between items-start">
            <CardTitle className="text-white text-xl">Nestea Premix</CardTitle>
            <Badge className="bg-red-600 text-white font-bold">Popular</Badge>
          </div>
          <CardDescription className="text-gray-300">Premium tea premix</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center py-1">
            <span className="text-gray-300">1kg</span>
            <span className="font-bold text-2xl text-red-500">Rs 2600</span>
          </div>
          <div className="flex justify-between bg-gray-900 p-2 rounded-md items-center">
            <span className="text-gray-300">Makes</span>
            <span className="text-white font-medium">50 Cups</span>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black border border-red-600/30 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/20">
        <div className="aspect-square relative bg-black p-6 flex items-center justify-center">
          <Image src="/images/cardamon-tea.png" alt="Cardamon Tea" fill className="object-cover p-0" />
        </div>
        <CardHeader className="pb-2 border-t border-gray-800">
          <div className="flex justify-between items-start">
            <CardTitle className="text-white text-xl">Cardamon Tea</CardTitle>
            <Badge className="bg-green-600 text-white font-bold">New</Badge>
          </div>
          <CardDescription className="text-gray-300">Aromatic cardamon tea premix</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center py-1">
            <span className="text-gray-300">1kg</span>
            <span className="font-bold text-2xl text-red-500">Rs 3470</span>
          </div>
          <div className="flex justify-between bg-gray-900 p-2 rounded-md items-center">
            <span className="text-gray-300">Makes</span>
            <span className="text-white font-medium">50 Cups</span>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black border border-red-600/30 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/20">
        <div className="aspect-square relative bg-black p-6 flex items-center justify-center">
          <Image src="/images/milo1.png" alt="Milo Premix" fill className="object-cover p-0" />
        </div>
        <CardHeader className="pb-2 border-t border-gray-800">
          <div className="flex justify-between items-start">
            <CardTitle className="text-white text-xl">Milo Premix</CardTitle>
            <Badge className="bg-orange-600 text-white font-bold">Hot</Badge>
          </div>
          <CardDescription className="text-gray-300">Chocolate malt beverage</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center py-1">
            <span className="text-gray-300">800g</span>
            <span className="font-bold text-2xl text-red-500">Rs 2690</span>
          </div>
          <div className="flex justify-between bg-gray-900 p-2 rounded-md items-center">
            <span className="text-gray-300">Makes</span>
            <span className="text-white font-medium">30 Cups</span>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black border border-red-600/30 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/20">
        <div className="aspect-square relative bg-black p-6 flex items-center justify-center">
          <Image src="/images/nesto1.png" alt="Nestomalt" fill className="object-cover p-0" />
        </div>
        <CardHeader className="pb-2 border-t border-gray-800">
          <div className="flex justify-between items-start">
            <CardTitle className="text-white text-xl">Nestomalt</CardTitle>
            <Badge className="bg-gray-600 text-white font-bold">Classic</Badge>
          </div>
          <CardDescription className="text-gray-300">Malted food drink</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center py-1">
            <span className="text-gray-300">800g</span>
            <span className="font-bold text-2xl text-red-500">Rs 2100</span>
          </div>
          <div className="flex justify-between bg-gray-900 p-2 rounded-md items-center">
            <span className="text-gray-300">Makes</span>
            <span className="text-white font-medium">30 Cups</span>
          </div>
        </CardContent>
      </Card>
    </div>

    <div className="mt-12 bg-black rounded-lg overflow-hidden border border-gray-800">
      <div className="p-6 border-l-4 border-red-600 bg-gradient-to-r from-black to-gray-900">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-4 bg-red-600/20 p-3 rounded-full">
              <Coffee className="h-6 w-6 text-red-500" />
            </div>
            <p className="text-white font-medium">
              Nescafe paper cups available for purchase
            </p>
          </div>
          <div className="flex items-center">
            <span className="mr-3 text-gray-300">One bundle: </span>
            <span className="text-xl font-bold text-white">Rs 260</span>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-gray-300">Contains 55 Cups with Nescafe branding</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Plans Section */}
<section id="plans" className="py-16 md:py-24 bg-black">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Flexible Subscription Plans</h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Choose the perfect plan for your business needs. All plans include free machines and maintenance.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-8xl mx-auto">
      {/* Starter Plan */}
      <Card className="bg-black border-gray-800 flex flex-col hover:border-red-600 transition-colors duration-300">
        <CardHeader>
          <CardTitle className="text-white">Starter Plan</CardTitle>
          <CardDescription className="text-gray-300">Perfect for small offices and startups</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="text-2xl font-bold text-white mb-4">40 packets/month</div>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>Free machine with Rs. 25,000 Refundable deposit</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>Monthly commitment: 40 packets/month</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>FREE servicing & maintenance</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>Scheduled monthly refills</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>Billed monthly</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
  <a href="#contact" className="w-full">
    <Button
      className="w-full bg-transparent border border-red-600/40 hover:border-red-600 text-white hover:text-white"
    >
      Get Started
    </Button>
  </a>
</CardFooter>


      </Card>

      {/* SME Solution - Highlighted */}
      <Card className="bg-black border-red-600 flex flex-col relative">
        <div className="absolute top-0 right-0 left-0">
          <div className="bg-red-600 text-white text-center py-1 text-sm font-medium">POPULAR</div>
        </div>
        <CardHeader className="pt-8">
          <CardTitle className="text-white">SME Solution</CardTitle>
          <CardDescription className="text-gray-300">Ideal for growing businesses</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="text-2xl font-bold text-white mb-4">60-100 packets/month</div>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>FREE coffee machine</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>No machine deposit</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>Monthly commitment: 40-100 packets (3,000-5,000 cups/month)</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>Scheduled monthly refills</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>FREE servicing & maintenance</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>Billed monthly or yearly</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
  <a href="#contact" className="w-full">
    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
      Most Popular
    </Button>
  </a>
</CardFooter>

      </Card>

      {/* Heavy Factory/Industrial */}
      <Card className="bg-black border-gray-800 flex flex-col hover:border-red-600 transition-colors duration-300">
        <CardHeader>
          <CardTitle className="text-white">Heavy Factory/Industrial Solution</CardTitle>
          <CardDescription className="text-gray-300">For large organizations with high demand</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="text-2xl font-bold text-white mb-4">100+ packets/month</div>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>FREE additional coffee machines based on demand</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>No machine deposit</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>Monthly commitment: 100+ packets (5,000+ cups/month)</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>Exclusive discounts for loyal customers</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>Scheduled monthly refills</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>FREE servicing & maintenance</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>Billed monthly or yearly</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
  <a href="#contact" className="w-full">
    <Button
      className="w-full bg-transparent border border-red-600/40 hover:border-red-600 text-white hover:text-white"
    >
      Enterprise Solution
    </Button>
  </a>
</CardFooter>


      </Card>
    </div>
  </div>
</section>
      {/* How It Works Section - Updated Version */}
<section id="how-it-works" className="py-16 md:py-24 bg-black">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How It Works</h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Getting started with Ceylon Cafe Vending is quick and easy. Follow these simple steps:
      </p>
    </div>

    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
        {/* Step 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <div className="bg-black border border-red-600/30 hover:border-red-600 transition-all duration-300 rounded-lg p-6 h-full group">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg shadow-red-600/30">
              1
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-red-600/50 z-0"></div>
            <div className="bg-zinc-900 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 transition-transform duration-300">
              <ClipboardList className="h-12 w-12 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center text-white">Submit Your Request</h3>
            <p className="text-zinc-400 text-center">
            Fill out our simple form to get started with your coffee machine subscription.
            </p>
          </div>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-black border border-red-600/30 hover:border-red-600 transition-all duration-300 rounded-lg p-6 h-full group">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg shadow-red-600/30">
              2
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-red-600/50 z-0"></div>
            <div className="bg-zinc-900 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 transition-transform duration-300">
              <Coffee className="h-12 w-12 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center text-white">Choose Your Plan</h3>
            <p className="text-zinc-400 text-center">
            Select the subscription plan that best fits your business needs and volume requirements.
            </p>
          </div>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative"
        >
          <div className="bg-black border border-red-600/30 hover:border-red-600 transition-all duration-300 rounded-lg p-6 h-full group">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg shadow-red-600/30">
              3
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-red-600/50 z-0"></div>
            <div className="bg-zinc-900 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 transition-transform duration-300">
              <Clock className="h-12 w-12 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center text-white">Shortlisting & Approval</h3>
            <p className="text-zinc-400 text-center">
              Due to high demand, We review applications in order and will contact you if selected.
            </p>
          </div>
        </motion.div>

        {/* Step 4 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative"
        >
          <div className="bg-black border border-red-600/30 hover:border-red-600 transition-all duration-300 rounded-lg p-6 h-full group">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg shadow-red-600/30">
              4
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-red-600/50 z-0"></div>
            <div className="bg-zinc-900 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 transition-transform duration-300">
              <Truck className="h-12 w-12 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center text-white">Machine Installation</h3>
            <p className="text-zinc-400 text-center">
            We'll schedule delivery and installation as soon as possible after approval.
            </p>
          </div>
        </motion.div>

        {/* Step 5 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative"
        >
          <div className="bg-black border border-red-600/30 hover:border-red-600 transition-all duration-300 rounded-lg p-6 h-full group">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg shadow-red-600/30">
              5
            </div>
            <div className="bg-zinc-900 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 transition-transform duration-300">
              <Repeat className="h-12 w-12 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center text-white">Enjoy & Restock</h3>
            <p className="text-zinc-400 text-center">
            Start enjoying premium coffee while we handle regular restocking and maintenance.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>
      {/* Testimonials Section */}
<section className="py-16 md:py-24 bg-black">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Clients Say</h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Don't just take our word for it. Here's what businesses across Sri Lanka are saying about our coffee
        vending solutions.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <Card className="bg-black border border-red-600/30 hover:border-red-600 transition-colors duration-300">
        <CardContent className="pt-6">
          <div className="mb-4">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star key={i} className="inline-block h-5 w-5 text-yellow-500 fill-yellow-500" />
              ))}
          </div>
          <p className="mb-6 text-gray-300">
            "Ceylon Cafe Vending has transformed our office coffee experience. The machine is top quality, and our
            team loves the premium Nestlé coffee options. The free machine with subscription model saved us a
            significant upfront investment."
          </p>
          <div>
            <p className="font-semibold text-white">Samantha Perera</p>
            <p className="text-sm text-gray-400">Office Manager, TechLanka</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black border border-red-600/30 hover:border-red-600 transition-colors duration-300">
        <CardContent className="pt-6">
          <div className="mb-4">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star key={i} className="inline-block h-5 w-5 text-yellow-500 fill-yellow-500" />
              ))}
          </div>
          <p className="mb-6 text-gray-300">
            "We have multiple Ceylon Cafe Vending machines across our factory floor. The Industrial plan perfectly
            suits our high-volume needs, and their service team ensures we never run out of coffee. Highly
            recommend for large businesses!"
          </p>
          <div>
            <p className="font-semibold text-white">Rajiv Fernando</p>
            <p className="text-sm text-gray-400">Factory Director, Apparels International</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black border border-red-600/30 hover:border-red-600 transition-colors duration-300">
        <CardContent className="pt-6">
          <div className="mb-4">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star key={i} className="inline-block h-5 w-5 text-yellow-500 fill-yellow-500" />
              ))}
          </div>
          <p className="mb-6 text-gray-300">
            "As a coworking space, offering quality coffee is essential. Ceylon Cafe Vending provided us with an
            excellent machine and regular refills. Our members are delighted with the premium coffee options
            available."
          </p>
          <div>
            <p className="font-semibold text-white">Nisha Jayawardena</p>
            <p className="text-sm text-gray-400">CEO, StartHub Coworking</p>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

      {/* Contact Form Section */}
<section id="contact" className="py-16 md:py-24 bg-black">
  <div className="container mx-auto px-4 md:px-6">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Claim Your Free Coffee Machine</h2>
        <p className="text-xl text-gray-300">
          Fill out the form below to start your subscription with Ceylon Cafe Vending.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-zinc-900 border border-red-600/30 shadow-xl">
          <CardContent className="pt-6">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">
                    Company Name
                  </Label>
                  <Input 
                    id="company" 
                    className="bg-zinc-800 border-zinc-700 text-white focus:border-red-600" 
                    placeholder="Your Company Name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact" className="text-white">
                    Contact Person
                  </Label>
                  <Input 
                    id="contact" 
                    className="bg-zinc-800 border-zinc-700 text-white focus:border-red-600" 
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    className="bg-zinc-800 border-zinc-700 text-white focus:border-red-600" 
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">
                    Phone Number
                  </Label>
                  <Input 
                    id="phone" 
                    className="bg-zinc-800 border-zinc-700 text-white focus:border-red-600" 
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="employees" className="text-white">
                    Number of Employees
                  </Label>
                  <Select required>
                    <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white focus:border-red-600">
                      <SelectValue placeholder="Select range" className="text-white" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                      <SelectItem value="1-10" className="text-white">1-10 employees</SelectItem>
                      <SelectItem value="11-50" className="text-white">11-50 employees</SelectItem>
                      <SelectItem value="51-200" className="text-white">51-200 employees</SelectItem>
                      <SelectItem value="201+" className="text-white">201+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cups" className="text-white">
                    Estimated Cups Per Month
                  </Label>
                  <Input 
                    id="cups" 
                    className="bg-zinc-800 border-zinc-700 text-white focus:border-red-600" 
                    placeholder="e.g. 500"
                    type="number"
                    required
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-white">Preferred Plan</Label>
                <RadioGroup defaultValue="sme" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2 bg-zinc-800 p-4 rounded-lg border border-zinc-700 hover:border-red-600/50">
                    <RadioGroupItem value="starter" id="starter" className="text-red-600" />
                    <Label htmlFor="starter" className="text-white cursor-pointer">
                      Starter Plan
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-zinc-800 p-4 rounded-lg border border-zinc-700 hover:border-red-600/50">
                    <RadioGroupItem value="sme" id="sme" className="text-red-600" />
                    <Label htmlFor="sme" className="text-white cursor-pointer">
                      SME Solution
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-zinc-800 p-4 rounded-lg border border-zinc-700 hover:border-red-600/50">
                    <RadioGroupItem value="industrial" id="industrial" className="text-red-600" />
                    <Label htmlFor="industrial" className="text-white cursor-pointer">
                      Industrial Solution
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 bg-zinc-800 p-4 rounded-lg border border-zinc-700 hover:border-red-600/50">
                    <RadioGroupItem value="not-sure" id="not-sure" className="text-red-600" />
                    <Label htmlFor="not-sure" className="text-white cursor-pointer">
                      Not Sure Yet
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Additional Information
                </Label>
                <Textarea 
                  id="message" 
                  className="bg-zinc-800 border-zinc-700 text-white focus:border-red-600" 
                  rows={4}
                  placeholder="Tell us more about your requirements..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-lg py-6 rounded-full shadow-lg shadow-red-600/20"
              >
                Claim Your Free Coffee Machine
              </Button>

              <p className="text-xs text-gray-400 text-center">
                By submitting this form, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </div>
</section>

      {/* Footer */}
<footer className="bg-zinc-900 text-white border-t border-red-600/30 py-8">
  <div className="container mx-auto px-4">
    {/* Top section with logo and social links */}
    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
      <div className="flex items-center space-x-2 mb-6 md:mb-0">
        <Coffee className="h-8 w-8 text-red-600" />
        <span className="text-2xl font-bold">Ceylon Cafe Vending</span>
      </div>

      <div className="flex space-x-6">
        <a href="#" className="bg-zinc-800 hover:bg-red-600 p-3 rounded-full transition-colors duration-300">
          <Facebook className="h-5 w-5" />
          <span className="sr-only">Facebook</span>
        </a>
        <a href="#" className="bg-zinc-800 hover:bg-red-600 p-3 rounded-full transition-colors duration-300">
          <Instagram className="h-5 w-5" />
          <span className="sr-only">Instagram</span>
        </a>
        <a href="#" className="bg-zinc-800 hover:bg-red-600 p-3 rounded-full transition-colors duration-300">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>
    </div>

    {/* Main footer content */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h3 className="font-bold text-lg mb-3 text-white relative inline-block">
          About Us
          <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-red-600"></span>
        </h3>
        <p className="text-zinc-400 mb-3">
          Ceylon Cafe Vending provides premium coffee solutions for businesses of all sizes. We offer free coffee
          machines with our subscription plans, ensuring your workplace always has access to quality beverages.
        </p>
        <p className="text-zinc-400">
          Our mission is to elevate workplace experiences through exceptional coffee services with no upfront
          costs.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-3 text-white relative inline-block">
          Quick Links
          <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-red-600"></span>
        </h3>
        <div className="grid grid-cols-2">
          <div>
            <ul className="space-y-2">
              <li>
                <a
                  href="#benefits"
                  className="text-zinc-400 hover:text-red-500 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1 text-red-600" />
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#machines"
                  className="text-zinc-400 hover:text-red-500 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1 text-red-600" />
                  Machines
                </a>
              </li>
              <li>
                <a
                  href="#premix"
                  className="text-zinc-400 hover:text-red-500 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1 text-red-600" />
                  Products
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#plans" className="text-zinc-400 hover:text-red-500 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1 text-red-600" />
                  Plans
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-zinc-400 hover:text-red-500 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1 text-red-600" />
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-zinc-400 hover:text-red-500 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-1 text-red-600" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-3 text-white relative inline-block">
          Contact Us
          <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-red-600"></span>
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <Mail className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
            <span className="text-zinc-400">ceyloncafevending@gmail.com</span>
          </li>
          <li className="flex items-start">
            <Phone className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
            <span className="text-zinc-400">072 3333 015</span>
          </li>
          <li className="flex items-start">
            <MapPin className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
            <span className="text-zinc-400">No 28 Ramakrishna Road, Wellawatte, Colombo 06</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Copyright */}
    <div className="border-t border-zinc-800 mt-8 pt-6 text-center text-zinc-500 text-sm">
      <p>© {new Date().getFullYear()} Ceylon Cafe Vending. All rights reserved.</p>
    </div>
  </div>
</footer>
    </div>
  )
}
