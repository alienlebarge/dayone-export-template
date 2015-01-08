dayone-export-template
======================

Custom template for exporting and printing dayone journal as a book

**This is a work in progress**

We use [Dayone](http://dayoneapp.com) as a family book. It's time now to make it come s to the real life. So we decided to make a book of it.

1. Clone repo :point_right: `$ git clone https://github.com/alienlebarge/dayone-export-template.git`
1. Install [dayone_export](https://github.com/nathangrigg/dayone_export) :point_right: `pip install dayone_export`
1. install grunt and dependencies :point_right: `$ npm install`
1. Copy dayone journal in the folder. *You will find it here: '~Dropbox/Apps/Day\ One/Journal.dayone'*
1. Export dayone journal :point_right: `dayone_export --output index.html --template templates/default.html Journal.dayone`
