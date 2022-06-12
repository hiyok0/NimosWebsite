const { defaultTheme } = require('@vuepress/theme-default');
const { socialSharePlugin } = require(`vuepress-plugin-social-share`);
//const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
  lang: 'ja-JP',
  title: 'Nimos',
  description: 'A way you use VOICEVOX with OneComme.',
  public: "static",
  dest: "output",
  cache: "cache",
  temp: "temp",
  head: [
    //favicon
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/vnd.microsoft.icon' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    //Open Graph protocol (includes Twitter card)
    ['meta', { property: 'og:site_name', content: 'Nimos Docs' }],
    ['meta', { property: 'og:description', content: 'NimosはmacOS上などでわんコメとVOICEVOXを繋げられるアプリケーションです。' }],
    ['meta', { property: 'og:type', content: 'article' }],
    ['meta', { property: 'og:image', content: '/assets/ogp.png' }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:site', content: 'Jewel_Flash' }],
    ['meta', { property: 'twitter:title', content: 'Nimos Docs' }],
    ['meta', { property: 'twitter:description', content: 'NimosはmacOS上などでわんコメとVOICEVOXを繋げられるアプリケーションです。' }],
    ['meta', { property: 'twitter:image', content: '/assets/ogp.png' }]
    //example-->  ['link', { rel: 'icon', href: '/images/logooo.png' }]
  ],
  theme: defaultTheme({
	contributors: false,
	domain: 'https://nimos.pages.dev',
    navbar: [
	  /*
      // NavbarItem
      {
        text: 'Foo',
        link: '/foo/',
      },
      // NavbarGroup
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },
      // string - page file path
      '/bar/README.md',
      */
      {
		  text: 'Docs',
		  link: '/docs/'
	  },
	  {
		  text: 'Community',
		  link: '/community/'
	  },
	  {
		  text: 'GitHub',
		  children: [{
			  text: 'Nimos(main)',
			  link: 'https://github.com/hiyok0/Nimos/'
		  },{
			  text: 'NimosWebsite',
			  link: 'https://github.com/hiyok0/NimosWebsite/'
		  }]
	  }
    ],
  }),
  plugins: [/*
    searchPlugin({
      locales: {
        '/': {
          placeholder: '検索',
        }
      },
      maxSuggestions: 15
	}),*/
    socialSharePlugin({
	  networks: [`twitter`, `telegram`, `reddit`, `pinterest`, `linkedin`, `facebook`, `wechat`, `weibo`, `line`],
	  email: `user@example.com`,
	  twitterUser: `Jewel_Flash`
    })
  ]
}
