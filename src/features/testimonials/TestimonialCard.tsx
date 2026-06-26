import type { TestimonialItem } from './Testimonials'

interface TestimonialCardProps {
  readonly testimonial: TestimonialItem
  readonly className?: string
}

export function TestimonialCard({
  testimonial,
  className = '',
}: TestimonialCardProps) {
  // Combine card base classes with fixed width constraints for marquee scroll compatibility
  const classes = [
    'card w-[290px] sm:w-[350px] flex-shrink-0 h-full flex flex-col justify-between hover:border-primary-200 transition-all duration-300',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article
      id={`testimonial-card-${testimonial.id}`}
      className={classes}
    >
      <div>
        {/* Star Rating indicators */}
        <div className="flex text-amber-500 mb-4 select-none" aria-hidden="true">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Review Quote text */}
        <blockquote>
          <p className="text-body text-[13.5px] sm:text-[14.5px] italic leading-relaxed text-neutral-600">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </blockquote>
      </div>

      {/* Author profile indicators */}
      <div className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-4">
        
        {/* Avatar initial badge circle (avoids layout shifts & generic faces) */}
        <div
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-primary-500 to-accent-500 text-white font-bold text-sm font-heading select-none shadow-sm"
          aria-hidden="true"
        >
          {testimonial.initials}
        </div>

        <div className="overflow-hidden">
          <cite className="block text-sm font-bold text-neutral-900 not-italic font-body leading-none truncate">
            {testimonial.author}
          </cite>
          <span className="text-caption text-xs text-neutral-400 font-body block truncate mt-1 select-none">
            {testimonial.role} at {testimonial.company}
          </span>
        </div>

      </div>
    </article>
  )
}
export default TestimonialCard
