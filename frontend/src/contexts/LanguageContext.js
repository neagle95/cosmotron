import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hu' : 'en');
  };

  const t = (key) => {
    const translations = {
      en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.equipment': 'Equipment',
        'nav.pricing': 'Pricing',
        'nav.leaderboard': 'Leaderboard',
        'nav.booking': 'Booking',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title': 'COSMOTRON',
        'hero.subtitle': 'Elite Powerlifting Gym',
        'hero.description': 'Push your limits in our cyberpunk-inspired powerlifting facility in Szeged, Hungary. Experience the future of strength training.',
        'hero.cta.pricing': 'View Pricing',
        'hero.cta.leaderboard': 'Leaderboard',
        
        // About Section
        'about.title': 'ABOUT COSMOTRON',
        'about.description': 'Located in the heart of Szeged, Hungary, Cosmotron represents the future of powerlifting. Our state-of-the-art facility combines cutting-edge equipment with a cyberpunk atmosphere that motivates athletes to transcend their limits.',
        'about.philosophy': 'We welcome powerlifters of all levels - from beginners taking their first steps into strength training to elite competitors preparing for international competitions.',
        'about.leaderboard.title': 'Top 10 Leaderboard',
        'about.leaderboard.description': 'See our strongest members',
        
        // Equipment Section
        'equipment.title': 'EQUIPMENT',
        'equipment.subtitle': 'IPF Certified Powerlifting Equipment',
        'equipment.squat': 'Competition Squat Racks',
        'equipment.bench': 'IPF Certified Bench Press',
        'equipment.deadlift': 'Deadlift Platforms',
        'equipment.bars': 'Olympic Barbells (20kg)',
        'equipment.plates': 'Calibrated Competition Plates',
        'equipment.accessories': 'Full Range of Accessories',
        
        // Pricing Section
        'pricing.title': 'MEMBERSHIP PRICING',
        'pricing.monthly': 'Monthly',
        'pricing.quarterly': '3 Months',
        'pricing.yearly': 'Annual',
        'pricing.monthly.price': '15,000 HUF',
        'pricing.quarterly.price': '40,000 HUF',
        'pricing.yearly.price': '144,000 HUF',
        'pricing.monthly.desc': 'Perfect for trying us out',
        'pricing.quarterly.desc': 'Great value for regular training',
        'pricing.yearly.desc': 'Best value for serious athletes',
        'pricing.features.access': '24/7 Gym Access',
        'pricing.features.equipment': 'All Equipment Included',
        'pricing.features.coaching': 'Basic Coaching Support',
        'pricing.features.community': 'Member Community Access',
        'pricing.payment': 'Payment Methods: Cash, Bank Transfer, Card',
        'pricing.rules.title': 'Usage Rules:',
        'pricing.rules.respect': '• Respect equipment and other members',
        'pricing.rules.rerack': '• Always re-rack weights',
        'pricing.rules.spotting': '• Ask for spotting when needed',
        
        // Leaderboard Section
        'leaderboard.title': 'TOP 10 LEADERBOARD',
        'leaderboard.men': 'Men',
        'leaderboard.women': 'Women',
        'leaderboard.total': 'Total',
        'leaderboard.competitions': 'Competitions',
        
        // Booking Section
        'booking.title': 'BOOK YOUR SESSION',
        'booking.coming.title': 'Coming Soon',
        'booking.coming.desc': 'Advanced booking system will be available soon. For now, contact us directly to schedule your training.',
        
        // Contact Section
        'contact.title': 'CONTACT US',
        'contact.address': 'Address',
        'contact.city': 'Szeged, Hungary',
        'contact.hours': 'Opening Hours',
        'contact.hours.weekday': 'Monday - Friday: 6:00 - 22:00',
        'contact.hours.weekend': 'Saturday - Sunday: 8:00 - 20:00',
        'contact.phone': 'Phone',
        'contact.email': 'Email',
        'contact.form.name': 'Name',
        'contact.form.email': 'Email',
        'contact.form.message': 'Message',
        'contact.form.send': 'Send Message',
        
        // Footer
        'footer.slogan': 'Transcend Your Limits',
        'footer.rights': '© 2025 Cosmotron. All rights reserved.'
      },
      hu: {
        // Navigation
        'nav.home': 'Főoldal',
        'nav.about': 'Rólunk',
        'nav.equipment': 'Felszerelés',
        'nav.pricing': 'Árak',
        'nav.leaderboard': 'Ranglista',
        'nav.booking': 'Foglalás',
        'nav.contact': 'Kapcsolat',
        
        // Hero Section
        'hero.title': 'COSMOTRON',
        'hero.subtitle': 'Elit Powerlifting Terem',
        'hero.description': 'Lépd túl a határaidat cyberpunk-ihletésű powerlifting létesítményünkben Szegeden. Tapasztald meg az erőedzés jövőjét.',
        'hero.cta.pricing': 'Árak megtekintése',
        'hero.cta.leaderboard': 'Ranglista',
        
        // About Section
        'about.title': 'A COSMOTRONRÓL',
        'about.description': 'Szeged szívében található Cosmotron a powerlifting jövőjét képviseli. Legmodernebb létesítményünk a legújabb felszereléseket ötvözi egy cyberpunk légkörrel, amely arra motiválja a sportolókat, hogy túllépjenek saját határaikon.',
        'about.philosophy': 'Minden szintű powerliftert szívesen fogadunk - a kezdőktől, akik most teszik első lépéseiket az erőedzésben, egészen az elit versenyzőkig, akik nemzetközi versenyekre készülnek.',
        'about.leaderboard.title': 'Top 10 Ranglista',
        'about.leaderboard.description': 'Nézd meg legerősebb tagjainkat',
        
        // Equipment Section
        'equipment.title': 'FELSZERELÉS',
        'equipment.subtitle': 'IPF Tanúsított Powerlifting Felszerelés',
        'equipment.squat': 'Verseny Guggolóállványok',
        'equipment.bench': 'IPF Tanúsított Fekvenyomó',
        'equipment.deadlift': 'Felhúzó Platformok',
        'equipment.bars': 'Olimpiai Súlyzórudak (20kg)',
        'equipment.plates': 'Kalibrált Verseny Tárcsák',
        'equipment.accessories': 'Teljes Kiegészítő Választék',
        
        // Pricing Section
        'pricing.title': 'TAGSÁG ÁRAK',
        'pricing.monthly': 'Havi',
        'pricing.quarterly': '3 Hónapos',
        'pricing.yearly': 'Éves',
        'pricing.monthly.price': '15.000 Ft',
        'pricing.quarterly.price': '40.000 Ft',
        'pricing.yearly.price': '144.000 Ft',
        'pricing.monthly.desc': 'Tökéletes kipróbálásra',
        'pricing.quarterly.desc': 'Nagyszerű érték rendszeres edzéshez',
        'pricing.yearly.desc': 'Legjobb érték komoly sportolóknak',
        'pricing.features.access': '24/7 Terem Hozzáférés',
        'pricing.features.equipment': 'Minden Felszerelés Benne',
        'pricing.features.coaching': 'Alap Edzői Támogatás',
        'pricing.features.community': 'Tag Közösség Hozzáférés',
        'pricing.payment': 'Fizetési módok: Készpénz, Átutalás, Kártya',
        'pricing.rules.title': 'Használati szabályok:',
        'pricing.rules.respect': '• Tiszteld a felszerelést és a többi tagot',
        'pricing.rules.rerack': '• Mindig rakd vissza a súlyokat',
        'pricing.rules.spotting': '• Kérj segítséget, ha szükséges',
        
        // Leaderboard Section
        'leaderboard.title': 'TOP 10 RANGLISTA',
        'leaderboard.men': 'Férfi',
        'leaderboard.women': 'Női',
        'leaderboard.total': 'Összesen',
        'leaderboard.competitions': 'Versenyek',
        
        // Booking Section
        'booking.title': 'FOGLALD LE AZ EDZÉSED',
        'booking.coming.title': 'Hamarosan',
        'booking.coming.desc': 'A fejlett foglalási rendszer hamarosan elérhető lesz. Egyelőre vedd fel velünk közvetlenül a kapcsolatot az edzés időpontjának egyeztetéséhez.',
        
        // Contact Section
        'contact.title': 'KAPCSOLAT',
        'contact.address': 'Cím',
        'contact.city': 'Szeged, Magyarország',
        'contact.hours': 'Nyitvatartás',
        'contact.hours.weekday': 'Hétfő - Péntek: 6:00 - 22:00',
        'contact.hours.weekend': 'Szombat - Vasárnap: 8:00 - 20:00',
        'contact.phone': 'Telefon',
        'contact.email': 'Email',
        'contact.form.name': 'Név',
        'contact.form.email': 'Email',
        'contact.form.message': 'Üzenet',
        'contact.form.send': 'Üzenet küldése',
        
        // Footer
        'footer.slogan': 'Lépd Túl A Határaidat',
        'footer.rights': '© 2025 Cosmotron. Minden jog fenntartva.'
      }
    };
    
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};