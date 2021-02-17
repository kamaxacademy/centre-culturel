# Getting Started with Create React App

- https://bookshelfjs.org/
- https://github.com/ChooseDews/MyBooksIO
- https://www.theodinproject.com/courses/javascript/lessons/library
- https://github.com/yieme/multi-isbn
- https://www.youtube.com/watch?v=uym-Befoj8o
- https://www.npmjs.com/package/react-barcode-reader
- https://dev.to/kornatzky/connect-a-barcode-scanner-to-an-electron-desktop-app-10mi

- https://www.dynamsoft.com/codepool/cross-platform-desktop-barcode-electron.html

- https://www.npmjs.com/package/node-usb-barcode-scanner (very good)

- https://github.com/node-hid/node-hid

- https://npm.io/search/keyword:barcode

- https://blog.alexdevero.com/react-express-sqlite-app/

Details for project

- https://www.educative.io/courses/grokking-the-object-oriented-design-interview/RMlM3NgjAyR
- https://www.scirp.org/journal/paperinformation.aspx?paperid=89410
- https://www.researchgate.net/publication/329910340_Design_of_Library_Management_System
- https://www.c-sharpcorner.com/UploadFile/ea3ed6/database-design-for-library-management-system/
-

### Once you play around a little, you might notice a glaring bug – pagination doesn’t work properly with filters applied.

### Despite using query parameters throughout the project, they aren’t relied on too extensively. In a production app, they should be referenced every time a page is loaded before serving up the documents.

### ‘window.history.pushState’ is called within the main state container. This is an antipattern. Anything that changes the view directly should not be called outside actual components. This would normally be done with ‘redux-thunk’ bu

### Nothing restricts users from browsing all the way past the currently available pages – both in the positive and negative directions
