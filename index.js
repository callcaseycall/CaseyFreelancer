/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

const makeFreelancer = () => {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation = OCCUPATIONS[Math.floor(Math.random() * NAMES.length)];
  const rate =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;
  return { name, occupation, rate };
};

const generateFreelancers = [];
for (let i = 0; i < NUM_FREELANCERS; i++) {
  generateFreelancers.push(makeFreelancer());
}

const averageRate = (arr) => {
  const total = arr.reduce((sum, freelancer) => sum + freelancer.rate, 0);
  return total / generateFreelancers.length;
};

const avg = averageRate(generateFreelancers);

function freelancerRow(freelancer) {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td> ${freelancer.name}</td>
    <td> ${freelancer.occupation}</td>
    <td> ${freelancer.rate}</td>
    `;
  return row;
}

function freelancerTableBody(freelancerArray) {
  const tbody = document.createElement("tbody");
  for (let i = 0; i < freelancerArray.length; i++) {
    const row = freelancerRow(freelancerArray[i]);
    tbody.appendChild(row);
  }
  return tbody;
}
function averageRateDisplay(rate) {
  const div = document.createElement("div");
  div.textContent = `Average Freelancer Rate: $${rate}`;
  return div;
}

function renderApp() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const avg = averageRate(generateFreelancers);
  const avgDisplay = averageRateDisplay(avg);

  const table = document.createElement("table");
  table.innerHTML = `
  <thead>
  <tr>
  <th>Name</th>
  <th>Occupation</th>
  <th>Rate</th>
  </tr>
  </thead>
  `;

  const body = freelancerTableBody(generateFreelancers);
  table.appendChild(body);

  app.appendChild(avgDisplay);
  app.appendChild(table);
}

renderApp();
