---
layout: base.njk
title: Home
---

{% for post in collections.posts %}
<div class="post">
  <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
  <!-- <p><em>{{ post.date | date: "%B %d, %Y" }}</em></p> -->
  {{ post.templateContent }}
</div>
{% endfor %}

---

## Submit Your Story

[Contact us](/contact) if you would like to share your Urbana home’s story.