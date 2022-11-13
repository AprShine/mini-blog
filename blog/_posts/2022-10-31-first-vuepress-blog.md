---
title: How to make a blog with vuepress
date: 2022-10-31
tags:
	- Front
 	- Vue
author: aprshine
location: ChangSha
---

# Hello VuePress！

​	看到我之后，你就成功构建了第一个VuePress项目！这是Markdown语法基础下的扩展，拥有多种风格的主题，VuePress项目最初是用来为Vue编写文档而立项的，目前可以用于博客和各种文档的编写。

## 利用VuePress构建自己的文档网站

​	VuePress拥有特定的markdown语法支持，开箱即用，可以方便的构建标准的博客网站。

### Vuepress和插件安装

​	你可以选择自己喜欢的包管理器安装vuepress和官方的blog插件，并在本地运行，可以参考以下步骤：

1. 创建一个本地目录

``` shell
mkdir vue-press-blog && cd vue-press-blog
```

2. 使用你喜欢的包管理器进行初始化

``` shell
yarn init # npm init
```

3. 安装vuepress依赖和相关主题

``` shell
yarn add -D vuepress @vuepress/theme-blog
```

4. 在根目录下创建blog和blog/_posts

```shell
cd .. && mkdir blog && mkdir blog/_posts
echo "# Hello World" > blog/_posts/hello-world.md
```

5. 运行scripts

```shell
yarn vuepress dev blog
```

### 项目配置

​	项目的主要配置文件位于`blog/.vuepress/config.js`，你可以参考如下配置进行：

```js
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
```









