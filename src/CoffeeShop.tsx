import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Coffee, Instagram, Facebook, Twitter, MapPin, Phone, Mail, ChevronRight, Star, Quote } from 'lucide-react';

// --- Components ---

const Logo = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    className="flex items-center gap-3 group cursor-pointer"
  >
    <div className="relative">
      <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shadow-[0_0_20px_rgba(197,160,89,0.3)] group-hover:shadow-[0_0_30px_rgba(197,160,89,0.5)] transition-all duration-500">
        <Coffee className="text-coffee-dark w-7 h-7" />
      </div>
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute -inset-1 rounded-full border border-coffee-accent/30"
      />
    </div>
    <div className="flex flex-col -space-y-1">
      <span className="text-2xl font-serif font-bold tracking-tighter text-gold">COZY CUP</span>
      <span className="text-[10px] tracking-[0.4em] font-sans font-medium text-coffee-accent uppercase">Café & Roastery</span>
    </div>
  </motion.div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleOrderNow = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3 glass-dark' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Logo />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold tracking-widest uppercase text-white hover:text-gold transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <button 
            onClick={handleOrderNow}
            className="gold-gradient text-coffee-dark font-bold py-2.5 px-8 rounded-full text-xs tracking-widest uppercase transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] active:scale-95"
          >
            Order Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gold" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass-dark absolute top-full left-0 w-full border-t border-white/5"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-serif font-bold text-white hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={handleOrderNow}
                className="gold-gradient text-coffee-dark font-bold py-4 px-8 rounded-full w-full tracking-widest uppercase text-sm"
              >
                Order Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const handleExploreMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1920" 
          alt="Coffee Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-coffee-dark" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold font-medium tracking-[0.5em] uppercase mb-6 block text-sm">Est. 2010 • Premium Roastery</span>
          <h1 className="text-6xl md:text-9xl font-serif text-coffee-cream font-bold mb-8 leading-[0.9] tracking-tighter">
            Elegance in <br />
            <span className="text-gold italic font-normal">Every Sip</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Welcome to <span className="text-gold font-medium">Cozy Cup Café</span>. 
            Where the art of roasting meets the soul of the city. Discover artisanal blends crafted for the true connoisseur.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={handleExploreMenu}
              className="gold-gradient text-coffee-dark font-bold py-5 px-12 rounded-full text-sm tracking-[0.2em] uppercase transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(197,160,89,0.5)] active:scale-95"
            >
              Order Now
            </button>
            <button className="group flex items-center gap-3 text-white hover:text-gold transition-all duration-300 font-bold tracking-widest uppercase text-sm">
              <span className="w-12 h-[1px] bg-gold group-hover:w-16 transition-all duration-300" />
              Our Story
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-gold">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
};

