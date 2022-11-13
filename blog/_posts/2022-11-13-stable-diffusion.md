---
title: Image generation model——stable diffusion's theory
date: 2022-11-13
tags:
	- Artificial Intelligence
author: aprshine
location: ChangSha
---

# Stable Diffusion 的原理认识

​	stable diffusion是diffusion模型中目前来说效果最好的开源模型，目前来说，在学习了基本的数学原理之后，基本总结一下我现在所认知的diffusion模型。



## VAE模型

​	在谈及Diffusion模型之前，我们不得不先了解一下生成模型的发展，实际上，最初的生成是模型为生成对抗模型，即所谓的GAN，之后又发展出了VAE模型，并在图像生成领域崭露头角，以VAE为基础，Diffusion模型的出现使得图像生成领域得到了极大的发展，推动图像生成领域的研究走向了热潮。

​	事实上，Diffusion模型本质上类似于多层的VAE模型。



### 数学原理

