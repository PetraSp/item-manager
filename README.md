# ItemManger
This Angular 7 app allows users to search second hand items by title, description, price and email.
The listed items can be further ordered following the same criteria. Users can add selected items to their favorite list and remove them from there without having to close the modal.
 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

## Get started

### Clone the repo

```shell
git clone https://github.com/PetraSp/item-manager.git
cd item-manager
```

### Install npm packages

Install the `npm` packages described in the `package.json`:

```shell
npm install
npm start
```

## Development server

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Running unit tests

Run 
``` shell
npm run test
```

to execute the unit tests with Jest.

### External libraries 

* To search within the favorite list modal I used a search filter pipe [ng2-search-filter](https://www.npmjs.com/package/ng2-search-filter).

* I used virtual scroll [ngx-virtual-scroller](https://www.npmjs.com/package/ngx-virtual-scroller) to display a virtual, "infinite" list of items.

