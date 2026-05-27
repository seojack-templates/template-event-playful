import type { Metadata, Viewport } from 'next';
import './globals.css';

const BASE_URL = 'https://event-playful.templates.seojack.website';

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: 'Playful Festival',
    description: 'Energetic festival site with countdown timer, lineup grid, schedule tabs, ticket tiers, and venue map.',
    alternates: { canonical: '/' },
    openGraph: {
        title: 'Playful Festival',
        description: 'Energetic festival site with countdown timer, lineup grid, schedule tabs, ticket tiers, and venue map.',
        url: BASE_URL,
        siteName: 'Playful Festival',
        type: 'website',
        locale: 'en_GB',
        images: [{ url: 'https://cdn.seojack.website/templates/tpl_event_playful.avif', width: 1600, height: 1000 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Playful Festival',
        description: 'Energetic festival site with countdown timer, lineup grid, schedule tabs, ticket tiers, and venue map.',
        images: ['https://cdn.seojack.website/templates/tpl_event_playful.avif'],
    },
    robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#102a30' };

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Festival',
    name: 'Playful Festival',
    description: 'Energetic festival site with countdown timer, lineup grid, schedule tabs, ticket tiers, and venue map.',
    url: BASE_URL,
    image: 'https://cdn.seojack.website/templates/tpl_event_playful.avif',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en-GB">
            <body>
                {children}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </body>
        </html>
    );
}