const API_URL = "http://localhost:5000";


// Fetch Quote
async function getQuote() {

  const response = await fetch(`${API_URL}/quote`);

  const data = await response.json();

  document.getElementById("quote").innerText =
    `"${data.content}"`;

  document.getElementById("author").innerText =
    `- ${data.author}`;

  loadHistory();
}


// Load Quote History
async function loadHistory() {

  const response = await fetch(`${API_URL}/history`);

  const quotes = await response.json();

  const historyList = document.getElementById("historyList");

  historyList.innerHTML = "";

  quotes.forEach(quote => {

    historyList.innerHTML += `
      <li>
        "${quote.content}" <br>
        <strong>- ${quote.author}</strong>
      </li>
    `;
  });
}


loadHistory();