const MenuCard = ({ item, index }: { item: any, index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative w-full h-[480px] perspective-1000"
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 15 }}
        className="w-full h-full relative preserve-3d"
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden bg-coffee-medium rounded-3xl overflow-hidden border border-white/5 shadow-2xl group">
          <div className="h-2/3 overflow-hidden relative">
            <img 
              src={item.img} 
              alt={item.name} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-medium via-transparent to-transparent" />
            <div className="absolute top-6 right-6 glass px-4 py-1.5 rounded-full font-serif font-bold text-gold border border-gold/30">
              {item.price}
            </div>
          </div>
          <div className="p-8 -mt-8 relative z-10">
            <h3 className="text-2xl font-serif font-bold mb-3 text-coffee-cream group-hover:text-gold transition-colors">{item.name}</h3>
            <p className="text-gray-500 text-sm line-clamp-2 font-light leading-relaxed mb-6">{item.desc}</p>
            <button 
              onClick={() => setIsFlipped(true)}
              className="flex items-center gap-2 text-gold font-bold text-xs tracking-widest uppercase hover:gap-4 transition-all"
            >
              Add to Order <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Back Side (Specialty) */}
        <div 
          className="absolute inset-0 backface-hidden bg-coffee-light text-white rounded-3xl p-10 flex flex-col justify-center items-center text-center border border-gold/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mb-8">
            <Coffee className="text-gold w-8 h-8" />
          </div>
          <h3 className="text-3xl font-serif font-bold mb-4 text-gold">{item.name}</h3>
          <p className="text-gray-400 mb-10 leading-relaxed font-light italic">
            "{item.specialty}"
          </p>
          <div className="flex flex-col gap-4 w-full">
            <button className="gold-gradient text-coffee-dark font-bold py-4 px-8 rounded-full w-full text-xs tracking-widest uppercase hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all">
              Confirm Order
            </button>
            <button 
              onClick={() => setIsFlipped(false)}
              className="text-gray-500 hover:text-gold text-[10px] tracking-[0.2em] uppercase font-bold transition-colors"
            >
              Return to Menu
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('Hot Coffee');

  const categories = ['Hot Coffee', 'Cold Coffee', 'Desserts'];
  
  const menuItems = {
    'Hot Coffee': [
      { 
        name: 'Classic Espresso', 
        price: '$4.50', 
        desc: 'Bold, rich, and intense shot of pure coffee.', 
        img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=600',
        specialty: 'Sourced from the high altitudes of Ethiopia, our espresso features a complex profile with hints of dark cocoa and wild berries.'
      },
      { 
        name: 'Velvet Cappuccino', 
        price: '$5.50', 
        desc: 'Espresso with silky steamed milk and dense foam.', 
        img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=600',
        specialty: 'Our signature micro-foam is hand-whisked to create a cloud-like texture that balances the intensity of our house blend.'
      },
      { 
        name: 'Artisan Latte', 
        price: '$5.75', 
        desc: 'Smooth espresso with creamy steamed milk.', 
        img: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80&w=600',
        specialty: 'We use organic, grass-fed dairy steamed to precisely 150°F to unlock the natural sweetness without adding sugar.'
      },
      { 
        name: 'Gold Macchiato', 
        price: '$6.25', 
        desc: 'Espresso marked with vanilla and gold caramel.', 
        img: 'https://images.unsplash.com/photo-1544787210-282713df82ef?auto=format&fit=crop&q=80&w=600',
        specialty: 'Layered with Madagascar vanilla bean and our house-made salted gold caramel reduction for a luxurious finish.'
      },
    ],
    'Cold Coffee': [
      { 
        name: 'Midnight Cold Brew', 
        price: '$5.00', 
        desc: '24-hour slow-steeped for ultimate smoothness.', 
        img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=600',
        specialty: 'Steeped in small batches using triple-filtered spring water, resulting in a low-acid, naturally sweet and powerful brew.'
      },
      { 
        name: 'Iced Gold Mocha', 
        price: '$6.50', 
        desc: 'Espresso with dark chocolate and chilled milk.', 
        img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=600',
        specialty: 'Crafted with 72% single-origin dark chocolate from Ecuador and a hint of Himalayan sea salt.'
      },
      { 
        name: 'Nitro Espresso', 
        price: '$6.00', 
        desc: 'Nitrogen-infused cold brew for a creamy head.', 
        img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600',
        specialty: 'Infused with food-grade nitrogen to create a cascading effect and a naturally creamy texture without any dairy.'
      },
      { 
        name: 'Caramel Frappé', 
        price: '$7.00', 
        desc: 'Blended coffee with ice and gold leaf caramel.', 
        img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600',
        specialty: 'A decadent blend of espresso, crushed ice, and our signature caramel, topped with hand-whisked vanilla cream.'
      },
    ],
    'Desserts': [
      { 
        name: 'Golden Croissant', 
        price: '$4.75', 
        desc: 'Flaky, buttery pastry with dark chocolate.', 
        img: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&q=80&w=600',
        specialty: 'Traditional French method using AOP butter, resulting in 81 layers of flaky perfection and a rich chocolate core.'
      },
      { 
        name: 'Espresso Cheesecake', 
        price: '$7.50', 
        desc: 'Creamy cheesecake infused with our house blend.', 
        img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=600',
        specialty: 'A velvet-smooth cream cheese base swirled with concentrated espresso and set on a dark cocoa biscuit crust.'
      },
      { 
        name: 'Classic Tiramisu', 
        price: '$8.50', 
        desc: 'Italian ladyfingers soaked in espresso and rum.', 
        img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=600',
        specialty: 'Made with imported Italian mascarpone and ladyfingers soaked for 12 hours in our award-winning cold brew.'
      },
      { 
        name: 'Berry Tart', 
        price: '$6.25', 
        desc: 'Shortcrust pastry with vanilla cream and berries.', 
        img: 'https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?auto=format&fit=crop&q=80&w=600',
        specialty: 'Seasonal wild berries hand-picked and glazed with a light honey reduction over a Madagascar vanilla bean custard.'
      },
    ]
  };

  return (
    <section id="menu" className="py-32 bg-coffee-dark relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 border border-gold rounded-full" />
        <div className="absolute bottom-40 -right-40 w-[500px] h-[500px] border border-gold rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-medium tracking-[0.4em] uppercase text-xs mb-4 block"
          >
            Curated Selection
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-serif font-bold mb-8 text-coffee-cream"
          >
            Our Signature <span className="text-gold italic">Menu</span>
          </motion.h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-10 py-3 rounded-full text-xs tracking-widest uppercase font-bold transition-all duration-500 border ${activeCategory === cat ? 'gold-gradient text-coffee-dark border-gold' : 'bg-transparent text-gray-500 border-white/10 hover:border-gold/50 hover:text-gold'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          <AnimatePresence mode="wait">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <MenuCard key={item.name} item={item} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-coffee-medium text-coffee-cream overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1501339817302-ae4fbbad0ce2?auto=format&fit=crop&q=80&w=800" 
                alt="Café Interior" 
                className="w-full h-auto grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-gold/20 rounded-[40px] -z-0" />
            <div className="absolute -top-10 -left-10 w-32 h-32 gold-gradient rounded-full -z-0 opacity-10 blur-3xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-gold font-medium tracking-[0.4em] uppercase text-xs mb-6 block">The Legacy</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-10 leading-tight text-coffee-cream">
              Where Tradition <br /> Meets <span className="text-gold italic">Modernity</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
              At <span className="text-gold font-medium">Cozy Cup Café</span>, we believe that coffee is a ritual, not just a routine. 
              Founded in 2010 by a group of passionate roasters, we've dedicated over a decade to mastering the delicate balance of heat, time, and bean.
            </p>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed font-light">
              Every bean is ethically sourced and roasted in small batches at our local roastery, ensuring that the unique characteristics of each origin are preserved and celebrated in your cup.
            </p>
            
            <div className="grid grid-cols-2 gap-12 mb-12 border-t border-white/5 pt-12">
              <div>
                <h4 className="text-4xl font-serif font-bold text-gold mb-2">100%</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold">Direct Trade Beans</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif font-bold text-gold mb-2">12+</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold">Master Roasters</p>
              </div>
            </div>

            <button className="group flex items-center gap-4 text-gold font-bold text-xs tracking-[0.3em] uppercase hover:gap-6 transition-all">
              Discover Our Process <ChevronRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  const images = [
    'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600',
  ];

  return (
    <section id="gallery" className="py-32 bg-coffee-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold font-medium tracking-[0.4em] uppercase text-xs mb-4 block">Visual Journey</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-coffee-cream">The <span className="text-gold italic">Atmosphere</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[30px] aspect-[4/5] cursor-pointer border border-white/5"
            >
              <img 
                src={img} 
                alt={`Gallery ${index}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center mb-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <Coffee size={20} className="text-coffee-dark" />
                </div>
                <p className="text-white font-serif text-xl transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-75">Artisanal Moments</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    { name: 'Julian Vance', role: 'Coffee Connoisseur', text: 'The depth of flavor in their Midnight Cold Brew is unlike anything I\'ve experienced. A true masterclass in roasting.', rating: 5 },
    { name: 'Sophia Loren', role: 'Lifestyle Architect', text: 'Cozy Cup Café isn\'t just a coffee shop; it\'s a sanctuary. The dark, classic aesthetic is the perfect backdrop for my morning ritual.', rating: 5 },
    { name: 'Marcus Thorne', role: 'Tech Executive', text: 'Consistency is key for me. Every single cup, every single day, is served to perfection. The Gold Macchiato is a work of art.', rating: 5 },
  ];

  return (
    <section id="testimonials" className="py-32 bg-coffee-medium overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-gold font-medium tracking-[0.4em] uppercase text-xs mb-4 block">Kind Words</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-coffee-cream">Guest <span className="text-gold italic">Experiences</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-coffee-dark/50 p-12 rounded-[40px] border border-white/5 relative group hover:border-gold/20 transition-all duration-500"
            >
              <Quote className="absolute top-10 right-12 text-gold/10 w-16 h-16 group-hover:text-gold/20 transition-all duration-500" />
              <div className="flex gap-1 mb-8">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-gray-400 italic mb-10 leading-relaxed font-light text-lg">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-coffee-light border border-gold/20 flex items-center justify-center font-serif text-gold font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-coffee-cream tracking-wide">{t.name}</h4>
                  <p className="text-[10px] text-gold uppercase tracking-[0.2em] font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-coffee-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-coffee-medium rounded-[50px] overflow-hidden border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row">
          {/* Contact Info */}
          <div className="lg:w-2/5 bg-coffee-light p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 gold-gradient opacity-5 rounded-full blur-3xl -mr-32 -mt-32" />
            <h3 className="text-4xl font-serif font-bold mb-12 text-gold">Get in Touch</h3>
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center group-hover:gold-gradient group-hover:text-coffee-dark transition-all duration-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-coffee-cream tracking-wide">Our Roastery</h4>
                  <p className="text-gray-500 text-sm font-light">42nd Gold Avenue, Suite 101<br />Manhattan, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center group-hover:gold-gradient group-hover:text-coffee-dark transition-all duration-500">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-coffee-cream tracking-wide">Direct Line</h4>
                  <p className="text-gray-500 text-sm font-light">+1 (800) COZY-CUP</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center group-hover:gold-gradient group-hover:text-coffee-dark transition-all duration-500">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-coffee-cream tracking-wide">Inquiries</h4>
                  <p className="text-gray-500 text-sm font-light">concierge@cozycup.cafe</p>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <h4 className="text-[10px] font-bold mb-6 uppercase tracking-[0.4em] text-gold">Connect</h4>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:gold-gradient hover:text-coffee-dark transition-all duration-500">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-3/5 p-16">
            <h3 className="text-4xl font-serif font-bold mb-12 text-coffee-cream">Send a <span className="text-gold italic">Message</span></h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-coffee-dark/50 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-gold/50 transition-all text-coffee-cream font-light"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-coffee-dark/50 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-gold/50 transition-all text-coffee-cream font-light"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Message</label>
                <textarea 
                  rows={5} 
                  className="w-full bg-coffee-dark/50 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-gold/50 transition-all text-coffee-cream font-light resize-none"
                />
              </div>
              <button className="gold-gradient text-coffee-dark font-bold py-5 px-12 rounded-2xl w-full tracking-[0.3em] uppercase text-xs hover:shadow-[0_0_30px_rgba(197,160,89,0.3)] transition-all transform active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-coffee-cream pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="space-y-8">
            <Logo />
            <p className="text-gray-500 leading-relaxed font-light text-sm">
              Since 2010, we have been dedicated to the pursuit of the perfect cup. Sustainable, ethical, and uncompromisingly classic.
            </p>
          </div>

          <div>
            <h4 className="text-gold font-bold mb-8 uppercase tracking-[0.2em] text-xs">Navigation</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-light">
              <li><a href="#home" className="hover:text-gold transition-colors">Home Experience</a></li>
              <li><a href="#menu" className="hover:text-gold transition-colors">The Menu</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">Our Legacy</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Concierge</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-bold mb-8 uppercase tracking-[0.2em] text-xs">Roastery Hours</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-light">
              <li className="flex justify-between"><span>Mon - Thu:</span> <span className="text-coffee-cream">07:00 - 20:00</span></li>
              <li className="flex justify-between"><span>Fri - Sat:</span> <span className="text-coffee-cream">08:00 - 22:00</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span className="text-coffee-cream">08:00 - 18:00</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-bold mb-8 uppercase tracking-[0.2em] text-xs">The Journal</h4>
            <p className="text-gray-500 mb-8 text-sm font-light">Join our exclusive circle for roasting updates and private events.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 outline-none focus:border-gold/50 w-full text-sm font-light"
              />
              <button className="gold-gradient text-coffee-dark p-3 rounded-xl hover:shadow-[0_0_15px_rgba(197,160,89,0.3)] transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-[10px] tracking-[0.2em] uppercase font-bold">
          <p>© {new Date().getFullYear()} Cozy Cup Café. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function CoffeeShop() {
  return (
    <div className="min-h-screen bg-coffee-dark selection:bg-gold selection:text-coffee-dark">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
