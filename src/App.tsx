import React, { useState, useEffect } from 'react';
import { 
  Phone, MapPin, Clock, Award, Truck, Shield, 
  ChevronLeft, ChevronRight, X, MessageCircle, 
  Star, CheckCircle, ArrowRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Types
interface Service {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  price: string;
}

interface Area {
  id: number;
  name: string;
  distance: string;
  description: string;
}

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  service: string;
}

interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  cta: string;
}

// Data - SEO Optimized
const services: Service[] = [
  {
    id: 1,
    title: "Crane Rental Service",
    icon: <Truck className="w-8 h-8" />,
    description: "Heavy-duty hydraulic cranes ranging from 5-ton to 100-ton capacity for all your lifting needs.",
    features: ["5T to 100T Cranes", "Hydraulic & Truck Mounted", "Certified Operators", "Same Day Service"],
    price: "Starting ₹8,500"
  },
  {
    id: 2,
    title: "Towing Service",
    icon: <Shield className="w-8 h-8" />,
    description: "Fast, safe towing for cars, SUVs, buses, trucks and heavy vehicles across the hills.",
    features: ["24×7 Availability", "Flatbed & Wheel Lift", "Accident Recovery", "Insurance Assistance"],
    price: "Starting ₹4,200"
  },
  {
    id: 3,
    title: "Recovery Van Service",
    icon: <Truck className="w-8 h-8" />,
    description: "Fully equipped recovery vehicles to rescue stranded and off-road vehicles anywhere in the hills.",
    features: ["Heavy Recovery Vans", "Winch & Lift Systems", "Hill Rescue Experts", "Rapid Response"],
    price: "Starting ₹6,800"
  },
  {
    id: 4,
    title: "Breakdown Service",
    icon: <Award className="w-8 h-8" />,
    description: "Complete on-spot repair and roadside assistance for all vehicle breakdowns and emergencies.",
    features: ["On-Spot Repairs", "Battery & Tyre", "Fuel Delivery", "Mechanical Support"],
    price: "Starting ₹2,500"
  },
  {
    id: 5,
    title: "Heavy Vehicle Recovery",
    icon: <Truck className="w-8 h-8" />,
    description: "Specialized recovery for buses, trucks, tractors and commercial vehicles in difficult terrain.",
    features: ["Trucks & Buses", "Multi-Axle Recovery", "Off-Road Rescue", "Emergency Lift"],
    price: "Starting ₹11,000"
  },
  {
    id: 6,
    title: "24×7 Roadside Assistance",
    icon: <Clock className="w-8 h-8" />,
    description: "Round-the-clock professional assistance for any emergency situation on the road.",
    features: ["Instant Dispatch", "GPS Tracking", "Multilingual Team", "No Hidden Charges"],
    price: "Starting ₹1,999"
  }
];

const areas: Area[] = [
  { id: 1, name: "Munnar", distance: "HQ", description: "Our primary base. Full fleet available 24/7." },
  { id: 2, name: "Anachal", distance: "12 km", description: "Fastest response in the region." },
  { id: 3, name: "Marayoor", distance: "28 km", description: "Complete coverage for Sandalwood Valley." },
  { id: 4, name: "Adimali", distance: "34 km", description: "Full towing & crane operations." },
  { id: 5, name: "Irumbupalam", distance: "19 km", description: "Specialized hill recovery support." },
  { id: 6, name: "Vattavada", distance: "42 km", description: "Highest altitude service delivery." },
  { id: 7, name: "Devikulam", distance: "15 km", description: "Dedicated teams for tea estate roads." }
];

const galleryImages: GalleryImage[] = [
  { id: 1, url: "https://picsum.photos/id/1015/1200/800", title: "100-Ton Crane at Munnar Peak", category: "Crane" },
  { id: 2, url: "https://picsum.photos/id/160/1200/800", title: "Heavy Towing on NH85", category: "Towing" },
  { id: 3, url: "https://picsum.photos/id/201/1200/800", title: "Recovery Van at Devikulam", category: "Recovery" },
  { id: 4, url: "https://picsum.photos/id/251/1200/800", title: "Crane Operation at Marayoor", category: "Crane" },
  { id: 5, url: "https://picsum.photos/id/29/1200/800", title: "Breakdown Rescue - Adimali", category: "Breakdown" },
  { id: 6, url: "https://picsum.photos/id/1033/1200/800", title: "Fleet in Action - Anachal", category: "Recovery" },
  { id: 7, url: "https://picsum.photos/id/180/1200/800", title: "24×7 Towing Service", category: "Towing" },
  { id: 8, url: "https://picsum.photos/id/133/1200/800", title: "Heavy Lift - Vattavada Pass", category: "Crane" }
];

