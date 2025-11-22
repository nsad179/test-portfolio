import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Neeraj Kumar - Senior SEO Strategist & PPC Consultant',
        short_name: 'Neeraj Kumar',
        description: 'Helping brands grow with data-driven SEO, PPC, and content strategies.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#FE4300',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
