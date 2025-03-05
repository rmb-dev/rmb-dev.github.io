---
layout: page
title: About
permalink: /about/
weight: 3
---

# **About Me**

Hi I am **{{ site.author.name }}** 👋🏻,

I am an aspiring cybersecurity specialist with a strong focus on penetration testing. My expertise includes conducting security assessments on computer systems, networks, and web applications, identifying vulnerabilities, and analyzing security policies. I perform audits, evaluate risks, and provide actionable recommendations to strengthen defenses against cyber threats. My approach is methodical and detail-oriented, ensuring that security measures are both effective and adaptable to evolving attack vectors.

Before pivoting into cybersecurity, I spent over three years as a self-taught front-end web developer, specializing in UX and UI design. My design philosophy is rooted in minimalism, emphasizing essential elements to achieve a sleek, premium look.

Outside of work, I am passionate about road and gravel cycling, which helps me cultivate endurance and discipline.

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
