// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
	site: 'https://answering-hard-questions.vercel.app',
	markdown: {
		// Open external (http/https) links in a new tab; internal links unaffected.
		rehypePlugins: [
			[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
		],
	},
	integrations: [
		starlight({
			title: 'Answering Hard Questions',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/jasonjames81/my-wiki' }],
			sidebar: [
				{ label: 'All research', link: '/research/' },
				{
					label: '1. Current State',
					items: [{ autogenerate: { directory: 'current-state' } }],
				},
				{
					label: '2. Interventions',
					items: [{ autogenerate: { directory: 'interventions' } }],
				},
				{
					label: '3. Synthesis',
					items: [{ autogenerate: { directory: 'synthesis' } }],
				},
				{
					label: '4. Organizations',
					items: [{ autogenerate: { directory: 'organizations' } }],
				},
				{
					label: '5. Career Options',
					items: [{ autogenerate: { directory: 'careers' } }],
				},
				{ label: 'About / Methodology', link: '/about/' },
			],
		}),
	],
});
