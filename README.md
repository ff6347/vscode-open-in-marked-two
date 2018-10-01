# open-in-marked

This VSCode extension opens files in Marked 2.

## Features

Open the command palette and search for open in marked. (Should only be used on files Marked can open ;-)


## Requirements

[Marked 2 - Smarter tools for smarter writers](http://marked2app.com/)  

> Marked is a previewer for Markdown files. Use it with your favorite text editor and it updates every time you save. With robust features for previewing, reviewing and exporting beautiful documents, you can work in plain text while reveling in rich formatting. See what's new!  
## Extension Settings

This extension contributes the following settings:

* `openinmarked.apppath`: Set the path to your Marked 2 Application (default is `"/Applications/Marked 2.app"`)

```
// if you are using Setapp the path is: "/Applications/Setapp/Marked.app"
{
  "openinmarked.apppath": "/Applications/Marked 2.app"
}
```

## Known Issues


## Release Notes

### 1.0.5

Fix by [@jjarava](https://github.com/jjarava): Files with spaces in the name could not be opened. Thanks.  


### 1.0.4  

More README

### 1.0.3

Remove message popping up in favor of a statusbar message.

### 1.0.2

npm audit fix

### 1.0.1

Fix typo in README that made copy pasting the settings not usable.

### 1.0.0

Initial release

**Enjoy!**
