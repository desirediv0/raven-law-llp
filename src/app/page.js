"use client";
import { MapPin, Phone, Mail, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
// import ajayTewariImg from "@/assets/ajay-tewari.jpg";
import abhimanyuImg from "@/assets/abhimanyu-tewari.jpg";
import amitabhImg from "@/assets/amitabh-tewari.jpg";
// import sanyaImg from "@/assets/sanya-kaushal.jpg";
// import tusharImg from "@/assets/tushar-bathija.jpg";
// import rioImg from "@/assets/rio.jpg";
// import dilmrigImg from "@/assets/dilmrig-nayani.jpg";
// import mahimaImg from "@/assets/mahima-gupta.jpg";
// import shivamImg from "@/assets/shivam-sharma.jpg";
import satvikImg from "@/assets/satvik-bansal.jpg";
import siddhant from "@/assets/siddhant.png";
import aniket from "@/assets/aniket.png";
import dummy from "@/assets/dummy.png";
import ishaan from "@/assets/ishaan.png";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Index = () => {
  const [locationOpen, setLocationOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [callOpen, setCallOpen] = useState(false);

  const offices = [
    {
      title: "DELHI OFFICE",
      address: "GF, B4/39, Safdarjung Enclave, New Delhi-110029, India",
      email: "delhioffice@tewariandassociates.com",
      phone: ["011-26716556", "+919873446301"],
      lat: 28.565254,
      lng: 77.195084,
    },
    {
      title: "CHANDIGARH OFFICE",
      address: "House No. 3038, Sector 21, Chandigarh, 160022",
      email: "chandigarhoffice@tewariandassociates.com",
      phone: ["+911724628544", "+91 7015498386"],
      lat: 30.7333,
      lng: 76.7794,
    },
  ];

  const seminars = [
    {
      title: "Article 21 and the Right to Bail",
      link: "https://www.youtube.com/watch?v=Aiw-8A78zf4&t=2s",
    },
    {
      title: "Debt Recovery: An overview of the Indian system",
      link: "https://www.youtube.com/watch?v=e_LR-dkqEGo",
    },
    {
      title:
        "Racial discrimination in India: realising the spirit of Article 14 and the need for a comprehensive Civil Rights Act",
      link: "https://www.youtube.com/watch?v=8dRp6G4hK0I",
    },
    {
      title:
        "Understanding the inherent powers of the High Courts under Section 482 of CrPC",
      link: "https://www.youtube.com/watch?v=lIzvxqnR6lE",
    },
    {
      title: "The Citizenship Amendment Act: The North-Eastern perspective",
      link: "https://www.youtube.com/watch?v=T2LgGBinMCI",
    },
    {
      title: "The Insolvency and Bankruptcy Code, 2016: A brief overview",
      link: "https://www.youtube.com/watch?v=3eUQ5wcUpbI",
    },
    {
      title: "Analysis of Section 397 of the CrPC",
      link: "https://www.youtube.com/watch?v=tI6919Rkcl0&t=18s",
    },
    {
      title: "RERA Act: an overview",
      link: "https://www.youtube.com/watch?v=bqtiVjjVDCQ",
    },
    {
      title: "Role and duties of Government Advocates",
      link: "https://www.youtube.com/watch?v=lNnoW7CrXFk&t=7s",
    },
    {
      title:
        "The functioning of Courts during Covid-19: a pan-Indian perspective",
      link: "https://www.youtube.com/watch?v=usUygTs0OVE&t=25s",
    },
    {
      title:
        "Article 214 r/w Article 231: discussing the constitutional principles relating to common High Courts in India",
      link: "https://www.youtube.com/watch?v=Hzpq0tlgkrM&t=3267s",
    },
  ];

  const articles = [
    {
      title:
        "A Mother Let Her Child Paint on Her Nude Body, MF Hussain's 'Bharat Mata': When Does Art Become Obscene?",
      link: "https://www.news18.com/news/buzz/a-mother-let-her-child-paint-on-her-nude-body-mf-hussains-bharat-mata-when-does-art-become-obscene-2803611.html",
    },
    {
      title: "The Delhi exodus: What we failed to learn from 1889 and 1900",
      link: "https://indianexpress.com/article/opinion/the-delhi-exodus-what-we-failed-to-learn-from-1889-and-1900-coronavirus-india-lockdown-6340334/",
    },
    {
      title:
        '"The development of sports law in India is still at a very nascent stage and jurisprudence on this subject in India is still evolving" In conversation with Amitabh Tewari',
      link: "https://tewari-associates.netlify.app/",
    },
    {
      title:
        "Why 1-page, 4-section Epidemic Diseases Act of 1897 is wholly incapable of dealing with coronavirus",
      link: "https://indianexpress.com/article/opinion/web-edits/coromavirus-outbreak-epidemic-diseases-act-1897-6310555/",
    },
    {
      title:
        "India's 'Triage' Guidelines Don't Explain Who Gets a Ventilator and That's a Concern During Covid-19",
      link: "https://www.news18.com/news/buzz/indias-triage-guidelines-dont-explain-who-gets-a-ventilator-and-thats-a-concern-when-fighting-covid-19-2568357.html",
    },
  ];

  const menuItems = [
    "Home",
    "About",
    "Office Members",
    "Seminars",
    "Articles",
    "Contact",
  ];

  return (
    <main className="bg-slate-50">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-sm shadow-xl z-40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-slate-100"
            >
              RAVEN LAW <span className="text-yellow-600">LLP</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-slate-200 hover:text-yellow-600 font-medium transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-600 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-200 hover:text-yellow-600 transition-colors p-2"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-slate-800 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-3">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-slate-200 hover:text-yellow-600 font-medium transition-colors py-2 border-b border-slate-700"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Location Dialog */}
      <AnimatePresence>
        {locationOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setLocationOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6 flex justify-between items-center rounded-t-2xl">
                <h2 className="text-2xl font-bold">Our Locations</h2>
                <button
                  onClick={() => setLocationOpen(false)}
                  className="hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6 grid md:grid-cols-2 gap-6">
                {offices.map((office, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-slate-200 rounded-xl p-6 hover:border-yellow-600 transition-colors bg-gradient-to-br from-slate-50 to-white shadow-lg"
                  >
                    <h3 className="text-lg font-bold mb-4 text-slate-800">
                      {office.title}
                    </h3>
                    <div className="space-y-3 text-sm mb-4">
                      <div className="flex gap-2">
                        <MapPin
                          size={16}
                          className="text-yellow-600 flex-shrink-0 mt-1"
                        />
                        <p className="text-slate-600">{office.address}</p>
                      </div>
                      {office.email && (
                        <div className="flex gap-2">
                          <Mail
                            size={16}
                            className="text-yellow-600 flex-shrink-0 mt-1"
                          />
                          <a
                            href={`mailto:${office.email}`}
                            className="text-yellow-600 hover:underline break-all"
                          >
                            {office.email}
                          </a>
                        </div>
                      )}
                      {office.phone.map((p, i) => (
                        <div key={i} className="flex gap-2">
                          <Phone
                            size={16}
                            className="text-yellow-600 flex-shrink-0 mt-1"
                          />
                          <a
                            href={`tel:${p}`}
                            className="text-yellow-600 hover:underline"
                          >
                            {p}
                          </a>
                        </div>
                      ))}
                    </div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${office.lat},${office.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-yellow-600 to-yellow-600/90 text-white py-3 rounded-lg md:font-semibold hover:from-yellow-600/90 hover:to-yellow-600 transition-all text-center shadow-md hover:shadow-lg"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call Selection Dialog */}
      <AnimatePresence>
        {callOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setCallOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full"
            >
              <div className="sticky top-0 bg-yellow-600 text-white p-4 flex justify-between items-center rounded-t-2xl">
                <h3 className="text-lg font-semibold">Call an Office</h3>
                <button
                  onClick={() => setCallOpen(false)}
                  className="p-2 rounded-full bg-yellow-700/20 hover:bg-yellow-700/30"
                >
                  <X size={20} className="text-white" />
                </button>
              </div>

              <div className="p-4 space-y-4">
                {offices.map((office, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-lg p-3"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-800">
                        {office.title}
                      </h4>
                      <span className="text-xs text-slate-500">
                        Tap to call
                      </span>
                    </div>
                    <div className="mt-3 space-y-2">
                      {office.phone.map((p, i) => {
                        const cleaned = String(p || "").replace(/\s+/g, "");
                        return (
                          <a
                            key={i}
                            href={`tel:${cleaned}`}
                            className="flex items-center gap-3 text-yellow-700 hover:underline"
                            onClick={() => setCallOpen(false)}
                          >
                            <Phone size={16} />
                            <span className="text-sm">
                              {String(p || "").trim()}
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col items-center justify-center text-white text-center min-h-screen overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(/bg.avif)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)",
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 md:px-10 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
          >
            <span className="text-white">RAVEN LAW</span>{" "}
            <span className="text-yellow-600">LLP</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl mb-3 opacity-90"
          >
            With offices in New Delhi and Chandigarh
          </motion.p>

          {/* Inner Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="max-w-7xl mx-auto py-4">
              {/* Founder */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 bg-slate-900/60 border-2 border-yellow-600/30 rounded-2xl p-6 md:p-10 backdrop-blur-md shadow-2xl mb-2"
              >
                {/* LEFT IMAGE */}
                {/* <div className="flex-shrink-0">
                  <Image
                    src={ajayTewariImg}
                    alt="Hon'ble Justice Ajay Tewari"
                    width={180}
                    height={180}
                    className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover border-4 border-yellow-600 shadow-xl"
                  />
                </div> */}

                {/* RIGHT CONTENT */}
                <div className="text-center md:text-left flex flex-col justify-center">
                  {/* <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    HON&apos;BLE JUSTICE AJAY TEWARI (RETD.)
                  </h3> */}
                  {/* <p className="text-base md:text-lg text-yellow-500 font-semibold mb-4">
                    Punjab and Haryana High Court
                  </p> */}
                  <p className="text-white/90 max-w-3xl text-sm md:text-base leading-relaxed text-justify">
                    Raven Law LLP is a law firm headed by fourth-generation
                    lawyers with offices in New Delhi and Chandigarh. The firm
                    continues its long-standing tradition of legal excellence
                    and ethical practice, offering a wide range of litigation
                    and advisory services.
                  </p>
                </div>
              </motion.div>

              {/* Managed By */}
              <motion.div variants={itemVariants}>
                <p className="text-center text-sm md:font-semibold text-white/80 mb-6 uppercase tracking-wider">
                  Managed By
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {[
                    {
                      name: "ABHIMANYU TEWARI",
                      role: "Advocate-On-Record Supreme Court of India",
                      office: "Managed out of New Delhi",
                      img: abhimanyuImg,
                    },
                    {
                      name: "AMITABH TEWARI",
                      role: "Advocate, BLS LL.B, BCL (Oxford University)",
                      office: "Managed out of Chandigarh",
                      img: amitabhImg,
                    },
                  ].map((member, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-yellow-600 hover:shadow-2xl transition-all"
                    >
                      <Image
                        src={member.img}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-24 h-24 rounded-full mb-4 mx-auto object-cover border-4 border-yellow-600/20"
                      />
                      <p className="text-xs font-bold text-yellow-600 mb-2 uppercase tracking-wider">
                        {member.office}
                      </p>
                      <h3 className="text-base md:text-xl font-bold text-slate-800 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-slate-600 md:font-semibold text-xs md:text-sm">
                        {member.role}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-16 bg-gradient-to-br from-slate-50 to-slate-100"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
              ABOUT <span className="text-yellow-600">US</span>
            </h2>
            <div className="h-1 w-20 bg-yellow-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6 text-center">
            <p className="text-base md:text-lg text-slate-700 leading-relaxed text-justify">
              RAVEN LAW LLP is a law firm led by Abhimanyu Tewari and Amitabh
              Tewari, specialising in litigation and dispute resolution with
              offices in Chandigarh and New Delhi. The firm offers a range of
              all kind of services pertaining to litigation and dispute
              resolution across fora including Supreme Court, High Courts,
              Tribunals etc. The firm is built on a legacy of more than 80 years
              and provides quality legal services in practice areas involving
              civil, criminal, corporate and commercial, real estate, sports,
              entertainment, real estate and arbitration law. The partners are
              assisted by a team of 10 lawyers and other support staff across
              Delhi and Chandigarh.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Office Members Section */}
      <motion.section
        id="office-members"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
              RAVEN LAW <span className="text-yellow-600">LLP</span>
            </h2>
            <div className="h-1 w-20 bg-yellow-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Delhi Office */}
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 pb-3 border-b-2 border-yellow-600">
              NEW DELHI OFFICE
            </h3>

            <div className="grid  gap-6 mb-8">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border-2 border-slate-200 hover:border-yellow-600 shadow-lg hover:shadow-2xl transition-all"
              >
                <Image
                  src={abhimanyuImg}
                  alt="Abhimanyu Tewari"
                  className="w-32 h-32 rounded-full mb-4 mx-auto object-cover border-4 border-yellow-600/20"
                  width={144}
                  height={144}
                />
                <h4 className="text-xl font-bold text-slate-800 mb-1 text-center">
                  ABHIMANYU TEWARI
                </h4>
                <p className="text-gray-600 md:font-semibold text-sm text-center">
                  Partner
                </p>
                <p className="text-yellow-600 md:font-semibold text-sm mb-4 text-center">
                  Advocate-On-Record Supreme Court of India
                </p>
                <p className="text-slate-700 leading-relaxed text-sm text-justify">
                  The Delhi Office is led by Abhimanyu Tewari who is an Advocate
                  on Record at the Supreme Court of India. Mr. Abhimanyu Tewari
                  graduated from St. Stephens, Delhi in 2008 after completing
                  his Bachelor of Arts. Thereafter, he went on to pursue his law
                  from Punjab University, Chandigarh before starting his
                  practice in the Supreme Court of India in 2012. Mr. Abhimanyu
                  Tewari has extensive experience in handling matters pertaining
                  to civil, criminal, corporate and commercial, real estate,
                  sports, entertainment, real estate, arbitration law in the
                  Supreme Court of India, Punjab and Haryana High Court at
                  Chandigarh, National Company Law Tribunal etc.
                </p>
              </motion.div>

              {/* <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border-2 border-slate-200 hover:border-yellow-600 shadow-lg hover:shadow-2xl transition-all"
              >
                <Image
                  src={elizabethImg}
                  alt="Elizabeth Barr"
                  className="w-32 h-32 rounded-full mb-4 mx-auto object-cover border-4 border-yellow-600/20"
                  width={144}
                  height={144}
                />
                <h4 className="text-xl font-bold text-slate-800 mb-1 text-center">ELIZABETH BARR</h4>
                <p className="text-yellow-600 md:font-semibold text-sm mb-4 text-center">Standing Counsel, Arunachal Pradesh in Supreme Court of India</p>
                <p className="text-slate-700 leading-relaxed text-sm text-justify">
                  Miss Elizabeth Barr is the standing counsel for Arunachal Pradesh in the Supreme Court of India and she looks after the offices of the firm in Itanagar and Guwahati. Miss Barr specialises in matters involving Constitutional law, mines and minerals, Arbitration, Civil, Commercial, Criminal law arising out of the North-Eastern states like Assam and Arunachal Pradesh.
                </p>
              </motion.div> */}
            </div>



            {/* Delhi Team Members */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Siddhant Saroha",
                  img: siddhant,
                  role: "Partner",
                  desc: "Siddhant Saroha is an Advocate practicing before the Hon'ble Supreme Court of India. He also appears before the Hon'ble Delhi High Court, the Hon'ble High Court of Punjab and Haryana, the National Company Law Tribunal (NCLT), the National Company Law Appellate Tribunal (NCLAT), and various other judicial and quasi-judicial forums across india. He completed his BBA (Hons.) from Jindal Global Business School in 2019, followed by his LL.B. from Jindal Global Law School, graduating in 2022. He began his legal career with Tewari & Associates as an Associate and was elevated to Partner at Raven Law LLP in January 2025. Since then, he has become an important and integral part of the firm's leadership and litigation practice. Siddhant specialises in Criminal Law, Civil Law, Service Law, Arbitration, Election Petitions, Family Law, Election Law etc... His practice spans a wide spectrum of litigation, including complex bail matters, trial-level criminal defence, high-stakes civil and commercial disputes, contractual and corporate arbitrations, sensitive matrimonial and family disputes, and service matters involving disciplinary action, suspension, and promotions. He also regularly handles election petitions. He is known for his strategic litigation approach, meticulous research, clear drafting, and strong courtroom advocacy. ",
                },
                {
                  name: "Sidhant Awasthy",
                  img: dummy,
                  role: "Partner",
                  desc: "Sidhant Awasthy is an advocate with a diverse and dynamic practice, representing clients across criminal, civil–commercial, intellectual property, and constitutional law matters. An alumnus of The Scindia School, Gwalior, he went on to pursue Political Science (Hons.) at Kirori Mal College, University of Delhi, and subsequently earned his law degree from the Faculty of Law, University of Delhi. Sidhant has significant experience in criminal litigation, including cases under special statutes such as the NDPS Act, and regularly advises and represents clients in commercial disputes, trade mark and copyright infringement matters, and issues involving constitutional rights and public law. His practice spans both trial and appellate work, with a strong emphasis on strategic case-building and effective courtroom advocacy. He frequently appears before the Supreme Court of India, as well as the High Courts of Delhi, Punjab & Haryana, and Assam, and various tribunals and subordinate courts.Beyond the courtroom, Sidhant maintains a keen interest in public speaking and has participated in — and won — multiple national-level debating competitions. He is also passionate about sports, particularly squash and golf, which he pursues actively.",
                },
                {
                  name: "Aniket Kumar Parcha",
                  img: aniket,
                  role: "Associate",
                  desc: "Aniket Kumar Parcha is an advocate with a dynamic and evolving practice, representing clients across criminal, civil, corporate, and matrimonial matters. He regularly appears before the Hon’ble Supreme Court of India, the High Court of Delhi, various District Courts, and multiple tribunals, handling a broad spectrum of contentious and advisory work. Aniket’s professional experience encompasses drafting and arguing petitions, complaints, and applications, as well as conducting detailed legal research to support complex litigation. He has represented clients in matters and assisted Seniors under diverse statutory frameworks, including corporate and commercial disputes, matrimonial proceedings, and criminal trials.With a methodical, research-oriented, and solution-driven approach, Aniket brings precision and clarity to every case he handles. His practice reflects a balance between rigorous preparation and confident courtroom advocacy, making him an integral part of the firm’s litigation team.",
                },
              ].map((member, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-yellow-600 hover:shadow-xl transition-all"
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mb-4 mx-auto object-cover border-4 border-yellow-600/20"
                    width={96}
                    height={96}
                  />
                  <h4 className="text-lg font-bold text-slate-800 mb-1 text-center">
                    {member.name}
                  </h4>
                  <p className="text-yellow-600 md:font-semibold text-sm mb-3 text-center">
                    {member.role}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed text-justify">
                    {member.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Chandigarh Office */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 pb-3 border-b-2 border-yellow-600">
              CHANDIGARH OFFICE
            </h3>

            {/* <div className="mb-6">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border-2 border-slate-200 hover:border-yellow-600 shadow-lg hover:shadow-2xl transition-all"
              >
                <Image
                  src={amitabhImg}
                  alt="Amitabh Tewari"
                  className="w-32 h-32 rounded-full mb-4 mx-auto object-cover border-4 border-yellow-600/20"
                  width={144}
                  height={144}
                />
                <h4 className="text-xl font-bold text-slate-800 mb-1 text-center">AMITABH TEWARI</h4>
                <p className="text-yellow-600 md:font-semibold text-sm mb-4 text-center">Advocate, BLS LL.B, BCL (Oxford University)</p>
                <p className="text-slate-700 leading-relaxed text-sm text-justify">
                  The Chandigarh office is led by Amitabh Tewari. Mr. Amitabh Tewari graduated from Government Law College, Mumbai in 2014 and thereafter went on to pursue the Bachelor of Civil Law from the prestigious University of Oxford in 2015. Mr. Amitabh Tewari worked in Cyril Amarchand Mangaldas, Mumbai and Wadia Ghandy & Co, Delhi before starting his independent practice in Chandigarh. Mr. Amitabh Tewari has recently been awarded a certificate by Forbes in the category of Top 100 lawyers - Below ten years of experience. Mr Amitabh Tewari regularly appears before the Punjab and Haryana High Court National Company law Tribunal Chandigarh, Real Estate Regulatory Authority, Punjab, Real Estate Appellate Tribunal, Punjab, Real Estate Appellate Tribunal, Haryana, Consumer forum etc. Mr. Amitabh Tewari has extensive experience in sports law as he has represented various football clubs, coaches, players before the All India Football Federation and the FIFA Dispute Resolution Chamber, Zurich.
                </p>
              </motion.div>
            </div> */}

            {/* Chandigarh Team Members */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: "Amitabh Tewari",
                  role: "Advocate, BLS LL.B, BCL (Oxford University)",
                  img: amitabhImg,
                  desc: "The Chandigarh office is led by Amitabh Tewari. Mr. Amitabh Tewari graduated from Government Law College, Mumbai in 2014 and thereafter went on to pursue the Bachelor of Civil Law from the prestigious University of Oxford in 2015. Mr. Amitabh Tewari worked in Cyril Amarchand Mangaldas, Mumbai and Wadia Ghandy & Co, Delhi before starting his independent practice in Chandigarh. Mr. Amitabh Tewari has recently been awarded a certificate by Forbes in the category of Top 100 lawyers - Below ten years of experience. Mr Amitabh Tewari regularly appears before the Punjab and Haryana High Court National Company law Tribunal Chandigarh, Real Estate Regulatory Authority, Punjab, Real Estate Appellate Tribunal, Punjab, Real Estate Appellate Tribunal, Haryana, Consumer forum etc. Mr. Amitabh Tewari has extensive experience in sports law as he has represented various football clubs, coaches, players before the All India Football Federation and the FIFA Dispute Resolution Chamber, Zurich.",
                },
                {
                  name: "Satvik Bansal",
                  role: "Senior Associate",
                  img: satvikImg,
                  desc: "Satvik graduated from Government Law College, Mumbai in the year 2021. He is a Criminal and Civil Law enthusiast appearing before the Punjab and Haryana High Court, Real Estate Regulatory Authority, Central Administrative Tribunal and other forums in Chandigarh. He also has experience in appearing before the Bombay High Court, Maharasthra Adminstrative Tribunal, Labour Courts and NCLT, Mumbai.",
                },
                {
                  name: "Ishaan Mundeja",
                  role: "Associate",
                  img: ishaan,
                  desc: "Ishaan Mundeja is an Associate with the firm’s litigation team, engaged in matters across Punjab, Haryana, and Chandigarh. A graduate of Symbiosis Law School, Pune, he has developed extensive experience before the Hon’ble Punjab and Haryana High Court and various subordinate and quasi-judicial forums. His work encompasses criminal, commercial, and regulatory disputes, with a focus on drafting, legal research, and strategic case assistance.Ishaan is also actively involved in pro bono initiatives, with a particular commitment to advancing causes of civic welfare and accessibility rights.Drawing from varied professional and personal experiences, Ishaan approaches legal issues with empathy and practical insight. Outside the profession, he is deeply passionate about music and songwriting — a creative pursuit that complements his analytical thinking and reinforces his belief in balance, expression, and integrity, both in life and in law.",
                },
              ].map((member, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl border-2 border-slate-200 hover:border-yellow-600 hover:shadow-xl transition-all"
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mb-4 mx-auto object-cover border-4 border-yellow-600/20"
                    width={96}
                    height={96}
                  />
                  <h4 className="text-lg font-bold text-slate-800 mb-1 text-center">
                    {member.name}
                  </h4>
                  <p className="text-yellow-600 md:font-semibold text-sm mb-3 text-center">
                    {member.role}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed text-justify">
                    {member.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* <div className="mt-6">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border-2 border-slate-200 hover:border-yellow-600 shadow-lg hover:shadow-2xl transition-all"
              >
                <Image
                  src={satvikImg}
                  alt="Satvik Bansal"
                  className="w-32 h-32 rounded-full mb-4 mx-auto object-cover border-4 border-yellow-600/20"
                  width={144}
                  height={144}
                />
                <h4 className="text-xl font-bold text-slate-800 mb-1 text-center">SATVIK BANSAL</h4>
                <p className="text-yellow-600 md:font-semibold text-sm mb-4 text-center">Associate</p>
                <p className="text-slate-700 leading-relaxed text-sm text-justify">
                  Satvik graduated from Government Law College, Mumbai in the year 2021. He is a Criminal and Civil Law enthusiast appearing before the Punjab and Haryana High Court, Real Estate Regulatory Authority, Central Administrative Tribunal and other forums in Chandigarh. He also has experience in appearing before the Bombay High Court, Maharasthra Adminstrative Tribunal, Labour Courts and NCLT, Mumbai.
                </p>
              </motion.div>
            </div> */}
          </motion.div>
        </div>
      </motion.section>

      {/* Seminar Recording Section */}
      <motion.section
        id="seminars"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-16 bg-gradient-to-br from-slate-50 to-slate-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
              SEMINAR <span className="text-yellow-600">RECORDING</span>
            </h2>
            <div className="h-1 w-20 bg-yellow-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4"
          >
            {seminars.map((seminar, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-yellow-600 transition-all hover:shadow-xl flex flex-col items-center justify-between"
              >
                <p className="text-slate-800 md:font-semibold text-center mb-4 min-h-20 flex items-center justify-center text-sm">
                  {seminar.title}
                </p>
                <button
                  onClick={() => window.open(seminar.link, "_blank")}
                  className="w-full bg-gradient-to-r from-yellow-600 to-yellow-600/90 text-white md:font-semibold hover:from-yellow-600/90 hover:to-yellow-600 transition-colors py-2 rounded-lg text-xs md:text-sm shadow-md hover:shadow-lg"
                >
                  View Recording →
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Articles Section */}
      <motion.section
        id="articles"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
              <span className="text-yellow-600">ARTICLES</span>
            </h2>
            <div className="h-1 w-20 bg-yellow-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2"
          >
            {articles.map((article, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-xl p-6 hover:border-yellow-600 transition-all hover:shadow-xl flex flex-col items-center justify-between"
              >
                <p className="text-slate-800 md:font-semibold text-center mb-4 min-h-20 flex items-center justify-center text-sm">
                  {article.title}
                </p>
                <button
                  onClick={() => window.open(article.link, "_blank")}
                  className="w-full bg-gradient-to-r from-yellow-600 to-yellow-600/90 text-white md:font-semibold hover:from-yellow-600/90 hover:to-yellow-600 transition-colors py-2 rounded-lg text-xs md:text-sm shadow-md hover:shadow-lg"
                >
                  View Article →
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="disclaimer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-10 bg-gradient-to-br from-slate-50 to-slate-100"
      >
        <div className=" max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-semibold mb-10 text-slate-800 text-center tracking-tight">
            Legal Disclaimer
          </h1>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1  gap-2">
            {/* LEFT SIDE CONTENT */}
            <div>
              <p className="text-sm md:text-base leading-relaxed mb-4 text-slate-700">
                The Bar Council of India prohibits advocates from engaging in
                any form of advertisement or solicitation. By accessing the
                Raven Law LLP website (our website), the user acknowledges that:
              </p>

              <ul className="space-y-2 text-sm md:text-base leading-relaxed list-disc pl-6 text-slate-700">
                <li>
                  The user is voluntarily using our website to gain information
                  about us for their information and use. They also acknowledge
                  that there has been no attempt by us to advertise or solicit
                  work.
                </li>
                <li>
                  Any information obtained or downloaded from our website does
                  not lead to the creation of an attorney-client relationship
                  between the Firm and the user.
                </li>
                <li>
                  The content on this website is for informational purposes only
                  and cannot be construed to be a form of legal opinion or legal
                  advice.
                </li>
                <li>
                  Raven Law LLP will not be held liable for any consequences
                  from actions taken based on the materials or information
                  provided on this website.
                </li>
              </ul>
            </div>


          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              CONTACT <span className="text-yellow-600">US</span>
            </h2>
            <div className="h-1 w-20 bg-yellow-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6"
          >
            {offices.map((office, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur border-2 border-white/30 rounded-xl p-6 hover:bg-white/20 hover:border-yellow-600 transition-all shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-white">
                  {office.title}
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-2">
                    <MapPin
                      size={16}
                      className="text-yellow-600 flex-shrink-0 mt-1"
                    />
                    <p className="text-white/90">{office.address}</p>
                  </div>
                  {office.email && (
                    <div className="flex gap-2">
                      <Mail
                        size={16}
                        className="text-yellow-600 flex-shrink-0 mt-1"
                      />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-yellow-600 hover:underline break-all"
                      >
                        {office.email}
                      </a>
                    </div>
                  )}
                  {office.phone.map((p, i) => (
                    <div key={i} className="flex gap-2">
                      <Phone
                        size={16}
                        className="text-yellow-600 flex-shrink-0 mt-1"
                      />
                      <a
                        href={`tel:${p}`}
                        className="text-yellow-600 hover:underline"
                      >
                        {p}
                      </a>
                    </div>
                  ))}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${office.lat},${office.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 w-full bg-gradient-to-r from-yellow-600 to-yellow-600/90 text-white py-2 rounded-lg md:font-semibold hover:from-yellow-600/90 hover:to-yellow-600 transition-colors text-sm text-center shadow-md hover:shadow-lg"
                  >
                    View on Map
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <p className="text-white/60 text-sm">
              © 2025 by Raven Law LLP All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Fixed Action Buttons (responsive):
          - Desktop (md+): stacked circular buttons at bottom-right
          - Mobile (<md): full-width bottom bar with Call + Locate
      */}
      {/* Desktop: stacked circular buttons */}
      <div className="hidden md:flex flex-col gap-4 fixed bottom-8 right-8 z-30 items-end">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLocationOpen(true)}
          title="Find us on map"
          aria-label="Open map locations"
          className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-yellow-600/50 transition-all flex items-center justify-center font-bold"
          style={{
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        >
          <MapPin size={24} className="hover:rotate-12 transition-transform" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCallOpen(true)}
          title="Call primary office"
          aria-label="Open call options"
          className="inline-flex bg-white text-yellow-700 w-16 h-16 rounded-full shadow-lg hover:shadow-yellow-300/40 transition-all items-center justify-center font-bold"
        >
          <Phone size={20} />
        </motion.button>
      </div>

      {/* Mobile: bottom bar with two buttons */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-sm border-t border-slate-800 flex">
        <button
          onClick={() => setCallOpen(true)}
          className="flex-1 flex items-center justify-center gap-2 py-3 text-white bg-yellow-600/95 hover:bg-yellow-700 transition-colors font-semibold text-sm"
          aria-label="Open call options"
        >
          <Phone size={18} />
          <span>Call</span>
        </button>

        <button
          onClick={() => setLocationOpen(true)}
          className="flex-1 flex items-center justify-center gap-2 py-3 text-yellow-100 bg-transparent hover:bg-white/5 transition-colors font-semibold text-sm"
          aria-label="Open map locations"
        >
          <MapPin size={18} />
          <span>Locate</span>
        </button>
      </div>
    </main>
  );
};

export default Index;
