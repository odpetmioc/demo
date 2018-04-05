# Optic Beta Build (version 0.1.0)

## Supported Development Environment
1. macOS >= 10.10 (Yosemite)
2. [Atom](https://atom.io/) IDE >= 1.0.0
3. [Node](https://nodejs.org/en/) > 7
> New IDEs are easy to add using [optic-editor-sdk](https://github.com/opticdev/optic-editor-sdk). 

## Installation Steps
1. Download the most recent .app [from our website](http://opticdev.com/get-optic/).
3. Move to Applications Folder
4. Install Atom Plug-in  `apm install optic`
> This will eventually be done with an installer that's aware of the IDEs you have on your computer 

## Instructions
1. Start Optic.app by double clicking it
2. Open the example project from the .dmg with Atom (move it out of the DMG first)
3. Move your cursor around with the arrow keys, selecting and de-selecting code 

## Video Demo 
You: I just want to see everything without downloading stuff 
Us: [Watch this!](https://www.youtube.com/watch?v=ULmAc5isXB4&feature=youtu.be) 

## Things to Try Out 
1. Search For Something by typing directly into your IDE. 
`/// your search query`
2. Select a Model from `models.js` and Transform it into a Route or a Query
3. Highlight a route from `app.js` and change a property to see Optic update the code to match your changes.

## Optic Docs 
Learn more about how Optic works and the steps to author content in the system [here](http://opticdev.com/docs/#/)

## New in Relase 5 (April 2)
* Optic Markdown Debugger View (Tools -> Debugger)
* Much faster realtime processing
* Optic Markdown Migration support
Bug Fixes:
* Fixed an issue where Optic Project Graphs were not returning the valid results for certain files

## New in Relase 4 (March 26rd)
* Incorporated Sparkle Project into Optic for automatic, patch based, updating
* Added a pre-loader to the Optic Eye so people know when Optic is warming up/ready

## New in Relase 3 (March 23rd)
New Features:
* Advanced Transformations fully supported opticdev/optic@21f6234
* All Renders go through the same code generation pipeline now
* Object Literals can have generated code used as their values
* Knowledge graphs can now be serialized, sent to the client, and used to present dropdown options/autocompletions
* Markdown parsing caches for better performance
Bug Fixes:
* Fixed issues where Node/NPM install checks were showing on startup even if those programs were installed
* Fixed issues with Schema References not working for some version numbers

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





