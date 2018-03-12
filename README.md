# Optic Beta Build (version 0.1.0)

## Supported Development Environment
1. macOS >= 10.10 (Yosemite)
2. [Atom](https://atom.io/) IDE >= 1.0.0
3. [Node](https://nodejs.org/en/) > 7
> New IDEs are easy to add using [optic-editor-sdk](https://github.com/opticdev/optic-editor-sdk). 

## Installation Steps
1. Download this Repo
2. Download .app [from releases](https://github.com/odpetmioc/demo/releases)
3. Install Optic Markdown globally `npm install optic-markdown -g`
4. Install Atom Plug-in  `apm install optic`
> This will eventually be done with an installer that's aware of the IDEs you have on your computer 
> ***Known Issue***: On some versions of macOS Optic will fail to start properly if it is in a path that contains spaces. ie (/User/aidan/Desktop/Test\ Projects/Optic.app) This will be fixed soon. 

## Instructions
1. Start Optic.app by double clicking it
2. Open the example project in this repo with Atom 
3. Move your cursor around with the arrow keys, selecting and de-selecting code 
> The processing of each Optic project takes 5-10 seconds to warm up before you will start seeing any results. There will be a nicer user interface for this loading phase in an upcoming release

## Things to Try Out 
1. Search For Something by typing directly into your IDE. 
`/// your search query`
2. Select a Model from `models.js` and Transform it into a Route or a Query
3. Highlight a route from `app.js` and change a property to see Optic update the code to match your changes.

## Video Demo 
You: I just want to see everything without downloading stuff 
Us: [Watch this!](https://www.youtube.com/watch?v=S5ZzaOof13U) 

## Optic Docs 
Learn more about how Optic works and the steps to author content in the system [here](http://opticdev.com/docs/#/)

## New in this Release 
* Single .app file to start 
* Optic Markdown Spec in parity with Optic 
* Local Providers allow you to keep knowledge in your code repos 
* Better error handling for Optic Servers





