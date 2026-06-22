const fs = require('fs');

async function scrape() {
  try {
    console.log('Fetching A-Genius website...');
    const response = await fetch('https://agenius.framer.website/');
    const html = await response.text();
    
    // Search for the SVG
    console.log('\n--- Searching for SVG paths ---');
    const svgMatches = html.match(/<svg[^>]*>.*?<\/svg>/gs);
    if (svgMatches) {
      const starburstSvgs = svgMatches.filter(svg => svg.includes('Brands') || svg.includes('points') || svg.includes('d="M'));
      console.log(`Found ${starburstSvgs.length} potential SVGs. Showing first 3:`);
      starburstSvgs.slice(0, 3).forEach(svg => console.log(svg));
    }
    
    // Search for "We built the"
    console.log('\n--- Searching for Text Section ---');
    const textIdx = html.indexOf('We built the');
    if (textIdx !== -1) {
      const context = html.substring(Math.max(0, textIdx - 500), textIdx + 1000);
      console.log(context);
    } else {
      console.log('Could not find "We built the" directly in HTML (might be bundled in JS)');
    }
    
    // Search for feTurbulence
    console.log('\n--- Searching for feTurbulence ---');
    const turbIdx = html.indexOf('feTurbulence');
    if (turbIdx !== -1) {
      const context = html.substring(Math.max(0, turbIdx - 300), turbIdx + 500);
      console.log(context);
    }
  } catch (err) {
    console.error('Error fetching:', err);
  }
}

scrape();
