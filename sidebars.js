/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	gettingStartedSidebar: [
		{
			type: "doc",
			label: "Introduction",
			id: "getting-started/introduction",
		},
		{
			type: "category",
			label: "How to Join",
			link: {
				type: "generated-index",
			},
			collapsed: true,
			items: [
				{
					type: "category",
					label: "Mastodon",
					link: {
						type: "generated-index",
					},
					collapsed: true,
					items: [
						{
							id: "getting-started/joining-mastodon-web/index",
							type: "doc",
							label: "Official Web",
						},
						{
							id: "getting-started/joining-mastodon-android/index",
							type: "doc",
							label: "Official Android App",
						},
						{
							id: "getting-started/joining-mastodon-ios/index",
							type: "doc",
							label: "Official iOS App",
						},
					],
				},
				{
					type: "category",
					label: "Firefish",
					link: {
						type: "generated-index",
					},
					collapsed: true,
					items: [
						{
							id: "getting-started/joining-firefish/index",
							type: "doc",
							label: "Official Web",
						},
					],
				},
			],
		},
		{
			type: "category",
			label: "How to Follow",
			link: {
				type: "generated-index",
			},
			items: [
				{
					type: "category",
					label: "Mastodon",
					link: {
						type: "generated-index",
					},
					collapsed: true,
					items: [
						{
							id: "getting-started/following-mastodon-web/index",
							type: "doc",
							label: "Official Web",
						},
					],
				},
			],
		},
		{
			type: "category",
			label: "How to Post",
			link: {
				type: "generated-index",
			},
			items: [
				{
					type: "category",
					label: "Mastodon",
					link: {
						type: "generated-index",
					},
					collapsed: true,
					items: [
						{
							id: "getting-started/posting-mastodon-web/index",
							type: "doc",
							label: "Official Web",
						},
					],
				},
			],
		},
		{
			type: "category",
			label: "How to Post Images",
			link: {
				type: "generated-index",
			},
			items: [
				{
					type: "category",
					label: "Mastodon",
					link: {
						type: "generated-index",
					},
					collapsed: true,
					items: [
						{
							id: "getting-started/posting-images-mastodon-web/index",
							type: "doc",
							label: "Official Web",
						},
					],
				},
			],
		},
		{
			type: "category",
			label: "FAQ",
			collapsible: true,
			collapsed: false,
			link: {
				type: "generated-index",
			},
			items: [
				{
					type: "autogenerated",
					dirName: "getting-started/faq",
				},
			],
		},
	],
	learnSidebar: [
		{
			type: "category",
			label: "Glossary",
			link: {
				type: "generated-index",
			},
			collapsed: true,
			items: [
				{
					type: "autogenerated",
					dirName: "glossary",
				},
				{
					type: "autogenerated",
					dirName: "software",
				},
				{
					type: "autogenerated",
					dirName: "specifications",
				},
				{
					type: "autogenerated",
					dirName: "tech",
				},
			],
		},
	],

	// But you can create a sidebar manually
	/*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
