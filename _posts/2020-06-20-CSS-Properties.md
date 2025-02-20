---
title:  "CSS Properties to use"
date:   2020-06-20 12:00:00 -0500
categories: [web development]
tags: [code]   # TAG names shoud always be lowercase
---

1. **Change the Text Selection colour**
To change the Text Selection colour, ::selection is a pseudo-element that overrides at the browser-level to replace the text highlight colour with a colour you choose. The colour can be seen once you select the content with the cursor.

```css
::selection {
 	background-color: #f3b70f;
 }
 ```
 
2. **Conic-gradient**
Creates an image consisting of a gradient with set colour transitions rotated around a central point (rather than radiating from the central point as you'd find with a radial-gradient).

```css
.piechart {
  background: conic-gradient(rgb(255, 132, 45) 0% 25%, rgb(166, 195, 209) 25% 56%, #ffb50d  56% 100%);
  border-radius: 50%;
  width: 300px;
  height: 300px;
}
```

3. **Counters**
To style numbers in a numbered list, we need to play with properties called CSS counters. CSS counters let you adjust the appearance of content based on its location in a document.

To use CSS counters:
- The counters' value can be increased or decreased by counter-increment
- Can display the value of the counter by using the counter() or counters() function from within a content property


```css
ol.numbered-list > li:before {
 content: counter(li);
 position: absolute;
 box-sizing: border-box;
 width: 45px;
 height: 45px;
 background: #f3b70f;
 border-radius: 50%;
}
ol.numbered-list li {
  position: relative;
  left: 0px;
  list-style: none;
  counter-increment: li;
}
```