---
title: 'Schottland: In den Highlands'
date: '2025-08-23T07:59:08+00:00'
author: redr
layout: post
categories: Personal
tags: German Travel
---

<main>
    <section class="station">
<div class="station-header"><h3>Brüssel</h3></div>
      <div class="station-content">
        <p>Die Altstadt, das Castle, und ein Hauch von Geschichte in jeder Gasse...</p>
      </div>
    </section>

    <section class="station">
<div class="station-header"><h3>Glasgow</h3></div>
      <div class="station-content">
        <p>Wilde Küsten, mystische Berge und das Gefühl, am Ende der Welt zu sein.</p>
      </div>
    </section>

    <section class="station">
      <div class="station-header"><h3>Etappe 1: Milngavine &rarr; Drymen</h3></div>
      <div class="station-content">
        <p>Ein Tal voller Dramatik – sowohl landschaftlich als auch historisch.</p>
      </div>
    </section>
  </main>
  
  
  <script>
  // Optional: ScrollReveal oder andere Effekte kannst du hier einbauen
// Beispiel:
document.querySelectorAll('.station').forEach((section, index) => {
  section.style.opacity = 0;
  section.style.transition = 'opacity 0.6s ease';

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
      }
    });
  }, { threshold: 0.1 });

  observer.observe(section);
});
  </script>
  
  
  <style>
  main {
  max-width: 800px;
  margin: 0 auto;
}

.station {
  margin-bottom: 4rem;
  position: relative;
}

.station-header {
  position: sticky;
  top: 0;
  background: var(--bg);
  color: var(--headings);
  border-bottom: 2px solid var(--bg-secondary);
  z-index: 10;
}

.station-content {
  padding: 1rem 0;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
}

.theme-toggle {
  z-index: 999;
}
  </style>