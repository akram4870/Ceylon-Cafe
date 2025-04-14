import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto py-4 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row gap-4 items-center mb-4 md:mb-0">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-red-500" />
            <span className="text-sm">072 3333 015</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-red-500" />
            <span className="text-sm">ceyloncafevending@gmail.com</span>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-white hover:text-red-500 transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-white hover:text-red-500 transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-white hover:text-red-500 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto py-4 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Coffee className="h-6 w-6 text-red-500" />
            <span className="text-xl font-bold">Ceylon Cafe Vending</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#benefits" className="text-sm hover:text-red-500 transition-colors">
              Benefits
            </a>
            <a href="#machines" className="text-sm hover:text-red-500 transition-colors">
              Machines
            </a>
            <a href="#premix" className="text-sm hover:text-red-500 transition-colors">
              Premix
            </a>
            <a href="#plans" className="text-sm hover:text-red-500 transition-colors">
              Plans
            </a>
            <a href="#contact" className="text-sm hover:text-red-500 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/70 z-10"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-40"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">FREE Coffee Machines for Your Business</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Ceylon Cafe Vending offers subscription-based coffee vending solutions with no upfront costs. Get premium
              Nestlé coffee for your workplace with our hassle-free service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                Get Your Free Machine
              </Button>
              <Button size="lg" variant="outline" className="border-red-600 text-white hover:bg-red-600/20 font-medium">
                View Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Ceylon Cafe Vending</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive coffee solutions that make your workplace better without any hassle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
                  <Coffee className="h-6 w-6 text-red-500" />
                </div>
                <CardTitle className="text-white">FREE Coffee Machines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">No upfront investment required for premium coffee machines.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-red-500" />
                </div>
                <CardTitle className="text-white">Full Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Complete servicing and maintenance included in all subscriptions.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-red-500" />
                </div>
                <CardTitle className="text-white">Fast Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Machines delivered and installed within 48 hours of approval.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-red-500" />
                </div>
                <CardTitle className="text-white">Premium Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Nestlé coffee and tea premix options for superior taste.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-500" />
                </div>
                <CardTitle className="text-white">Zero Downtime</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Responsive support ensures your coffee is always available.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-red-500" />
                </div>
                <CardTitle className="text-white">Flexible Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Subscription options to fit businesses of all sizes.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Machines Section */}
      <section id="machines" className="py-16 md:py-24 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Coffee Machines</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our selection of high-quality vending machines, all available at no upfront cost with our
              subscription plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gray-900 border-gray-800 overflow-hidden">
              <div className="aspect-square relative bg-black">
                <Image
                  src="/images/spectra.png"
                  alt="Spectra Double Option Coffee Machine"
                  fill
                  className="object-contain p-8"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-white">Spectra Double Option</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white">
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
                <Button className="w-full bg-red-600 hover:bg-red-700">Get This Machine</Button>
              </CardFooter>
            </Card>

            <Card className="bg-gray-900 border-gray-800 overflow-hidden">
              <div className="aspect-square relative bg-black">
                <Image src="/images/multi.png" alt="Multi Option Coffee Machine" fill className="object-contain p-8" />
              </div>
              <CardHeader>
                <CardTitle className="text-white">Multi Option Machine</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-white">
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
                <Button className="w-full bg-red-600 hover:bg-red-700">Get This Machine</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Premix Section */}
      <section id="premix" className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Coffee & Tea Premix</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our range of high-quality coffee and tea premix options from Nestlé
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <Card className="bg-gray-900 border-gray-800 overflow-hidden">
              <div className="aspect-square relative bg-black">
                <Image src="/images/nescafe.png" alt="Nescafe Premix" fill className="object-contain p-4" />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-white">Nescafe Premix</CardTitle>
                  <Badge className="bg-red-600">Best Seller</Badge>
                </div>
                <CardDescription className="text-gray-300">Premium coffee premix</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">1kg</span>
                  <span className="font-bold text-white">Rs 2600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Makes</span>
                  <span className="text-white">50 Cups</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 overflow-hidden">
              <div className="aspect-square relative bg-black">
                <Image src="/images/nestea.png" alt="Nestea Premix" fill className="object-contain p-4" />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-white">Nestea Premix</CardTitle>
                  <Badge className="bg-red-600">Popular</Badge>
                </div>
                <CardDescription className="text-gray-300">Premium tea premix</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">1kg</span>
                  <span className="font-bold text-white">Rs 2600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Makes</span>
                  <span className="text-white">50 Cups</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 overflow-hidden">
              <div className="aspect-square relative bg-black">
                <Image src="/images/cardamon-tea.png" alt="Cardamon Tea" fill className="object-contain p-4" />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-white">Cardamon Tea</CardTitle>
                  <Badge className="bg-green-600">New</Badge>
                </div>
                <CardDescription className="text-gray-300">Aromatic cardamon tea premix</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">1kg</span>
                  <span className="font-bold text-white">Rs 3470</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Makes</span>
                  <span className="text-white">50 Cups</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 overflow-hidden">
              <div className="aspect-square relative bg-black">
                <Image src="/images/milo.png" alt="Milo Premix" fill className="object-contain p-4" />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-white">Milo Premix</CardTitle>
                  <Badge className="bg-orange-600">Hot</Badge>
                </div>
                <CardDescription className="text-gray-300">Chocolate malt beverage</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">800g</span>
                  <span className="font-bold text-white">Rs 2690</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Makes</span>
                  <span className="text-white">30 Cups</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 overflow-hidden">
              <div className="aspect-square relative bg-black">
                <Image src="/images/nestomalt.png" alt="Nestomalt" fill className="object-contain p-4" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-white">Nestomalt</CardTitle>
                <CardDescription className="text-gray-300">Malted food drink</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">800g</span>
                  <span className="font-bold text-white">Rs 2100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Makes</span>
                  <span className="text-white">30 Cups</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-6 bg-gray-900 rounded-lg max-w-3xl mx-auto">
            <p className="text-center text-white">
              Nescafe paper cups available for purchase. One bundle is Rs 260 and contains 55 Cups with Nescafe
              branding.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-16 md:py-24 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Subscription Plans</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include free machines and maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gray-900 border-gray-800 flex flex-col">
              <CardHeader>
                <CardTitle className="text-white">Starter Plan</CardTitle>
                <CardDescription className="text-gray-300">Perfect for small offices and startups</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 text-white">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>40 packets/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Free machine with Rs. 25,000 Refundable deposit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Monthly commitment: 30 packets/month</span>
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
                <Button className="w-full bg-red-600 hover:bg-red-700">Get Started</Button>
              </CardFooter>
            </Card>

            <Card className="bg-gray-900 border-gray-800 flex flex-col relative">
              <div className="absolute top-0 right-0 left-0">
                <div className="bg-red-600 text-white text-center py-1 text-sm font-medium">POPULAR</div>
              </div>
              <CardHeader className="pt-8">
                <CardTitle className="text-white">SME Solution</CardTitle>
                <CardDescription className="text-gray-300">Ideal for growing businesses</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 text-white">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>60-100 packets/month</span>
                  </li>
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
                    <span>Monthly commitment: 60-100 packets (3,000-5,000 cups/month)</span>
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
                <Button className="w-full bg-red-600 hover:bg-red-700">Most Popular</Button>
              </CardFooter>
            </Card>

            <Card className="bg-gray-900 border-gray-800 flex flex-col">
              <CardHeader>
                <CardTitle className="text-white">Heavy Factory/Industrial</CardTitle>
                <CardDescription className="text-gray-300">For large organizations with high demand</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 text-white">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>100+ packets/month</span>
                  </li>
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
                <Button className="w-full bg-red-600 hover:bg-red-700">Enterprise Solution</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Getting started with Ceylon Cafe Vending is quick and easy. Follow these simple steps:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-600/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-500">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Submit Your Request</h3>
              <p className="text-gray-300">
                Fill out our simple form to get started with your coffee machine subscription.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-600/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-500">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Choose Your Plan</h3>
              <p className="text-gray-300">
                Select the subscription plan that best fits your business needs and volume requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-600/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-500">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Machine Installation</h3>
              <p className="text-gray-300">
                We'll deliver and install your coffee machine within 48 hours of approval.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-600/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-500">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Enjoy & Restock</h3>
              <p className="text-gray-300">
                Start enjoying premium coffee while we handle regular restocking and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what businesses across Sri Lanka are saying about our coffee
              vending solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gray-900 border-gray-800">
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

            <Card className="bg-gray-900 border-gray-800">
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

            <Card className="bg-gray-900 border-gray-800">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Claim Your Free Coffee Machine</h2>
              <p className="text-xl text-gray-300">
                Fill out the form below to start your subscription with Ceylon Cafe Vending.
              </p>
            </div>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white">
                        Company Name
                      </Label>
                      <Input id="company" className="bg-gray-900 border-gray-700 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact" className="text-white">
                        Contact Person
                      </Label>
                      <Input id="contact" className="bg-gray-900 border-gray-700 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email
                      </Label>
                      <Input id="email" type="email" className="bg-gray-900 border-gray-700 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">
                        Phone Number
                      </Label>
                      <Input id="phone" className="bg-gray-900 border-gray-700 text-white" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="employees" className="text-white">
                      Number of Employees
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                        <SelectValue placeholder="Select number of employees" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10</SelectItem>
                        <SelectItem value="11-50">11-50</SelectItem>
                        <SelectItem value="51-200">51-200</SelectItem>
                        <SelectItem value="201-500">201-500</SelectItem>
                        <SelectItem value="500+">500+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-white">Preferred Plan</Label>
                    <RadioGroup defaultValue="sme">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="starter" id="starter" />
                        <Label htmlFor="starter" className="text-white">
                          Starter Plan
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sme" id="sme" />
                        <Label htmlFor="sme" className="text-white">
                          SME Solution
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="industrial" id="industrial" />
                        <Label htmlFor="industrial" className="text-white">
                          Heavy Factory/Industrial
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="not-sure" id="not-sure" />
                        <Label htmlFor="not-sure" className="text-white">
                          Not Sure Yet
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cups" className="text-white">
                      Estimated cups per month
                    </Label>
                    <Input id="cups" type="number" className="bg-gray-900 border-gray-700 text-white" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Additional Information
                    </Label>
                    <Textarea id="message" className="bg-gray-900 border-gray-700 text-white" rows={4} />
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    Claim Your Free Coffee Machine
                  </Button>

                  <p className="text-xs text-gray-400 text-center">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="h-6 w-6 text-red-500" />
                <span className="text-xl font-bold">Ceylon Cafe Vending</span>
              </div>
              <p className="text-gray-300 mb-4">Premium coffee vending solutions for businesses across Sri Lanka.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#benefits" className="text-gray-300 hover:text-red-500 transition-colors">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#machines" className="text-gray-300 hover:text-red-500 transition-colors">
                    Machines
                  </a>
                </li>
                <li>
                  <a href="#premix" className="text-gray-300 hover:text-red-500 transition-colors">
                    Premix
                  </a>
                </li>
                <li>
                  <a href="#plans" className="text-gray-300 hover:text-red-500 transition-colors">
                    Plans
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-red-500" />
                  <span className="text-gray-300">072 3333 015</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-red-500" />
                  <span className="text-gray-300">ceyloncafevending@gmail.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-300">&copy; {new Date().getFullYear()} Ceylon Cafe Vending. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
