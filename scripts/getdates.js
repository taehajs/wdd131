'use strict';

const yearSpan = document.getElementById('currentyear');
if (yearSpan) {  
 yearSpan.textContent = new Date().getFullYear();
}

const lastmod = document.getElementById('lastmodified');
if (lastmod) {
 lastmod.textContent = `Last modified: ${document.lastModified}`;
}
