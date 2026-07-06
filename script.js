const input  = document.getElementById("codeInput");
const button = document.getElementById("explainBtn");
const result = document.getElementById("result");



button.addEventListener("click", async () => {
  button.disabled = true;
  result.textContent = "Explaining..."
  try {
    const code = input.value;                          // what the user typed

    const response = await fetch("https://explain-my-code-server.onrender.com/explain", {
      method: "POST",                                  // we're SENDING data
      headers: { "Content-Type": "application/json" }, // "this body is JSON"
      body: JSON.stringify({ code })                   // package the code as JSON
    });

    if (!response.ok) {
      result.textContent = "Error: status " + response.status;
      return;
    }

    const data = await response.json();
    result.innerHTML = marked.parse(data.explanation);   // render the markdown
  } catch (err) {
    result.textContent = "Something went wrong: " + err.message;
  } finally {
    button.disabled = false;
  }
});






