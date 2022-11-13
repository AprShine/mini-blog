---
title: Web Technology
date: 2022-11-13
tags:
	- Front
author: aprshine
location: ChangSha
---

# Web 技术简介

​	目前的Web技术栈可以说是相当的全能，可以说除了一些底层的开发无法使用Web技术搞定，基本上所有的编程内容都可以使用Web技术进行实现，除了原生的三大件之外，Web技术还有众多的衍生扩展，可谓是百花齐放。使用Web技术，你可以轻易地实现自己的想法与技术实现，下面简单介绍一下Web的大致技术栈：

## 原生

​	首先是原生的Web技术，也是Web技术的基础。所谓的原生技术，就是Web的传统三大件：HTML，CSS和JavaScript。请注意，以下仅仅是对原生Web技术的基本介绍，并不是原生Web技术的具体教程，如需访问相关的具体教程，请参考：

+ [MDN](https://developer.mozilla.org/zh-CN/docs/Web)
+ [w3cschool](https://www.w3school.com.cn/)

### HTML

​	HTML，全称为：Hyper Text Markup Language，即超文本标记语言，所谓的超文本标记语言并不是一种编程语言，抽象的说类似于一种静态的标签树，通过不同的标签，可以定义不同的组件，并在浏览器中显示，一个基本的例子如下：

```html
<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <title>
            这是一个无名的网页...
        </title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div id="header">
            <p>Hello World!</p>
            <p class="tip">你好，   世界...</p>
        </div>
        <div id="content">
            <div id="left">
                <img src="image/image.png" alt="myAct" width="140px" height="200px">
                <div id="msg">
                    <p>This is one of my action...</p>
                    <p>What do you think of it?</p>
                    <br>
                    <p>your <span style="color: rgb(107, 107, 189);">feel</span>:</p>
                    <form action="post">
                        <input type="text" name="critical">
                    </form>
                </div>
            </div>
            <div id="right">
                <ul>
                    <li class="uTable">I do want to do nothing</li>
                    <li >I just want to be happy</li>
                    <li>You knew...</li>
                    <li>Just easily happy...</li>
                    <li><a href="https://www.bilibili.com/read/cv2517566/" target="_blank">You can find a good example in this Net</a></li>
                </ul>
            </div>
        </div>
        <div id="nextContent">
            <ol>
                <li>
                    Stop struggling, life is stopped.
                </li>
                <li>
                    God gives us evil at the same time, also gives us conquer evil weapons.
                </li>
                <li>
                    Any labor is a noble, lofty career only labor.
                </li>
                <li>
                    Cease to struggle and you cease to live.
                </li>
            </ol>
            </div>
            <div id="bottom">
                <video width="320" height="200" controls>
                    <source src="video/If_miss_me_suddenly.mp4" type="video/mp4">
                </video>
                <audio controls>
                    <source src="video/If_miss_me_suddenly.mp3">
                </audio>
            </div>
        </div>
    </body>
</html>
```

​	你可以将以上内容复制，并保存在`index.html`文件中，并且使用浏览器打开，即可看到其定义的基本内容。值得注意的是，由于缺乏相应的文件，你将无法显示一些图片或者视频。

### CSS

​	CSS，全称为：Cascading Style Sheets，即层叠样式表。显然，只有标签的作用无法实现网页中精美的UI界面，使用HTML只能绘制出网页的大致框架，想要实现精美的显示效果就需要CSS的协助，CSS就是对HTML中的某个具体标签进行样式设置的一种计算机语言，同HTML一样，并不是一种可以运行的编程语言，而是一种作为资源文件的静态语言。

​	CSS的嵌入方式有两种：

1. 在HTML文档中使用style标签内联
2. 单独创建以`.css`为后缀的文件，并在HTML文件中引入



​	两种方式都可以实现CSS的引入，也许你会有一些疑问，明明可以在HTML标签定义的同时约定标签的样式，为什么要单独定义一种语言专门进行样式的定义呢？

> ​	事实上，单独的文件定义有助于减少程序的耦合度，修改和维护起来更加容易，同时，独立的代码结构更有利于代码的重复利用。出于种种优点的考虑，我们约定将CSS分立为一种计算机语言。

​	一个基本的CSS如下：

```css
*{
    margin: 0;
    padding: 0;
}
html,body{
    height: 100%;
    background-color: rgb(104, 190, 183);
}
a{
    text-decoration: none;
    color: black;
}
a:hover{
    color: rgb(46, 123, 72);
}
input:focus{
    outline: none;
}
#header{
    background-color: antiquewhite;
    text-align: center;
    padding: 5px;
    user-select: none;
}
#header::first-letter{
    font-size: 5em;
}
#content{
    display: flex;
    flex-direction: row;
}
#content #left{
    width: 50%;
    height: 13em;
    display: flex;
    align-items: center;
    padding-left: 2em;
    margin-top: 1em;
    border-right: solid greenyellow;
}
#content #left #msg{
    margin-left: 1em;
    
}
#content #right{
    width: 50%;
    margin-top: 1em;
    padding-left: 7em;

}
#content #right ul>li::first-letter{
    font-size: 2em;
}
#nextContent{
    width: 100%;
    border-top: solid rgb(214, 157, 136);
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#nextContent ol>li::first-letter{
    font-size: 2em;
}
#bottom{
    display: flex;
    justify-content: space-around;
    align-items: center;

}
.tip{
    color: dimgray
}

```

​	该例子与HTML中的例子同源，你可以复制以上代码并保存在`style.css`中，并将其与上述`index.html`置于同一根目录下，再次打开文件，观察是否与之前有不同的现象。



### JavaScript

​	与前两种语言不同，JavaScript是货真价实的可以运行的编程语言，是一种可以在浏览器中直接运行的脚本类语言，在安装不同环境之后，JavaScript可以在非浏览器环境中运行，甚至可以进行编译。

​	值得注意的是，JavaScript虽然名字中带有Java，但是与Java并没有半毛钱关系，只是因为在JavaScript诞生时Java语言十分的热门，为了蹭热度，所以取名JavaScript，两者是完全不同的编程语言。

​	之前我们说过，CSS赋予了标签各种各样的样式，那么JS则赋予了标签交互的功能，例如按钮的点击事件，弹出交互式窗口等等，都是JavaScript才可以实现的功能。

​	你可以在浏览器中按F12进入开发者模式，在控制台中运行简单的JavaScript代码：

```js
console.log("Hello World!")
```

​	该代码的作用是在控制台中显示Hello World！JavaScript的语言特点高情商是集百家之长，~~低情商就是四不像~~，在JS的语法中，你几乎可以看到各种主流语法的影子，并且他们可以共存，除此之外，JS还支持动态数据类型。这就导致JS易学，但是难以阅读，可维护性差，也就造就了JS的超集——TypeScript的出现。



