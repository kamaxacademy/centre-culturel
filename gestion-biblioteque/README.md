# Getting Started with Create React App

- https://github.com/weixiyen/messenger.js
- https://js.plainenglish.io/building-a-point-of-sale-system-with-node-react-c2c0395ccaca
- https://github.com/tngoman/Store-POS/blob/master/api/settings.js
- https://bookshelfjs.org/
- https://github.com/ChooseDews/MyBooksIO
- https://www.theodinproject.com/courses/javascript/lessons/library
- https://github.com/yieme/multi-isbn
- https://www.youtube.com/watch?v=uym-Befoj8o
- https://www.npmjs.com/package/react-barcode-reader
- https://dev.to/kornatzky/connect-a-barcode-scanner-to-an-electron-desktop-app-10mi

- https://github.com/raysk4ever/fake_id_card_generator/blob/master/src/App.js

* https://www.dynamsoft.com/codepool/cross-platform-desktop-barcode-electron.html

* https://www.npmjs.com/package/node-usb-barcode-scanner (very good)

* https://github.com/node-hid/node-hid

* https://npm.io/search/keyword:barcode

* https://blog.alexdevero.com/react-express-sqlite-app/

### For Testing

- https://react-hooks-testing-library.com/usage/basic-hooks

  Details for project

* https://www.educative.io/courses/grokking-the-object-oriented-design-interview/RMlM3NgjAyR
* https://www.scirp.org/journal/paperinformation.aspx?paperid=89410
* https://www.researchgate.net/publication/329910340_Design_of_Library_Management_System
* https://www.c-sharpcorner.com/UploadFile/ea3ed6/database-design-for-library-management-system/
*

### Ui ressrouces
* https://blog.alexdevero.com/react-express-sqlite-app/

### Front End Ressources
* https://dev.to/rossanodan/building-a-navigation-drawer-with-material-ui-and-react-router-dom-1j6l
* https://github.com/tngoman/Store-POS/tree/master/assets
* https://futurestud.io/tutorials/download-files-images-with-axios-in-node-js
* https://stackoverflow.com/questions/41846669/download-an-image-using-axios-and-convert-it-to-base64
* https://youtube.com/playlist?list=PL-Db3tEF6pB8Am-IhCRgyGSxTalkDpUV_ ( React Redux Integration)
* https://www.youtube.com/watch?v=CjFWbEOcq-Y (react router)
* https://codesandbox.io/s/0c4kk?file=/src/components/layouts/Header.jsx 
* https://codesandbox.io/s/qxxrnm5v14?file=/src/layouts/MainLayout/index.js
* https://react-hook-form.com/  (React Hook Form)
* https://www.youtube.com/watch?v=bU_eq8qyjic (React Hook Form)
* https://www.youtube.com/watch?v=bU_eq8qyjic (Fetching Data Hooks)
* https://steemit.com/utopian-io/@pckurdu/build-an-application-with-react-hooks-material-ui-and-firebase-part2 (Login Form)
* https://www.youtube.com/watch?v=l8WPWK9mS5M (box Shadow)
* https://codepen.io/mmmchan/pen/JRdPOo
* http://examples.hmp.is.it/book.php (bookcase example)
* https://hmp.is.it/making-a-fancy-book-using-html5-canvases/

### Backend Ressources
* https://www.youtube.com/watch?v=l8WPWK9mS5M (Postman Video)
* 
* 




### Once you play around a little, you might notice a glaring bug – pagination doesn’t work properly with filters applied.

### Despite using query parameters throughout the project, they aren’t relied on too extensively. In a production app, they should be referenced every time a page is loaded before serving up the documents.

### ‘window.history.pushState’ is called within the main state container. This is an antipattern. Anything that changes the view directly should not be called outside actual components. This would normally be done with ‘redux-thunk’ bu

### Nothing restricts users from browsing all the way past the currently available pages – both in the positive and negative directions
