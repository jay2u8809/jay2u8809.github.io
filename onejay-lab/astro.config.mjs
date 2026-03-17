// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import starlightSidebarTopics from 'starlight-sidebar-topics';

// https://astro.build/config
export default defineConfig({
	site: 'https://jay2u8809.github.io',
	integrations: [
		starlight({
			title: 'Onejay Lab',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/jay2u8809' }],
			defaultLocale: 'root',
			locales: {
				root: {
					label: '한국어',
					lang: 'ko',
				},
				en: {
					label: 'English',
					lang: 'en',
				},
				ja: {
					label: '日本語',
					lang: 'ja',
				},
			},
			plugins: [
				starlightSidebarTopics(
					[
						{
							id: 'dev',
							label: { ko: '개발 Docs', en: 'Dev Docs', ja: '開発 Docs' },
							link: '/dev/aws/amplify/frequently-used-command',
							icon: 'laptop',
							items: [
								{
									label: 'AWS',
									translations: { en: 'AWS', ja: 'AWS' },
									autogenerate: { directory: 'dev/aws' },
								},
								{
									label: 'Programming',
									translations: { en: 'Programming', ja: 'プログラミング' },
									autogenerate: { directory: 'dev/programming' },
								},
								{
									label: 'Tools',
									translations: { en: 'Tools', ja: 'ツール' },
									autogenerate: { directory: 'dev/tools' },
								},
							],
						},
						{
							id: 'life',
							label: { ko: '일본생활 Docs', en: 'Japan Life Docs', ja: '日本生活 Docs' },
							link: '/life/how-to-prepare-for-visa-renewal',
							icon: 'information',
							items: [
								{
									label: '일본생활',
									translations: { en: 'Japan Life', ja: '日本生活' },
									autogenerate: { directory: 'life' },
								},
							],
						},
					],
					{
						exclude: [
							'/blog',
							'/blog/**',
							'/en/blog',
							'/en/blog/**',
							'/ja/blog',
							'/ja/blog/**',
							'/intro',
							'/en/intro',
							'/ja/intro',
						],
					},
				),
				starlightBlog({
					authors: {
						onejay: {
							name: 'Onejay',
							url: 'https://github.com/jay2u8809',
							picture: 'https://github.com/jay2u8809.png',
						},
					},
				}),
			],
		}),
	],
});
