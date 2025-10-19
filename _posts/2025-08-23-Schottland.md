---
title: 'Schottland: In den Highlands'
date: '2025-08-23T07:59:08+00:00'
author: redr
layout: post
categories: Personal
tags: German Travel
---
Im Sommer 2025 hatte ich zusammen mit meiner Partnerin die Gelegenheit in Schottland eine Wanderung auf dem West Highland Way zu machen. Hier ist mein Reisebericht mit Fotos.
<main>
    <section class="station">
<div class="station-header"><h3>Brüssel</h3></div>
      <div class="station-content">
        <p>Auf unserer Reise nutzten wir hauptsächlich Züge und kein Flugzeug. Um die Anreise entspannt zu gestalten, machten wir auf dieser Halt in Brüssel...</p>
        <div class="img-wrapper">
        <img src="/uploads/imgs/scotland/brussel_1.webp" alt="Brüssels Straßen">
          </div>
          <div class="img-wrapper">
        <img src="/uploads/imgs/scotland/brussel_2.webp" alt="Brüssels Straßen">
          </div>
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
    
    <section class="station">
      <div class="station-header"><h3>Etappe 2: Drymen &rarr; Rowardennan</h3></div>
      <div class="station-content">
        <p>Ein Tal voller Dramatik – sowohl landschaftlich als auch historisch.</p>
      </div>
    </section>
    
    <section class="station">
      <div class="station-header"><h3>Etappe 3: Rowardennan &rarr; Inverarnan</h3></div>
      <div class="station-content">
        <p>Ein Tal voller Dramatik – sowohl landschaftlich als auch historisch.</p>
      </div>
    </section>
    
    <section class="station">
      <div class="station-header"><h3>Etappe 4: Inverarnan &rarr; Tyndrum</h3></div>
      <div class="station-content">
        <p>Ein Tal voller Dramatik – sowohl landschaftlich als auch historisch.</p>
      </div>
    </section>
    
    <section class="station">
      <div class="station-header"><h3>Etappe 5: Tyndrum &rarr; Inveroran</h3></div>
      <div class="station-content">
        <p>Ein Tal voller Dramatik – sowohl landschaftlich als auch historisch.</p>
      </div>
    </section>
    
    <section class="station">
      <div class="station-header"><h3>Etappe 6: Inveroran &rarr; Kingshouse</h3></div>
      <div class="station-content">
        <p>Ein Tal voller Dramatik – sowohl landschaftlich als auch historisch.</p>
      </div>
    </section>
    
    <section class="station">
      <div class="station-header"><h3>Etappe 7: Kingshouse &rarr; Kinlochleven</h3></div>
      <div class="station-content">
        <p>Ein Tal voller Dramatik – sowohl landschaftlich als auch historisch.</p>
      </div>
    </section>
    
    <section class="station">
      <div class="station-header"><h3>Etappe 8: Kinlochleven &rarr; Fort William</h3></div>
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

.img-wrapper {
  width: 100%;
  max-width: 360px;  /* Begrenzung auf Desktop */
  margin: 2rem auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.img-wrapper img {
  width: 100%;
  height: auto;
  display: block;
}
  </style>