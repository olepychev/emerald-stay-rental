# Emerald Stay Rental Calculator

https://starmori.github.io/emerald-stay-rental/

This project is showing how to calculate the total income of the company - Emerald Stay Rental.

## Development

### Pipeline

We have very basic pipeline configured for the development. The main branch for the development is `dev` and `main` branch is directly connected with the hosting server.
Automatic hosting service is running through the GitHub Pipeline, we are using GitHub Pages for the hosting.

### Development guideline

After clone the repository, following steps will allow you to set up the project on the local environment. 

```bash
$ # Install packages
$ npm install
$
$ # Run project and check http://localhost:4200 from your browser
$ npm start
$
$ # Run unit test (single run - capable for CI)
$ npm run test
$
$ # Run unit test to generate code coverage
$ npm run test:cov
$
$ # Build the project in production mode
$ npm run build
$
$ # Other additional scripts can be found from the package.json - script section
```

#### Workflows
* Push to the `dev` for the normal development
* Create PR and merge into `main` for the deployment

## Project details

### Requirements

Emerald Stay would like to integrate a yield net return simulator into its website.

The input data is :

-	Purchase price of the property
-	Monthly rent amount
-	Annual rental fee 
-	Agency fees on the rent: 1st year 30%, 2nd year 25%, then 20% for the following years

Propose a prototype web interface to calculate the monthly net income and the return on the first 3 years.

### Major Dependencies

* [Angular Material](https://material.angular.io) - For the UI components and default color schema and theme.
* [Tailwind CSS](https://tailwindcss.com/) - For general utility classes for styling the pages and all details.
* [Prettier](https://prettier.io/) - For styling the codebase under the best practice and common cookbooks. 
