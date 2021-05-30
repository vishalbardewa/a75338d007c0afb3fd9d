# Quicksort React.js Boilerplate

## How to use

Clone the Repo:

```sh
git clone https://github.com/QuickSort-Dev/React-boilerplate.git
cd react_boilerplate
```

Install it and run:

```sh
npm install
npm start

```

## PR flow
- create a new branch from development branch
- branch name signature -[type]/[name]
  - possible value of type -> feat, bug, refactor
```
git checkout -b feat/login
```
- try to make successive commit
```
git commit -m"login_page_ui"
git commit -m"login_page_service"
git commit -m"login_page_api_integration"
```
- git push to branch
```
git push origin feat/login
```

Create an application in React JS where the application will:

Periodically (every 10 seconds) poll for new posts from this API https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0 via a GET request.
New posts fetched after 10 seconds will be added to old posts.
Increase page count in each subsequent get request.
Implement pagination when the list is scrolled.
The pagination and periodic request both should work mutually exclusive i.e for each request page number will be increased. Request with the same page number should never be made.
Display the title, URL, created_at, and author of each post in a table.
Upon selecting a row in the table, a modal should appear containing the raw JSON data of the post.
Support the ability to filter by created_at and title.
Support the ability to search the table by title, URL and author name.
Style application using https://material-ui.com/
