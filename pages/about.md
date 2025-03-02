---
layout: page
title: About
permalink: /about/
weight: 3
---

# **About Me**

Hi I am **{{ site.author.name }}** :wave:,<br>
A self-taught front-end web developer with more than 3 years of experience, specializing in UX and UI design. My work is inspired by a minimalist approach to design with a focus on the most essential elements to match a sleek premium look. When I’m not working, I am fueled by my passion for road cycling, which helps me cultivate the discipline and endurance that are essential to my professional work.

<div style="display: flex; justify-content: center; align-items: center; margin: 0 0; padding: 0 0; overflow: hidden; width: 100%; flex-wrap: wrap; gap: 20px;">
    <div style="display: flex; justify-content: center; align-items: center; overflow: hidden; width: fit-content; padding-bottom: 0;">
        <iframe src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3057674" style="border: none; width: 45vw; max-width: 400px;"></iframe>
    </div>
</div>

<div class="row">
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>

<div class="row">
{% include about/timeline.html %}
</div>
