# Item Manager
This Angular 7 app allows users to search second hand items by title, description, price and email.

### Features: 
* Order the listed items 
* Add selected items to favorites
* List your favorite items and remove them from your favorite list

### Technologies
Project is created with:
* Angular version: 7.3.7
* Jest version: 24.0.0

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

* UI components are made with [Angular Material](https://material.angular.io/) 
