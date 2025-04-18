'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

function SuccessModal({ 
  isOpen, 
  onClose, 
  onNewSubmission 
}: { 
  isOpen: boolean; 
  onClose: () => void;
  onNewSubmission: () => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-zinc-900 border border-red-600/30 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text-green-400 mb-4">
            Form Submitted Successfully!
          </DialogTitle>
        </DialogHeader>
        <div className="text-center space-y-6">
          <p className="text-lg">
            Thank you for your submission. We'll contact you soon regarding your coffee machine request.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button 
              onClick={onClose}
              className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg"
            >
              Close
            </Button>
            <Button 
              onClick={onNewSubmission}
              className="bg-red-600 hover:bg-red-700 px-8 py-4 text-lg"
              variant="outline"
            >
              Submit Another
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    email: '',
    phone: '',
    location: '',
    employees: '',
    cups: '',
    preferredPlan: 'sme',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, employees: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, preferredPlan: value }));
  };

  const resetForm = () => {
    setFormData({
      company: '',
      contact: '',
      email: '',
      phone: '',
      location: '',
      employees: '',
      cups: '',
      preferredPlan: 'sme',
      message: ''
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        console.error('Error parsing JSON response:', jsonError);
        throw new Error('Invalid response from server');
      }
      
      if (response.ok) {
        setShowSuccessModal(true);
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // You might want to show an error toast/message here
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    resetForm(); // Clear the form when closing the modal
  };

  const handleNewSubmission = () => {
    setShowSuccessModal(false);
    resetForm(); // Clear the form for new submission
  };

  return (
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
                <form className="space-y-6" onSubmit={handleSubmit}>
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
                        value={formData.company}
                        onChange={handleChange}
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
                        value={formData.contact}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
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
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-white">
                      Business Location
                    </Label>
                    <Input
                      id="location"
                      className="bg-zinc-800 border-zinc-700 text-white focus:border-red-600"
                      placeholder="e.g., Colombo, Kandy, Galle"
                      required
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="employees" className="text-white">
                        Number of Employees
                      </Label>
                      <Select 
                        required
                        value={formData.employees} 
                        onValueChange={handleSelectChange}
                      >
                        <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white focus:border-red-600">
                          <SelectValue placeholder="Select range" className="text-white" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201+">201+ employees</SelectItem>
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
                        placeholder="e.g. 2000"
                        type="number"
                        required
                        value={formData.cups}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-white">Preferred Plan</Label>
                    <RadioGroup 
                      defaultValue="sme" 
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                      value={formData.preferredPlan}
                      onValueChange={handleRadioChange}
                    >
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
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700 text-lg py-6 rounded-full shadow-lg shadow-red-600/20"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Claim Your Free Coffee Machine'}
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

      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={handleModalClose}  // Updated to use handleModalClose
        onNewSubmission={handleNewSubmission}
      />
    </section>
  );
}

export default ContactForm;