/*     const article = document.querySelector("article");

    // `document.querySelector` may return null if the selector doesn't match anything.
    if (article) {
      const text = article.textContent;
      const wordMatchRegExp = /[^\s]+/g; // Regular expression
      const words = text.matchAll(wordMatchRegExp);
      // matchAll returns an iterator, convert to array to get word count
      const wordCount = [...words].length;
      const readingTime = Math.round(wordCount / 200);
      const badge = document.createElement("p");
      // Use the same styling as the publish information in an article's header
      badge.classList.add("color-secondary-text", "type--caption");
      badge.textContent = `⏱️ ${readingTime} min read`;
    
      // Support for API reference docs
      const heading = article.querySelector("h1");
      // Support for article docs with date
      const date = article.querySelector("time")?.parentNode;
    
      (date ?? heading).insertAdjacentElement("afterend", badge);
    } */

 // Function to calculate reading time based on word count
function calculateReadingTime(text) {
  const wordMatchRegExp = /[^\s]+/g; // Regular expression to match words
  const words = text.matchAll(wordMatchRegExp);
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200); // Assuming 200 words per minute
  return readingTime;
}

// Function to add a badge showing reading time
function addReadingTimeBadge() {
  const textContent = document.body.textContent; // Get text content of the entire document
  const readingTime = calculateReadingTime(textContent);

  const badge = document.createElement("div");
  badge.style.position = "fixed";
  badge.style.bottom = "20px";
  badge.style.right = "20px";
  badge.style.padding = "10px";
  badge.style.background = "#333";
  badge.style.color = "#fff";
  badge.style.borderRadius = "5px";
  badge.style.zIndex = "1000";
  badge.textContent = `⏱️ ${readingTime} min read`;

  document.body.appendChild(badge);
}

// Call the function to add the reading time badge
addReadingTimeBadge();
