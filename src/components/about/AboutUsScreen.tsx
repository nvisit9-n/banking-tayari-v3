import React, { useState } from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  CheckCircle2, 
  Target, 
  Award, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Brain, 
  Compass, 
  BookOpen, 
  Landmark, 
  Building2, 
  Flame, 
  ArrowRight, 
  Clock, 
  MapPin, 
  Check, 
  ChevronRight, 
  Star, 
  ShieldAlert, 
  Lightbulb, 
  Cpu, 
  Layers, 
  FileCheck, 
  Lock, 
  Smartphone, 
  Globe, 
  FileText, 
  Video, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { SocialBrandIcon } from '../common/SocialIcons';
import { SOCIAL_CHANNELS } from '../../data/socialLinks';

interface BankCourseDetail {
  id: 'nrb' | 'rbb' | 'nbl' | 'adbl' | 'public-enterprises';
  title: string;
  fullName: string;
  nepaliName: string;
  badge: string;
  levelBadge: string;
  examPattern: string;
  keySubjects: string[];
  keyActs: string[];
  features: string[];
  accentColor: string;
  borderAccent: string;
  targetTab: 'courses' | 'quiz' | 'free-notes';
}

const BANK_COURSES: BankCourseDetail[] = [
  {
    id: 'nrb',
    title: 'NRB',
    fullName: 'Nepal Rastra Bank (नेपाल राष्ट्र बैंक)',
    nepaliName: 'नेपालको केन्द्रीय बैंक',
    badge: 'केन्द्रीय बैंक (Central Bank)',
    levelBadge: 'तह ४ सहायक & तह ६ अधिकृत',
    examPattern: 'प्रथम चरण: १०० पूर्णाङ्क वस्तुगत (Pre-Test) | द्वितीय चरण: २०० पूर्णाङ्क विषयगत',
    keySubjects: [
      'मौद्रिक नीति तथा समष्टिगत अर्थशास्त्र (Monetary Policy & Macroeconomics)',
      'बैंकिङ कानुन तथा विदेशी विनिमय व्यवस्थापन (Banking Law & Forex)',
      'नेपाल राष्ट्र बैंक ऐन २०५८ र बाफिया २०७३ (NRB Act & BAFIA)',
      'एकीकृत निर्देशिका (Unified Directives) तथा भुक्तानी प्रणाली'
    ],
    keyActs: ['NRB Act 2058', 'BAFIA 2073', 'AML Act 2064', 'Payment & Settlement 2075'],
    features: [
      'सयौं अद्यावधिक मौद्रिक तथ्याङ्क तथा आर्थिक सर्वेक्षण विश्लेषण',
      'विगत १० वर्षका प्रश्नोत्तर तथा सम्भावित नयाँ ढाँचाका ५० सेट'
    ],
    accentColor: 'from-blue-600 to-indigo-700',
    borderAccent: 'border-blue-500',
    targetTab: 'courses'
  },
  {
    id: 'rbb',
    title: 'RBB',
    fullName: 'Rastriya Banijya Bank (राष्ट्रिय वाणिज्य बैंक)',
    nepaliName: 'पूर्ण सरकारी स्वामित्वको अग्रणी बैंक',
    badge: 'पूर्ण सरकारी बैंक (100% State-Owned)',
    levelBadge: 'तह ४ (नगद/प्रशासन) & तह ५/६',
    examPattern: 'प्रथम पत्र: सामान्य ज्ञान, बौद्धिक परीक्षण, व्यवस्थापन | द्वितीय पत्र: बैंकिङ, लेखा, कानुन',
    keySubjects: [
      'बैंकिङ कार्य सञ्चालन, कर्जा विश्लेषण तथा धितो मूल्याङ्कन',
      'दोहोरो लेखा प्रणाली, अन्तिम हिसाब तथा वित्तीय अनुपात',
      'कम्पनी ऐन २०६३, बैंकिङ कसूर ऐन २०६४ र सार्वजनिक खरिद ऐन',
      'व्यवस्थापन सिद्धान्त, मानव संशाधन तथा ग्राहक सेवा'
    ],
    keyActs: ['Banking Offence Act 2064', 'Public Procurement Act', 'Company Act 2063'],
    features: [
      'शाखा अधिकृत तहसम्मका विषयगत प्रश्नका नमुना उत्तरहरू',
      'नगद तथा प्रशासन समूहका लागि पृथक अभ्यास सेट'
    ],
    accentColor: 'from-emerald-600 to-teal-700',
    borderAccent: 'border-emerald-500',
    targetTab: 'courses'
  },
  {
    id: 'nbl',
    title: 'NBL',
    fullName: 'Nepal Bank Limited (नेपाल बैंक लिमिटेड)',
    nepaliName: 'नेपालको पहिलो बैंक (स्थापना: वि.सं. १९९४)',
    badge: 'प्रथम बैंक (Historic Pioneer)',
    levelBadge: 'तह ३ कनिष्ठ सहायक, तह ४ सहायक & तह ६',
    examPattern: 'लिखित परीक्षा (MCQ + Subjective) तथा प्रयोगात्मक कम्प्युटर सीप',
    keySubjects: [
      'नेपालमा आधुनिक बैंकिङको इतिहास र विकासक्रम',
      'निक्षेप परिचालन, कर्जा प्रवाह तथा खराब कर्जा (NPL) न्यूनीकरण',
      'ऋण असुली ऐन २०५८ तथा सुरक्षित कारोबार ऐन २०६३',
      'कम्प्युटर विज्ञान, कार्यालय सञ्चालन तथा पत्राचार'
    ],
    keyActs: ['Debt Recovery Act 2058', 'Secured Transactions 2063', 'BAFIA 2073'],
    features: [
      'ऐतिहासिक बैंकिङ तथ्य र पछिल्लो वित्तीय प्रतिवेदन (Q4 Audit)',
      'समयबद्ध वस्तुगत अनलाइन नमुना परीक्षा'
    ],
    accentColor: 'from-amber-600 to-orange-700',
    borderAccent: 'border-amber-500',
    targetTab: 'courses'
  },
  {
    id: 'adbl',
    title: 'ADBL',
    fullName: 'Agricultural Development Bank (कृषि विकास बैंक)',
    nepaliName: 'कृषि तथा ग्रामीण वित्तीय पूर्वाधारको संवाहक',
    badge: 'ग्रामीण तथा कृषि विकास बैंक',
    levelBadge: 'तह ४ लेखापाल/नगद & तह ५ व्यवसाय सहायक',
    examPattern: 'प्रथम चरण: पूर्व-योग्यता परीक्षा (Pre-Test) | द्वितीय चरण: सेवा सम्बन्धी लिखित',
    keySubjects: [
      'कृषि कर्जा, लघुवित्त, विपन्न वर्ग कर्जा र सहकारी सहकार्य',
      'किसान क्रेडिट कार्ड, वित्तीय समावेशीकरण तथा डिजिटल बैंकिङ',
      'कृषि विकास बैंक कर्मचारी नियमावली तथा आन्तरिक कार्यप्रणाली',
      'लेखापरीक्षण, आन्तरिक नियन्त्रण तथा जोखिम व्यवस्थापन'
    ],
    keyActs: ['ADBL Bylaws', 'Microfinance Directives', 'Priority Sector Guidelines'],
    features: [
      'ग्रामीण बैंकिङ केस स्टडी तथा सम्भावित समस्या समाधान विधि',
      'कृषि कर्जा सम्बन्धी विशेष विषयगत व्याख्यान'
    ],
    accentColor: 'from-purple-600 to-indigo-700',
    borderAccent: 'border-purple-500',
    targetTab: 'courses'
  },
  {
    id: 'public-enterprises',
    title: 'PE & Loksewa',
    fullName: 'Public Enterprises & Loksewa (संगठित संस्था तथा संस्थानहरू)',
    nepaliName: 'कर्मचारी सञ्चय कोष, नागरिक लगानी कोष, नेपाल टेलिकम आदि',
    badge: '५० रियल एक्जाम सेट (50 Full Sets)',
    levelBadge: 'लोकसेवा आयोग प्रथम पत्र तथा पूर्व-तयारी',
    examPattern: '५० प्रश्न = १०० पूर्णाङ्क (प्रत्येक गल्तीमा २०% नकारात्मक अंक कट्टा)',
    keySubjects: [
      'नेपालको संविधान, शासन प्रणाली, र सार्वजनिक संस्थान सम्बन्धी ज्ञान',
      'सामान्य ज्ञान (GK), नेपालको भूगोल, इतिहास र समसामयिक घटनाक्रम',
      'बौद्धिक परीक्षण (IQ), गणित, सामान्य अंग्रेजी र नेपाली भाषा',
      'कम्प्युटर आधारभूत ज्ञान (IT Guidelines, Cyber Security, OS)'
    ],
    keyActs: ['Nepal Constitution', 'Right to Information', 'Governance Act'],
    features: [
      '५० वटा पूर्ण ५०-५० प्रश्नका रियल-टाइम नमुना सेटहरू',
      'प्रत्येक प्रश्नको प्रमाणिक नेपाली विस्तृत व्याख्या र सुझाव'
    ],
    accentColor: 'from-red-600 to-rose-700',
    borderAccent: 'border-red-500',
    targetTab: 'quiz'
  }
];