const testimonials: Testimonial[] = [
  { id: 1, name: "Ramesh Kumar", location: "Munnar", text: "Excellent service. My bus broke down near the tea estates at 2 AM. ABS reached within 40 mins and towed us safely.", rating: 5, service: "Breakdown" },
  { id: 2, name: "Priya Nair", location: "Adimali", text: "Called for a crane to lift a container. Professional team, very fair pricing and arrived ahead of time. Highly recommended.", rating: 5, service: "Crane Rental" },
  { id: 3, name: "Sajeev Thomas", location: "Marayoor", text: "Our truck went off the road near Irumbupalam. Recovery van team was extremely skilled. Saved us huge money and time.", rating: 5, service: "Recovery" },
  { id: 4, name: "Anita Mathew", location: "Vattavada", text: "Best crane service we have used in the high ranges. 100% reliable and they always answer calls instantly. Very happy.", rating: 5, service: "Crane Rental" }
];

// Hero Carousel Slides - Professional & SEO rich
const carouselSlides: CarouselSlide[] = [
  {
    id: 1,
    image: "https://picsum.photos/id/1016/1920/1080",
    title: "24×7 Crane & Towing",
    subtitle: "The No.1 Professional Crane Rental, Recovery & Breakdown Service in Munnar & The High Ranges",
    cta: "Get Instant Quote"
  },
  {
    id: 2,
    image: "https://picsum.photos/id/160/1920/1080",
    title: "Heavy Vehicle Recovery",
    subtitle: "Specialized towing, recovery vans and cranes for trucks, buses and commercial vehicles across all hill routes",
    cta: "Call Now: +91 98765 43210"
  },
  {
    id: 3,
    image: "https://picsum.photos/id/201/1920/1080",
    title: "Serving 7+ Destinations",
    subtitle: "Munnar • Anachal • Marayoor • Adimali • Irumbupalam • Vattavada • Devikulam & Surrounding Areas",
    cta: "Check Service Areas"
  },
  {
    id: 4,
    image: "https://picsum.photos/id/29/1920/1080",
    title: "Fastest Response Time",
    subtitle: "Average 35 minute response across all locations. Trusted by 2500+ customers since 2008",
    cta: "Request Service"
  }
];

const PHONE = "+919876543210";
const WHATSAPP = "919876543210";

