/// <reference types="vite/client" />

/**
 * Vite client type declarations.
 * Extends import support for static assets.
 */

declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.webp' {
  const content: string
  export default content
}
