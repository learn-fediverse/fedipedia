// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Fedipedia",
	tagline: "Learn all there is about the fediverse",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://fedipedia.wiki",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "learn-fediverse", // Usually your GitHub org/user name.
	projectName: "fedipedia", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: "https://github.com/learn-fediverse/fedipedia/tree/main/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: "https://github.com/learn-fediverse/fedipedia/tree/main/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: "img/docusaurus-social-card.jpg",
			navbar: {
				title: "Fedipedia",
				logo: {
					alt: "Fedipedia Logo",
					src: "img/logo.svg",
				},
				items: [
					{
						type: "docSidebar",
						sidebarId: "learnSidebar",
						position: "left",
						label: "Learn",
					},
					// { to: "/blog", label: "Blog", position: "left" },
					{
						href: "https://github.com/learn-fediverse/fedipedia",
						label: "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Learning",
						items: [
							{
								label: "Learn",
								to: "/docs/category/getting-started",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								html: '<a rel="me" href="https://mastodon.social/@fedipedia" class="footer__link-item">On The Fediverse <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>',
							},
						],
					},
					{
						title: "More",
						items: [
							// {
							// 	label: "Blog",
							// 	to: "/blog",
							// },
							{
								label: "GitHub",
								href: "https://github.com/learn-fediverse/fedipedia",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Fedipedia. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
