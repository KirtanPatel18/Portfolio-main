import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_1gxe5dg',
        'template_610kmoh',
        {
          name: formData.name,
          title: formData.message,
          email: formData.email
        },
        'ddFgOrugubexvByvf'
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "Something went wrong. Please try again or contact me directly at kirtanpatel0888@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#0F0529]/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-[#924DBF]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[#924DBF] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about data analysis and technology.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="bg-[#924DBF]/20 rounded-lg p-3 group-hover:bg-[#924DBF]/30 transition-colors duration-300">
                  <Mail className="text-[#924DBF]" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <a href="mailto:kirtanpatel0888@gmail.com" className="text-gray-300 hover:text-[#924DBF] transition-colors duration-300">
                    kirtanpatel0888@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-[#924DBF]/20 rounded-lg p-3 group-hover:bg-[#924DBF]/30 transition-colors duration-300">
                  <Phone className="text-[#924DBF]" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <a href="tel:+919999999999" className="text-gray-300 hover:text-[#924DBF] transition-colors duration-300">
                    +91 9999999999
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-[#924DBF]/20 rounded-lg p-3 group-hover:bg-[#924DBF]/30 transition-colors duration-300">
                  <Linkedin className="text-[#924DBF]" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/kirtan-patel-kp22143kp20" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#924DBF] transition-colors duration-300"
                  >
                    linkedin.com/in/kirtan-patel-kp22143kp20
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#4A2574]/20 backdrop-blur-sm rounded-lg p-8 border border-[#924DBF]/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full bg-[#0F0529]/50 border border-[#924DBF]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#924DBF] transition-colors duration-300 disabled:opacity-50"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full bg-[#0F0529]/50 border border-[#924DBF]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#924DBF] transition-colors duration-300 disabled:opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  rows={5}
                  className="w-full bg-[#0F0529]/50 border border-[#924DBF]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#924DBF] transition-colors duration-300 resize-none disabled:opacity-50"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#924DBF] hover:bg-[#7338A0] text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
