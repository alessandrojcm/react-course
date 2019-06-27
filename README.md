# React and Redux course [2019 Update] Projects

Hi there!

This repo contains all the projects for the 
[React and Redux course](https://www.udemy.com/react-redux/) by Stephen Grider.

If you are following the course along, you'll notice some differences
between my code and Stephen's; here's why.

* I come from an Angular background, so I already come with the mentality
of code reuse and smart/dumb component architecture in mind. Also, if you
find some of the code/file structure to be not so react-ish, that's why.
* I use functional components with react hooks since the beginning. Why?
Because, when hooks were release, the React dev team stated that they are
the future for building react components; so I did not see the point on
bothering with class-based components.
* I use `yarn` instead of `npm`.
* I use the  `semantic-ui-css` package instead of downloading if from a CDN. 


### Usage and installation

The individual projects are inside the `packages` folder, you can
`cd` into each folder and run `yarn` and `yarn start`.

Also, this repo uses `lerna` as a monorepo management tool. You can
install install `lerna` by running `yarn` on the root and then bootstrap
all of the projects dependencies by running `lerna bootstrap`.

Each project has its own `README` listing the differences between
Stephen's code and my own.


