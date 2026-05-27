/**
 * Typed, realistic content for the event-playful template.
 * No lorem ipsum — use real-sounding names, copy, prices, and addresses.
 */

export interface SiteMeta {
    name: string;
    tagline: string;
}

export const META: SiteMeta = {
    name: 'Playful Festival',
    tagline: 'Replace with the real tagline.',
};

/** UK cities where independent festival promoters search for a festival website template */
export const LOCAL_AREAS = [
    'Bristol',
    'Manchester',
    'Brighton',
    'Edinburgh',
    'Leeds',
] as const;

export type LocalArea = (typeof LOCAL_AREAS)[number];
