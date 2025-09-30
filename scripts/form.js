const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

const select = document.getElementById('productName');
if (select) {
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name; // value를 name으로
    option.textContent = product.name;
    select.appendChild(option);
  });
}

if (window.location.pathname.includes("review.html")) {
  let count = parseInt(localStorage.getItem('reviewCount')) || 0;
  count++;
  localStorage.setItem('reviewCount', count);

  const params = new URLSearchParams(window.location.search);
  const summary = document.createElement('div');
  summary.innerHTML = `
    <h2>Your Review Details</h2>
    <p><strong>Product:</strong> ${params.get("productName")}</p>
    <p><strong>Rating:</strong> ${params.get("rating")}</p>
    <p><strong>Installation Date:</strong> ${params.get("installDate")}</p>
    <p><strong>Features:</strong> ${params.getAll("features").join(", ") || "None"}</p>
    <p><strong>Review:</strong> ${params.get("review") || "No written review"}</p>
    <p><strong>User Name:</strong> ${params.get("username") || "Anonymous"}</p>
    <p><strong>Total Reviews Submitted:</strong> ${count}</p>
  `;
  document.querySelector('main').appendChild(summary);


  const lastModElem = document.createElement('p');
  const today = new Date();
  lastModElem.textContent = `Last Modification: ${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
  document.querySelector('footer').appendChild(lastModElem);
}
