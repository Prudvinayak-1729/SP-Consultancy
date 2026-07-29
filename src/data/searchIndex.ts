export interface SearchResult {
  id: string
  title: string
  section: string
  description: string
  keywords: string[]
  page: string
  path: string
  priority: number
}

export const searchIndex: SearchResult[] = [
  // Home Page
  {
    id: 'home-main',
    title: 'Home',
    section: 'Home',
    description: 'Welcome to Sneha & Prahar Consultancy Services - Leading pharmaceutical engineering consultancy.',
    keywords: ['home', 'homepage', 'welcome', 'landing page'],
    page: 'Home',
    path: '/',
    priority: 10
  },
  {
    id: 'home-cqv',
    title: 'CQV Specialists',
    section: 'Home',
    description: 'Expert Commissioning, Qualification & Validation (CQV) services ensuring facilities, equipment, and utilities meet global GMP standards.',
    keywords: ['CQV', 'commissioning', 'qualification', 'validation', 'GMP'],
    page: 'Home',
    path: '/',
    priority: 9
  },
  {
    id: 'home-csv',
    title: 'Computer System Validation',
    section: 'Home',
    description: 'Comprehensive CSV services aligned with GAMP 5, FDA 21 CFR Part 11, and international regulatory requirements.',
    keywords: ['CSV', 'Computer System Validation', 'GAMP 5', 'FDA 21 CFR Part 11'],
    page: 'Home',
    path: '/',
    priority: 9
  },
  {
    id: 'home-mes',
    title: 'MES Solutions',
    section: 'Home',
    description: 'Manufacturing Execution Systems for production monitoring, quality control, and regulatory compliance.',
    keywords: ['MES', 'Manufacturing Execution Systems'],
    page: 'Home',
    path: '/',
    priority: 8
  },
  {
    id: 'home-temperature',
    title: 'Temperature Mapping',
    section: 'Home',
    description: 'Temperature mapping studies for cold rooms, freezers, and storage areas ensuring compliance with regulatory requirements.',
    keywords: ['temperature mapping', 'thermal validation'],
    page: 'Home',
    path: '/',
    priority: 8
  },
  {
    id: 'home-hvac',
    title: 'Facility & Utility Engineering',
    section: 'Home',
    description: 'Design, installation, qualification, and modernization of HVAC, cleanrooms, water systems, boilers, chillers, AHUs, and critical utilities.',
    keywords: ['HVAC', 'cleanroom', 'water systems', 'boilers', 'chillers', 'AHUs', 'utilities', 'facility engineering'],
    page: 'Home',
    path: '/',
    priority: 9
  },
  {
    id: 'home-automation',
    title: 'Automation & PLC Solutions',
    section: 'Home',
    description: 'PLC, SCADA, VFD, IoT integration, automation upgrades, and energy-efficient engineering solutions.',
    keywords: ['PLC', 'SCADA', 'VFD', 'IoT', 'automation', 'BMS', 'EMS'],
    page: 'Home',
    path: '/',
    priority: 8
  },
  {
    id: 'home-standards',
    title: 'Regulatory Compliance Standards',
    section: 'Home',
    description: 'WHO GMP, US FDA, EU GMP, Schedule M, ASHRAE 170, ISPE GAMP 5, and ICH Guidelines compliance.',
    keywords: ['WHO GMP', 'US FDA', 'EU GMP', 'Schedule M', 'ASHRAE 170', 'ISPE GAMP 5', 'ICH Guidelines'],
    page: 'Home',
    path: '/',
    priority: 9
  },

  // About Page
  {
    id: 'about-main',
    title: 'About',
    section: 'About',
    description: 'Learn about Sneha & Prahar Consultancy Services - Our story, leadership team, mission, and vision.',
    keywords: ['about', 'about us', 'company', 'our story'],
    page: 'About',
    path: '/about',
    priority: 10
  },
  {
    id: 'about-founder',
    title: 'Mr. Rajendra Prasad - Founder & Managing Director',
    section: 'About',
    description: 'Distinguished engineering leader with extensive expertise in Pharmaceutical and Biotechnology Industries. Held Senior Leadership roles in Singapore.',
    keywords: ['Rajendra Prasad', 'founder', 'managing director', 'Singapore'],
    page: 'About',
    path: '/about',
    priority: 7
  },
  {
    id: 'about-ceo',
    title: 'Mr. Prudvi Nayak - Chief Executive Officer',
    section: 'About',
    description: 'Provides strategic leadership, driving engineering excellence, business growth, and operational performance across Engineering, Pharmaceutical, Biotechnology, and Life Sciences projects.',
    keywords: ['Prudvi Nayak', 'CEO', 'chief executive officer'],
    page: 'About',
    path: '/about',
    priority: 7
  },
  {
    id: 'about-mission',
    title: 'Our Mission',
    section: 'About',
    description: 'To provide consistently high quality services in an efficient and professional manner to ensure building/business safety, comfort and enhance productivity.',
    keywords: ['mission', 'company mission'],
    page: 'About',
    path: '/about',
    priority: 6
  },
  {
    id: 'about-vision',
    title: 'Our Vision',
    section: 'About',
    description: 'To be the preferred facility management service provider, delivering effective, reliable and excellent services as a collaborative and valued partner.',
    keywords: ['vision', 'company vision'],
    page: 'About',
    path: '/about',
    priority: 6
  },

  // Services Page
  {
    id: 'services-main',
    title: 'Services',
    section: 'Services',
    description: 'Our comprehensive pharmaceutical engineering services including CQV, CSV, MES, HVAC, cleanroom, and utility engineering.',
    keywords: ['services', 'our services', 'engineering services'],
    page: 'Services',
    path: '/services',
    priority: 10
  },
  {
    id: 'services-engineering',
    title: 'Engineering Consultancy',
    section: 'Services',
    description: 'Concept to commissioning engineering for GMP facilities.',
    keywords: ['engineering consultancy', 'concept', 'commissioning'],
    page: 'Services',
    path: '/services',
    priority: 9
  },
  {
    id: 'services-hvac',
    title: 'HVAC Systems',
    section: 'Services',
    description: 'Precision HVAC design for cleanroom environments.',
    keywords: ['HVAC', 'air handling'],
    page: 'Services',
    path: '/services',
    priority: 9
  },
  {
    id: 'services-cleanroom',
    title: 'Cleanroom Engineering',
    section: 'Services',
    description: 'Cleanroom design and qualification.',
    keywords: ['cleanroom', 'ISO classification'],
    page: 'Services',
    path: '/services',
    priority: 9
  },
  {
    id: 'services-utility',
    title: 'Utility Engineering',
    section: 'Services',
    description: 'Pharmaceutical-grade utility systems design.',
    keywords: ['utility engineering', 'water systems', 'steam'],
    page: 'Services',
    path: '/services',
    priority: 9
  },
  {
    id: 'services-csv',
    title: 'CSV & Validation',
    section: 'Services',
    description: 'Computer system validation per GAMP 5 guidelines.',
    keywords: ['CSV', 'GAMP 5'],
    page: 'Services',
    path: '/services',
    priority: 9
  },
  {
    id: 'services-audit',
    title: 'Facility Audit Readiness',
    section: 'Services',
    description: 'GMP gap assessment and regulatory inspection support.',
    keywords: ['audit readiness', 'GMP gap assessment', 'regulatory inspection'],
    page: 'Services',
    path: '/services',
    priority: 9
  },
  {
    id: 'services-mes',
    title: 'MES',
    section: 'Services',
    description: 'Manufacturing Execution System implementation and integration.',
    keywords: ['MES', 'Manufacturing Execution System'],
    page: 'Services',
    path: '/services',
    priority: 8
  },
  {
    id: 'services-temperature',
    title: 'Temperature Mapping',
    section: 'Services',
    description: 'Thermal validation and temperature mapping studies.',
    keywords: ['temperature mapping', 'thermal validation'],
    page: 'Services',
    path: '/services',
    priority: 8
  },
  {
    id: 'services-iqoqpq',
    title: 'IQ / OQ / PQ',
    section: 'Services',
    description: 'Installation, operational, and performance qualification.',
    keywords: ['IQ', 'OQ', 'PQ', 'installation qualification', 'operational qualification', 'performance qualification'],
    page: 'Services',
    path: '/services',
    priority: 9
  },
  {
    id: 'services-water',
    title: 'Water Systems',
    section: 'Services',
    description: 'WFI, PW, and water for injection loop design.',
    keywords: ['water systems', 'WFI', 'Water for Injection', 'PW', 'Purified Water'],
    page: 'Services',
    path: '/services',
    priority: 9
  },
  {
    id: 'services-automation',
    title: 'Automation & BMS',
    section: 'Services',
    description: 'Integrated building management and process automation.',
    keywords: ['automation', 'BMS', 'Building Management System', 'SCADA', 'PLC'],
    page: 'Services',
    path: '/services',
    priority: 9
  },
  {
    id: 'services-cqv',
    title: 'CQV Services',
    section: 'Services',
    description: 'Commissioning, Qualification & Validation (CQV) for facilities, utilities, equipment, and manufacturing systems.',
    keywords: ['CQV', 'commissioning', 'qualification', 'validation'],
    page: 'Services',
    path: '/services',
    priority: 9
  },
  {
    id: 'services-project',
    title: 'Project Management Consultancy',
    section: 'Services',
    description: 'End-to-end project planning, coordination, execution, monitoring, and successful delivery of pharmaceutical engineering projects.',
    keywords: ['project management', 'planning', 'execution', 'monitoring'],
    page: 'Services',
    path: '/services',
    priority: 8
  },
  {
    id: 'services-greenfield',
    title: 'Greenfield & Brownfield Projects',
    section: 'Services',
    description: 'Complete engineering, expansion, modernization, commissioning, and validation of pharmaceutical manufacturing facilities.',
    keywords: ['greenfield', 'brownfield', 'expansion', 'modernization'],
    page: 'Services',
    path: '/services',
    priority: 8
  },

  // Industries Page
  {
    id: 'industries-main',
    title: 'Industries',
    section: 'Industries',
    description: 'Industries we serve: Pharmaceutical, Biotechnology, Vaccine, API, R&D, and Medical Devices.',
    keywords: ['industries', 'industries we serve', 'sectors'],
    page: 'Industries',
    path: '/industries',
    priority: 10
  },
  {
    id: 'industries-pharma',
    title: 'Pharmaceutical Manufacturing',
    section: 'Industries',
    description: 'Comprehensive engineering support for oral solid dosage, liquid, semi-solid, and sterile pharmaceutical manufacturing facilities.',
    keywords: ['pharmaceutical manufacturing', 'oral solid dosage', 'liquid', 'semi-solid', 'sterile'],
    page: 'Industries',
    path: '/industries',
    priority: 9
  },
  {
    id: 'industries-biotech',
    title: 'Biotechnology',
    section: 'Industries',
    description: 'Specialized engineering for cell culture, fermentation, purification, and fill-finish biotech manufacturing operations.',
    keywords: ['biotechnology', 'cell culture', 'fermentation', 'purification', 'fill-finish'],
    page: 'Industries',
    path: '/industries',
    priority: 9
  },
  {
    id: 'industries-vaccine',
    title: 'Vaccine Production',
    section: 'Industries',
    description: 'Engineering excellence for bulk vaccine production, formulation, fill-finish, and cold chain storage infrastructure.',
    keywords: ['vaccine', 'vaccine production', 'bulk production', 'formulation', 'cold chain'],
    page: 'Industries',
    path: '/industries',
    priority: 9
  },
  {
    id: 'industries-api',
    title: 'API Manufacturing',
    section: 'Industries',
    description: 'Process and utility engineering for Active Pharmaceutical Ingredient synthesis, purification, and packaging facilities.',
    keywords: ['API', 'Active Pharmaceutical Ingredient', 'synthesis', 'purification'],
    page: 'Industries',
    path: '/industries',
    priority: 9
  },
  {
    id: 'industries-rd',
    title: 'Research & Development',
    section: 'Industries',
    description: 'Flexible, future-proof laboratory and pilot plant engineering for pharmaceutical and biotech R&D operations.',
    keywords: ['R&D', 'research', 'development', 'laboratory', 'pilot plant'],
    page: 'Industries',
    path: '/industries',
    priority: 8
  },
  {
    id: 'industries-medical',
    title: 'Medical Devices',
    section: 'Industries',
    description: 'Cleanroom and facility engineering for sterile and non-sterile medical device manufacturing.',
    keywords: ['medical devices', 'sterile', 'non-sterile'],
    page: 'Industries',
    path: '/industries',
    priority: 8
  },

  // Projects Page
  {
    id: 'projects-main',
    title: 'Projects',
    section: 'Projects',
    description: '100+ successfully delivered engineering projects across pharmaceutical, biotechnology, and life sciences industries.',
    keywords: ['projects', 'projects delivered', 'case studies', 'portfolio'],
    page: 'Projects',
    path: '/projects',
    priority: 10
  },
  {
    id: 'projects-csv',
    title: 'Computer System Validation (CSV) & CQV Services',
    section: 'Projects',
    description: 'Successfully completed CSV, CQV, IQ, OQ, and PQ activities for manufacturing, laboratory, utility, and computerized systems.',
    keywords: ['CSV', 'CQV', 'IQ', 'OQ', 'PQ', 'GAMP 5', '21 CFR Part 11'],
    page: 'Projects',
    path: '/projects',
    priority: 9
  },
  {
    id: 'projects-audit',
    title: 'Facility Audit Readiness & GMP Compliance',
    section: 'Projects',
    description: 'Successfully delivered GMP Facility Audit Readiness, engineering compliance, qualification review, and documentation support.',
    keywords: ['audit readiness', 'GMP compliance', 'USFDA', 'MHRA', 'WHO-GMP', 'Schedule M'],
    page: 'Projects',
    path: '/projects',
    priority: 9
  },
  {
    id: 'projects-cleanroom',
    title: 'Cleanroom Engineering & Qualification',
    section: 'Projects',
    description: 'Successfully executed cleanroom engineering, HVAC qualification, airflow visualization, and environmental monitoring.',
    keywords: ['cleanroom', 'HVAC qualification', 'airflow visualization', 'environmental monitoring', 'ISO 14644'],
    page: 'Projects',
    path: '/projects',
    priority: 9
  },
  {
    id: 'projects-consultancy',
    title: 'Engineering Consultancy & Facility Development',
    section: 'Projects',
    description: 'Delivered engineering consultancy, Greenfield and Brownfield facility development, and utility engineering.',
    keywords: ['engineering consultancy', 'Greenfield', 'Brownfield', 'facility development', 'utility engineering'],
    page: 'Projects',
    path: '/projects',
    priority: 8
  },
  {
    id: 'projects-hvac',
    title: 'Pharmaceutical HVAC Engineering',
    section: 'Projects',
    description: 'Successfully designed and qualified GMP HVAC systems including HEPA filtration, pressure cascade, and temperature control.',
    keywords: ['HEPA filtration', 'pressure cascade', 'temperature control', 'air balancing', 'HVAC qualification'],
    page: 'Projects',
    path: '/projects',
    priority: 9
  },
  {
    id: 'projects-utility',
    title: 'Critical Utility Engineering',
    section: 'Projects',
    description: 'Successfully completed utility engineering projects involving chilled water systems, boilers, clean steam, compressed air, and EMS.',
    keywords: ['chilled water', 'boilers', 'clean steam', 'compressed air', 'EMS', 'BMS', 'utility engineering'],
    page: 'Projects',
    path: '/projects',
    priority: 9
  },
  {
    id: 'projects-equipment',
    title: 'Equipment Qualification & Commissioning',
    section: 'Projects',
    description: 'Successfully completed FAT, SAT, commissioning, IQ, OQ, and PQ for manufacturing, laboratory, and utility equipment.',
    keywords: ['FAT', 'SAT', 'commissioning', 'IQ', 'OQ', 'PQ', 'equipment qualification'],
    page: 'Projects',
    path: '/projects',
    priority: 9
  },
  {
    id: 'projects-water',
    title: 'PW, WFI & Clean Steam Systems',
    section: 'Projects',
    description: 'Successfully completed commissioning, qualification, and validation of Purified Water, WFI, Clean Steam systems, and distribution loops.',
    keywords: ['PW', 'Purified Water', 'WFI', 'Water for Injection', 'clean steam', 'distribution loops'],
    page: 'Projects',
    path: '/projects',
    priority: 9
  },
  {
    id: 'projects-automation',
    title: 'Automation, PLC, SCADA, EMS & BMS',
    section: 'Projects',
    description: 'Successfully implemented PLC, SCADA, BMS, EMS, alarm management, and real-time monitoring solutions.',
    keywords: ['PLC', 'SCADA', 'BMS', 'EMS', 'alarm management', 'real-time monitoring', 'historian'],
    page: 'Projects',
    path: '/projects',
    priority: 9
  },
  {
    id: 'projects-ln2',
    title: 'Liquid Nitrogen Monitoring System',
    section: 'Projects',
    description: 'Successfully implemented automated Liquid Nitrogen tank level monitoring system with digital display and email notification.',
    keywords: ['liquid nitrogen', 'level monitoring', 'digital display', 'email alerts', 'real-time monitoring'],
    page: 'Projects',
    path: '/projects',
    priority: 8
  },

  // Quality Page
  {
    id: 'quality-main',
    title: 'Quality',
    section: 'Quality',
    description: 'Quality & Compliance - WHO GMP, US FDA, EU GMP Annex 1, Schedule M, and ISPE Guidelines compliance expertise.',
    keywords: ['quality', 'quality compliance', 'regulatory standards'],
    page: 'Quality',
    path: '/quality',
    priority: 10
  },
  {
    id: 'quality-who',
    title: 'WHO GMP Compliance',
    section: 'Quality',
    description: 'Our engineering designs and validation protocols comply fully with WHO Technical Report Series guidelines for pharmaceutical manufacturing.',
    keywords: ['WHO GMP', 'Technical Report Series'],
    page: 'Quality',
    path: '/quality',
    priority: 9
  },
  {
    id: 'quality-fda',
    title: 'US FDA 21 CFR Compliance',
    section: 'Quality',
    description: 'Deep expertise in USFDA cGMP regulations, including 21 CFR Part 11 electronic records and equipment qualification.',
    keywords: ['US FDA', '21 CFR', 'Part 211', 'Part 11'],
    page: 'Quality',
    path: '/quality',
    priority: 9
  },
  {
    id: 'quality-eu',
    title: 'EU GMP Annex 1 Compliance',
    section: 'Quality',
    description: 'Comprehensive capability in designing, qualifying, and maintaining sterile manufacturing facilities to the 2023 revised EU GMP Annex 1.',
    keywords: ['EU GMP', 'Annex 1', 'sterile manufacturing', 'contamination control strategy', 'CCS'],
    page: 'Quality',
    path: '/quality',
    priority: 9
  },
  {
    id: 'quality-schedule',
    title: 'Schedule M (India) Compliance',
    section: 'Quality',
    description: 'Comprehensive knowledge of India\'s revised Schedule M (2023) requirements for pharmaceutical manufacturing facilities.',
    keywords: ['Schedule M', 'India'],
    page: 'Quality',
    path: '/quality',
    priority: 8
  },
  {
    id: 'quality-ispe',
    title: 'ISPE Guidelines Application',
    section: 'Quality',
    description: 'Active application of ISPE Baseline Guides, Good Practice Guides, and Technical Guides across facility design and qualification.',
    keywords: ['ISPE', 'Baseline Guide', 'GAMP 5'],
    page: 'Quality',
    path: '/quality',
    priority: 8
  },

  // Technology Page
  {
    id: 'tech-main',
    title: 'Technology',
    section: 'Technology',
    description: 'Engineering Software at the Cutting Edge - Digital Twin, IoT, Cybersecurity, and AI-Assisted Engineering solutions.',
    keywords: ['technology', 'engineering software', 'digital solutions'],
    page: 'Technology',
    path: '/technology',
    priority: 10
  },
  {
    id: 'tech-digital',
    title: 'Digital Twin Development',
    section: 'Technology',
    description: 'Creating virtual replicas of pharmaceutical facilities for predictive maintenance, operational optimization, and regulatory change assessment.',
    keywords: ['digital twin', 'predictive maintenance', 'operational optimization'],
    page: 'Technology',
    path: '/technology',
    priority: 8
  },
  {
    id: 'tech-iot',
    title: 'IoT & Industry 4.0 Integration',
    section: 'Technology',
    description: 'Connecting facility systems — HVAC, utilities, equipment — into a unified digital intelligence layer for real-time visibility.',
    keywords: ['IoT', 'Industry 4.0', 'digital intelligence', 'real-time visibility'],
    page: 'Technology',
    path: '/technology',
    priority: 8
  },
  {
    id: 'tech-cyber',
    title: 'Cybersecurity for OT Systems',
    section: 'Technology',
    description: 'Pharmaceutical-specific OT/ICS cybersecurity assessment and hardening to protect critical manufacturing infrastructure.',
    keywords: ['cybersecurity', 'OT', 'ICS', 'operational technology', 'industrial control systems'],
    page: 'Technology',
    path: '/technology',
    priority: 7
  },
  {
    id: 'tech-ai',
    title: 'AI-Assisted Engineering',
    section: 'Technology',
    description: 'Leveraging artificial intelligence tools to accelerate drawing review, document QC, and design optimization.',
    keywords: ['AI', 'artificial intelligence', 'drawing review', 'document QC', 'design optimization'],
    page: 'Technology',
    path: '/technology',
    priority: 7
  },

  // Insights Page
  {
    id: 'insights-main',
    title: 'Insights',
    section: 'Insights',
    description: 'Engineering Insights - Technical articles, regulatory guidance summaries, and engineering best practices.',
    keywords: ['insights', 'articles', 'technical articles', 'engineering insights', 'blog'],
    page: 'Insights',
    path: '/insights',
    priority: 10
  },
  {
    id: 'insights-sterile',
    title: 'Designing GMP-Compliant Sterile Manufacturing Facilities',
    section: 'Insights',
    description: 'Comprehensive guide to designing sterile pharmaceutical manufacturing facilities that meet the 2023 revised EU GMP Annex 1 requirements.',
    keywords: ['sterile manufacturing', 'EU GMP Annex 1', 'contamination control strategy', 'CCS'],
    page: 'Insights',
    path: '/insights',
    priority: 8
  },
  {
    id: 'insights-cleanroom',
    title: 'Cleanroom Classification: EU GMP Standards',
    section: 'Insights',
    description: 'Understanding cleanroom classifications and EU GMP grade designations, including particle count and microbiological limits.',
    keywords: ['cleanroom classification', 'EU GMP', 'particle count', 'microbiological limits'],
    page: 'Insights',
    path: '/insights',
    priority: 8
  },
  {
    id: 'insights-hvac',
    title: 'Pharmaceutical HVAC Design Best Practices',
    section: 'Insights',
    description: 'Effective pharmaceutical HVAC design covering pressure cascades, temperature zoning, energy efficiency, and seasonal performance.',
    keywords: ['HVAC design', 'pressure cascade', 'temperature zoning', 'energy efficiency'],
    page: 'Insights',
    path: '/insights',
    priority: 8
  },
  {
    id: 'insights-wfi',
    title: 'Water for Injection: Design Principles',
    section: 'Insights',
    description: 'WFI systems generation technology selection, loop design principles, passivation, and qualification requirements.',
    keywords: ['WFI', 'Water for Injection', 'membrane-based', 'distillation', 'passivation'],
    page: 'Insights',
    path: '/insights',
    priority: 8
  },
  {
    id: 'insights-csv-cloud',
    title: 'Computer System Validation in Cloud and SaaS',
    section: 'Insights',
    description: 'Updated validation strategies for cloud-based MES, LIMS, and EMS systems using GAMP 5 and FDA CSA guidance.',
    keywords: ['CSV', 'cloud', 'SaaS', 'GAMP 5', 'FDA CSA', 'Computer Software Assurance', 'data integrity'],
    page: 'Insights',
    path: '/insights',
    priority: 8
  },
  {
    id: 'insights-energy',
    title: 'Energy Efficiency in Pharmaceutical HVAC',
    section: 'Insights',
    description: 'Proven strategies for achieving significant energy reduction in pharmaceutical HVAC while maintaining GMP compliance.',
    keywords: ['energy efficiency', 'HVAC', 'air change rate', 'ACR', 'VAV', 'heat recovery'],
    page: 'Insights',
    path: '/insights',
    priority: 7
  },

  // Contact Page
  {
    id: 'contact-main',
    title: 'Contact Us',
    section: 'Contact',
    description: 'Get in touch with Sneha & Prahar Consultancy Services for pharmaceutical engineering solutions.',
    keywords: ['contact', 'contact us', 'reach us', 'get in touch', 'phone', 'email', 'address'],
    page: 'Contact',
    path: '/contact',
    priority: 10
  },
  {
    id: 'contact-hyderabad',
    title: 'Hyderabad Office - Headquarters',
    section: 'Contact',
    description: '#8-80/80NP, Ramidi Malla Reddy Nagar, Almasguda, Badangpet, Hyderabad — 500081, Telangana, India',
    keywords: ['Hyderabad', 'headquarters', 'office', 'Telangana', 'India', 'Almasguda', 'Badangpet', 'address'],
    page: 'Contact',
    path: '/contact',
    priority: 9
  },
  {
    id: 'contact-specialties',
    title: 'Engineering Specializations',
    section: 'Contact',
    description: 'Computer System Validation (CSV), Manufacturing Execution Systems (MES), Facility Audit Readiness, Temperature Mapping Studies, Cleanroom Design, HVAC, Validation Services.',
    keywords: ['CSV', 'MES', 'audit readiness', 'temperature mapping', 'cleanroom design', 'HVAC', 'validation', 'regulatory compliance', 'shutdown'],
    page: 'Contact',
    path: '/contact',
    priority: 8
  },
]

// Helper function to get all unique keywords for suggestions
export function getAllKeywords(): string[] {
  const keywordSet = new Set<string>()
  searchIndex.forEach(item => {
    item.keywords.forEach(keyword => keywordSet.add(keyword))
  })
  return Array.from(keywordSet).sort()
}

// Helper function to get all pages
export function getAllPages(): string[] {
  const pageSet = new Set<string>()
  searchIndex.forEach(item => pageSet.add(item.page))
  return Array.from(pageSet).sort()
}
