# QuoteYeti API

This quote API was created as a backend for one of freeCodeCamp's intermediate front end development projects, the [Random Quote Machine](https://www.freecodecamp.com/challenges/build-a-random-quote-machine).

Unfortunately, I couldn't find any solid APIs with the options I was looking for--and it's obviously fun to create your own API--so here it is. Feel free to use it for your projects, report any issues, open pull requests, etc.

It was built on Node.js with Express.js and MongoDB (native driver).

## API Endpoints

I will try to make a nice [documentation](http://quoteyeti.com) to make your life easier.

| Method | Route | Description |
|:---:|:---| :---|
| POST | /quotes | Add a new quote |
| GET | /quotes/:num? | Get random quotes, limited to `:num` results (default is 1) |
| GET | /quotes/search/:query/:num? | Search for quotes, limited to `:num` results (default is 1) |
| GET | /quotes/:id | Get a single quote by `:id` |
| PUT | /quotes/:id | Update quote |
| DELETE | /quotes/:id | Delete quote |
| GET | /categories | Get all the categories |
| GET | /categories/search/:query/:num? | Search for categories, limited to `:num` results (default is 1) |
| GET | /quotes/on/:category | Get all the quotes under `:category` |
| GET | /authors | Get all the authors |
| GET | /authors/search/:query/:num? | Search for authors, limited to `:num` results (default is 1) |
| GET | /quotes/by/:author | Get all the quotes by `:author` |
