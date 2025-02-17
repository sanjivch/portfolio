---
title: 'Agents'
excerpt: "HUgging Face AI Agents course"
coverImage: '/assets/blog/markdown-reference/book.jpg'
date: '2025-02-18T23:35:07.322Z'
author:
  name: sanjivch
  picture: '/assets/blog/authors/sanjiv.jpg'
ogImage:
  url: '/assets/blog/nextjs-for-blogs/cover.jpg'
---

# AI Agents

1. Need an LLM - it is the brain of the agent! They provide the foundation for understanding and generating human language.


## Chat Templates - Key points

1. Interacting with ChatGPT/ Claude / any other chat interface - all the messages in the conversation are concatenated into a single prompt. The model reads the conversation entirely every time.

2. The models achieve this using *chat templates*. These templates structure the communication between the user and agent, ensuring every model receives the correctly formatted prompt. Use special tokens to demarcate the user from assistant.

3. System prompt defines how a model should behave - and is persistent. It also provides information about the tools available, instructions to the model on how to format the actions to take, guidelines on how the thought process is going to be. 

4. Base model can be prompted to behave like instruct model using consistent prompt formatting. Template formats like *ChatML* structures conversations with role indicators.
