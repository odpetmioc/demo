# Optic Beta Build (version 0.1.0)

## Supported Development Environment
1. macOS >= 10.10 (Yosemite)
2. [Atom](https://atom.io/) IDE >= 1.0.0
3. [Node](https://nodejs.org/en/) > 7
> New IDEs are easy to add using [optic-editor-sdk](https://github.com/opticdev/optic-editor-sdk). 

## Installation Steps
1. Download this Repo
2. Download the most recent .app [from releases](https://github.com/odpetmioc/demo/releases).
3. Move to Applications Folder
4. Install Atom Plug-in  `apm install optic`
> This will eventually be done with an installer that's aware of the IDEs you have on your computer 

## Instructions
1. Start Optic.app by double clicking it
2. Open the example project in this repo with Atom 
3. Move your cursor around with the arrow keys, selecting and de-selecting code 

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

## New in this Release 2 (March 14)
Change Log:

Release documentation
* Added Socket Events to send Project Status for Agents (Used to display loading page and error states)
* Bumped supported optic-markdown to version 0.1.2
* Fixed issue where Optic didn't work if the App was located in a path with a space in it ie 'Developer/My Apps'
* Packaged Optic Markdown within .jar so it doesn't need to be installed separately.
* Optic node checks if a valid version of Node is installed before starting
* Optic Editor window loads faster and has correct title
Bug Fixes:
* Data directories weren't being created on first run causing most of Optic's internal functionality to fail. This was missed because in testing we didn't wipe all Optic files from our test devices.
* Issue that prevented Optic servers from shutting down after the host Mac App closed has been resolved
## New in this Release 1 (March 5)
* Single .app file to start 
* Optic Markdown Spec in parity with Optic 
* Local Providers allow you to keep knowledge in your code repos 
* Better error handling for Optic Servers





