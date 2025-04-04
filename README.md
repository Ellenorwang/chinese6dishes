!! Note: For API functionality to work, please insert OpenAI API key in 6dishes.js line 3 before running the project locally.

This is a responsive web application that integrates emerging AI technology (OpenAI Chat API) to help users generate personalized Chinese recipes based on their taste preferences. The feature is designed to simulate a natural chatbot-style conversation for a more engaging and interactive user experience.

## why use this function
Generative AI is one of the most transformative and widely adopted emerging technologies today. OpenAI’s GPT model enables natural language understanding and generation, making it ideal for interactive assistant features. It is:
- Scalable and easy to integrate via RESTful APIs
- Proven in many real-world applications (chatbots, recipe creation, learning tools)
- Highly relevant to user experience design and modern web development

### how to use AI Chatbot
- Accepts user input such as "I like spicy food" or "No pork"
- Sends the message to OpenAI GPT API
- Returns a full recipe suggestion including dish name, ingredients, and step-by-step instructions

### Features:
- Chat-style interface with alternating message bubbles
- Enter key to submit messages (Shift+Enter to insert a new line)
- Different styles for user and AI messages (colors, alignment, background)
- Scrollable conversation log
- Responsive design for both desktop and mobile

## UI Develop
- Mobile-first responsive layout using Flexbox and media queries
- Color-coded chat bubbles:
  - Blue (user)
  - Orange (AI)
- Glowing red border on the chatbot container
- Smooth scroll and dynamic message appending

