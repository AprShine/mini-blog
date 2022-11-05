---
title: How to make a blog with vuepress
date: 2022-10-31
tags:
 	- Vue
author: aprshine
location: ChangSha
---

# Hello VuePress！

​	看到我之后，你就成功构建了第一个VuePress项目！这是Markdown语法基础下的扩展，拥有多种风格的主题，VuePress项目最初是用来为Vue编写文档而立项的，目前可以用于博客和各种文档的编写。

## 利用VuePress构建自己的文档网站

​	VuePress拥有特定的markdown语法支持，开箱即用，可以方便的构建标准的博客网站。

### 安装VuePress

​	你可以选择自己喜欢的包管理器安装vuepress，并在本地运行，可以参考以下步骤：

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









