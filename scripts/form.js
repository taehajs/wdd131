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
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
}


if (window.location.pathname.includes("review.html")) {
  let count = localStorage.getItem('reviewCount');
  if (!count) {
    count = 0;
  }
  count++;
  localStorage.setItem('reviewCount', count);

  const counterDisplay = document.createElement('p');
  counterDisplay.textContent = `You have submitted ${count} review(s).`;
  document.body.appendChild(counterDisplay);
}
