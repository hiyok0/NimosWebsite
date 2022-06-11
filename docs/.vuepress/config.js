const { defaultTheme } = require('@vuepress/theme-default');
const { socialSharePlugin } = require(`vuepress-plugin-social-share`);
const { seoPlugin } = require("vuepress-plugin-seo2");

module.exports = {
  lang: 'ja-JP',
  title: 'Nimos',
  description: 'A way you use VOICEVOX with OneComme.',
  public: "static",
  dest: "output",
  cache: "cache",
  temp: "temp",
  theme: defaultTheme({
	contributors: false,
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
  plugins: [
    seoPlugin({
      TwitterID: 'Jewel_Flash'
    }),
    socialSharePlugin({
	  networks: [`twitter`, `telegram`, `reddit`, `pinterest`, `linkedin`, `facebook`, `wechat`, `weibo`, `line`],
	  email: `user@example.com`,
	  twitterUser: `Jewel_Flash`
    })
  ]
}
