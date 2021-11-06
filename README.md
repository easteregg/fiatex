## Description
This is a create-react-app frontend application that performs the following TODO. 

[![Build and Test React Application](https://github.com/easteregg/fiatex/actions/workflows/build_test_react.yml/badge.svg?branch=master)](https://github.com/easteregg/fiatex/actions/workflows/build_test_react.yml)
## TODO

The test task is to showcase Currency Exchange Functionality using CRA (Create React App). 

Scenario - user has three wallets:

USD (initial balance $200)
EUR (initial balance €150)
GBP (initial balance £10)
  
Criteria:

Switch wallets e.g: EUR > GBP., GBP > USD., USD > EUR.
Enter the desired amount to exchange and has a CTA (call-to-action) to conclude the transaction.
Use this (https://exchangeratesapi.io/documentation/) or similar API to get the conversion rates.
Wallet balances are updated correctly.
Show an error message when the desired exchange amount exceeds the current balance.
 
Bonus points:

Nice friendly UI
Code quality
Unit Tests
 
Here is the video of just one implementation of this functionality. Now show us your creativity… We are looking forward to receiving the GitHub repo for code review! 

Also make sure to link the demo URL in the Readme.

## Installation
- use `npm ci` to install required dependencies
- use `npm start` to run the application in the local environment
- use `npm t` to run tests. 

## Demo
This project has been deployed here: https://fiatex.vercel.app/

##  A few notes: 

- Styling has been done using tailwind-css. 
- State management has been done using Recoil. 
- Component directory structure is loosely based on ATOMIC design. 