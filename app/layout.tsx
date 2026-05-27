import type { Metadata, Viewport } from 'next';
import './globals.css';

const BASE_URL = 'https://template-event-playful.seojack.site';

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: 'Music Festival Website Template UK | SEOJack',
    description: 'Vibrant festival website template: countdown timer, artist lineup, schedule tabs & ticket tiers. Built for UK festival organisers. Preview free today.',
    alternates: { canonical: '/' },
    openGraph: {
        title: 'Music Festival Website Template UK | SEOJack',
        description: 'Vibrant festival website template: countdown timer, artist lineup, schedule tabs & ticket tiers. Built for UK festival organisers. Preview free today.',
        url: BASE_URL,
        siteName: 'SEOJack Templates',
        type: 'website',
        locale: 'en_GB',
        images: [{ url: 'https://cdn.seojack.website/templates/tpl_event_playful.avif', width: 1600, height: 1000, alt: 'Playful festival website template — colourful event landing page with countdown and lineup for UK music festivals' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Music Festival Website Template UK | SEOJack',
        description: 'Vibrant festival website template: countdown timer, artist lineup, schedule tabs & ticket tiers. Built for UK festival organisers. Preview free today.',
        images: ['https://cdn.seojack.website/templates/tpl_event_playful.avif'],
    },
    robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#102a30' };

const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Product',
            name: 'Music Festival Website Template — Playful & Vibrant',
            description: 'A vibrant music festival landing page template with countdown timer, artist lineup grid, multi-day schedule tabs, ticket tiers, and FAQ accordion. Built for UK festival organisers and independent event promoters.',
            brand: {
                '@type': 'Brand',
                name: 'SEOJack',
            },
            url: BASE_URL,
            image: 'https://cdn.seojack.website/templates/tpl_event_playful.avif',
            offers: {
                '@type': 'Offer',
                priceCurrency: 'GBP',
                availability: 'https://schema.org/InStock',
                url: 'https://seojack.net',
            },
            audience: {
                '@type': 'Audience',
                audienceType: 'Festival organisers, event promoters, web designers',
            },
        },
        {
            '@type': 'FAQPage',
            mainEntity: [
                {
                    '@type': 'Question',
                    name: 'What should a festival website include?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'A festival website should include a countdown timer to build anticipation, an artist lineup grid, a multi-day schedule with tabs, ticket tiers with clear pricing, a venue map, an FAQ section, and social media links. This template includes all of these sections, ready to customise.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'How do I create a website for a music festival?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'The fastest way to create a festival website is to start from a purpose-built template that already includes the core sections — lineup, schedule, tickets, and countdown. Customise the brand name, colours, artist cards, and dates, then launch. This template is built for exactly that workflow.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Can I use this template for a local UK festival?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. This template is designed for independent festival organisers across the UK — whether you\'re running a music weekend in Bristol, a summer event in Manchester, or a community festival in Edinburgh. Everything is fully customisable including currency, dates, and branding.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Does the festival website template include ticket tiers?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. The template includes three pre-built ticket tiers (Day Pass, 3-Day Pass, and VIP) with feature lists and buy-now buttons. These can be connected to any ticketing platform such as Eventbrite, Ticket Tailor, or Stripe Checkout.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'How much does it cost to build a festival website?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Custom festival website development can cost £2,000–£10,000+. Using a ready-made template like this one can reduce that to a fraction of the cost — customisation and launch can be done in days rather than weeks.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'What is a festival website template?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'A festival website template is a pre-built web page designed specifically for event promoters and festival organisers. It includes all the standard sections a festival site needs — hero with countdown, lineup grid, schedule, tickets, FAQ — so you can launch quickly without building from scratch.',
                    },
                },
            ],
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'SEOJack Templates', item: 'https://seojack.net/templates' },
                { '@type': 'ListItem', position: 2, name: 'Event Templates', item: 'https://seojack.net/templates?category=event' },
                { '@type': 'ListItem', position: 3, name: 'Playful Festival Template', item: BASE_URL },
            ],
        },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en-GB">
            <body>
                {children}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
                />
            </body>
        </html>
    );
}
