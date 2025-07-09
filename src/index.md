---
layout: base.njk
title: Home
---
# Welcome to My Eleventy Site

## Blog Posts

{% for post in collections.posts %}
- [{{ post.data.title }}]({{ post.url }}) - {{ post.date | date: "%B %d, %Y" }}
{% endfor %}

## About

Learn more about this site on the [About](/about) page.

## Contact

Feel free to reach out via the [Contact](/contact) page.

## Colophon

Read about the creation of this site on the [Colophon](/colophon) page.