// Get the current year
let currentYear = new Date().getFullYear();

// Set the copyright year in the first paragraph of the footer
let copyrightParagraph = document.querySelector('footer p:first-of-type');
copyrightParagraph.innerHTML = `© ${currentYear} Ricardo Rivas`;

// Get the last modified date from the document's lastModified property
let lastModifiedDate = document.lastModified;

// Set the last modified date in the second paragraph of the footer
const lastModifiedParagraph = document.getElementById('lastModified');
lastModifiedParagraph.textContent = `Last Modified: ${lastModifiedDate}`;
