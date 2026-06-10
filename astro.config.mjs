// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://jasonjames81.github.io',
	base: '/my-wiki',
	integrations: [
		starlight({
			title: 'MOST PROMISING INTERVENTIONS TO REDUCE GLOBAL INEQUALITY',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/jasonjames81/my-wiki' }],
			sidebar: [
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
			],
		}),
	],
});
