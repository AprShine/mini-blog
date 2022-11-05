module.exports = {
    dest: "docs",
    base: "/mini-blog/",
    title: "Aprshine's Mini Blog",
    theme: "@vuepress/blog",
    themeConfig: {
        /*Default Settings*/
        dateFormat: "YYYY-MM-DD",
        //光滑滚动
        smoothScroll: true,
        //目录结构
        directories: [
            {
                id: "post",
                dirname: "_posts",
                path: "/"
            }
        ],
        //顶部
        nav: [
            {
                text: 'Blog',
                link: '/',
            },
            {
                text: 'Tags',
                link: '/tag/',
            },
        ],
        //尾部
        footer: {
            //联系方式
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/AprShine',
                },
            ],
            //版权信息
            copyright: [
                {
                    text: 'Privacy Policy',
                    link: 'https://policies.google.com/privacy?hl=en-US',
                },
                {
                    text: 'MIT Licensed | Copyright © 2022-aprshine.cn',
                },
            ],
        }
    }
}