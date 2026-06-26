/**
 * Features — Feature showcase section.
 *
 * Architecture:
 * - Section heading + subtitle
 * - Responsive grid:
 *   - Mobile: Vertical Accordion stack
 *   - Tablet: Adaptive 2-column grid
 *   - Desktop: Modern Bento Grid (3-column layout with customized spans)
 * - Single source of truth active ID state keeps desktop & mobile accordion open states synchronized.
 */

import { useState } from 'react'
import { Section, Container, SectionHeading } from '@/components/ui'
import { FeatureCard } from './FeatureCard'

export interface FeatureItem {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly bentoClass: string
}

const FEATURES_DATA: readonly FeatureItem[] = [
  {
    id: 'autonomous-reasoning',
    title: 'Autonomous Coding Agents',
    description: 'Deploy agents that analyze context, design implementations, write clean code, and debug errors independently inside your repositories.',
    bentoClass: 'md:col-span-2 lg:col-span-2',
  },
  {
    id: 'contextual-refactoring',
    title: 'Directory Refactoring',
    description: 'Perform complex structural refactoring that spans across multiple modules, files, and classes simultaneously.',
    bentoClass: 'md:col-span-1 lg:col-span-1',
  },
  {
    id: 'isolated-sandbox',
    title: 'Isolated Execution Sandbox',
    description: 'Securely run test suites and code compilers inside localized container sandboxes before publishing code changes.',
    bentoClass: 'md:col-span-1 lg:col-span-1',
  },
  {
    id: 'semantic-branching',
    title: 'Semantic Branch Management',
    description: 'Generate clean commit histories, organize pull request code branches, and compile human-readable release notes automatically.',
    bentoClass: 'md:col-span-1 lg:col-span-1',
  },
  {
    id: 'collaborative-supervision',
    title: 'Interactive Supervision',
    description: 'Provide feedback in real-time, approve proposed implementations, or direct agent updates through integrated developer chat.',
    bentoClass: 'md:col-span-1 lg:col-span-1',
  },
]

export function Features() {
  const [activeId, setActiveId] = useState<string>('autonomous-reasoning')

  return (
    <Section id="features" background="alt" aria-labelledby="features-heading">
      <Container>
        <SectionHeading
          headingId="features-heading"
          title="Engineered for Autonomy"
          subtitle="A suite of agentic tools designed to automate core software developer workflows, run tests, and keep your git history clean."
        />

        {/* 
          Grid configurations:
          - Mobile (max-width: 767px): Stacks items as block level divs, behaving like Accordions.
          - Tablet (min-width: 768px): 2-column adaptive grid.
          - Desktop (min-width: 1024px): 3-column Bento Grid.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES_DATA.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              isActive={activeId === feature.id}
              onToggle={() => setActiveId(feature.id)}
              className={feature.bentoClass}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