export const AboutUsScreen: React.FC = () => {
  const { setActiveTab } = useApp();
  const [activeBankId, setActiveBankId] = useState<string>('nrb');

  const selectedBank = BANK_COURSES.find(b => b.id === activeBankId) || BANK_COURSES[0];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-12 sm:space-y-16 py-4 animate-in fade-in duration-300">
      
      {/* =========================================================================
          1. HERO SECTION: Notion/Coursera-Grade High-Impact Storytelling
          ========================================================================= */}
      <section 
        id="about-hero" 
        className="relative overflow-hidden rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl p-6 sm:p-10 lg:p-14"
      >
        {/* Subtle decorative background gradient glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-300 text-xs font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>Nepal's Premier AI-Native Banking & Loksewa EdTech Platform</span>
          </div>

          {/* Core high-impact headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
            Empowering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">Next Generation</span> of Banking & Public Service Leaders in Nepal.
          </h1>

          {/* Narrative story text */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            For decades, aspiring civil servants and bankers from across Nepal's 77 districts were forced to travel to Kathmandu, pay astronomical coaching fees, and navigate outdated paper notes. 
            <strong className="text-white font-semibold"> Banking Tayari Nepal</strong> was founded to democratize this journey: bridging the geographical and financial divide through an international-grade, zero-barrier EdTech platform powered by intelligent learning tools, instant verified explanations, and 24/7 access.
          </p>

          {/* Trust points */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700/60">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Free Core Open Practice</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700/60">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Strictly Aligned with Official Syllabi</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700/60">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span>Active Aspirants in All 77 Districts</span>
            </div>
          </div>

          {/* Primary Call-to-Action Group */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <button
              type="button"
              id="hero-cta-start-practice"
              onClick={() => setActiveTab('quiz')}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Start Free Practice Now (५० सेट अनलाइन)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              id="hero-cta-explore-courses"
              onClick={() => setActiveTab('courses')}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-800/90 hover:bg-slate-750 text-slate-200 hover:text-white font-semibold text-sm sm:text-base border border-slate-700 hover:border-slate-600 transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>पाठ्यक्रम तथा बैंकहरू (Syllabus)</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. MODERN STATS COUNTERS: High-Altitude Quantitative Impact
          ========================================================================= */}
      <section id="platform-stats" className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              77 <span className="text-blue-600 text-lg sm:text-xl font-bold">जिल्ला</span>
            </p>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
              Districts Covered Across All 7 Provinces
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              50,000+
            </p>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
              Curated MCQs & Practice Questions
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
              <Brain className="w-5 h-5" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              24/7
            </p>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
              AI Study Assistant & Note Generation
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              99.8%
            </p>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
              Syllabus Accuracy & Law Cross-Audit
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. THE CORE PROBLEM VS. OUR AI SOLUTION (Bento Comparison Grid)
          ========================================================================= */}
      <section id="problem-vs-solution" className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-900">
            The Paradigm Shift
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Why Traditional Institutes Fail & How We Solved It
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Exam preparation should be about academic discipline and intellectual depth, not about physical relocation or financial privilege.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* The Old Way: Traditional Institutes */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-red-200 dark:border-red-950/80 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-400 text-xs font-bold">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>परम्परागत भौतिक इन्स्टिच्युटहरू (Traditional Institutes)</span>
                </div>
                <span className="text-xs font-bold text-red-500 uppercase tracking-wider">The Old Way</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                महँगो शुल्क, काठमाडौँ केन्द्रीकृत र सीमित पहुँच
              </h3>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                  <span><strong>भारी आर्थिक भार:</strong> रु. १५,००० देखि ३५,००० सम्मको चर्को कक्षा शुल्क र होस्टल/बसोबासको दोब्बर खर्च।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                  <span><strong>भौगोलिक बाध्यता:</strong> गाउँ-सहर छोडेर बागबजार/पुतलीसडक जानुपर्ने विवशताले दूरदराजका विद्यार्थी वञ्चित।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                  <span><strong>पुरानो फोटोकपी सामग्री:</strong> ऐन-नियम र मौद्रिक नीति अद्यावधिक नभएका वर्षौँ पुराना पानाहरू र गलत उत्तरकुञ्जी।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                  <span><strong>शून्य व्यक्तिगत मूल्याङ्कन:</strong> भिडभाडमा व्यक्तिगत कमजोरी पत्ता लगाउन नसकिने र तत्काल प्रश्न सोध्न अप्ठ्यारो।</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-red-600 dark:text-red-400 font-medium">
              नतिजा: लाखौं रुपैयाँ र समय खर्चिएर पनि कमजोर परीक्षा नतिजा।
            </div>
          </div>

          {/* The New Way: Banking Tayari Nepal */}
          <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-blue-500/40 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
                  <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                  <span>Banking Tayari Nepal AI Ecosystem</span>
                </div>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">The Future</span>
              </div>

              <h3 className="text-lg font-bold text-white">
                निःशुल्क पहुँच, आफ्नै घरबाट तयारी र शून्य-त्रुटि प्रविधि
              </h3>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 font-bold" />
                  <span><strong>शून्य वित्तीय बाधा (Free Core Access):</strong> ५० वटै पूर्ण परीक्षा सेट, ऐन-कानुन र दैनिक समसामयिक निःशुल्क।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 font-bold" />
                  <span><strong>७७ वटै जिल्लाबाट आफ्नै गतिमा:</strong> आफ्नो मोबाइल, ट्याब्लेट वा ल्यापटपबाट जुनसुकै समयमा अनलाइन अभ्यास।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 font-bold" />
                  <span><strong>प्रत्येक प्रश्नको तत्काल व्याख्या:</strong> केवल उत्तर मात्र होइन, कुन दफा र निर्देशिकाबाट सोधिएको हो स्पष्ट कारणसहित।</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 font-bold" />
                  <span><strong>AI नोट्स र रियल-टाइम सिम्युलेटर:</strong> २०% नेगेटिभ मार्किङसहितको रियल एक्जाम इन्जिन र व्यक्तिगत XP ट्र्याकिङ।</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-800/60 flex items-center justify-between text-xs text-blue-300 font-semibold">
              <span>अपेक्षित नतिजा: उच्च आत्मविश्वास र प्रमाणित लोकसेवा सफलता</span>
              <button 
                onClick={() => setActiveTab('quiz')} 
                className="text-white bg-blue-600 hover:bg-blue-500 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                परीक्षण गर्नुहोस् →
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. BANK COVERAGE ECOSYSTEM: Interactive Course Explorer
          ========================================================================= */}
      <section id="bank-ecosystem" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-900">
              Complete Institutional Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-2">
              The Banking Ecosystem
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              Tailor-made academic syllabus tracks designed specifically for Nepal's premier banking and public institutions.
            </p>
          </div>

          {/* Quick Bank Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
            {BANK_COURSES.map(bank => (
              <button
                key={bank.id}
                onClick={() => setActiveBankId(bank.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  activeBankId === bank.id
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {bank.title}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Bank Active Detail Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 transition-all">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold">
                  {selectedBank.badge}
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                  {selectedBank.levelBadge}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {selectedBank.fullName}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                {selectedBank.nepaliName}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setActiveTab(selectedBank.targetTab)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition cursor-pointer self-start md:self-auto"
            >
              <span>पाठ्यक्रम तथा सेटहरू हेर्नुहोस्</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Exam Structure pill */}
          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-3">
            <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                परीक्षा ढाँचा तथा चरण (Official Exam Architecture)
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                {selectedBank.examPattern}
              </p>
            </div>
          </div>

          {/* Grid of Key Subjects and Acts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>मुख्य पाठ्यक्रम विषयहरू (Key Subjects Covered)</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {selectedBank.keySubjects.map((subject, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-50/50 dark:bg-slate-800/30 p-2.5 rounded-xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span>{subject}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>प्रमाणिक ऐन तथा कानुनहरू (Statutory Acts & Directives)</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedBank.keyActs.map((act, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700"
                  >
                    {act}
                  </span>
                ))}
              </div>

              <div className="pt-2 space-y-2">
                <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  प्लेटफर्मका विशेष फाइदाहरू (Key Features):
                </h5>
                {selectedBank.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          5. CORE TECHNOLOGICAL PILLARS: SaaS Architecture & Innovation
          ========================================================================= */}
      <section id="technology-pillars" className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-900">
            Intelligent Infrastructure
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Core Technological Pillars
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Engineered using cutting-edge artificial intelligence, resilient cloud infrastructure, and modern pedagogical research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 1: AI Note Generator */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-transform">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                AI Exam Note Generator
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Powered by Gemini models, instantly producing structured bilingual study notes, legal clauses, balance sheet ratios, and examiner tips for any syllabus topic.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('free-notes')}
              className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer pt-2"
            >
              <span>नोट्स जेनेरेटर चलाउनुहोस्</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pillar 2: Gamified Daily Streaks */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-transform">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Gamified Streaks & Analytics
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Duolingo-inspired XP accumulation, consecutive day learning streaks, and provincial leaderboards keeping candidates disciplined throughout the exam cycle.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer pt-2"
            >
              <span>वरियता सूची हेर्नुहोस्</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pillar 3: High-Yield Masterclasses */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-transform">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Verified Video Masterclasses
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Curated HD video lecture series and live discussions covering complex accounting, monetary mechanisms, and mathematical shortcuts with zero paywall.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('video-lectures')}
              className="text-xs font-bold text-red-600 dark:text-red-400 hover:underline flex items-center gap-1 cursor-pointer pt-2"
            >
              <span>भिडियो कक्षाहरू हेर्नुहोस्</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pillar 4: Google Identity Protection */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-transform">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Bank-Grade Security & OAuth
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Frictionless Google Identity Services authentication protecting user privacy, zero plain-text passwords, and cross-device synced scores and bookmarks.
              </p>
            </div>
            <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>OAuth 2.0 Certified Security</span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. VISION & MISSION 2030 (The Educational Manifesto)
          ========================================================================= */}
      <section 
        id="vision-mission" 
        className="rounded-3xl bg-radial from-slate-900 via-slate-950 to-slate-900 text-white p-8 sm:p-12 border border-slate-800 relative overflow-hidden"
      >
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 text-red-300 text-xs font-bold border border-red-500/30">
            <Compass className="w-3.5 h-3.5" />
            <span>Our 2030 Strategic Commitment</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            "No talented youth in Nepal shall be held back from national service due to geography or financial limitation."
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Our vision for 2030 is to build Nepal's most respected and accessible digital learning commons. 
            Whether an aspirant is studying by candlelight in Humla, preparing between shifts in Birgunj, or balancing family duties in Pokhara, 
            <strong className="text-white"> Banking Tayari Nepal</strong> provides equal, unrestricted access to the highest tier of competitive exam training.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
            <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-400">Democratization</p>
              <p className="text-xs text-slate-300 mt-1">100% open-access core tiers so wealth never dictates merit.</p>
            </div>
            <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">Academic Rigor</p>
              <p className="text-xs text-slate-300 mt-1">Continuous verification against Nepal Gazette and NRB circulars.</p>
            </div>
            <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-400">Technological Mastery</p>
              <p className="text-xs text-slate-300 mt-1">Indigenous Nepali EdTech infrastructure matching Coursera and Notion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. TRUST & QUALITY PROMISE: Editorial Integrity & Student Support
          ========================================================================= */}
      <section id="trust-promise" className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-900">
              The Quality Charter
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Our Zero-Error Promise & Continuous Support
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Every question in our 50-set database undergoes strict verification against official bank acts, Loksewa guidelines, and current economic survey benchmarks. If any law is amended, our questions update within 48 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href="https://chat.whatsapp.com/invite/BankingTayariNepal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md transition"
            >
              <SocialBrandIcon id="whatsapp" className="w-4 h-4 text-white" />
              <span>Join WhatsApp Aspirants Group</span>
            </a>
            
            <a
              href="https://www.youtube.com/@BankingTayariNepal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold shadow-md transition"
            >
              <SocialBrandIcon id="youtube" className="w-4 h-4 text-white" />
              <span>Official YouTube Masterclasses</span>
            </a>
          </div>
        </div>

        {/* Community Channel Badges */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              Verified Editorial Panel: Ex-Bank Officers & Loksewa Merit Scorers
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span>Direct Feedback & Doubt Resolution:</span>
            <a href="mailto:support@bankingtayarinepal.com" className="font-bold text-blue-600 hover:underline">
              support@bankingtayarinepal.com
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. BOTTOM CALL-TO-ACTION BANNER: Mobile-First Launchpad
          ========================================================================= */}
      <section 
        id="about-cta-banner" 
        className="rounded-3xl bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white p-8 sm:p-12 shadow-xl text-center relative overflow-hidden"
      >
        <div className="max-w-2xl mx-auto space-y-5 relative z-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            तयारी सुरु गर्न तयार हुनुहुन्छ? (Ready to Begin Your Preparation?)
          </h3>
          <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
            हजारौं सफल परीक्षार्थीहरूसँग सामेल हुनुहोस्। आजै ५० वटै संगठित संस्था तथा बैंकिङ नमुना सेटहरूको पूर्ण निःशुल्क अभ्यास सुरु गर्नुहोस्।
          </p>
          
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              type="button"
              id="about-final-cta-btn"
              onClick={() => setActiveTab('quiz')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-white text-blue-900 hover:bg-blue-50 font-extrabold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Zap className="w-4 h-4 text-blue-600" />
              <span>Start Free Practice Now (निःशुल्क अभ्यास)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('courses')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-blue-900/60 hover:bg-blue-900 text-white font-bold text-sm border border-blue-400/40 transition cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>बैंकिङ पाठ्यक्रमहरू हेर्नुहोस्</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUsScreen;
