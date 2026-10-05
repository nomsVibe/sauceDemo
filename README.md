# SauceDemo Playwright Automation

This project contains Playwright end-to-end tests for the public SauceDemo demo application. It covers successful login, invalid login validation, and a basic inventory/cart interaction flow.

## Overview

The test suite demonstrates:
- login automation with valid credentials
- negative validation testing with invalid credentials
- reusable page objects for cleaner test structure
- minimal duplication across test scenarios

## Challenge
Using Playwright, choose any publicly accessible demo website and automate the following
scenarios:
1. Log in using a test account. 
2. Navigate to an editable record or form.
3. Update the record and save the changes. 
4. Verify the update was successful.
5. Include at least one negative test case 

## Activity 
1. Login.spec.ts consist of challenge 1 & 5
2. Inventory.spec.ts consist of challenge 2,3 & 4 (Where Adding/deleting an item is seen and verified before purchasing)

## Project Structure

```text
sauceDemo/
├── test/
│   ├── helpers/
│   │   ├── cart.ts
│   │   ├── inventory.ts
│   │   └── login.ts
│   ├── inventory.spec.ts
│   └── login.spec.ts
├── package.json
├── playwright.config.ts
```

## Setup and Installation

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```
3. Install the Chromium browser used by the Playwright project:

```bash
npx playwright install chromium
```

## Run the Tests

Run the full suite:

```bash
npx playwright test
```

Run a specific spec:

```bash
npx playwright test test/login.spec.ts
```

## Test Coverage

Included scenarios:
- valid login flow
- invalid login error message
- inventory interaction and cart update flow

## Assumptions

- The tests use the public SauceDemo demo site.
- The default demo credentials used in the tests are valid for the app:
  - Username: `standard_user`
  - Password: `secret_sauce`
- The project is intended for learning, demo, and interview purposes.

## Notes

This project uses Playwright's locator API and page objects to keep selectors and test logic maintainable and reusable.
