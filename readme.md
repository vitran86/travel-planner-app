# EVALUATE NEWS ARTICLE WITH NATURAL LANGUAGE PROCESSING (NLP)

## Description

This app uses MeaningCloud API service to run NLP and scan **a content at an URL** or **a text / paragraph** which is input by user and display result dynamically. This NLP will analyse and find whether the content/text is :

- Subjective (opinion) or Objective (fact-based) and does has Ironic or not,
- Positive, Neutral, Negative or No sentiment in tone,
- Does has polarity between the sentiments detected in the content/text, and
- Give the confidence associated with the sentiment analysis performed on the text in the 0-100 range.

## Instruction for using App

- Input the URL or a text / paragraph which is needed to be analysed in the input box, then click submit your input.
- The app will check your input whether it's a valid URL or a text, then display the result accordingly.
- If the input is an invalid URL, the app require user's revision or confirmation for further process.

## Prerequisite

This app uses **Node** to run local server and require a **Sentiment Analysic API key of [MeaningCloud](https://www.meaningcloud.com/)** to fetch data.

## Installation

### Run local server:

- Once the project is cloned, in the Node terminal of root folder EVALUATE-NEWS-NLP, run the command:

`npm run start`

### Signup for an API key

The sign-up page is [here](https://www.meaningcloud.com/developer/login). Note that this project uses **Sentiment Analysic API**

### Create Environment file

- Create a new `.env` file in the root of of project
- Fill the `.env` file with your API key like this:

`API_KEY (your key)=************************** `

### Run scripts

All available Scripts of this project are declared in package.json, includes :

- `npm run build-dev` : to run the app in the development mode, automatically opening http://localhost:8080 in the browser.
- `npm run build` : build the app for production to the `dist` folder.
