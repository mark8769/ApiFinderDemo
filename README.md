# Demo

![](readmeSources/demoApiFinder.gif)

# Purpose:

This assignment aimed to find a free API from [Mixed Analytics](https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/) and do something useful with it. The APIs found in the link are all free and require no authentication. While I appreciate someone compiling this list, it was lacking in the amount of API's they had (82). The API I chose was [Public APIs](https://api.publicapis.org/), which list's some public APIs (1425). For this assignment, I added the cors enabled filter, is the api https enabled filter, dropdown for all the available categories, and an input for searching.

# Contents:

1. index.html - The website itself.

2. styles.css - Styling of page, including some neat table styling.

3. script.js - Performs the api calls when submit button is pressed. Fills the categories on site load, and dynamically add's the search results to the table.

# Note:

## I noticed the maintainers of the api haven't been active on github anymore. Some links might be out of date. At some point this page might stop working? 

[Issues with maintainers](https://github.com/public-apis/public-apis/issues/3104)

After digging through the issues, I found out that they forked the repo, and are now maintaining the new repo here. [Maintained Public APIs repo](https://github.com/public-apis-dev/public-apis)