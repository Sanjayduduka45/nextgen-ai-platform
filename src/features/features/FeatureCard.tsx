/**
 * FeatureCard — Individual feature display card.
 *
 * Responsive behaviors:
 * - Mobile: Functions as a collapsible Accordion item.
 * - Tablet/Desktop: Forced open via CSS and styled inside Bento Grid.
 *
 * Performance Optimization:
 * - Wrapped in React.memo to prevent cards from re-rendering if their active state did not change.
 *
 * Accessibility (a11y) — W3C Accordion Standard:
 * - Outer article acts strictly as a visual container (no onClick/role button violations).
 * - Header renders as a semantic `<button type="button">` serving as the focus target and toggle trigger.
 * - Accordion panels are mapped using `aria-expanded`, `aria-controls`, and `role="region"` for screen readers.
 * - Inline interactions (inner buttons, form controls) are nested inside the region without nesting violations.
 */

import { useState, useEffect, useRef, memo } from 'react'
import type { FeatureItem } from './Features'

interface FeatureCardProps {
  readonly feature: FeatureItem
  readonly isActive: boolean
  readonly onToggle: () => void
  readonly className?: string
}

export const FeatureCard = memo(function FeatureCard({
  feature,
  isActive,
  onToggle,
  className = '',
}: FeatureCardProps) {
  // SVG Icons mapped by feature ID
  const renderIcon = () => {
    switch (feature.id) {
      case 'autonomous-reasoning':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      case 'contextual-refactoring':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        )
      case 'isolated-sandbox':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      case 'semantic-branching':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7a2 2 0 114 0v8a2 2 0 11-4 0V7zm0 0a2 2 0 10-4 0v8a2 2 0 104 0V7zm8 8a2 2 0 114 0 2 2 0 01-4 0z" />
          </svg>
        )
      case 'collaborative-supervision':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
        )
      default:
        return null
    }
  }

  const cardClasses = [
    'card transition-hover relative flex flex-col justify-between overflow-hidden',
    isActive ? 'border-primary-400 card-highlighted ring-2 ring-primary-500/10' : 'hover:border-primary-200 card-interactive',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article
      id={`feature-card-${feature.id}`}
      className={cardClasses}
    >
      <div>
        {/* 
          Card Header acting as accessible toggle trigger button.
          Avoids nested click target violations by keeping nested interactive content inside the sibling region below.
        */}
        <button
          id={`feature-toggle-${feature.id}`}
          type="button"
          onClick={onToggle}
          className="w-full flex items-center justify-between text-left cursor-pointer md:cursor-default py-2 md:py-0 select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 rounded-lg md:focus-visible:outline-none"
          aria-expanded={isActive}
          aria-controls={`feature-content-${feature.id}`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl transition-hover
                ${
                  isActive
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-primary-100 text-primary-600'
                }`}
            >
              {renderIcon()}
            </div>
            <h3 className="text-card-title text-base font-bold text-neutral-900 leading-none">
              {feature.title}
            </h3>
          </div>
          {/* Chevron Indicator — Only visible on mobile */}
          <span
            className={`md:hidden flex items-center justify-center w-8 h-8 rounded-full text-neutral-400 hover:bg-neutral-100 transition-layout ${
              isActive ? 'rotate-180 text-primary-600 bg-primary-50' : 'rotate-0'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </button>

        {/* Collapsible Accordion Body wrapper mapped as accessible region */}
        <div 
          id={`feature-content-${feature.id}`}
          role="region"
          aria-labelledby={`feature-toggle-${feature.id}`}
          className={`accordion-wrapper mt-3 md:mt-4 ${isActive ? 'is-open' : ''}`}
        >
          <div className="accordion-content">
            {/* Description */}
            <p className="text-body text-sm text-neutral-600 leading-relaxed">
              {feature.description}
            </p>

            {/* Feature Interaction Preview Widget */}
            <div className="mt-6">
              <FeatureInteractionWidget id={feature.id} />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
})

/* ────────────────────────────────────────────────────────────────────────────
 *  SUB-COMPONENTS: Isolated Feature Interactions
 * ──────────────────────────────────────────────────────────────────────────── */

interface WidgetProps {
  readonly id: string;
}

function FeatureInteractionWidget({ id }: WidgetProps) {
  switch (id) {
    case 'autonomous-reasoning':
      return <ReasoningWidget />
    case 'contextual-refactoring':
      return <RefactoringWidget />
    case 'isolated-sandbox':
      return <SandboxWidget />
    case 'semantic-branching':
      return <BranchingWidget />
    case 'collaborative-supervision':
      return <SupervisionWidget />
    default:
      return null
  }
}

/** 1. Autonomous Coding Agents Interaction */
function ReasoningWidget() {
  const [stage, setStage] = useState<number>(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const steps = [
    { text: 'Start Reasoning', class: 'text-neutral-400' },
    { text: '🔍 Analyzing issue description...', class: 'text-primary-400' },
    { text: '✏️ Rewriting auth middleware...', class: 'text-amber-500' },
    { text: '🧪 Executing local dev suite...', class: 'text-cyan-400' },
    { text: '🟢 Success! PR #294 opened.', class: 'text-success-500 font-bold' },
  ]

  const triggerSimulation = () => {
    if (stage > 0) {
      setStage(0)
      if (timerRef.current) clearTimeout(timerRef.current)
      return
    }

    setStage(1)
  }

  useEffect(() => {
    if (stage > 0 && stage < steps.length - 1) {
      timerRef.current = setTimeout(() => {
        setStage((prev) => prev + 1)
      }, 1200)
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [stage])

  return (
    <div className="rounded-lg bg-neutral-900 border border-neutral-800 p-4 font-mono text-[12px] text-neutral-300">
      <div className="flex justify-between items-center mb-3">
        <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Agent Console</span>
        <button
          type="button"
          onClick={triggerSimulation}
          className="text-[11px] font-semibold font-body bg-primary-600 hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 active:scale-95 text-white px-2.5 py-1 rounded transition-all duration-150"
        >
          {stage === 0 ? 'Run Agent' : 'Reset'}
        </button>
      </div>
      <div className="space-y-1.5 h-16 flex flex-col justify-center">
        {stage === 0 ? (
          <span className="text-neutral-500 italic">Click "Run Agent" to simulate autonomous task execution...</span>
        ) : (
          <div className="space-y-1">
            {steps.slice(1, stage + 1).map((s, idx) => (
              <div key={idx} className={`${s.class} animate-fade-in`}>
                {s.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/** 2. Contextual Refactoring Interaction */
function RefactoringWidget() {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({
    src: true,
    features: false,
  })

  const toggleFolder = (path: string) => {
    setOpenFolders((prev) => ({
      ...prev,
      [path]: !prev[path],
    }))
  }

  return (
    <div className="rounded-lg bg-neutral-50 border border-neutral-200 p-4 font-mono text-[12px] text-neutral-700 select-none">
      <div className="text-[10px] text-neutral-400 uppercase tracking-widest mb-3 font-semibold">Repository Tree</div>
      <div className="space-y-1.5">
        {/* Root src folder */}
        <button
          type="button"
          onClick={() => toggleFolder('src')}
          className="flex items-center gap-1.5 cursor-pointer hover:text-primary-600 transition-hover text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 rounded px-1"
        >
          <span>{openFolders.src ? '📂' : '📁'}</span>
          <span className="font-semibold">src/</span>
        </button>

        {openFolders.src && (
          <div className="pl-5 space-y-1.5 border-l border-neutral-200 ml-2">
            {/* features folder */}
            <button
              type="button"
              onClick={() => toggleFolder('features')}
              className="flex items-center gap-1.5 cursor-pointer hover:text-primary-600 transition-hover text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 rounded px-1"
            >
              <span>{openFolders.features ? '📂' : '📁'}</span>
              <span>features/</span>
            </button>

            {openFolders.features && (
              <div className="pl-5 space-y-1 border-l border-neutral-200 ml-2 text-neutral-500 text-[11px]">
                <div>📄 auth.ts</div>
                <div>📄 features.tsx</div>
              </div>
            )}

            <div className="text-neutral-500 flex items-center gap-1.5 pl-1">
              <span>📄</span> App.tsx
            </div>
            <div className="text-neutral-500 flex items-center gap-1.5 pl-1">
              <span>📄</span> index.css
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/** 3. Isolated Sandbox Interaction */
function SandboxWidget() {
  const [status, setStatus] = useState<'idle' | 'running' | 'success'>('idle')
  const [progress, setProgress] = useState<number>(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const startSandbox = () => {
    if (status !== 'idle') {
      setStatus('idle')
      setProgress(0)
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }

    setStatus('running')
    setProgress(0)

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (timerRef.current) clearInterval(timerRef.current)
          setStatus('success')
          return 100
        }
        return prev + 10
      })
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  return (
    <div className="rounded-lg bg-neutral-50 border border-neutral-200 p-4 text-neutral-800">
      <div className="flex justify-between items-center mb-3">
        <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono font-semibold">Micro-Sandbox VM</span>
        <button
          type="button"
          onClick={startSandbox}
          className="text-[11px] font-semibold bg-neutral-900 hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 text-white px-2.5 py-1 rounded transition-hover active:scale-95"
        >
          {status === 'idle' ? 'Run Build' : status === 'running' ? 'Cancel' : 'Reset'}
        </button>
      </div>

      <div className="space-y-3 font-mono text-[12px]">
        {/* Progress Bar container */}
        <div className="h-6 w-full bg-neutral-200/60 rounded overflow-hidden relative flex items-center px-2">
          {status === 'running' && (
            <div
              className="absolute left-0 top-0 bottom-0 bg-primary-500 transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          )}
          {status === 'success' && (
            <div className="absolute left-0 top-0 bottom-0 right-0 bg-success-500" />
          )}
          <span className="relative z-raised text-[10px] text-neutral-800 font-bold mix-blend-difference">
            {status === 'idle' ? 'READY' : status === 'running' ? `BUILDING: ${progress}%` : 'COMPILED SUCCESSFULLY'}
          </span>
        </div>

        {/* Console state log */}
        <div className="text-[11px] text-neutral-500">
          {status === 'idle' && '● Status: Pending execution'}
          {status === 'running' && '◌ VM: Allocating virtual environment...'}
          {status === 'success' && '✔ Isolation checked: 0 vulnerabilities found.'}
        </div>
      </div>
    </div>
  )
}

/** 4. Semantic Branch Management Interaction */
function BranchingWidget() {
  const [activeBranch, setActiveBranch] = useState<string>('feat/auth')

  const branchLogs: Record<string, string> = {
    'main': 'merge PR #413 from feat/oauth\nmerge PR #410 from bugfix/cors-origin',
    'feat/auth': 'commit: Add JWT secret verification\ncommit: Setup request validation rules',
    'hotfix/cors': 'commit: Patch allowed origins configurations\ncommit: Fix cookie attributes',
  }

  return (
    <div className="rounded-lg bg-neutral-900 border border-neutral-800 p-4 font-mono text-[12px] text-neutral-300">
      <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-3 select-none">Active Branches</div>
      {/* Branch selector pills */}
      <div className="flex gap-2 mb-3 select-none" role="tablist" aria-label="Branch logs list">
        {['main', 'feat/auth', 'hotfix/cors'].map((branch) => (
          <button
            key={branch}
            type="button"
            role="tab"
            aria-selected={activeBranch === branch}
            onClick={() => setActiveBranch(branch)}
            className={`text-[10px] font-semibold px-2 py-0.5 rounded transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 ${
              activeBranch === branch
                ? 'bg-primary-600 text-white'
                : 'bg-neutral-800 text-neutral-400 hover:text-neutral-200'
            }`}
          >
            {branch}
          </button>
        ))}
      </div>

      {/* Simulated Git Output Log */}
      <div className="bg-neutral-950 p-2.5 rounded border border-neutral-800 text-[11px] leading-relaxed text-neutral-400 whitespace-pre">
        {branchLogs[activeBranch]}
      </div>
    </div>
  )
}

/** 5. Interactive Supervision Interaction */
interface Message {
  sender: 'user' | 'agent'
  text: string
}

function SupervisionWidget() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'agent', text: 'I completed drafting the JWT validation helper. Ready for approval?' },
  ])
  const [isTyping, setIsTyping] = useState<boolean>(false)

  const handleFeedback = (response: string) => {
    if (isTyping) return

    setMessages((prev) => [...prev, { sender: 'user', text: response }])
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)
      const aiReply =
        response === 'Looks perfect!'
          ? 'Great! Merging branch and creating pull request...'
          : response === 'Rewrite auth tests'
          ? 'Understood. Adding test coverage for boundary JWT checks...'
          : 'Refactoring validation logic to helper function...'
      setMessages((prev) => [...prev, { sender: 'agent', text: aiReply }])
    }, 1500)
  }

  return (
    <div className="rounded-lg bg-neutral-50 border border-neutral-200 p-4 text-neutral-800 text-[12px] flex flex-col justify-between min-h-[190px]">
      {/* Chat Messages */}
      <div className="space-y-3 max-h-[110px] overflow-y-auto pr-1">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex flex-col max-w-[85%] rounded-lg p-2 leading-relaxed ${
              m.sender === 'agent'
                ? 'bg-neutral-200/70 text-neutral-900 mr-auto'
                : 'bg-primary-600 text-white ml-auto'
            }`}
          >
            <span className="text-[9px] uppercase tracking-wider opacity-60 font-semibold mb-0.5">
              {m.sender === 'agent' ? 'AI Agent' : 'You'}
            </span>
            <span>{m.text}</span>
          </div>
        ))}
        {isTyping && (
          <div className="bg-neutral-200/50 text-neutral-500 mr-auto max-w-[85%] rounded-lg p-2 italic flex items-center gap-1">
            <span>Agent is working</span>
            <span className="animate-pulse">...</span>
          </div>
        )}
      </div>

      {/* Suggested replies */}
      <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-neutral-200/60 select-none">
        {['Looks perfect!', 'Rewrite auth tests', 'Refactor logic'].map((opt) => (
          <button
            key={opt}
            type="button"
            disabled={isTyping}
            onClick={() => handleFeedback(opt)}
            className="text-[10px] font-semibold border border-neutral-300 hover:border-primary-500 hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 rounded px-2 py-1 transition-all disabled:opacity-50 disabled:pointer-events-none"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}
export default FeatureCard
