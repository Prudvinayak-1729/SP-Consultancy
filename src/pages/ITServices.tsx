import { useState, useEffect, useId, useRef } from 'react'
import {
  Bot,
  Cloud,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Code2,
  Workflow,
  Sparkles,
  PhoneCall,
  FileCheck,
  Building2,
  Search,
  ChevronDown,
  ChevronUp,
  Send,
  Check,
  Terminal,
  Activity,
  Globe2,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'
import SEO from '../components/SEO'

const calendlyUrl = 'https://calendly.com/spconsultanancies/30min'

// Industry filter types
type IndustryFilter = 'all' | 'sales' | 'healthcare' | 'finance' | 'insurance' | 'legal' | 'saas' | 'support' | 'real-estate' | 'recruitment' | 'agencies'

interface SystemService {
  id: string
  title: string
  proof: string
  fits: string[]
  fitsText: string
  icon: typeof Bot
}

const aiSystems: SystemService[] = [
  {
    id: 'email-ticket',
    title: 'Email & ticket automation',
    proof: 'Agents that read incoming messages, file them, catch duplicates and draft replies. ~70% less manual work in production.',
    fits: ['support', 'it-services', 'logistics', 'insurance', 'saas'],
    fitsText: 'Support, IT services, logistics, insurance, SaaS',
    icon: Mail,
  },
  {
    id: 'doc-intelligence',
    title: 'Document intelligence',
    proof: 'Pull structured data out of PDFs, spreadsheets, scans and handwriting, across 10+ file formats.',
    fits: ['finance', 'insurance', 'legal', 'healthcare', 'real-estate'],
    fitsText: 'Finance, insurance, legal, healthcare admin, real estate',
    icon: FileCheck,
  },
  {
    id: 'knowledge-assistants',
    title: 'Knowledge assistants',
    proof: 'Chat with your company\'s documents, organized by department, with answers grounded in the source files.',
    fits: ['agencies', 'legal', 'saas', 'finance'],
    fitsText: 'Agencies, consulting, legal, any document-heavy team',
    icon: Search,
  },
  {
    id: 'voice-agents',
    title: 'Voice agents',
    proof: 'Outbound and inbound calls that hold a natural conversation, cope with interruptions and log every answer.',
    fits: ['sales', 'healthcare', 'recruitment', 'real-estate'],
    fitsText: 'Sales & CRM, healthcare, recruitment, real estate, hospitality',
    icon: PhoneCall,
  },
  {
    id: 'guardrails-products',
    title: 'AI products with guardrails',
    proof: 'Customer-facing assistants with strict output contracts, guardrails that escalate instead of guessing, failover when a model fails, and cost tracking per conversation.',
    fits: ['healthcare', 'finance', 'saas'],
    fitsText: 'Healthtech, wellness, edtech, fintech applications',
    icon: ShieldCheck,
  },
  {
    id: 'risk-compliance',
    title: 'Risk & compliance review',
    proof: 'Agent teams that run multi-stage reviews, with a checking agent that validates each stage before the next.',
    fits: ['finance', 'saas', 'legal'],
    fitsText: 'Fintech, banks, enterprise SaaS vendors, procurement',
    icon: Workflow,
  },
  {
    id: 'recruitment-hr',
    title: 'Recruitment & HR automation',
    proof: 'An ATS that runs from client and vendor onboarding through AI résumé screening to hiring, used by 60 people, and an HRMS for 600 employees with per-unit access control and AI attendance reports.',
    fits: ['recruitment', 'saas'],
    fitsText: 'Staffing and recruitment firms, HR teams, multi-entity groups',
    icon: Building2,
  },
  {
    id: 'ai-visibility',
    title: 'AI visibility',
    proof: 'Measure and improve how ChatGPT, Claude and Perplexity describe your brand, with MentionNow, which I co-founded.',
    fits: ['all', 'sales', 'healthcare', 'finance', 'insurance', 'legal', 'saas', 'support', 'real-estate', 'recruitment', 'agencies'],
    fitsText: 'Any enterprise brand in any competitive market',
    icon: Sparkles,
  },
]

// Simulator Scenarios
type SimScenarioKey = 'normal' | 'outage' | 'down' | 'flag'

interface SimScenario {
  key: SimScenarioKey
  label: string
  tag: string
  color: string
  activeStages: string[]
  latency: string
  tokens: string
  cost: string
  outcome: string
  outcomeClass: 'good' | 'warn' | 'bad' | 'flag'
  logs: string[]
}

const simulatorScenarios: Record<SimScenarioKey, SimScenario> = {
  normal: {
    key: 'normal',
    label: 'Normal question',
    tag: 'Clean Path',
    color: '#008C86',
    activeStages: ['req', 'guard', 'ctx', 'route', 'm1', 'json', 'out'],
    latency: '1.46 s',
    tokens: '1,184',
    cost: '$0.0049',
    outcome: 'Answered',
    outcomeClass: 'good',
    logs: [
      '00.000 request · "Knee still sore after squats, what should I change?" · 38 tokens',
      '00.260 guardrail · in scope: self-managed physio',
      '00.480 context · rolling summary 612 / 1,200 token budget',
      '00.640 router → primary model',
      '00.760 gemini-2.5-flash · streaming…',
      '01.460 first token at 1.46 s',
      '02.050 JSON contract · schema valid',
      '02.250 response delivered · logged 1,184 tokens · $0.0049',
    ],
  },
  outage: {
    key: 'outage',
    label: 'Primary model times out',
    tag: 'Auto Failover',
    color: '#0969E8',
    activeStages: ['req', 'guard', 'ctx', 'route', 'm2', 'json', 'out'],
    latency: '2.84 s',
    tokens: '1,240',
    cost: '$0.0062',
    outcome: 'Recovered via Secondary',
    outcomeClass: 'warn',
    logs: [
      '00:00.000 — [R1] User question received',
      '00:00.050 — [R3] Guardrail check: clear',
      '00:00.110 — [R2] Primary model request initiated...',
      '00:01.800 — [WARN] Primary model HTTP 504 Gateway Timeout',
      '00:01.820 — [R3 Failover] Triggering Secondary model fallback (Claude 3.5 Haiku)',
      '00:02.720 — [R3] Secondary model returned response; schema verified',
      '00:02.840 — [R6] Fallback logged to CloudWatch alert; response delivered',
    ],
  },
  down: {
    key: 'down',
    label: 'Every model is down',
    tag: 'Deterministic Fallback',
    color: '#64748B',
    activeStages: ['req', 'guard', 'ctx', 'route', 'kw', 'out'],
    latency: '0.04 s',
    tokens: '120',
    cost: '$0.0000',
    outcome: 'Keyword Fallback Active',
    outcomeClass: 'bad',
    logs: [
      '00:00.000 — [R1] User query received',
      '00:00.010 — [R2] Circuit breaker: all LLM endpoints unavailable',
      '00:00.020 — [R3] Activating deterministic local keyword index',
      '00:00.035 — Match found in verified emergency clinic database',
      '00:00.040 — [R6] Zero-cost deterministic advice delivered without failing',
    ],
  },
  flag: {
    key: 'flag',
    label: 'Red-flag symptom',
    tag: 'Clinical Escalation',
    color: '#EF4444',
    activeStages: ['req', 'guard', 'esc', 'out'],
    latency: '0.35 s',
    tokens: '320',
    cost: '$0.0012',
    outcome: 'Escalated to Human Doctor',
    outcomeClass: 'flag',
    logs: [
      '00:00.000 — [R1] User reports acute sudden pain spike',
      '00:00.030 — [R3] Guardrail intercept: clinical threshold violated',
      '00:00.080 — [ESCALATE] LLM generation bypassed by rule-based safety hook',
      '00:00.200 — Generating verified medical urgent-care directive',
      '00:00.350 — Immediate doctor consultation hotline prompt rendered',
    ],
  },
}

// Client company logos & names
const clientLogos = [
  { name: 'Bridgetown Consulting Group', src: 'https://www.srinivasdharavath.com/logos/companies/bridgetown-consulting-group.png' },
  { name: 'Atlas Systems', src: 'https://www.srinivasdharavath.com/logos/companies/atlas-systems.png' },
  { name: 'Bluekyte.AI (Counsello AI)', src: 'https://www.srinivasdharavath.com/logos/companies/counsello-ai.jpg' },
  { name: 'Open Data Fabric', src: 'https://www.srinivasdharavath.com/logos/companies/open-data-fabric.png' },
  { name: 'Walker Sands', src: 'https://www.srinivasdharavath.com/logos/companies/walker-sands.svg' },
  { name: 'Balihans', src: 'https://www.srinivasdharavath.com/logos/companies/balihans-navy.jpg' },
  { name: 'ShaktyAI', src: 'https://www.srinivasdharavath.com/logos/companies/shakty-ai.png' },
  { name: 'MentionNow', src: 'https://www.srinivasdharavath.com/logos/companies/mentionnow.svg' },
  { name: 'Masai School', src: 'https://www.srinivasdharavath.com/logos/companies/masai-school.png' },
  { name: 'Statinfer', src: 'https://www.srinivasdharavath.com/logos/companies/statinfer.png' },
  { name: 'MedTourEasy', src: 'https://www.srinivasdharavath.com/logos/companies/medtoureasy.jpg' },
  { name: 'Villageagro', src: 'https://www.srinivasdharavath.com/logos/companies/villageagro.jpg' },
  { name: 'Mazagon Dock Shipbuilders', src: 'https://www.srinivasdharavath.com/logos/companies/mazagon-dock-shipbuilders.svg' },
]

// Tech Stack Groups
const techGroups = [
  {
    title: 'Agents & models',
    items: [
      { name: 'LangGraph', logo: new URL('../../assets/img/LangGraph.png', import.meta.url).href },
      { name: 'LangChain', logo: new URL('../../assets/img/langchain.png', import.meta.url).href },
      { name: 'CrewAI', logo: new URL('../../assets/img/CrewAI.png', import.meta.url).href },
      { name: 'MCP', logo: new URL('../../assets/img/MCP.png', import.meta.url).href },
      { name: 'OpenAI', logo: new URL('../../assets/img/Openai.png', import.meta.url).href },
      { name: 'Claude', logo: new URL('../../assets/img/claude.png', import.meta.url).href },
      { name: 'Gemini', logo: new URL('../../assets/img/Gemini.png', import.meta.url).href },
      { name: 'Llama', logo: new URL('../../assets/img/Llama.png', import.meta.url).href },
      { name: 'Hugging Face', logo: new URL('../../assets/img/Hugging Face.png', import.meta.url).href },
    ],
  },
  {
    title: 'Backend & data',
    items: [
      { name: 'Python', logo: new URL('../../assets/img/Python.png', import.meta.url).href },
      { name: 'FastAPI', logo: new URL('../../assets/img/Fast Api.png', import.meta.url).href },
      { name: 'Django', logo: new URL('../../assets/img/Django.png', import.meta.url).href },
      { name: 'PostgreSQL', logo: new URL('../../assets/img/Postgresql.png', import.meta.url).href },
      { name: 'MongoDB', logo: new URL('../../assets/img/MongoDb.png', import.meta.url).href },
      { name: 'Supabase', logo: new URL('../../assets/img/supabase.png', import.meta.url).href },
      { name: 'ChromaDB', logo: new URL('../../assets/img/chroma db.png', import.meta.url).href },
    ],
  },
  {
    title: 'Cloud & ops',
    items: [
      { name: 'AWS', logo: new URL('../../assets/img/aws.png', import.meta.url).href },
      { name: 'Azure', logo: new URL('../../assets/img/azure.png', import.meta.url).href },
      { name: 'Docker', logo: new URL('../../assets/img/docker.png', import.meta.url).href },
      { name: 'Kubernetes', logo: new URL('../../assets/img/Kubernates.png', import.meta.url).href },
      { name: 'Terraform', logo: new URL('../../assets/img/teraform.png', import.meta.url).href },
    ],
  },
  {
    title: 'Channels & product',
    items: [
      { name: 'Twilio', logo: new URL('../../assets/img/twilio.png', import.meta.url).href },
      { name: 'WhatsApp', logo: new URL('../../assets/img/whatsapp.png', import.meta.url).href },
      { name: 'Stripe', logo: new URL('../../assets/img/stripe.png', import.meta.url).href },
      { name: 'React', logo: new URL('../../assets/img/react.png', import.meta.url).href },
      { name: 'Next.js', logo: new URL('../../assets/img/nextjs.png', import.meta.url).href },
    ],
  },
]

// FAQ Items
const faqs = [
  {
    q: 'Do you work with companies outside India?',
    a: 'Yes. I work remotely with teams in India, the US, the UK, Europe and the Gulf. Indian and Gulf teams share my whole working day, Europe most of the afternoon, and US calls fit my evening. Invoices go out in INR, USD, GBP, EUR or AED.',
  },
  {
    q: 'Where does the system run, and who owns the code?',
    a: 'In your own AWS or Azure account and region. The code, documentation and dashboards are yours once paid, with a recorded walkthrough for your team, and my access is removed at the end.',
  },
  {
    q: 'Will my data be used to train AI models?',
    a: 'No. Every model provider is listed up front and none of them trains on your data. Where it is needed I sign a DPA with SCCs for the EU, a UK IDTA or a HIPAA BAA, and an NDA before you share any details.',
  },
  {
    q: 'How does an engagement start?',
    a: 'With a 30-minute call and a written proposal within two business days. Most teams then run a two-week, fixed-price Sprint or Audit, which ends in a prototype or a ranked list of fixes, a cost model and a clear go/no-go. Builds run in two-week loops with working software each time.',
  },
  {
    q: 'Which models and tools do you work with?',
    a: 'OpenAI, Claude and Gemini models through their APIs, and open models such as LLaMA and Qwen where fine-tuning or self-hosting makes sense. LangGraph, LangChain, CrewAI and the Model Context Protocol for agents; Python, FastAPI and PostgreSQL for the backend; AWS and Azure for the cloud. Each step gets the simplest thing that works.',
  },
  {
    q: 'Can you fix an AI system that already exists?',
    a: 'Yes. The Production-Readiness Audit is for AI that is flaky, slow or expensive: I pull failure patterns from real conversations, set up an eval baseline with pass/fail checks, review failover and guardrails, and rank the cost and latency fixes.',
  },
  {
    q: 'Are you available part-time or as a fractional AI engineer?',
    a: 'Yes. As a fractional AI engineer I give a founder about a day a week for roadmap and architecture reviews, eval and cost monitoring, and help hiring an AI team.',
  },
]

export default function ITServices() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryFilter>('all')
  const [activeScenario, setActiveScenario] = useState<SimScenarioKey>('normal')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [currentTime, setCurrentTime] = useState('')
  const [loadPercentage, setLoadPercentage] = useState(55)
  const scrollableRef = useRef<HTMLDivElement>(null)

  // Form state
  const [formName, setFormName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formCompany, setFormCompany] = useState('')
  const [formNeed, setFormNeed] = useState('')
  const [formBudget, setFormBudget] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState('')

  // Clock effect for Hyderabad (IST)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const istTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
      setCurrentTime(istTime)
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // Filter systems
  const filteredSystems = aiSystems.filter(sys => {
    if (selectedIndustry === 'all') return true
    return sys.fits.includes(selectedIndustry)
  })

  const currentScenarioData = simulatorScenarios[activeScenario]

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formName || !formEmail) return
    setFormError('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'c8060850-061c-4fea-8250-4c27215e82d6',
          subject: `AI & IT project brief from ${formName}`,
          name: formName,
          email: formEmail,
          company: formCompany,
          request_type: 'Project brief',
          requirements: formNeed,
          budget_scope: formBudget,
        }),
      })
      const result = await response.json()

      if (result.success) {
        setFormSubmitted(true)
      } else {
        setFormError('Your request could not be sent. Please try again or email spconsultanancies@gmail.com.')
      }
    } catch {
      setFormError('Your request could not be sent. Please try again or email spconsultanancies@gmail.com.')
    }
  }

  // Handle scroll on the graph area
  useEffect(() => {
    const element = scrollableRef.current
    if (!element) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setLoadPercentage(prev => Math.min(90, Math.max(20, prev - Math.sign(e.deltaY) * 10)))
    }

    element.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      element.removeEventListener('wheel', handleWheel)
    }
  }, [])

  const dwlLabelId = useId()
  const bpClipId = useId()

  return (
    <>
      <SEO
        title="Senior AI Engineer · IIT Madras · Hyderabad, India"
        description="I design, build and run AI for teams that need it to hold up in daily use: the model and its guardrails, the backend, the cloud, and the dashboard that shows what it costs."
        canonical="/it-services"
        keywords="enterprise IT services, AI agents, production LLMs, LangGraph, RAG architecture, voice AI, document intelligence, fine-tuning, AWS cloud, Azure, FastAPI, Sneha Prahar Consultancy IT"
      />

      <div style={{ backgroundColor: '#FFFFFF', color: '#111827' }}>

        {/* ========================================================
            HERO SECTION: 2-COLUMN TECHNICAL BLUEPRINT & VALUE PROP
            ======================================================== */}
        <section
          className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 border-b border-gray-200/80"
          style={{
            backgroundImage:
              'linear-gradient(rgba(9, 105, 232, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(9, 105, 232, 0.04) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            backgroundColor: '#FCFDFF',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
              {/* Left Column: Headline & Value Proposition */}
              <div className="lg:col-span-7">
                <p className="text-xs font-mono font-bold tracking-widest text-gray-500 uppercase mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  SENIOR AI ENGINEER · IIT MADRAS · HYDERABAD, INDIA
                </p>

                <h1
                  className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-tight text-gray-900 leading-[1.08] mb-6"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
                  AI systems that work{' '}
                  <span className="text-blue-600">after the demo.</span>
                </h1>

                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
                  I design, build and run AI for teams that need it to hold up in daily use:{' '}
                  <strong className="text-gray-900 font-semibold">
                    the model and its guardrails, the backend, the cloud, and the dashboard that shows what it costs
                  </strong>
                  . One workflow at a time, from the first conversation to a system your team relies on, for companies in India, the US, the UK, Europe and the Gulf.
                </p>

                {/* Capability Chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {['LLM agents', 'RAG', 'Voice AI', 'Document AI', 'Fine-tuning', 'AWS & Azure'].map((chip, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Hero CTAs */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white shadow-sm transition-all hover:opacity-90 hover:scale-[1.03]"
                    style={{ background: '#0B2545' }}
                  >
                    Book a 30-min call <ArrowRight size={15} />
                  </a>
                  <a
                    href="#work"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-gray-800 bg-white border border-gray-300 shadow-xs hover:bg-gray-50 transition-all"
                  >
                    See the work <ArrowRight size={15} />
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Blueprint SVG Drawing */}
              <div className="lg:col-span-5 relative">
                <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-blue-200/70 shadow-lg shadow-blue-500/5 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2 text-[11px] font-mono text-gray-500 border-b border-gray-100 pb-2">
                    <span className="font-bold text-blue-700">DWG: SPC-IT-01</span>
                    <span className="text-emerald-600 font-semibold">● ACTIVE DISCIPLINE</span>
                  </div>

                  {/* SVG Drawing — scroll ↕ to change load */}
                  <div
                    ref={scrollableRef}
                    className="relative w-full overflow-hidden select-none"
                    onPointerMove={(e) => {
                      const bounds = e.currentTarget.getBoundingClientRect()
                      const position = (e.clientY - bounds.top) / bounds.height
                      setLoadPercentage(Math.round(Math.min(90, Math.max(20, 90 - position * 70))))
                    }}
                    style={{ height: '220px', cursor: 'crosshair', touchAction: 'none' }}
                  >
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 600 240"
                      preserveAspectRatio="xMidYMid meet"
                      aria-labelledby={dwlLabelId}
                    >
                      <path d="M40 40 H560 M40 80 H560 M40 120 H560 M40 160 H560 M40 200 H560" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
                      <path d="M300 10 V230" stroke="#CBD5E1" strokeWidth="1.5" />
                      <path d="M40 210 H560" stroke="#0969E8" strokeWidth="2" opacity="0.4" />

                      <defs>
                        <clipPath id={bpClipId}>
                          <rect x="40" y="0" width="520" height="210" />
                        </clipPath>
                      </defs>
                      <g clipPath={`url(#${bpClipId})`}>
                        <g transform={`translate(0, ${190 - (loadPercentage / 100) * 150})`}>
                          <rect x="40" y="0" width="520" height="210" fill="rgba(9, 105, 232, 0.08)" />
                          <path
                            d="M40 0 C 80 -6, 120 6, 160 0 C 200 -6, 240 6, 280 0 C 320 -6, 360 6, 400 0 C 440 -6, 480 6, 520 0 C 540 -3, 550 3, 560 0"
                            fill="none"
                            stroke="#0969E8"
                            strokeWidth="2"
                          />
                          <text
                            id={dwlLabelId}
                            x="550"
                            y="-8"
                            textAnchor="end"
                            fill="#0969E8"
                            fontFamily="Space Grotesk, sans-serif"
                            fontSize="11"
                            fontWeight="700"
                          >
                            DWL · LOAD {loadPercentage}% · STABLE
                          </text>
                        </g>
                      </g>

                      {/* Station Curves */}
                      <path d="M300 210 C516.2 210, 535 150, 535 120 S544.4 60, 549.1 40" fill="none" stroke="#008C86" strokeWidth="2.5" opacity="0.8" />
                      <path d="M300 210 C473.6 210, 522 157, 522 120 S530.9 60, 535.3 40" fill="none" stroke="#0969E8" strokeWidth="1.5" opacity="0.6" />
                      <path d="M300 210 C419.0 210, 496 166, 496 120 S503.8 60, 507.8 40" fill="none" stroke="#0969E8" strokeWidth="1.2" opacity="0.4" />
                      <path d="M300 210 C81.0 210, 62 150, 62 120 S52.5 60, 47.7 40" fill="none" stroke="#008C86" strokeWidth="2.5" opacity="0.8" />
                      <path d="M300 210 C109.6 210, 70 155, 70 120 S60.8 60, 56.2 40" fill="none" stroke="#0969E8" strokeWidth="1.5" opacity="0.6" />
                      <path d="M300 210 C151.8 210, 88 161, 88 120 S79.5 60, 75.3 40" fill="none" stroke="#0969E8" strokeWidth="1.2" opacity="0.4" />
                    </svg>

                    {/* Scroll hint label */}
                    <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-white/95 border border-gray-200 px-2.5 py-1 rounded-lg shadow-sm text-[11px] font-mono text-gray-500 pointer-events-none">
                      <span style={{ fontSize: '14px', lineHeight: 1 }}>↕</span>
                      <span>SCROLL TO CHANGE THE LOAD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Proof Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-gray-200/80">
              <div className="glass-card p-5">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  ~70%
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium leading-snug">
                  less manual ticket work for a B2B support team, in production
                </div>
              </div>
              <div className="glass-card p-5">
                <div className="text-3xl sm:text-4xl font-bold text-teal-600 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  600
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium leading-snug">
                  employees on an HR platform I designed, built and deployed
                </div>
              </div>
              <div className="glass-card p-5">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  60
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium leading-snug">
                  recruiters work every day in an ATS I built, with AI résumé screening
                </div>
              </div>
              <div className="glass-card p-5">
                <div className="text-3xl sm:text-4xl font-bold text-teal-600 mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  800+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium leading-snug">
                  engineers taught AI/ML at Masai School
                </div>
              </div>
            </div>

            {/* DWG Titleblock */}
            <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-gray-400 pt-6 mt-4 border-t border-gray-100">
              <span className="font-semibold text-gray-600">DWG: SPC-IT-01</span>
              <span>HOME · SHEET 01</span>
              <span>SCALE: 1 : 1</span>
              <span>REV: 2026.10</span>
            </div>
          </div>
        </section>

        {/* ========================================================
            WORKED WITH MARQUEE & TRUST COMMITMENTS
            ======================================================== */}
        <section className="py-12 bg-gray-50/70 border-y border-gray-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className="text-xs font-mono font-bold tracking-widest text-gray-500 uppercase text-center mb-6">
              WORKED WITH
            </p>

            {/* Client Logo Marquee */}
            <div className="marquee-container mb-8">
              <div className="marquee-content">
                {[...clientLogos, ...clientLogos].map((client, index) => (
                  <div
                    key={index}
                    className="inline-flex flex-col items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-gray-200/80 shadow-xs whitespace-nowrap"
                    style={{ minWidth: '100px' }}
                  >
                    <img
                      src={client.src}
                      alt={client.name}
                      style={{ height: '36px', width: 'auto', maxWidth: '80px', objectFit: 'contain', filter: 'grayscale(30%)' }}
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                    />
                    <span className="text-[10px] font-medium text-gray-500 text-center leading-tight">{client.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trustline criteria */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 pt-6 border-t border-gray-200/60 text-xs sm:text-sm text-gray-700 font-medium text-center">
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck size={16} className="text-emerald-600 flex-shrink-0" />
                <span>NDA before details</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Cloud size={16} className="text-blue-600 flex-shrink-0" />
                <span>Built in your cloud account</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Code2 size={16} className="text-teal-600 flex-shrink-0" />
                <span>Code and IP are yours</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Activity size={16} className="text-purple-600 flex-shrink-0" />
                <span>Evals and a cost dashboard in every build</span>
              </div>
              <div className="flex items-center justify-center gap-2 col-span-2 md:col-span-1">
                <Globe2 size={16} className="text-blue-600 flex-shrink-0" />
                <span>Invoices in INR, USD, GBP, EUR or AED</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SERVICES: 8 KINDS OF AI SYSTEMS (WITH INDUSTRY FILTER)
            ======================================================== */}
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-10">
              <div className="section-label mb-3">SERVICES · WHAT I HAVE BUILT</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Eight kinds of AI systems I&apos;ve built
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Each one solves a problem most industries share, and each one comes with the backend, the cloud and the monitoring around it. Pick your industry to see which ones fit your team&apos;s week.
              </p>
            </div>

            {/* Industry Filter Buttons */}
            <div className="flex flex-wrap gap-2 mb-8 items-center">
              <span className="text-xs font-bold text-gray-500 uppercase mr-1">Your industry</span>
              {[
                { key: 'all', label: 'All' },
                { key: 'sales', label: 'Sales & CRM' },
                { key: 'healthcare', label: 'Healthcare' },
                { key: 'finance', label: 'Finance' },
                { key: 'insurance', label: 'Insurance' },
                { key: 'legal', label: 'Legal' },
                { key: 'saas', label: 'SaaS' },
                { key: 'support', label: 'Support' },
                { key: 'real-estate', label: 'Real estate' },
                { key: 'recruitment', label: 'Recruitment' },
                { key: 'agencies', label: 'Agencies' },
              ].map(f => (
                <button
                  key={f.key}
                  onClick={() => setSelectedIndustry(f.key as IndustryFilter)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedIndustry === f.key
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <p className="text-xs text-gray-500 font-mono mb-6">
              Showing {filteredSystems.length} matching AI capability {filteredSystems.length === 1 ? 'system' : 'systems'}
            </p>

            {/* Grid of AI Systems */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredSystems.map(sys => {
                const IconComponent = sys.icon
                return (
                  <div
                    key={sys.id}
                    className="glass-card-hover p-6 flex flex-col justify-between border border-gray-200/80 rounded-2xl bg-white shadow-xs"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                        <IconComponent size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                        {sys.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {sys.proof}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-gray-100 text-xs text-gray-500">
                      <strong className="text-gray-700">Fits: </strong>
                      {sys.fitsText}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            SELECTED WORK: TECHNICAL CASE STUDIES (DWG 01 TO 05)
            ======================================================== */}
        <section id="work" className="py-20 bg-gray-50/70 border-t border-gray-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-12">
              <div className="section-label mb-3">SELECTED WORK</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                What changed first, then what&apos;s under the hood
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Five systems I built end to end. The outcome is up front for founders, the drawing and the decisions are there for engineers, and each card says how I know it works.
              </p>
            </div>

            <div className="space-y-12">
              {/* DWG 01: B2B Support */}
              <div className="glass-card p-6 sm:p-8 bg-white border border-gray-200/90 rounded-2xl shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-2 mb-3 text-xs font-mono text-gray-500">
                      <span className="font-bold text-blue-600 px-2 py-0.5 rounded bg-blue-50">DWG 01</span>
                      <span>B2B support</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">● Live</span>
                      <span>Atlas Systems · 2024–26</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      ~70% less manual ticket work for a B2B support team
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                      The team read every email and call transcript by hand to open tickets under SLA. Now an AI workflow reads each message, files it, spots duplicates, links related tickets and drafts the reply. People review instead of retyping.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100">
                        <div className="text-2xl sm:text-3xl font-bold text-blue-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          ~70%
                        </div>
                        <div className="text-xs text-gray-600">less manual review and ticket creation</div>
                      </div>
                      <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-100">
                        <div className="text-2xl sm:text-3xl font-bold text-teal-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          ~40%
                        </div>
                        <div className="text-xs text-gray-600">less code per new integration</div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6 text-xs sm:text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <Check size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>MCP tools over Outlook and SharePoint, reusable across integrations</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Deduplication and parent/child links so automation doesn&apos;t flood the queue</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Drafted replies stay with a person for review</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-600 mb-4">
                      <strong className="text-gray-900">How I know </strong>
                      The ~70% is the reduction in manual review and ticket-creation effort the support team reported after rollout; the ~40% is the drop in integration code once the MCP tools were reused.
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {['MCP', 'LangGraph', 'LangChain', 'Outlook', 'SharePoint'].map((t, idx) => (
                        <span key={idx} className="text-xs px-2.5 py-1 rounded bg-gray-100 text-gray-700 font-mono font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Architecture Diagram */}
                  <div className="lg:col-span-5 bg-slate-900 text-slate-100 p-6 rounded-xl font-mono text-xs shadow-md">
                    <div className="flex items-center justify-between border-b border-slate-700 pb-2 mb-4 text-slate-400">
                      <span>SHEET 01 · MESSAGE PATH</span>
                      <span className="text-blue-400">LANGGRAPH PIPELINE</span>
                    </div>

                    <div className="space-y-3">
                      <div className="p-2.5 rounded bg-slate-800 border border-slate-700 text-center font-bold text-slate-200">
                        Email · call transcript
                      </div>
                      <div className="text-center text-teal-400 font-bold">↓ MCP Adapter</div>
                      <div className="p-2.5 rounded bg-slate-800 border border-slate-700 text-center text-slate-300">
                        MCP tools: Outlook, SharePoint
                      </div>
                      <div className="text-center text-teal-400 font-bold">↓ Streaming Input</div>
                      <div className="p-3 rounded bg-blue-950/80 border border-blue-500 text-center font-bold text-blue-200">
                        LangGraph workflow
                        <div className="grid grid-cols-3 gap-1 mt-2 text-[10px] font-normal text-slate-300">
                          <span className="bg-slate-800 py-1 rounded">Categorize</span>
                          <span className="bg-slate-800 py-1 rounded">Deduplicate</span>
                          <span className="bg-slate-800 py-1 rounded">Link parent / child</span>
                        </div>
                      </div>
                      <div className="text-center text-teal-400 font-bold">↓ Verified Output</div>
                      <div className="p-2.5 rounded bg-emerald-950/70 border border-emerald-500 text-center font-bold text-emerald-200">
                        Ticket + drafted reply
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* DWG 02: Healthcare & Guardrails */}
              <div className="glass-card p-6 sm:p-8 bg-white border border-gray-200/90 rounded-2xl shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-2 mb-3 text-xs font-mono text-gray-500">
                      <span className="font-bold text-teal-600 px-2 py-0.5 rounded bg-teal-50">DWG 02</span>
                      <span>Healthcare</span>
                      <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold">● In testing with doctors</span>
                      <span>Bridgetown Consulting Group · 2026</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      A physiotherapy app that knows when to say &quot;see a doctor&quot;
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                      PTBuddy helps people in the US manage physiotherapy between doctor visits. New users answer questions about their pain and habits, get a weekly exercise program built from a physiotherapist&apos;s video library, then log how the pain changes. The next week&apos;s program is re-ranked from what they report. Inside the app, an assistant called Anya already knows their history, so they can just ask. Its first rule is to escalate: anything beyond self-managed physio goes to a doctor, not a home remedy.
                    </p>

                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100">
                        <div className="text-xl sm:text-2xl font-bold text-blue-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          ~1.5 s
                        </div>
                        <div className="text-xs text-gray-600">time to first token (p95)</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-100">
                        <div className="text-xl sm:text-2xl font-bold text-teal-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          ~$0.005
                        </div>
                        <div className="text-xs text-gray-600">cost per conversation</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100">
                        <div className="text-xl sm:text-2xl font-bold text-emerald-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          ~98%
                        </div>
                        <div className="text-xs text-gray-600">replies passing the JSON contract</div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6 text-xs sm:text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <Check size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Clinical guardrails: escalate to a doctor instead of guessing</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>A strict JSON response contract the app can trust</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Rolling summaries keep memory inside a fixed token budget</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Model failover that ends in a deterministic keyword fallback</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Tokens, latency and cost logged for every call</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-600 mb-4">
                      <strong className="text-gray-900">How I know </strong>
                      Every reply is checked against the JSON contract before the app renders it, and tokens, latency and cost are logged per call in CloudWatch, so quality and spend are visible for each conversation.
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {['LangGraph', 'Gemini 2.5 Flash', 'SSE streaming', 'AWS', 'PostgreSQL', 'Stripe'].map((t, idx) => (
                        <span key={idx} className="text-xs px-2.5 py-1 rounded bg-gray-100 text-gray-700 font-mono font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Architecture Diagram */}
                  <div className="lg:col-span-5 bg-slate-900 text-slate-100 p-6 rounded-xl font-mono text-xs shadow-md">
                    <div className="flex items-center justify-between border-b border-slate-700 pb-2 mb-4 text-slate-400">
                      <span>SHEET 02 · WEEKLY LOOP</span>
                      <span className="text-teal-400">CLINICAL SAFETY</span>
                    </div>

                    <div className="space-y-3">
                      <div className="p-2.5 rounded bg-slate-800 border border-slate-700 text-center font-bold text-slate-200">
                        Intake Questionnaire &amp; Pain Baseline
                      </div>
                      <div className="text-center text-teal-400 font-bold">↓ Generates</div>
                      <div className="p-2.5 rounded bg-slate-800 border border-slate-700 text-center text-slate-300">
                        Weekly Video Exercise Program
                      </div>
                      <div className="text-center text-teal-400 font-bold">↓ Active Guidance</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2.5 rounded bg-blue-950 border border-blue-500 text-center text-blue-200 font-bold">
                          Anya AI Assistant
                        </div>
                        <div className="p-2.5 rounded bg-red-950 border border-red-500 text-center text-red-200 font-bold">
                          Escalate to Doctor
                        </div>
                      </div>
                      <div className="text-center text-teal-400 font-bold">↓ Feedback Loop</div>
                      <div className="p-2.5 rounded bg-emerald-950/70 border border-emerald-500 text-center font-bold text-emerald-200">
                        Weekly Check-in &amp; Next Routine Re-ranked
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* DWG 03: Recruitment End-to-End Pipeline */}
              <div className="glass-card p-6 sm:p-8 bg-white border border-gray-200/90 rounded-2xl shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-2 mb-3 text-xs font-mono text-gray-500">
                      <span className="font-bold text-blue-600 px-2 py-0.5 rounded bg-blue-50">DWG 03</span>
                      <span>Recruitment</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">● Live</span>
                      <span>Bridgetown Consulting Group · 2026</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      One system that carries a recruitment firm from client to hire
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                      The recruitment teams worked across separate tools from the first client conversation to a candidate&apos;s first day. Now one system runs the whole pipeline: clients and vendors are onboarded, their requirements become open jobs, candidates are onboarded and their documents collected, AI screens résumés against each requirement, applications are submitted and tracked, interviews are scheduled, and the hired candidate is onboarded. Sixty people across the teams work in the same place instead of chasing each other for status.
                    </p>

                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-blue-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          200
                        </div>
                        <div className="text-xs text-gray-600">candidates tracked</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-100 text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-teal-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          60
                        </div>
                        <div className="text-xs text-gray-600">people across the teams work in it</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-purple-50/70 border border-purple-100 text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-purple-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          7
                        </div>
                        <div className="text-xs text-gray-600">stages, one system</div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6 text-xs sm:text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <Check size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>AI résumé screening ranks candidates against each job&apos;s requirements</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Client and vendor onboarding feeds requirements straight into the pipeline</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>Document collection and interview scheduling live in the same flow</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-600 mb-4">
                      <strong className="text-gray-900">How I know </strong>
                      In daily use by 60 people across the recruitment teams, with 200 candidates tracked through all seven stages in the system itself.
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {['FastAPI', 'PostgreSQL', 'AWS', 'GPT-4o'].map((t, idx) => (
                        <span key={idx} className="text-xs px-2.5 py-1 rounded bg-gray-100 text-gray-700 font-mono font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Architecture Diagram */}
                  <div className="lg:col-span-5 bg-slate-900 text-slate-100 p-6 rounded-xl font-mono text-xs shadow-md">
                    <div className="flex items-center justify-between border-b border-slate-700 pb-2 mb-4 text-slate-400">
                      <span>SHEET 03 · HIRING PATH</span>
                      <span className="text-purple-400">7-STAGE ATS</span>
                    </div>

                    <div className="space-y-2 text-center">
                      <div className="p-2 rounded bg-slate-800 border border-slate-700 text-slate-300">
                        Client &amp; vendor onboarding
                      </div>
                      <div className="p-2 rounded bg-slate-800 border border-slate-700 text-slate-300">
                        Job requirements
                      </div>
                      <div className="p-2 rounded bg-slate-800 border border-slate-700 text-slate-300">
                        Candidate onboarding · documents
                      </div>
                      <div className="p-2.5 rounded bg-blue-950 border border-blue-500 font-bold text-blue-200">
                        AI résumé screening
                      </div>
                      <div className="p-2 rounded bg-slate-800 border border-slate-700 text-slate-300">
                        Application · interview scheduling
                      </div>
                      <div className="p-2 rounded bg-slate-800 border border-slate-700 text-slate-300">
                        Candidate onboarded
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* DWG 04: Voice AI + 3 Variants */}
              <div className="glass-card p-6 sm:p-8 bg-white border border-gray-200/90 rounded-2xl shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-2 mb-3 text-xs font-mono text-gray-500">
                      <span className="font-bold text-blue-600 px-2 py-0.5 rounded bg-blue-50">DWG 04</span>
                      <span>Voice AI</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">● Delivered</span>
                      <span>Atlas Systems · 2024–26</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      A survey caller that sounds like a conversation, not a phone menu
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                      An outbound caller that asks survey questions in natural conversation, checks each answer, and copes when people interrupt or talk over it. The hard part was live-call behavior, so I tuned turn detection, interruption handling and transcription for real callers.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100">
                        <div className="text-2xl sm:text-3xl font-bold text-blue-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          ~60%
                        </div>
                        <div className="text-xs text-gray-600">of answered calls complete the full survey</div>
                      </div>
                      <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-100">
                        <div className="text-2xl sm:text-3xl font-bold text-teal-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          ~800 ms
                        </div>
                        <div className="text-xs text-gray-600">median response time</div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6 text-xs sm:text-sm text-gray-700">
                      <div className="flex items-start gap-2"><Check size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" /><span>Twilio streams call audio over WebSockets to OpenAI Realtime</span></div>
                      <div className="flex items-start gap-2"><Check size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" /><span>Prompt-driven questions, with every answer validated</span></div>
                      <div className="flex items-start gap-2"><Check size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" /><span>Turn detection, voice and language tuned for live calls</span></div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-600 mb-4">
                      <strong className="text-gray-900">How I know </strong>
                      Every answer is validated before the next question is asked, and turn detection, interruption handling and transcription were tuned on real calls rather than test audio.
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {['Twilio', 'OpenAI Realtime API', 'WebSockets', 'Python'].map((t, idx) => (
                        <span key={idx} className="text-xs px-2.5 py-1 rounded bg-gray-100 text-gray-700 font-mono font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-slate-900 text-slate-100 p-6 rounded-xl font-mono text-xs shadow-md">
                    <div className="flex items-center justify-between border-b border-slate-700 pb-2 mb-4 text-slate-400">
                      <span>SHEET 04 · CALL PATH</span>
                      <span className="text-teal-400">LOW LATENCY AUDIO</span>
                    </div>

                    <div className="space-y-3">
                      <div className="p-2.5 rounded bg-slate-800 border border-slate-700 text-center font-bold text-slate-200">
                        Twilio outbound call
                      </div>
                      <div className="text-center text-teal-400 font-bold">↓ Bi-directional Audio</div>
                      <div className="p-2.5 rounded bg-slate-800 border border-slate-700 text-center text-slate-300">
                        WebSocket audio stream
                      </div>
                      <div className="text-center text-teal-400 font-bold">↓ Realtime Inference</div>
                      <div className="p-3 rounded bg-blue-950/80 border border-blue-500 text-center font-bold text-blue-200">
                        OpenAI Realtime API
                        <div className="grid grid-cols-3 gap-1 mt-2 text-[10px] font-normal text-slate-300">
                          <span className="bg-slate-800 py-1 rounded">Turn Detection</span>
                          <span className="bg-slate-800 py-1 rounded">Interruptions</span>
                          <span className="bg-slate-800 py-1 rounded">Answer Check</span>
                        </div>
                      </div>
                      <div className="text-center text-teal-400 font-bold">↓ Structured Record</div>
                      <div className="p-2.5 rounded bg-emerald-950/70 border border-emerald-500 text-center font-bold text-emerald-200">
                        Next question · survey record
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3 Call Engine Variants */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="mb-4">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      DWG 04 A–C · VOICE AI PROTOTYPES
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs">
                      <div className="font-bold text-gray-900 mb-1 text-sm">04 A · Lead generation</div>
                      <p className="text-gray-600 mb-3">
                        Qualifies the lead before sales calls. Asks about need, budget, timeline and who decides, then hands qualified leads to sales with a call summary.
                      </p>
                      <div className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded">
                        Ends in: Qualified lead → sales
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs">
                      <div className="font-bold text-gray-900 mb-1 text-sm">04 B · Healthcare &amp; services</div>
                      <p className="text-gray-600 mb-3">
                        Reminders patients answer in their own words. Appointment reminders and check-ins where callers confirm, cancel or reschedule by speaking. Missed calls are flagged for follow-up.
                      </p>
                      <div className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-1 rounded">
                        Ends in: Confirm · cancel · reschedule
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs">
                      <div className="font-bold text-gray-900 mb-1 text-sm">04 C · Recruitment &amp; HR</div>
                      <p className="text-gray-600 mb-3">
                        First-round screening, scored. Role-specific questions from the job requirements, follow-ups on vague answers, and transcription tuned for accents.
                      </p>
                      <div className="text-[11px] font-semibold text-purple-700 bg-purple-50 px-2 py-1 rounded">
                        Ends in: Screening scorecard → recruiter
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* DWG 05: Legal Domain Adaptation */}
              <div className="glass-card p-6 sm:p-8 bg-white border border-gray-200/90 rounded-2xl shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-2 mb-3 text-xs font-mono text-gray-500">
                      <span className="font-bold text-blue-600 px-2 py-0.5 rounded bg-blue-50">DWG 05</span>
                      <span>Legal</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">● Delivered</span>
                      <span>Bluekyte.AI (Counsello AI) · 2024</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      Teaching LLaMA 3 Indian law: 9.75M tokens, one A100
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                      General models stumble on Indian legal language. I adapted LLaMA 3 8B with LoRA continual pre-training on 15 Indian law textbooks, from cleaning the text to a domain-adapted model.
                    </p>

                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-center">
                        <div className="text-xl sm:text-2xl font-bold text-blue-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          9.75M
                        </div>
                        <div className="text-xs text-gray-600">training tokens</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-100 text-center">
                        <div className="text-xl sm:text-2xl font-bold text-teal-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          15
                        </div>
                        <div className="text-xs text-gray-600">Indian law textbooks</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-purple-50/70 border border-purple-100 text-center">
                        <div className="text-xl sm:text-2xl font-bold text-purple-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          20+ h
                        </div>
                        <div className="text-xs text-gray-600">training on one A100</div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6 text-xs sm:text-sm text-gray-700">
                      <div className="flex items-start gap-2"><Check size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" /><span>Continual pre-training with LoRA instead of full fine-tuning</span></div>
                      <div className="flex items-start gap-2"><Check size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" /><span>Corpus cleaned and tokenized in-house</span></div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {['LLaMA 3 8B', 'LoRA', 'Hugging Face', 'NVIDIA A100'].map((t, idx) => (
                        <span key={idx} className="text-xs px-2.5 py-1 rounded bg-gray-100 text-gray-700 font-mono font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-slate-900 text-slate-100 p-6 rounded-xl font-mono text-xs shadow-md">
                    <div className="flex items-center justify-between border-b border-slate-700 pb-2 mb-4 text-slate-400">
                      <span>SHEET 05 · TRAINING PATH</span>
                      <span className="text-purple-400">LoRA PRE-TRAINING</span>
                    </div>

                    <div className="space-y-3">
                      <div className="p-2.5 rounded bg-slate-800 border border-slate-700 text-center font-bold text-slate-200">
                        15 Indian Law Treatises &amp; Case Judgments
                      </div>
                      <div className="text-center text-teal-400 font-bold">↓ Custom Tokenizer Pipeline</div>
                      <div className="p-2.5 rounded bg-slate-800 border border-slate-700 text-center text-slate-300">
                        Cleaned + Tokenized → 9.75M Tokens
                      </div>
                      <div className="text-center text-teal-400 font-bold">↓ LoRA Adapters</div>
                      <div className="p-3 rounded bg-blue-950/80 border border-blue-500 text-center font-bold text-blue-200">
                        Continual Pre-Training on 1x A100 (80GB)
                      </div>
                      <div className="text-center text-teal-400 font-bold">↓ Evaluation Suite</div>
                      <div className="p-2.5 rounded bg-emerald-950/70 border border-emerald-500 text-center font-bold text-emerald-200">
                        Domain-Adapted LLaMA 3 Legal Engine
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Also Built Portfolio Grid */}
            <div className="mt-16 pt-12 border-t border-gray-200">
              <p className="text-xs font-mono font-bold tracking-widest text-gray-500 uppercase mb-6">
                ADDITIONAL PRODUCTION DEPLOYMENTS
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-white border border-gray-200">
                  <span className="text-xs font-semibold text-blue-600 block mb-1">HR Tech</span>
                  <div className="font-bold text-gray-900 mb-1">Multi-entity HRMS</div>
                  <p className="text-xs text-gray-600">
                    600 employees across five business units: attendance, leave and administration, with role-based access, strict data isolation, AI-assisted leave and AI attendance reports.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-gray-200">
                  <span className="text-xs font-semibold text-teal-600 block mb-1">Risk &amp; Compliance</span>
                  <div className="font-bold text-gray-900 mb-1">Multi-agent vendor risk review</div>
                  <p className="text-xs text-gray-600">
                    A six-stage review run by a CrewAI crew, with a QA agent checking each stage.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-gray-200">
                  <span className="text-xs font-semibold text-purple-600 block mb-1">Enterprise Cloud</span>
                  <div className="font-bold text-gray-900 mb-1">Multimodal RAG platform</div>
                  <p className="text-xs text-gray-600">
                    10+ file formats, agent routing and QA evaluation, deployed on Azure Container Apps.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-gray-200">
                  <span className="text-xs font-semibold text-blue-600 block mb-1">Marketing Agency</span>
                  <div className="font-bold text-gray-900 mb-1">Department knowledge platform</div>
                  <p className="text-xs text-gray-600">
                    Google Drive RAG per department for Walker Sands, delivered through Balihans.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-gray-200">
                  <span className="text-xs font-semibold text-teal-600 block mb-1">Computer Vision &amp; OCR</span>
                  <div className="font-bold text-gray-900 mb-1">Document intelligence pipeline</div>
                  <p className="text-xs text-gray-600">
                    OCR, Azure Document Intelligence and image understanding for documents and handwriting.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-gray-200">
                  <span className="text-xs font-semibold text-purple-600 block mb-1">Open Weights &amp; Ops</span>
                  <div className="font-bold text-gray-900 mb-1">Qwen 2.5 7B in production</div>
                  <p className="text-xs text-gray-600">
                    Autoscaled inference on SageMaker and EC2.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-gray-200">
                  <span className="text-xs font-semibold text-blue-600 block mb-1">Customer engagement</span>
                  <div className="font-bold text-gray-900 mb-1">Kollect AI</div>
                  <p className="text-xs text-gray-600">
                    SMS, WhatsApp, email and IVR on AWS serverless, ~30% more responsive after load testing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            HOW WE BUILD: INTERACTIVE PRODUCTION SIMULATOR & 6 RULES
            ======================================================== */}
        <section id="principles" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-12">
              <div className="section-label mb-3">HOW I BUILD</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Watch a production agent handle a bad day
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                A hull is judged in a storm, not on the slipway. Run the same assistant through four situations and see which part of the system does the work. The R-tags point to the six rules below.
              </p>
            </div>

            {/* Interactive Simulator Component */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-xl border border-slate-800 mb-12">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Terminal size={18} className="text-blue-400" />
                  <span className="font-mono font-bold text-sm text-slate-200">RUN SCENARIO</span>
                </div>
                {/* Scenario Selectors */}
                <div className="flex flex-wrap gap-2">
                  {(['normal', 'outage', 'down', 'flag'] as SimScenarioKey[]).map(key => {
                    const sc = simulatorScenarios[key]
                    const isSelected = activeScenario === key
                    return (
                      <button
                        key={key}
                        onClick={() => setActiveScenario(key)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: sc.color }}
                        />
                        {sc.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Dynamic Architecture Pipeline Columns */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-8 text-xs font-mono">
                {/* Col 1: Request */}
                <div
                  className={`p-3 rounded-xl border text-center transition-all ${
                    currentScenarioData.activeStages.includes('req')
                      ? 'bg-blue-950/80 border-blue-500 text-blue-200 shadow-md shadow-blue-500/20'
                      : 'bg-slate-800/40 border-slate-700/60 text-slate-500'
                  }`}
                >
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold block mb-1">R1</span>
                  <div className="font-bold">Request</div>
                  <div className="text-[10px] opacity-75">user message</div>
                </div>

                {/* Col 2: Guardrails or Escalate */}
                <div className="space-y-1.5">
                  <div
                    className={`p-2 rounded-lg border text-center transition-all ${
                      currentScenarioData.activeStages.includes('guard')
                        ? 'bg-teal-950/80 border-teal-500 text-teal-200 shadow-sm'
                        : 'bg-slate-800/40 border-slate-700/60 text-slate-500'
                    }`}
                  >
                    <span className="text-[9px] px-1 py-0.2 rounded bg-teal-500/20 text-teal-300 font-bold block">R3</span>
                    <div className="font-bold text-[11px]">Guardrails</div>
                    <div className="text-[9px] text-teal-300">scope check</div>
                  </div>
                  <div
                    className={`p-2 rounded-lg border text-center transition-all ${
                      currentScenarioData.activeStages.includes('esc')
                        ? 'bg-red-950/90 border-red-500 text-red-200 shadow-md shadow-red-500/30'
                        : 'bg-slate-800/40 border-slate-700/60 text-slate-500'
                    }`}
                  >
                    <div className="font-bold text-[11px] text-red-400">Escalate</div>
                    <div className="text-[9px] text-red-300">see a doctor</div>
                  </div>
                </div>

                {/* Col 3: Context */}
                <div
                  className={`p-3 rounded-xl border text-center transition-all ${
                    currentScenarioData.activeStages.includes('ctx')
                      ? 'bg-blue-950/80 border-blue-500 text-blue-200 shadow-md shadow-blue-500/20'
                      : 'bg-slate-800/40 border-slate-700/60 text-slate-500'
                  }`}
                >
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold block mb-1">R4</span>
                  <div className="font-bold">Context</div>
                  <div className="text-[10px] opacity-75">rolling summary</div>
                </div>

                {/* Col 4: Router */}
                <div
                  className={`p-3 rounded-xl border text-center transition-all ${
                    currentScenarioData.activeStages.includes('route')
                      ? 'bg-purple-950/80 border-purple-500 text-purple-200 shadow-md shadow-purple-500/20'
                      : 'bg-slate-800/40 border-slate-700/60 text-slate-500'
                  }`}
                >
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold block mb-1">R2</span>
                  <div className="font-bold">Router</div>
                  <div className="text-[10px] opacity-75">pick a model</div>
                </div>

                {/* Col 5: Models (Primary / Secondary / Fallback) */}
                <div className="space-y-1">
                  <div
                    className={`p-1.5 rounded border text-center transition-all ${
                      currentScenarioData.activeStages.includes('m1')
                        ? 'bg-blue-950 border-blue-400 text-blue-200 font-bold shadow-xs'
                        : 'bg-slate-800/40 border-slate-700/60 text-slate-500'
                    }`}
                  >
                    <div className="text-[10px]">Primary · Gemini 2.5 Flash</div>
                  </div>
                  <div
                    className={`p-1.5 rounded border text-center transition-all ${
                      currentScenarioData.activeStages.includes('m2')
                        ? 'bg-amber-950 border-amber-400 text-amber-200 font-bold shadow-xs'
                        : 'bg-slate-800/40 border-slate-700/60 text-slate-500'
                    }`}
                  >
                    <div className="text-[10px]">Secondary · failover model</div>
                  </div>
                  <div
                    className={`p-1.5 rounded border text-center transition-all ${
                      currentScenarioData.activeStages.includes('kw')
                        ? 'bg-red-950 border-red-400 text-red-200 font-bold shadow-xs'
                        : 'bg-slate-800/40 border-slate-700/60 text-slate-500'
                    }`}
                  >
                    <div className="text-[10px]">Keyword fallback · deterministic</div>
                  </div>
                </div>

                {/* Col 6: JSON Contract */}
                <div
                  className={`p-3 rounded-xl border text-center transition-all ${
                    currentScenarioData.activeStages.includes('json')
                      ? 'bg-teal-950/80 border-teal-500 text-teal-200 shadow-md shadow-teal-500/20'
                      : 'bg-slate-800/40 border-slate-700/60 text-slate-500'
                  }`}
                >
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-300 font-bold block mb-1">R3</span>
                  <div className="font-bold">JSON Contract</div>
                  <div className="text-[10px] opacity-75">schema check</div>
                </div>

                {/* Col 7: Response */}
                <div
                  className={`p-3 rounded-xl border text-center transition-all ${
                    currentScenarioData.activeStages.includes('out')
                      ? 'bg-emerald-950/90 border-emerald-500 text-emerald-200 shadow-md shadow-emerald-500/20'
                      : 'bg-slate-800/40 border-slate-700/60 text-slate-500'
                  }`}
                >
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold block mb-1">R6</span>
                  <div className="font-bold">Response</div>
                  <div className="text-[10px] opacity-75">+ Telemetry</div>
                </div>
              </div>

              {/* Telemetry Readout & Live Terminal Log */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-5 grid grid-cols-2 gap-3 font-mono">
                  <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                    <span className="text-[10px] text-slate-400 uppercase block">FIRST TOKEN</span>
                    <span className="text-lg font-bold text-blue-400">{currentScenarioData.latency}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                    <span className="text-[10px] text-slate-400 uppercase block">TOKENS</span>
                    <span className="text-lg font-bold text-teal-400">{currentScenarioData.tokens}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                    <span className="text-[10px] text-slate-400 uppercase block">COST</span>
                    <span className="text-lg font-bold text-purple-400">{currentScenarioData.cost}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                    <span className="text-[10px] text-slate-400 uppercase block">OUTCOME</span>
                    <span className={`text-xs font-bold ${
                      currentScenarioData.outcomeClass === 'good' ? 'text-emerald-400' :
                      currentScenarioData.outcomeClass === 'warn' ? 'text-amber-400' :
                      currentScenarioData.outcomeClass === 'flag' ? 'text-rose-400' : 'text-slate-300'
                    }`}>
                      {currentScenarioData.outcome}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-black/60 rounded-xl p-4 border border-slate-800 font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 text-slate-500 border-b border-slate-800 pb-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    <span>LIVE EXECUTION TRACE (SANDBOX)</span>
                  </div>
                  <div className="space-y-1.5 max-h-40 overflow-y-auto font-mono text-[11px]">
                    {currentScenarioData.logs.map((log, i) => (
                      <div key={i} className="leading-tight">
                        {log}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 6 Engineering Principles (R1 to R6) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { r: 'R1', title: 'Start with the business problem', desc: 'A measurable result, not a technology demo.' },
                { r: 'R2', title: 'Use the simplest thing that works', desc: 'One model call, RAG, a workflow, an agent or several, chosen on purpose.' },
                { r: 'R3', title: 'Build for failure', desc: 'Structured outputs, validation, retries, failover and fallbacks.' },
                { r: 'R4', title: 'Control context and cost', desc: 'Summaries, bounded memory, token tracking and the right model for each step.' },
                { r: 'R5', title: 'Engineer the plumbing', desc: 'APIs, queues, storage, CI/CD, logs and monitoring.' },
                { r: 'R6', title: 'Measure what changed', desc: 'Time saved, speed, reliability and cost, before and after.' },
              ].map(item => (
                <div key={item.r} className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex gap-4">
                  <div className="w-9 h-9 rounded-lg bg-blue-600 text-white font-mono font-bold text-sm flex items-center justify-center flex-shrink-0">
                    {item.r}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5 text-base" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            ENGAGEMENTS: WAYS TO WORK TOGETHER
            ======================================================== */}
        <section id="engagements" className="py-20 bg-gray-50/70 border-t border-gray-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-12">
              <div className="section-label mb-3">ENGAGEMENTS · WAYS TO WORK TOGETHER</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Start small. Build once we both know it will work.
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Most engagements start with a short, fixed-scope Sprint or Audit. What it finds decides whether there is anything worth building, and we scope the build from there.
              </p>
            </div>

            {/* What Every Build Ships With */}
            <div className="mb-10 p-5 rounded-2xl bg-blue-50/80 border border-blue-200">
              <div className="text-xs font-mono font-bold text-blue-900 uppercase mb-3 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-700" />
                EVERY BUILD SHIPS WITH
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs font-semibold text-gray-800">
                <span className="flex items-center gap-1.5"><Check size={14} className="text-emerald-600" /> Structured outputs &amp; validation</span>
                <span className="flex items-center gap-1.5"><Check size={14} className="text-emerald-600" /> An eval set with pass/fail checks</span>
                <span className="flex items-center gap-1.5"><Check size={14} className="text-emerald-600" /> Failover and fallbacks</span>
                <span className="flex items-center gap-1.5"><Check size={14} className="text-emerald-600" /> Token and cost tracking per call</span>
                <span className="flex items-center gap-1.5"><Check size={14} className="text-emerald-600" /> Logs, dashboards and alerts</span>
                <span className="flex items-center gap-1.5"><Check size={14} className="text-emerald-600" /> Docs &amp; recorded handover</span>
              </div>
            </div>

            {/* 4 Engagement Model Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Option 1 */}
              <div className="glass-card p-6 bg-white border border-gray-200 rounded-2xl flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-700 block w-max mb-3">
                    2 WEEKS · FIXED
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    AI Opportunity Sprint
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">For teams who know AI could help but not where to start.</p>
                  <ul className="space-y-2 text-xs text-gray-600 mb-6">
                    <li className="flex items-start gap-1.5"><Check size={14} className="text-blue-600 mt-0.5" /> Map one workflow and what it costs today</li>
                    <li className="flex items-start gap-1.5"><Check size={14} className="text-blue-600 mt-0.5" /> Prototype the riskiest part</li>
                    <li className="flex items-start gap-1.5"><Check size={14} className="text-blue-600 mt-0.5" /> Cost per task or conversation</li>
                    <li className="flex items-start gap-1.5"><Check size={14} className="text-blue-600 mt-0.5" /> A go/no-go and a build plan</li>
                  </ul>
                </div>
                <a href="#contact" className="btn-secondary w-full justify-center text-xs py-2.5">
                  Discuss a Sprint
                </a>
              </div>

              {/* Option 2 (Featured) */}
              <div className="glass-card p-6 bg-white border-2 border-blue-600 rounded-2xl flex flex-col justify-between relative shadow-lg shadow-blue-500/10">
                <div className="absolute -top-3 left-6 px-2.5 py-0.5 rounded-full bg-blue-600 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                  MOST TEAMS START HERE
                </div>
                <div>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 block w-max mb-3 mt-1">
                    2 WEEKS · FIXED
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    Production-Readiness Audit
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">For AI that already exists but is flaky, slow or expensive.</p>
                  <ul className="space-y-2 text-xs text-gray-600 mb-6">
                    <li className="flex items-start gap-1.5"><Check size={14} className="text-blue-600 mt-0.5" /> Failure patterns from real conversations</li>
                    <li className="flex items-start gap-1.5"><Check size={14} className="text-blue-600 mt-0.5" /> An eval baseline with pass/fail checks</li>
                    <li className="flex items-start gap-1.5"><Check size={14} className="text-blue-600 mt-0.5" /> Failover and guardrail review</li>
                    <li className="flex items-start gap-1.5"><Check size={14} className="text-blue-600 mt-0.5" /> Cost and latency fixes, ranked</li>
                  </ul>
                </div>
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center text-xs py-2.5">
                  Book an Audit Call
                </a>
              </div>

              {/* Option 3 */}
              <div className="glass-card p-6 bg-white border border-gray-200 rounded-2xl flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-700 block w-max mb-3">
                    6 WEEKS · TWO-WEEK LOOPS
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    Agent Pilot
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">For one priority workflow, taken all the way to a live monitored pilot.</p>
                  <ul className="space-y-2 text-xs text-gray-600 mb-6">
                    <li className="flex items-start gap-1.5"><Check size={14} className="text-blue-600 mt-0.5" /> One agent taken into monitored pilot</li>
                    <li className="flex items-start gap-1.5"><Check size={14} className="text-blue-600 mt-0.5" /> Working software every two weeks</li>
                    <li className="flex items-start gap-1.5"><Check size={14} className="text-blue-600 mt-0.5" /> Evals and a cost dashboard included</li>
                    <li className="flex items-start gap-1.5"><Check size={14} className="text-blue-600 mt-0.5" /> Runs in your cloud; full handover</li>
                  </ul>
                </div>
                <a href="#contact" className="btn-secondary w-full justify-center text-xs py-2.5">
                  Plan a Pilot
                </a>
              </div>

              {/* Option 4 */}
              <div className="glass-card p-6 bg-white border border-gray-200 rounded-2xl flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-700 block w-max mb-3">
                    MONTHLY RETAINER
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    Fractional AI / IT Advisory
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">For founders who need a senior AI engineer, about a day a week.</p>
                  <ul className="space-y-2 text-xs text-gray-600 mb-6">
                    <li className="flex items-start gap-1.5"><Check size={14} className="text-blue-600 mt-0.5" /> Roadmap and architecture reviews</li>
                    <li className="flex items-start gap-1.5"><Check size={14} className="text-blue-600 mt-0.5" /> Eval and cost monitoring</li>
                    <li className="flex items-start gap-1.5"><Check size={14} className="text-blue-600 mt-0.5" /> Help hiring your AI team</li>
                  </ul>
                </div>
                <a href="#contact" className="btn-secondary w-full justify-center text-xs py-2.5">
                  Ask about availability
                </a>
              </div>
            </div>

            {/* Free Snapshot Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
              <div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-700/60 text-blue-200 font-bold uppercase mb-2 inline-block">
                  FREE · AI VISIBILITY SNAPSHOT
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mb-1" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Free: an AI Visibility Snapshot for your brand
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                  A one-page report showing how ChatGPT, Claude and Perplexity describe your company next to your competitors. No call needed.
                </p>
              </div>
              <a
                href="#contact"
                className="btn-primary whitespace-nowrap bg-white text-blue-900 hover:bg-slate-100 flex-shrink-0"
                style={{ background: '#FFFFFF', color: '#0969E8' }}
              >
                Request a snapshot <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================
            TERMS & GOVERNANCE: HOW WE WORK
            ======================================================== */}
        <section id="terms" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-12">
              <div className="section-label mb-3">TERMS · HOW I WORK</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Clear steps, written terms, and your data stays yours
              </h2>
            </div>

            {/* 3 Step Process */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="text-2xl font-bold text-blue-600 mb-2 font-mono">01</div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">A 30-minute call</h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  We talk through the workflow and what &quot;working&quot; means for you. You get a written proposal within two business days.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="text-2xl font-bold text-teal-600 mb-2 font-mono">02</div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">A Sprint or an Audit</h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Two weeks, fixed price. You get a prototype or a ranked list of fixes, a cost model, and a clear go/no-go.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="text-2xl font-bold text-purple-600 mb-2 font-mono">03</div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">Build in two-week loops</h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Working software and a demo every two weeks, with evals and a cost dashboard. Full handover at the end.
                </p>
              </div>
            </div>

            {/* 6 Terms Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl border border-gray-200 bg-white">
                <h3 className="font-bold text-gray-900 mb-2 text-sm flex items-center gap-2">
                  <Mail size={16} className="text-blue-600" /> Communication
                </h3>
                <ul className="text-xs text-gray-600 space-y-1.5">
                  <li>• Replies within one business day</li>
                  <li>• A written update every week</li>
                  <li>• Your tools: Slack, Teams, email, or WhatsApp</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl border border-gray-200 bg-white">
                <h3 className="font-bold text-gray-900 mb-2 text-sm flex items-center gap-2">
                  <FileCheck size={16} className="text-teal-600" /> Contracts &amp; IP
                </h3>
                <ul className="text-xs text-gray-600 space-y-1.5">
                  <li>• <strong>NDA</strong> before you share details</li>
                  <li>• MSA and a statement of work, or your own paper</li>
                  <li>• Code and IP are <strong>yours</strong> once paid</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl border border-gray-200 bg-white">
                <h3 className="font-bold text-gray-900 mb-2 text-sm flex items-center gap-2">
                  <Cloud size={16} className="text-blue-600" /> Your Data Privacy
                </h3>
                <ul className="text-xs text-gray-600 space-y-1.5">
                  <li>• Built in <strong>your</strong> AWS or Azure account and region</li>
                  <li>• Model providers listed; no training on your data</li>
                  <li>• Access removed and data deleted at the end</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl border border-gray-200 bg-white">
                <h3 className="font-bold text-gray-900 mb-2 text-sm flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-600" /> Compliance-Aware
                </h3>
                <ul className="text-xs text-gray-600 space-y-1.5">
                  <li>• DPA with SCCs (EU), UK IDTA, or a HIPAA BAA where needed</li>
                  <li>• AI disclosure built into chatbots and voice agents</li>
                  <li>• Your security questionnaire, answered honestly</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl border border-gray-200 bg-white">
                <h3 className="font-bold text-gray-900 mb-2 text-sm flex items-center gap-2">
                  <Globe2 size={16} className="text-purple-600" /> Multi-Currency Billing
                </h3>
                <ul className="text-xs text-gray-600 space-y-1.5">
                  <li>• Invoices in INR, USD, GBP, EUR or AED</li>
                  <li>• 50% to start a Sprint or Audit; milestones for builds</li>
                  <li>• Bank transfer or Wise</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl border border-gray-200 bg-white">
                  <h3 className="font-bold text-gray-900 mb-2 text-sm flex items-center gap-2">
                    <Code2 size={16} className="text-rose-600" /> No lock-in
                </h3>
                <ul className="text-xs text-gray-600 space-y-1.5">
                  <li>• You get the code, docs and dashboards</li>
                  <li>• A recorded walkthrough for your team</li>
                  <li>• Optional monthly support, never required</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            FAQ SECTION
            ======================================================== */}
        <section id="faq" className="py-20 bg-gray-50/70 border-t border-gray-200/70">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <div className="section-label justify-center mb-3">FREQUENTLY ASKED QUESTIONS</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Straight answers before the first call
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between font-bold text-gray-900 text-sm sm:text-base cursor-pointer hover:text-blue-600"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp size={18} className="text-blue-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            WORKING HOURS & TIMEZONE COVERAGE
            ======================================================== */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mb-10">
              <div className="section-label mb-3">WORKING HOURS</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Where your working day meets mine
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                I&apos;m in Hyderabad (IST, UTC+5:30). Indian and Gulf teams share my whole day, Europe most of the afternoon, and US calls fit my evening.
              </p>
            </div>

            {/* Timezone Table with Progress Overlap Bars */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 overflow-x-auto">
              <div className="min-w-[650px] space-y-3 font-mono text-xs">
                {[
                  { region: 'India', city: 'Hyderabad · Bengaluru · Mumbai', hours: '09:00–17:00 IST', left: '37.5%', width: '33.3%' },
                  { region: 'UAE', city: 'Dubai · Mon–Fri', hours: '10:30–18:30 IST', left: '43.7%', width: '33.3%' },
                  { region: 'Saudi Arabia', city: 'Riyadh · Sun–Thu', hours: '11:30–19:30 IST', left: '47.9%', width: '33.3%' },
                  { region: 'Europe', city: 'Berlin · Amsterdam', hours: '12:30–20:30 IST', left: '52.0%', width: '33.3%' },
                  { region: 'United Kingdom', city: 'London', hours: '13:30–21:30 IST', left: '56.2%', width: '33.3%' },
                  { region: 'US East', city: 'New York', hours: '18:30–02:30 IST', left: '77.0%', width: '23.0%' },
                  { region: 'US West', city: 'San Francisco', hours: '21:30–05:30 IST', left: '89.5%', width: '10.5%' },
                  { region: 'Singapore', city: 'UTC+8', hours: '06:30–14:30 IST', left: '27.0%', width: '33.3%' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-4 py-2 border-b border-gray-200/80">
                    <div className="w-44 flex-shrink-0">
                      <div className="font-bold text-gray-900">{row.region}</div>
                      <div className="text-[10px] text-gray-500">{row.city}</div>
                    </div>
                    <div className="flex-1 relative h-6 bg-gray-200/80 rounded-md overflow-hidden">
                      <div
                        className="absolute top-0 bottom-0 rounded-md bg-blue-600/75 border border-blue-500"
                        style={{ left: row.left, width: row.width }}
                      />
                    </div>
                    <div className="w-36 text-right font-bold text-gray-700 flex-shrink-0">
                      {row.hours}
                    </div>
                  </div>
                ))}
              </div>

              {/* Legend & Current Time */}
              <div className="mt-6 pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between text-xs text-gray-600 gap-4 font-mono">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-blue-600 inline-block"></span>
                    Your 9:00–17:00, in IST
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-xs">
                  <Clock size={14} className="text-emerald-600" />
                  <span>Now in Hyderabad (IST):</span>
                  <span className="font-bold text-blue-600">{currentTime || 'Loading...'}</span>
                </div>
              </div>
              <p className="mt-3 text-[11px] text-gray-500">
                Times as of early October 2026; US and European clocks change in late October and early November.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            ABOUT SPC IT SERVICES & TECH STACK
            ======================================================== */}
        <section id="about" className="py-20 bg-gray-50/70 border-t border-gray-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
              <div className="lg:col-span-7">
                <div className="section-label mb-3">ABOUT · SP CONSULTANCY IT &amp; AI DIVISION</div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Industrial engineering rigor, applied to modern AI systems
                </h2>
                <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Sneha &amp; Prahar Consultancy Services was founded on the uncompromising discipline of engineering critical facilities—where small failures in design, qualification, or compliance carry severe consequences.
                  </p>
                  <p>
                    Our IT &amp; AI Engineering Division applies that exact same engineering mindset to generative AI and cloud software. Rather than treating AI as unpredictable magic or building brittle proof-of-concepts that collapse outside controlled demos, we build systems designed to stay stable under unpredicted loads.
                  </p>
                  <p>
                    From adapting LLaMA on complex domains to shipping real-time voice agents, document intelligence pipelines, and enterprise HRMS platforms, we take end-to-end ownership: requirements scoping, database architecture, model routing, guardrails, deployment, and post-launch telemetry.
                  </p>
                </div>
              </div>

              {/* At A Glance Card */}
              <div className="lg:col-span-5 glass-card p-6 sm:p-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                    SPC
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      Sneha &amp; Prahar Consultancy Services
                    </h3>
                    <p className="text-xs text-gray-500">IT &amp; Enterprise AI Solutions</p>
                  </div>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-gray-500">Headquarters:</span>
                    <span className="font-bold text-gray-800">Hyderabad, India (IST)</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-gray-500">Core Specialty:</span>
                    <span className="font-bold text-gray-800">LLM Agents, RAG &amp; Voice AI</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-gray-500">Global Delivery:</span>
                    <span className="font-bold text-gray-800">India, US, UK, EU, Gulf</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-gray-500">Cloud Standards:</span>
                    <span className="font-bold text-gray-800">AWS &amp; Azure Cloud</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-gray-500">Engagement:</span>
                    <span className="font-bold text-blue-600">Fixed-scope &amp; Fractional</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Categorized Tech Stack Grid */}
            <div>
              <p className="text-xs font-mono font-bold tracking-widest text-gray-500 uppercase mb-6">
                TOOLS I SHIP WITH
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {techGroups.map((group, idx) => (
                      <div key={idx} className="p-6 rounded-2xl bg-white border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-4 text-base" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      {group.title}
                    </h3>
                    <ul className="grid grid-cols-3 gap-x-2 gap-y-4">
                      {group.items.map((tech, i) => (
                        <li key={i} className="flex min-w-0 flex-col items-center gap-1.5 text-center text-xs text-gray-700">
                          <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-white p-3">
                            <img
                              src={tech.logo}
                              alt=""
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-contain"
                            />
                          </span>
                          <span className="max-w-full break-words leading-tight">{tech.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            CONTACT / GET IN TOUCH BRIEF FORM
            ======================================================== */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6">
                <div className="section-label mb-3">GET IN TOUCH</div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Tell me which workflow should work better.
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                  Pick a 30-minute slot on my calendar, or send a short brief. I reply within one business day with questions or a rough plan. Happy to sign an NDA first.
                </p>

                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mb-8 text-sm"
                >
                  Book a 30-min call <ArrowRight size={15} />
                </a>

                <div className="space-y-4 text-sm font-medium text-gray-700 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Call Directly</div>
                      <div className="font-bold text-gray-900">+91 88014 11271 / +91 90008 77499</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Email Enquiries</div>
                      <a href="mailto:spconsultanancies@gmail.com" className="font-bold text-blue-600 hover:underline">
                        spconsultanancies@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Headquarters</div>
                      <div className="font-bold text-gray-900">Hyderabad, Telangana, India · IST (UTC+5:30)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inquiry Brief Form */}
              <div className="lg:col-span-6 glass-card p-6 sm:p-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
                {formSubmitted ? (
                  <div className="p-8 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      Brief Received!
                    </h3>
                    <p className="text-sm text-gray-600 max-w-md mx-auto">
                      Thank you, {formName}. A senior AI solutions architect from our Hyderabad team will review your requirements and reply to <strong>{formEmail}</strong> within one business day.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="btn-secondary text-xs px-4 py-2 mt-2"
                    >
                      Submit Another Query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {formError && (
                      <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-700">
                        {formError}
                      </p>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Work Email *</label>
                        <input
                          type="email"
                          required
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Company &amp; Country</label>
                      <input
                        type="text"
                        value={formCompany}
                        onChange={(e) => setFormCompany(e.target.value)}
                        placeholder="Company name, City/Country"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">What should AI or IT do for your team?</label>
                      <textarea
                        rows={4}
                        value={formNeed}
                        onChange={(e) => setFormNeed(e.target.value)}
                        placeholder="e.g. Our customer support team handles 400 complex emails a day and needs automated classification, duplicate detection and drafted responses..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Budget / Scope Range (Optional)</label>
                      <select
                        value={formBudget}
                        onChange={(e) => setFormBudget(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-blue-500 bg-white"
                      >
                        <option value="">Prefer to discuss on call</option>
                        <option value="sprint">Small: 2-week Sprint or Readiness Audit</option>
                        <option value="pilot">Medium: 6-week Pilot for one core workflow</option>
                        <option value="enterprise">Large: Multi-agent platform or enterprise roll-out</option>
                        <option value="fractional">Monthly Fractional AI / IT Advisory</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full justify-center py-3 text-sm mt-2"
                    >
                      <Send size={16} /> Send Project Brief
                    </button>
                    <p className="text-[11px] text-gray-500 text-center">
                      Your details are handled strictly under confidentiality and used only to respond to your inquiry.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
