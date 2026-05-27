/**
 * Scoped CSS for the event-playful template.
 * EVERY selector must be prefixed with ".event-playful-demo" so the styles
 * cannot leak (this matters when the source is seeded into the builder).
 */
export const EVENT_PLAYFUL_CSS = `
.event-playful-demo {
    --ink: #14141a;
    --paper: #ffffff;
    font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
    color: var(--ink);
    background: var(--paper);
}
.event-playful-demo * { box-sizing: border-box; }
.event-playful-demo h1 { font-size: clamp(2rem, 5vw, 3.5rem); margin: 0 0 1rem; }
`;