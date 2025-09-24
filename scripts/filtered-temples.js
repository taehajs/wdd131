document.addEventListener("DOMContentLoaded", () => {
  const temples = [
    { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
    { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
    { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
    { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
    { templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974, November, 19", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
    { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986, January, 10", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
    { templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983, December, 2", area: 116642, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" },
    { templeName: "Seoul Korea", location: "Seoul, South Korea", dedicated: "1985, December, 14", area: 28000, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/seoul-korea-temple/seoul-korea-temple-63798.jpg" },
    { templeName: "Salt Lake", location: "Salt Lake City, Utah, United States", dedicated: "1893, April, 6", area: 382207, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-4943-thumb.jpg" },
    { templeName: "Rome Italy", location: "Rome, Italy", dedicated: "2019, March, 10", area: 41010, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-3545-thumb.jpg" }
  ];

  const container = document.getElementById("temple-cards");

  function getYear(dedicated) {
    const match = dedicated.match(/\b\d{4}\b/);
    return match ? parseInt(match[0], 10) : NaN;
  }

  function displayTemples(list) {
    container.innerHTML = "";
    if (!list || list.length === 0) {
      container.innerHTML = "<p>No temples match this filter.</p>";
      return;
    }
    list.forEach(t => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
        <div class="card-content">
          <h2>${t.templeName}</h2>
          <p><strong>Location:</strong> ${t.location}</p>
          <p><strong>Dedicated:</strong> ${t.dedicated}</p>
          <p><strong>Area:</strong> ${t.area.toLocaleString()} sq ft</p>
        </div>
      `;
      container.appendChild(card);
    });
  }

  function filterTemples(type) {
    switch (type) {
      case "old": return temples.filter(t => getYear(t.dedicated) < 1900);
      case "new": return temples.filter(t => getYear(t.dedicated) > 2000);
      case "large": return temples.filter(t => t.area > 90000);
      case "small": return temples.filter(t => t.area < 10000);
      default: return temples;
    }
  }

  displayTemples(temples);

  
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const filter = e.currentTarget.dataset.filter;
      displayTemples(filterTemples(filter));
      navLinks.forEach(a => a.classList.remove("active"));
      e.currentTarget.classList.add("active");
    });
  });

 
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});