const App: React.FC = () => {
  // Navigation & UI States
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Carousel States - Fully Animated Auto + Manual
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  // Enquiry Form States + Automatic Response
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Crane Rental Service',
    location: 'Munnar',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [enquiryResponse, setEnquiryResponse] = useState({
    name: '',
    service: '',
    location: '',
    quote: '',
    waMessage: ''
  });

  // Smooth Scroll Navigation - SEO friendly and User friendly
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  // Auto Carousel with pause on hover
  useEffect(() => {
    if (isCarouselPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 4800);

    return () => clearInterval(timer);
  }, [isCarouselPaused]);

  // Intersection Observer for Active Nav - Better UX + SEO Navigation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Carousel Controls - Manual + Animated
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsCarouselPaused(true);
    setTimeout(() => setIsCarouselPaused(false), 6500);
  };

  const goToPrev = () => {
    const newSlide = currentSlide === 0 ? carouselSlides.length - 1 : currentSlide - 1;
    goToSlide(newSlide);
  };

  const goToNext = () => {
    const newSlide = (currentSlide + 1) % carouselSlides.length;
    goToSlide(newSlide);
  };

  // Gallery Lightbox
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setShowLightbox(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setShowLightbox(false);
    document.body.style.overflow = 'visible';
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  // Handle Form Input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // AUTOMATIC SALES ENQUIRY RESPONSE - Fully Animated
  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and phone number");
      return;
    }

    setIsSubmitting(true);

    // Simulate realistic processing
    setTimeout(() => {
      const service = formData.service;
      const location = formData.location;
      
      // Dynamic pricing + instant quote generation
      const basePrices: { [key: string]: number } = {
        "Crane Rental Service": 8500,
        "Towing Service": 4200,
        "Recovery Van Service": 6800,
        "Breakdown Service": 2500,
        "Heavy Vehicle Recovery": 11000,
        "24×7 Roadside Assistance": 1999
      };
      
      const price = basePrices[service] || 4500;
      const randomFactor = Math.floor(Math.random() * 800) + 400;
      const finalQuote = `₹${(price + randomFactor).toLocaleString()}`;

      const waMessage = encodeURIComponent(
        `Hello ABS Crane Service,\n\nI need ${service} in ${location}.\n\nMy Name: ${formData.name}\nPhone: ${formData.phone}\n${formData.message ? 'Details: ' + formData.message : ''}\n\nPlease send me the instant quotation and ETA.`
      );

      const responseData = {
        name: formData.name,
        service: service,
        location: location,
        quote: finalQuote,
        waMessage: waMessage
      };

      setEnquiryResponse(responseData);
      setShowResponse(true);
      setIsSubmitting(false);

      // Reset form
      setFormData({
        name: '',
        phone: '',
        service: 'Crane Rental Service',
        location: 'Munnar',
        message: ''
      });

      // Scroll to response
      setTimeout(() => {
        const responseEl = document.getElementById('enquiry-response');
        if (responseEl) {
          responseEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 80);
    }, 820);
  };

  // Open WhatsApp with prefilled quotation instantly
  const openWhatsApp = (customMessage?: string) => {
    const message = customMessage || `Hello ABS Crane Service, I need professional crane / towing / recovery service urgently in Munnar area. Please provide instant quotation.`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Direct WhatsApp from automatic response
  const sendToWhatsAppFromResponse = () => {
    window.open(`https://wa.me/${WHATSAPP}?text=${enquiryResponse.waMessage}`, '_blank');
  };

  const closeResponse = () => {
    setShowResponse(false);
  };

  // Call Now
  const callNow = () => {
    window.location.href = `tel:${PHONE}`;
  };

  // Navigation items
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Areas', id: 'areas' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* TOP BAR - Professional Contact Bar */}
      <div className="bg-[#0A2540] text-white py-2.5 text-sm">
        <div className="max-w-7xl mx-auto px-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
          <div className="flex items-center gap-5 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" /> 
              <a href={`tel:${PHONE}`} className="hover:text-orange-400 transition-colors font-medium tracking-wide">{PHONE}</a>
            </div>
            <div className="hidden sm:block text-white/30">|</div>
            <div className="flex items-center gap-1.5 text-orange-400 font-medium">
              <Clock className="w-3.5 h-3.5" /> 24×7 EMERGENCY SERVICE
            </div>
          </div>
          <button 
            onClick={() => openWhatsApp()}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 active:bg-white/30 px-4 py-1 rounded-full text-xs font-semibold tracking-wider transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5" /> WHATSAPP INSTANT QUOTE
          </button>
        </div>
      </div>

      {/* NAVIGATION - Animated Professional Menu */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0A2540] to-slate-800 flex items-center justify-center shadow-md">
                <span className="text-white text-2xl font-black tracking-[-1.5px]">ABS</span>
              </div>
              <div>
                <div className="font-black text-2xl tracking-[-1.2px] text-[#0A2540]">ABS CRANE</div>
                <div className="text-[9px] text-orange-600 -mt-1 font-bold tracking-[2px]">MUNNAR • EST 2008</div>
              </div>
            </div>

            {/* Desktop Navigation - Animated Links */}
            <div className="hidden lg:flex items-center gap-9 text-sm font-semibold">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link uppercase tracking-[1.25px] text-sm transition-all hover:text-orange-600 ${activeSection === item.id ? 'active text-orange-600' : 'text-slate-700'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button 
                onClick={callNow}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold border border-[#0A2540] hover:bg-[#0A2540] hover:text-white rounded-full transition-all active:scale-[0.985]"
              >
                <Phone className="w-4 h-4" /> CALL NOW
              </button>
              <button 
                onClick={() => openWhatsApp()}
                className="btn-primary flex items-center gap-2.5 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-orange-600/30 transition-all active:scale-[0.985]"
              >
                <MessageCircle className="w-4 h-4" /> WHATSAPP QUOTE
              </button>
            </div>

            {/* Mobile Hamburger - Animated */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="lg:hidden hamburger p-2"
              aria-label="Toggle Menu"
            >
              <span className={isMobileMenuOpen ? 'open' : ''}></span>
              <span className={isMobileMenuOpen ? 'open' : ''}></span>
              <span className={isMobileMenuOpen ? 'open' : ''}></span>
            </button>
          </div>
        </div>

        {/* MOBILE MENU - Animated Slide Down */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t bg-white mobile-menu overflow-hidden"
            >
              <div className="px-6 py-7 flex flex-col gap-y-4 text-base font-semibold">
                {navItems.map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)} 
                    className="text-left py-1.5 text-slate-700 hover:text-orange-600 active:text-orange-600 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 flex flex-col gap-3 border-t">
                  <button onClick={callNow} className="w-full py-3.5 rounded-2xl border-2 border-[#0A2540] font-semibold text-sm flex justify-center gap-2">
                    <Phone className="w-4 h-4" /> CALL {PHONE}
                  </button>
                  <button onClick={() => openWhatsApp()} className="w-full py-3.5 rounded-2xl bg-orange-600 text-white font-bold flex justify-center gap-2 text-sm">
                    <MessageCircle className="w-4 h-4" /> INSTANT WHATSAPP QUOTE
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION - Top Bar Image Carousel: AUTO + MANUAL + ANIMATIONS */}
      <section id="home" className="relative pt-1 bg-slate-950">
        <div 
          className="carousel-container relative h-[100dvh] max-h-[720px] min-h-[580px] w-full"
          onMouseEnter={() => setIsCarouselPaused(true)}
          onMouseLeave={() => setIsCarouselPaused(false)}
        >
          {carouselSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img 
                src={slide.image} 
                alt={`${slide.title} - ABS Crane Service Munnar`} 
                className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/90 to-black/60" />
              
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-5xl px-6 md:px-12 mx-auto text-white">
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-md px-4 py-1 text-xs tracking-[2.5px] mb-4 font-semibold border border-white/20">
                      EST. 2008 • #1 IN THE HIGH RANGES
                    </div>
                    
                    <h1 className="hero-title text-white text-[52px] sm:text-[64px] md:text-[72px] leading-[0.96] font-black tracking-[-3.5px] mb-5">
                      {slide.title}
                    </h1>
                    
                    <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-medium max-w-[31ch] mb-9 tracking-[-0.3px]">
                      {slide.subtitle}
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                      <button 
                        onClick={() => scrollToSection('contact')}
                        className="btn-primary group flex items-center gap-3 bg-white hover:bg-orange-50 text-[#0A2540] font-bold px-9 py-[17px] text-base rounded-full active:scale-[0.985] transition-all"
                      >
                        {slide.cta} <ArrowRight className="group-hover:translate-x-0.5 transition" />
                      </button>
                      
                      <button 
                        onClick={() => openWhatsApp()}
                        className="flex items-center gap-3 px-8 py-[17px] text-base font-bold border-2 border-white/70 hover:bg-white/10 hover:border-white backdrop-blur rounded-full transition-all"
                      >
                        <MessageCircle className="w-5 h-5" /> WHATSAPP NOW
                      </button>
                    </div>

                    <div className="flex items-center gap-4 text-xs mt-8 text-white/70 font-medium tracking-widest">
                      <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5" /> 24×7 LIVE</div>
                      <div>4.9 / 5 FROM 1248 REVIEWS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Carousel Controls - Beautiful Animated */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white/80 w-3'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow Buttons - Animated */}
          <button 
            onClick={goToPrev} 
            className="carousel-btn absolute left-4 md:left-7 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-xl text-[#0A2540] z-30"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={goToNext}
            className="carousel-btn absolute right-4 md:right-7 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-xl text-[#0A2540] z-30"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Trust Bar on Carousel */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent py-4 hidden md:block">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-x-9 text-white/70 text-xs tracking-[1.5px] font-medium">
              <div>100% SAFE</div><div>INSURED</div><div>EXPERIENCED CREW</div><div>ALL VEHICLE TYPES</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / STATS BAR - Animated */}
      <div className="border-b bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "2,500+", label: "Successful Services" },
            { number: "4.9★", label: "Customer Rating" },
            { number: "16", label: "Years Experience" },
            { number: "7+", label: "Towns Covered" }
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="font-black text-4xl md:text-[43px] text-[#0A2540] tracking-[-1.5px] stat-number">{stat.number}</div>
              <div className="text-sm text-slate-600 font-semibold tracking-wide mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT / WHY US SECTION */}
      <section className="max-w-7xl mx-auto px-5 pt-20 pb-16" id="about">
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-10 items-center">
          <div className="lg:col-span-7">
            <div className="uppercase tracking-[3px] text-orange-600 text-xs font-bold mb-3">MUNNAR'S MOST TRUSTED</div>
            <h2 className="text-5xl md:text-6xl leading-none font-black tracking-[-2.5px] text-[#0A2540] mb-6">
              The No.1 Crane, Towing &amp; Recovery Service<br />in the High Ranges
            </h2>
            <p className="text-xl text-slate-600 max-w-[52ch] leading-relaxed">
              ABS Crane Service has been delivering fast, reliable and professional crane rental, towing, recovery and breakdown services across Munnar and surrounding hill stations for over 16 years.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={() => scrollToSection('services')} className="btn-primary px-8 py-4 text-base bg-[#0A2540] hover:bg-black transition text-white rounded-2xl font-bold flex items-center gap-2">EXPLORE ALL SERVICES <ArrowRight /></button>
              <button onClick={() => scrollToSection('contact')} className="px-8 py-4 text-base font-semibold border-2 border-slate-300 hover:border-slate-900 rounded-2xl transition">GET QUOTE IN 30 SECONDS</button>
            </div>
          </div>
          <div className="lg:col-span-5 bg-[#0A2540] text-white rounded-3xl px-9 py-9 text-lg">
            <div className="space-y-6 text-white/90">
              <div className="flex gap-4">
                <div className="font-bold tracking-widest text-orange-400 text-xs pt-1">01</div>
                <div>Trained and certified operators for all crane types</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold tracking-widest text-orange-400 text-xs pt-1">02</div>
                <div>Modern fleet with GPS tracking and 24×7 dispatch</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold tracking-widest text-orange-400 text-xs pt-1">03</div>
                <div>Transparent pricing — no hidden costs</div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold tracking-widest text-orange-400 text-xs pt-1">04</div>
                <div>Fastest average arrival time in the region</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION — 6 Core Services with animations */}
      <section id="services" className="bg-slate-50 py-20 border-y">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <div className="text-orange-600 font-bold tracking-[3px] text-sm mb-2">COMPLETE PROFESSIONAL SOLUTIONS</div>
            <h2 className="text-5xl font-black tracking-[-2.2px] text-[#0A2540]">Our Services</h2>
            <p className="mt-3 text-xl text-slate-600 max-w-md mx-auto">Expert crane rental, towing, recovery and breakdown services for every situation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <motion.div 
                key={service.id} 
                whileHover={{ y: -6 }}
                className="service-card group bg-white border border-slate-200 rounded-3xl p-8 flex flex-col shadow-sm hover:border-orange-200 hover:shadow-xl"
              >
                <div className="text-orange-600 mb-5">{service.icon}</div>
                <h3 className="font-black text-3xl tracking-tight mb-3 text-[#0A2540]">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-1">{service.description}</p>
                
                <ul className="space-y-[9px] mb-7 text-sm">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" /> {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t flex items-end justify-between">
                  <div>
                    <div className="text-xs font-medium text-slate-500">STARTING FROM</div>
                    <div className="font-black text-3xl text-[#0A2540] tracking-tight">{service.price}</div>
                  </div>
                  <button 
                    onClick={() => {
                      setFormData(prev => ({ ...prev, service: service.title }));
                      scrollToSection('contact');
                    }}
                    className="btn-primary bg-[#0A2540] text-white text-sm px-8 py-3 rounded-full font-bold flex items-center gap-1.5 hover:bg-black transition"
                  >
                    BOOK NOW <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button onClick={() => scrollToSection('contact')} className="text-lg font-semibold text-orange-600 hover:text-orange-700 inline-flex items-center gap-2">
              Need a custom quote? Talk to us instantly <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS - 7 Locations */}
      <section id="areas" className="max-w-7xl mx-auto px-5 py-20">
        <div className="text-center mb-12">
          <div className="uppercase text-orange-600 font-extrabold tracking-[3px] text-xs mb-1">COVERAGE ACROSS THE HIGH RANGES</div>
          <h2 className="font-black text-[#0A2540] text-5xl tracking-[-1.9px]">Areas We Serve</h2>
          <p className="max-w-md mx-auto mt-3 text-slate-600">Fast response in Munnar and nearby destinations. Call us for service anywhere in Idukki district.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {areas.map((area) => (
            <div key={area.id} className="area-card group border border-slate-200 rounded-3xl p-7 hover:border-orange-500 bg-white transition-all">
              <div className="flex items-baseline gap-2 mb-2">
                <MapPin className="w-5 h-5 text-orange-600" />
                <h3 className="font-black text-2xl tracking-tight">{area.name}</h3>
              </div>
              <div className="font-semibold text-sm text-orange-600 mb-4">{area.distance} from Munnar HQ</div>
              <p className="text-slate-600 text-[15px] leading-relaxed">{area.description}</p>
              <button onClick={() => {
                setFormData(prev => ({...prev, location: area.name}));
                scrollToSection('contact');
              }} className="mt-7 text-sm inline-flex items-center font-semibold text-orange-600 group-hover:gap-1.5 transition-all">
                GET SERVICE HERE <ArrowRight className="ml-1.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center text-sm text-slate-500">
          Also serving: Chinnakanal • Rajakkad • Nedumkandam • Kumily • Kothamangalam • Aluva and surrounding regions.
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-y-4">
            <div>
              <div className="text-orange-400 font-bold tracking-[3px] text-xs">OUR WORK IN ACTION</div>
              <h2 className="font-black text-white text-6xl tracking-[-2.5px]">Recent Projects</h2>
            </div>
            <button onClick={() => scrollToSection('contact')} className="font-semibold text-lg flex items-center gap-2 text-white/70 hover:text-white">
              Need the same service? <ArrowRight />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <div 
                key={img.id} 
                onClick={() => openLightbox(index)}
                className="group relative aspect-[16/10.3] overflow-hidden cursor-pointer rounded-3xl shadow-xl"
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.12]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="text-sm font-medium tracking-widest text-orange-400 mb-px">{img.category.toUpperCase()}</div>
                  <div className="font-bold text-xl text-white leading-tight pr-3">{img.title}</div>
                </div>
                <div className="absolute top-5 right-5 px-4 py-1 bg-white/95 text-[#0A2540] rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition">VIEW FULL</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 text-white/50 text-sm">Click any image to view in full screen • All photos are from real operations</div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="max-w-7xl mx-auto px-5 py-20">
        <div className="text-center mb-11">
          <div className="text-orange-600 tracking-[3px] font-bold text-sm">REAL CUSTOMERS. REAL RESULTS.</div>
          <h2 className="font-black tracking-[-2.3px] text-[#0A2540] text-5xl">Trusted Across the Hills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial bg-white border border-slate-200 p-9 rounded-3xl">
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="italic text-[17px] leading-tight mb-8 text-slate-700">“{testimonial.text}”</p>
              <div>
                <div className="font-bold tracking-tight">{testimonial.name}</div>
                <div className="text-sm text-slate-500">{testimonial.location} • {testimonial.service}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT + AUTOMATIC ENQUIRY + WHATSAPP RESPONSE - 6th Page Section */}
      <section id="contact" className="bg-[#0A2540] py-16 text-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-x-14 gap-y-14">
            {/* Left: Contact Info + CTA */}
            <div>
              <div className="uppercase tracking-[3.5px] text-orange-400 text-xs font-bold">READY FOR IMMEDIATE ASSISTANCE?</div>
              <h2 className="text-white text-6xl font-black tracking-[-2.8px] mt-3 mb-6 leading-none">Get Your Instant<br />Quote Today</h2>
              
              <div className="space-y-6 text-lg text-white/80 max-w-md mb-11">
                <p>Fill the form or contact us directly. Our team will provide you a clear quotation and ETA within minutes.</p>
                <div className="pt-3 flex flex-col gap-y-[17px] text-sm">
                  <a href={`tel:${PHONE}`} className="flex items-center gap-3 font-medium text-white hover:text-orange-400 transition">
                    <div className="bg-white/10 p-2.5 rounded-xl"><Phone className="w-5 h-5" /></div> {PHONE}
                  </a>
                  <button onClick={() => openWhatsApp()} className="flex items-center gap-3 font-medium text-white hover:text-orange-400 transition text-left">
                    <div className="bg-white/10 p-2.5 rounded-xl"><MessageCircle className="w-5 h-5" /></div> WHATSAPP INSTANT RESPONSE
                  </button>
                </div>
              </div>
              <div className="inline-block bg-white/10 text-sm font-medium px-5 py-2 rounded-full">Average response time: 38 seconds</div>
            </div>

            {/* Right: FORM + AUTOMATIC AI-LIKE RESPONSE */}
            <div className="bg-white rounded-3xl p-8 md:p-9 text-slate-900">
              <h3 className="font-extrabold text-3xl tracking-tight mb-1">Request Instant Quote</h3>
              <p className="text-sm text-slate-600 mb-7">We reply in under 2 minutes. 100% transparent pricing.</p>

              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-widest font-semibold text-slate-500 mb-1.5">YOUR NAME</label>
                    <input 
                      type="text" name="name" value={formData.name} onChange={handleInputChange}
                      required placeholder="Full Name" 
                      className="form-input w-full bg-white border border-slate-300 px-5 py-[13px] rounded-2xl text-base placeholder:text-slate-400" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest font-semibold text-slate-500 mb-1.5">WHATSAPP / MOBILE</label>
                    <input 
                      type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                      required placeholder="+91 98765 43210" 
                      className="form-input w-full bg-white border border-slate-300 px-5 py-[13px] rounded-2xl text-base placeholder:text-slate-400" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs tracking-widest font-semibold text-slate-500 mb-1.5">SERVICE REQUIRED</label>
                    <select 
                      name="service" value={formData.service} onChange={handleInputChange}
                      className="form-input w-full bg-white border border-slate-300 px-5 py-[13px] rounded-2xl text-base"
                    >
                      {services.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest font-semibold text-slate-500 mb-1.5">LOCATION</label>
                    <select 
                      name="location" value={formData.location} onChange={handleInputChange}
                      className="form-input w-full bg-white border border-slate-300 px-5 py-[13px] rounded-2xl text-base"
                    >
                      {areas.map(a => <option key={a.id} value={a.name}>{a.name}</option>)}
                      <option value="Other">Other Location</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest font-semibold text-slate-500 mb-1.5">DETAILS (OPTIONAL)</label>
                  <textarea 
                    name="message" value={formData.message} onChange={handleInputChange} rows={3}
                    placeholder="Vehicle type, problem description or any other requirements..." 
                    className="form-input w-full bg-white border border-slate-300 px-5 py-4 rounded-2xl text-base resize-y placeholder:text-slate-400" 
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary mt-2 w-full py-4 bg-[#0A2540] hover:bg-black disabled:bg-slate-700 text-white font-extrabold tracking-wider text-base rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-[0.985]"
                >
                  {isSubmitting ? "SENDING ENQUIRY..." : "GET INSTANT QUOTE + ETA"}
                  <ArrowRight />
                </button>
                <div className="text-center text-xs text-slate-500 pt-1">We will reply instantly via WhatsApp &amp; Call</div>
              </form>
            </div>
          </div>

          {/* AUTOMATIC SALES ENQUIRY ANSWER — Animated Beautiful Response */}
          <AnimatePresence>
            {showResponse && (
              <div id="enquiry-response" className="mt-8">
                <motion.div 
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ type: "spring", bounce: 0.1 }}
                  className="enquiry-response bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-slate-900 relative"
                >
                  <button onClick={closeResponse} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600">
                    <X className="w-6 h-6" />
                  </button>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-emerald-500"><CheckCircle className="w-8 h-8" /></div>
                    <div>
                      <div className="font-extrabold tracking-tight text-3xl">Thank You, {enquiryResponse.name}!</div>
                      <div className="text-emerald-600 text-sm font-bold tracking-[2px]">ENQUIRY RECEIVED • INSTANT QUOTE GENERATED</div>
                    </div>
                  </div>

                  <div className="text-xl text-slate-700 mt-2 mb-6 leading-tight">
                    Your request for <span className="font-bold text-[#0A2540]">{enquiryResponse.service}</span> in <span className="font-bold text-[#0A2540]">{enquiryResponse.location}</span> has been received.
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-7">
                    <div className="text-sm uppercase text-orange-600 tracking-widest mb-1 font-bold">YOUR ESTIMATED QUOTE</div>
                    <div className="text-5xl font-black text-orange-600 tracking-[-2px]">{enquiryResponse.quote}</div>
                    <div className="text-sm text-orange-600 mt-1">This is a base estimate. Final quote will be confirmed in under 2 minutes.</div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <button 
                      onClick={sendToWhatsAppFromResponse}
                      className="btn-primary flex items-center justify-center gap-2 font-extrabold py-4 rounded-2xl bg-[#25D366] hover:bg-[#128C7E] active:bg-[#0F7D6C] text-white text-lg transition-all"
                    >
                      <MessageCircle className="w-5 h-5" /> SEND TO WHATSAPP — GET CONFIRMED QUOTE
                    </button>
                    <button 
                      onClick={callNow} 
                      className="flex items-center justify-center gap-2 font-extrabold py-4 rounded-2xl border border-slate-300 hover:bg-slate-50 transition text-lg"
                    >
                      <Phone className="w-5 h-5" /> CALL US NOW: {PHONE}
                    </button>
                  </div>

                  <div className="text-center text-xs mt-6 text-slate-500">Our executive is already notified and will reach you within minutes.</div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* FINAL CTA BAR */}
      <div className="bg-orange-600 py-6 text-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="font-bold text-xl tracking-tight">Need emergency help right now? We are available 24×7.</div>
          <div className="flex items-center gap-3 text-sm font-bold">
            <button onClick={callNow} className="bg-white text-orange-600 px-9 py-[13px] rounded-full hover:bg-orange-100 transition">CALL {PHONE}</button>
            <button onClick={() => openWhatsApp()} className="border-2 border-white px-8 py-[13px] rounded-full">WHATSAPP QUOTE</button>
          </div>
        </div>
      </div>

      {/* FOOTER - SEO Optimized */}
      <footer className="bg-[#0A2540] text-white/70 py-14 text-sm">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-y-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <span className="font-black text-[#0A2540] text-xl tracking-tighter">ABS</span>
              </div>
              <span className="font-bold text-white text-2xl tracking-tighter">ABS CRANE SERVICE</span>
            </div>
            <div className="max-w-xs leading-snug">
              The #1 rated crane rental, towing, recovery and breakdown service provider in Munnar and the Western Ghats since 2008.
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="font-semibold text-white mb-4 tracking-widest text-xs">QUICK LINKS</div>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              {navItems.map(i => (
                <button key={i.id} onClick={() => scrollToSection(i.id)} className="hover:text-white text-left">{i.label}</button>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="font-semibold text-white mb-4 tracking-widest text-xs">CONTACT US</div>
            <div className="space-y-1 text-[15px]">
              <div><a href={`tel:${PHONE}`} className="hover:text-white transition font-medium text-lg text-white">{PHONE}</a></div>
              <div>Munnar, Kerala, India - 685612</div>
              <div className="pt-1">Email: <a href="mailto:abs.munnar@gmail.com" className="hover:text-white">abs.munnar@gmail.com</a></div>
              <div className="text-[13px] pt-2">Available in: Munnar • Anachal • Marayoor • Adimali • Irumbupalam • Vattavada • Devikulam</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-xs text-center max-w-7xl mx-auto px-6 tracking-wide text-white/50">
          © {new Date().getFullYear()} ABS Crane Service. All Rights Reserved. Munnar, Kerala. 
          Professional Crane &amp; Towing Services • 100% Reliable • 24×7 • SEO Optimized
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON - Animated */}
      <button 
        onClick={() => openWhatsApp()}
        className="whatsapp-float fixed bottom-8 right-6 z-[60] flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] active:bg-[#0F7D6C] transition-all shadow-2xl px-5 py-3.5 text-white rounded-full font-bold text-[13px] tracking-wider"
      >
        <MessageCircle className="w-5 h-5" /> WHATSAPP US
      </button>

      {/* GALLERY LIGHTBOX - Smooth Animated */}
      <AnimatePresence>
        {showLightbox && (
          <div className="fixed inset-0 bg-black/95 z-[70] flex items-center justify-center p-4 lightbox" onClick={closeLightbox}>
            <div className="relative w-full max-w-[1100px]" onClick={e => e.stopPropagation()}>
              <button onClick={closeLightbox} className="absolute -top-14 right-1 text-white/70 hover:text-white">
                <X className="w-9 h-9" />
              </button>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                <img 
                  src={galleryImages[currentImageIndex].url} 
                  alt={galleryImages[currentImageIndex].title}
                  className="w-full max-h-[82vh] object-contain" 
                />
                
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 p-7 text-white">
                  <div className="uppercase tracking-[3px] text-xs text-orange-400">{galleryImages[currentImageIndex].category}</div>
                  <div className="text-3xl font-bold tracking-tight">{galleryImages[currentImageIndex].title}</div>
                </div>
              </div>

              {/* Lightbox Navigation */}
              <button onClick={goToPrevImage} className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-black p-4 rounded-full">
                <ChevronLeft size={26} />
              </button>
              <button onClick={goToNextImage} className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-black p-4 rounded-full">
                <ChevronRight size={26} />
              </button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
