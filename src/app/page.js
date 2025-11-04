"use client";
import { MapPin, Phone, Mail, X, BookOpen, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
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

export default function Home() {
  const [locationOpen, setLocationOpen] = useState(false);

  const offices = [
    {
      title: "DELHI OFFICE",
      address: "B1/77, Block B 1, Safdarjung Enclave, New Delhi, Delhi 110029, India",
      email: "delhioffice@tewariandassociates.com",
      phone: ["011-26716556", "+919873446301"],
      lat: 28.5611,
      lng: 77.1995,
    },
    {
      title: "CHANDIGARH OFFICE",
      address: "House No. 3038, Sector 21, Chandigarh, 160022",
      email: "chandigarhoffice@tewariandassociates.com",
      phone: ["+911724628544", "+91 7015498386"],
      lat: 30.7333,
      lng: 76.7794,
    },
    {
      title: "ITANAGAR OFFICE",
      address: "Qtr No. D71, Sector P, Itanagar 791111",
      email: "",
      phone: ["+918375978714"],
      lat: 27.0844,
      lng: 93.6053,
    },
  ];

  const seminars = [
    "Article 21 and the Right to Bail",
    "Debt Recovery: An overview of the Indian system",
    "Racial discrimination in India: realising the spirit of Article 14 and the need for a comprehensive Civil Rights Act",
    "Understanding the inherent powers of the High Courts under Section 482 of CrPC",
    "The Citizenship Amendment Act: The North-Eastern perspective",
    "The Insolvency and Bankruptcy Code, 2016: A brief overview",
    "Analysis of Section 397 of the CrPC",
    "RERA Act: an overview",
    "Role and duties of Government Advocates",
    "The functioning of Courts during Covid-19: a pan-Indian perspective",
    "Article 214 r/w Article 231: discussing the constitutional principles relating to common High Courts in India",
  ];

  const articles = [
    "A Mother Let Her Child Paint on Her Nude Body, MF Hussain's 'Bharat Mata': When Does Art Become Obscene?",
    "The Delhi exodus: What we failed to learn from 1889 and 1900",
    "\"The development of sports law in India is still at a very nascent stage and jurisprudence on this subject in India is still evolving\" In conversation with Amitabh Tewari",
    "Why 1-page, 4-section Epidemic Diseases Act of 1897 is wholly incapable of dealing with coronavirus",
    "India's 'Triage' Guidelines Don't Explain Who Gets a Ventilator and That's a Concern During Covid-19",
  ];

  return (
    <main className="bg-slate-50">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 w-full bg-black/85 backdrop-blur-sm shadow-md z-40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-slate-200"
            >
              RAVEN LAW  <span className="text-yellow-700">LLP</span>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Office Members", "Seminars", "Articles", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-slate-200 hover:text-slate-300 font-medium transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-300 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
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
              className="bg-white rounded md:rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-gradient-to-r from-slate-800 to-slate-900 text-white p-3 md:p-6 flex justify-between items-center rounded md:rounded-t-2xl">
                <h2 className="text-xl md:text-2xl font-bold">Our Locations</h2>
                <button
                  onClick={() => setLocationOpen(false)}
                  className="hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-1 md:p-6 grid md:grid-cols-2 gap-6">
                {offices.slice(0, 2).map((office, idx) => (
                  <div key={idx} className="border-2 border-slate-200 rounded md:rounded-xl p-3 md:p-6 hover:border-slate-700 transition-colors bg-gradient-to-br from-slate-50 to-white">
                    <h3 className="text-lg font-bold mb-4 text-slate-800">{office.title}</h3>
                    <div className="space-y-2 md:space-y-3 text-sm mb-2 md:mb-4">
                      <div className="flex gap-2">
                        <MapPin size={16} className="text-slate-700 flex-shrink-0 mt-1" />
                        <p className="text-slate-600">{office.address}</p>
                      </div>
                      {office.email && (
                        <div className="flex gap-2">
                          <Mail size={16} className="text-slate-700 flex-shrink-0 mt-1" />
                          <a href={`mailto:${office.email}`} className="text-slate-700 hover:underline break-all">
                            {office.email}
                          </a>
                        </div>
                      )}
                      {office.phone.map((p, i) => (
                        <div key={i} className="flex gap-2">
                          <Phone size={16} className="text-slate-700 flex-shrink-0 mt-1" />
                          <a href={`tel:${p}`} className="text-slate-700 hover:underline">
                            {p}
                          </a>
                        </div>
                      ))}
                    </div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${office.lat},${office.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-slate-700 to-slate-900 text-white py-2 md:py-3 rounded-lg font-semibold hover:from-slate-800 hover:to-black transition-all text-center shadow-md hover:shadow-lg text-sm md:text-base"
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

      {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col items-center justify-center text-white text-center min-h-screen overflow-hidden"
        style={{
          backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url('https://img.freepik.com/free-photo/symbol-justice-courtroom_23-2152001191.jpg?t=st=1762249693~exp=1762253293~hmac=f0d9e191cd64e7e734f547b25f3204ca8d9378d0084e83dfbfac028347101e9b&w=1480')
    `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-3 md:px-10 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-4 leading-tight"
          >
            <span className="md:text-white text-black">RAVEN LAW</span>{' '}
            <span className="text-yellow-700">LLP</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl mb-4 md:mb-10 opacity-90"
          >
            With offices in New Delhi, Chandigarh, Guwahati and Itanagar
          </motion.p>

          {/* Inner Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}

          >
            <div className="max-w-7xl mx-auto py-2 ">
              {/* Founder */}
              <motion.div
                variants={itemVariants}
                className="text-center mb-2 p-4 md:p-6 rounded-2xl border border-slate-200 bg-slate-800/50 shadow-lg"
              >
                <h3 className="text-xl md:text-3xl font-bold text-white mb-2">
                  HON&apos;BLE JUSTICE AJAY TEWARI (RETD.)
                </h3>
                <p className="text-sm md:text-lg text-white font-semibold mb-4">
                  Punjab and Haryana High Court
                </p>
                <p className="text-white max-w-3xl mx-auto text-xs md:text-base">
                  Raven Law LLP is a fourth generation law office, with
                  offices in New Delhi, Chandigarh, Guwahati, and Itanagar.
                </p>
              </motion.div>

              {/* Managed By */}
              <motion.div variants={itemVariants}>
                <p className="text-center text-sm font-semibold text-white mb-3 md:mb-8 uppercase tracking-wider">
                  Managed By
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8">
                  {[
                    {
                      name: 'ABHIMANYU TEWARI',
                      role: 'Advocate-On-Record Supreme Court of India',
                      office: 'Managed out of New Delhi',
                      img: '/path/to/image1.jpg',
                      class: "col-span-1"
                    },
                    {
                      name: 'AMITABH TEWARI',
                      role: 'Advocate, BLS LL.B, BCL (Oxford University)',
                      office: 'Managed out of Chandigarh',
                      img: '/path/to/image2.jpg',
                      class: "col-span-1"
                    },
                    {
                      name: 'ELIZABETH BARR',
                      role:
                        'Standing Counsel, Arunachal Pradesh in Supreme Court of India',
                      office: 'Managed out of Guwahati & Itanagar',
                      img: '/path/to/image3.jpg',
                      class: "col-span-2 md:col-span-1"
                    },
                  ].map((member, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                      className={`bg-white p-4 md:p-6 rounded-lg border-2 border-slate-200 hover:border-slate-700 hover:shadow-lg transition-all ${member.class}`}
                    >
                      <Image
                        src={member.img}
                        alt={member.name}
                        width={100}
                        height={100}
                        className="rounded-full mb-4"
                      />
                      <p className="text-xs font-bold text-slate-500 mb-1 md:mb-3 uppercase tracking-wider">
                        {member.office}
                      </p>
                      <h3 className="text-base md:text-xl font-bold text-slate-800 mb-1 md:mb-2">
                        {member.name}
                      </h3>
                      <p className="text-slate-600 font-semibold  text-xs md:text-sm">
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


      {/* Leadership Section */}


      {/* About Section */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-10  bg-gradient-to-br from-slate-50 to-slate-100"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-10 md:mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
              ABOUT <span className="text-yellow-700">US</span>
            </h2>
            <div className="h-1 w-20 bg-yellow-700 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6 text-center mb-4 md:mb-10">
            <p className="text-sm md:text-lg text-slate-700 leading-relaxed">
              RAVEN LAW LLP is a boutique law firm specialising in litigation and dispute resolution with offices in Chandigarh, New Delhi, Guwahati and Itanagar. The firm offers a range of all kind of services pertaining to litigation and dispute resolution across fora including Supreme Court, High Courts, Tribunals etc. The firm has a legacy of more than 80 years in providing quality legal services in practice areas involving civil, criminal, corporate and commercial, real estate, sports, entertainment, real estate and arbitration law. The partners are assisted by a team of 10 lawyers and other support staff across Delhi and Chandigarh.
            </p>

            <p className="text-sm md:text-lg text-slate-700 leading-relaxed">
              The firm is led by Justice Ajay Tewari (Retd.), Abhimanyu Tewari and Amitabh Tewari. Justice Ajay Tewari (Retd.) is a Senior Advocate who graduated in law from Panjab University in 1982, before starting his practice. After 26 years of practice, he was elevated as an additional judge of the high court in July 2008. Justice Ajay Tewari (Retd.) retired in March, 2022 after almost 14 years on the bench. Justice Ajay Tewari (Retd.) has extensive experience in matters pertaining to all fields of law including but not limited to Service, Constitutional, Civil, Criminal, Corporate and Arbitration law.
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
        className="py-10  bg-white "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-7 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
              RAVEN LAW  <span className="text-yellow-700">LLP</span>
            </h2>
            <div className="h-1 w-20 bg-yellow-700 mx-auto rounded-full"></div>
          </motion.div>

          {/* Delhi Office */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 pb-3 border-b-2 border-slate-700">NEW DELHI OFFICE</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="mb-8">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-slate-50 to-white p-4 md:p-8 rounded-xl border-2 border-slate-200 shadow-lg"
                >
                  <p className="text-slate-700 leading-relaxed mb-3 md:mb-6 text-xs md:text-sm">
                    The Delhi Office is led by Abhimanyu Tewari who is an Advocate on Record at the Supreme Court of India. Mr. Abhimanyu Tewari graduated from St. Stephens, Delhi in 2008 after completing his Bachelor of Arts. Thereafter, he went on to pursue his law from Punjab University, Chandigarh before starting his practice in the Supreme Court of India in 2012. Mr. Abhimanyu Tewari has extensive experience in handling matters pertaining to civil, criminal, corporate and commercial, real estate, sports, entertainment, real estate, arbitration law in the Supreme Court of India, Punjab and Haryana High Court at Chandigarh, National Company Law Tribunal etc.
                  </p>
                  <Image
                    src="/path/to/abhimanyu_tewari_image.jpg"
                    alt="Abhimanyu Tewari"
                    width={150}
                    height={150}
                    className="rounded-full mb-4"
                  />
                  <h4 className="text-base md:text-xl font-bold text-slate-800 mb-1">ABHIMANYU TEWARI</h4>
                  <p className="text-slate-600 font-semibold md:text-base  text-sm">Advocate-On-Record Supreme Court of India</p>
                </motion.div>
              </div>

              <div className="mb-8">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-slate-50 to-white p-4 md:p-8 rounded-xl border-2 border-slate-200 shadow-lg"
                >
                  <p className="text-slate-700 leading-relaxed mb-3 md:mb-6 text-xs md:text-sm">
                    Miss Elizabeth Barr is the standing counsel for Arunachal Pradesh in the Supreme Court of India and she looks after the offices of the firm in Itanagar and Guwahati. Miss Barr specialises in matters involving Constitutional law, mines and minerals, Arbitration, Civil, Commercial, Criminal law arising out of the North-Eastern states like Assam and Arunachal Pradesh.
                  </p>
                  <Image
                    src="/path/to/abhimanyu_tewari_image.jpg"
                    alt="Abhimanyu Tewari"
                    width={150}
                    height={150}
                    className="rounded-full mb-4"
                  />
                  <h4 className="text-base md:text-xl font-bold text-slate-800 mb-1">ELIZABETH BARR</h4>
                  <p className="text-slate-600 font-semibold md:text-base  text-sm">Standing Counsel, Arunachal Pradesh in Supreme Court of India</p>
                </motion.div>
              </div>
            </div>

            {/* Delhi Team Members */}
            <div className="space-y-6 grid md:grid-cols-2 gap-4">
              {[
                {
                  name: "SANYA KAUSHAL",
                  img: "/path/to/image1.jpg",
                  role: "Senior Associate",
                  class: "col-span-1",
                  desc: "Sanya completed her graduation from Himachal Pradesh University, Summer Hill Shimla in the year 2017 and thereafter obtained her masters in corporate law from Guru Gobind Singh Indraprastha University (GGSIPU), New Delhi in 2018. With over 4 years practice experience, Sanya has specialised in the field of civil law, criminal law, matrimonial matters and consumer disputes. She regularly appears before various courts in New Delhi and Chandigarh including the Supreme Court of India, Delhi High Court, Delhi District Courts, State Consumer Disputes Redressal Commissions and the Punjab and Haryana High Court. Sanya appears before various courts and forums in Himachal Pradesh as well, both at the district and the appellate level.",
                },
                {
                  name: "TUSHAR BATHIJA",
                  img: "/path/to/image2.jpg",
                  role: "Associate",
                  class: "col-span-1",
                  desc: "Tushar graduated in law in 2021 from National Law University, Odisha. He is an avid reader and writer on issues relating to law, the criminal justice system, commercial law, arbitration law, and policy. Tushar has advised on diverse, complex and challenging matters relating to Criminal and Commercial laws. Tushar regularly appears before the Hon'ble Supreme Court of India, various High Courts, District Courts in Delhi, and other Tribunals and fora. Besides practicing law, Tushar also takes keen interest in interacting with students by way of lectures, moot courts, seminars etc. on law as well as non-law subjects.",
                },
                {
                  name: "NEIKETOU RIO",
                  img: "/path/to/image3.jpg",
                  role: "Associate",
                  class: "col-span-1 md:col-span-2 ",
                  desc: "Rio completed his graduation in the year 2022 from Amity University Gurgaon. He regularly appears before various forums like Delhi High Court, Guwahati High Court, District Courts in Delhi and before the Session Judge Court, Kohima to name a few. Rio's interest lies in handling and researching on matters involving criminal law.",
                },
              ].map((member, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`bg-white p-6 rounded-lg border-2 border-slate-200 hover:border-slate-700 hover:shadow-lg transition-all ${member.class}`}
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="rounded-full mb-4"
                  />
                  <h4 className="text-lg font-bold text-slate-800 mb-1">{member.name}</h4>
                  <p className="text-slate-600 font-semibold md:text-base  text-sm mb-3">{member.role}</p>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{member.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Chandigarh Office */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 pb-3 border-b-2 border-slate-700">CHANDIGARH OFFICE</h3>

            <div className="mb-8">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-slate-50 to-white p-4 md:p-8 rounded-xl border-2 border-slate-200 shadow-lg"
              >
                <p className="text-slate-700 leading-relaxed mb-3 md:mb-6 text-xs md:text-sm">
                  The Chandigarh office is led by Amitabh Tewari. Mr. Amitabh Tewari graduated from Government Law College, Mumbai in 2014 and thereafter went on to pursue the Bachelor of Civil Law from the prestigious University of Oxford in 2015. Mr. Amitabh Tewari worked in Cyril Amarchand Mangaldas, Mumbai and Wadia Ghandy & Co, Delhi before starting his independent practice in Chandigarh. Mr. Amitabh Tewari has recently been awarded a certificate by Forbes in the category of Top 100 lawyers - Below ten years of experience. Mr Amitabh Tewari regularly appears before the Punjab and Haryana High Court National Company law Tribunal Chandigarh, Real Estate Regulatory Authority, Punjab, Real Estate Appellate Tribunal, Punjab, Real Estate Appellate Tribunal, Haryana, Consumer forum etc. Mr. Amitabh Tewari has extensive experience in sports law as he has represented various football clubs, coaches, players before the All India Football Federation and the FIFA Dispute Resolution Chamber, Zurich.
                </p>
                <Image
                  src="/path/to/amitabh_tewari_image.jpg"
                  alt="Amitabh Tewari"
                  width={150}
                  height={150}
                  className="rounded-full mb-4"
                />
                <h4 className="text-base md:text-xl font-bold text-slate-800 mb-1">AMITABH TEWARI</h4>
                <p className="text-slate-600 font-semibold md:text-base  text-sm">Advocate, BLS LL.B, BCL (Oxford University)</p>
              </motion.div>
            </div>

            {/* Chandigarh Team Members */}
            <div className="space-y-6 grid md:grid-cols-2 gap-4">
              {[
                {
                  name: "DILMRIG NAYANI",
                  role: "Senior Associate",
                  img: "/path/to/image1.jpg",
                  desc: "Dilmrig graduated from the National University of Advanced Legal Studies (NUALS), Kochi in 2020 with B.A. LL.B. (Hons.) and a corporate law specialization. She completed her post-graduation (LL.M.) from the National Academy of Legal Studies and Research (NALSAR), Hyderabad. Dilmrig's areas of practice primarily include litigation in Civil and Criminal Law, Insolvency and Bankruptcy law, pharmaceutical laws, arbitration and Real Estate disputes. She is adept at managing matters before the Punjab and Haryana High Court, Supreme Court of India, Delhi High Court, Real Estate Regulatory Authority, National Company Law Tribunal and other forums located in Chandigarh and New Delhi. Having dealt with a diverse range of clients, Dilmrig specialises in formulating tailor-made legal advisories, petitions and legal strategies for disputes.",
                },
                {
                  name: "MAHIMA GUPTA",
                  role: "Associate",
                  img: "/path/to/image2.jpg",
                  desc: "Mahima graduated from O.P. Jindal Global University, Haryana in the year 2021. Her scope of practice focuses on civil and criminal litigation, real estate disputes, consumer disputes and service law matters. Mahima is well versed in handling matters and appearing before various forums such as the Punjab and Haryana High Court, Central Administrative Tribunal (CAT), District and State Consumer Disputes Redressal Commissions. She has keen interest in matters involving Insolvency and Bankruptcy Code, Arbitration and laws relating to Micro, Small and Medium Enterprises (MSME).",
                },
                {
                  name: "SHIVAM SHARMA",
                  role: "Associate",
                  img: "/path/to/image3.jpg",
                  desc: "Shivam is a first-generation lawyer, who graduated in 2020 and thereafter obtained his masters in 2022, from University Institute of Legal Studies, Punjab University, Chandigarh. He is a criminal law enthusiast who regularly appears before the Punjab and Haryana High Court, Central Administrative Tribunal (CAT) and other courts and forums in Chandigarh, including the District and Sessions Court and consumer forums.",
                },
                {
                  name: "SATVIK BANSAL",
                  role: "Associate",
                  desc: "Satvik graduated from Government Law College, Mumbai in the year 2021. He is a Criminal and Civil Law enthusiast appearing before the Punjab and Haryana High Court, Real Estate Regulatory Authority, Central Administrative Tribunal and other forums in Chandigarh. He also has experience in appearing before the Bombay High Court, Maharasthra Adminstrative Tribunal, Labour Courts and NCLT, Mumbai.",
                },
              ].map((member, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-lg border-2 border-slate-200 hover:border-slate-700 hover:shadow-lg transition-all"
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="rounded-full mb-4"
                  />
                  <h4 className="text-lg font-bold text-slate-800 mb-1">{member.name}</h4>
                  <p className="text-slate-600 font-semibold md:text-base   text-sm mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.desc}</p>
                </motion.div>
              ))}
            </div>
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
        className="py-10 bg-gradient-to-br from-slate-50 to-slate-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-7 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
              SEMINAR <span className="text-yellow-700">RECORDING</span>
            </h2>
            <div className="h-1 w-20 bg-yellow-700 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-4 md:gap-8">
            {seminars.map((title, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white border-2 border-slate-200 rounded-xl p-4 md:p-6 hover:border-slate-700 transition-all hover:shadow-xl"
              >

                <p className="text-slate-800 font-semibold text-center mb-4 min-h-16 md:min-h-20 flex items-center justify-center text-sm">
                  {title}
                </p>
                <button className="w-full bg-gradient-to-r from-yellow-700 to-yellow-900 text-white font-semibold hover:from-yellow-800 hover:to-yellow-900 transition-colors py-2 rounded-lg text-sm">
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
        className="py-10 bg-white "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-7 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
              <span className="text-yellow-700">ARTICLES</span>
            </h2>
            <div className="h-1 w-20 bg-yellow-700 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {articles.map((title, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-xl p-6 hover:border-slate-700 transition-all hover:shadow-xl flex flex-col items-center justify-between"
              >
                <div className="flex items-center justify-center mb-4">
                  <FileText className="w-8 h-8 text-slate-700" />
                </div>
                <p className="text-slate-800 font-semibold text-center mb-4 min-h-20 flex items-center justify-center text-sm">
                  {title}
                </p>
                <button className="w-full bg-gradient-to-r from-yellow-700 to-yellow-900 text-white font-semibold hover:from-yellow-800 hover:to-yellow-900 transition-colors py-2 rounded-lg text-sm">
                  View Article →
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-16  bg-black/85 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-10 md:mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              CONTACT <span className="text-yellow-700">US</span>
            </h2>
            <div className="h-1 w-20 bg-white mx-auto rounded-full"></div>
          </motion.div>

          <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-8">
            {offices.map((office, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur border-2 border-white/30 rounded p-4 md:p-6 hover:bg-white/20 transition-all"
              >
                <h3 className="text-xl font-bold mb-4 text-white">{office.title}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-2">
                    <MapPin size={16} className="text-slate-300 flex-shrink-0 mt-1" />
                    <p className="text-white/90">{office.address}</p>
                  </div>
                  {office.email && (
                    <div className="flex gap-2">
                      <Mail size={16} className="text-slate-300 flex-shrink-0 mt-1" />
                      <a href={`mailto:${office.email}`} className="text-slate-300 hover:underline break-all">
                        {office.email}
                      </a>
                    </div>
                  )}
                  {office.phone.map((p, i) => (
                    <div key={i} className="flex gap-2">
                      <Phone size={16} className="text-slate-300 flex-shrink-0 mt-1" />
                      <a href={`tel:${p}`} className="text-slate-300 hover:underline">
                        {p}
                      </a>
                    </div>
                  ))}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${office.lat},${office.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 w-full bg-white text-slate-900 py-2 rounded-lg font-semibold hover:bg-slate-100 transition-colors text-sm text-center shadow-md"
                  >
                    View on Map
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <p className="text-white/60 text-sm">© 2025 by tewariandassociates.com. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Fixed Location Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLocationOpen(true)}
        title="Find us on map"
        className="fixed bottom-8 right-8 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-yellow-500/50 transition-all flex items-center justify-center font-bold z-30 hover:scale-110 hover:from-yellow-600 hover:to-yellow-800 animate-pulse"
        style={{
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          boxShadow: '0 0 15px rgba(234, 179, 8, 0.3)',
        }}
      >
        <MapPin size={24} className="hover:rotate-12 transition-transform" />
      </motion.button>
    </main>
  );
}