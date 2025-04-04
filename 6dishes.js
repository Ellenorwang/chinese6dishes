console.log("6dishes.js is loaded!");

const apiKey = "APIKEY";

window.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("send-btn");
  const userInput = document.getElementById("user-input");
  const chatLog = document.getElementById("chat-log");

  const sendMessage = async () => {
    const input = userInput.value.trim();
    if (!input) return;

    // add message bubble
    const userBubble = document.createElement("div");
    userBubble.className = "user-msg";
    userBubble.innerHTML = `<strong>You:</strong> ${input}`;
    chatLog.appendChild(userBubble);

    chatLog.scrollTop = chatLog.scrollHeight;

    const prompt = `Based on the following preferences, suggest a detailed recipe with name, ingredients, and instructions: ${input}`;

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + apiKey,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }]
        })
      });

      const data = await response.json();
      console.log("API response:", data);

      const reply = data.choices?.[0]?.message?.content || "No response from AI.";

      // AI reply bubble
      const aiBubble = document.createElement("div");
      aiBubble.className = "ai-msg";
      aiBubble.innerHTML = `<strong>AI:</strong> ${reply}`;
      chatLog.appendChild(aiBubble);

      chatLog.scrollTop = chatLog.scrollHeight;
      userInput.value = "";
    } catch (error) {
      console.error("Error:", error);
      const errorBubble = document.createElement("div");
      errorBubble.className = "ai-msg";
      errorBubble.innerHTML = `<strong>Error:</strong> ${error.message}`;
      chatLog.appendChild(errorBubble);
    }
  };

  // click to send message
  sendBtn.onclick = sendMessage;

  // press enter button to send message
  userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  });

  // dishes filter
  document.getElementById("category").onchange = () => {
    const selectedCategory = document.getElementById("category").value;
    const dishes = document.querySelectorAll(".dish");

    dishes.forEach(dish => {
      const category = dish.getAttribute("data-category");
      dish.style.display =
        selectedCategory === "all" || category === selectedCategory ? "block" : "none";
    });
  };
});
