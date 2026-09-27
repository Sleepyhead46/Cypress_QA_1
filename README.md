# Cypress E2E Automation

This project contains Cypress end-to-end specs for the public [CURA Healthcare Service demo](https://katalon-demo-cura.herokuapp.com) and [Swag Labs](https://www.saucedemo.com/). The specs cover CURA appointment flows and a Swag Labs product checkout.

## Requirements

- Node.js and npm
- Internet access to the demo sites
- A supported browser (Cypress also includes Electron)

## Install dependencies

From the repository root, run:

```bash
npm install
```

## Run the tests

Open Cypress:

```bash
npx cypress open
```

Run the project-specific specs (CURA and Swag Labs):

```bash
npx cypress run --spec "cypress/e2e/code/*.cy.js"
```

Run only the Swag Labs checkout:

```bash
npx cypress run --spec "cypress/e2e/code/SwagLabs.cy.js"
```

Run all specs, including the Cypress examples:

```bash
npx cypress run
```

## Project specs

- [`cypress/e2e/code/c.cy.js`](cypress/e2e/code/c.cy.js) books a CURA appointment using the public demo credentials `John Doe` and `ThisIsNotAPassword`.
- [`cypress/e2e/code/cura.cy.js`](cypress/e2e/code/cura.cy.js) contains additional CURA checks, including appointment confirmation, comment verification, and a screenshot. It uses the same public demo credentials.
- [`cypress/e2e/code/SwagLabs.cy.js`](cypress/e2e/code/SwagLabs.cy.js) logs in with the public `standard_user` / `secret_sauce` account, adds the Sauce Labs Backpack and Fleece Jacket to the cart, completes checkout, checks the order confirmation, and clicks the order PDF control.

The CURA specs use the `baseUrl` from `cypress.config.js`. The Swag Labs spec visits its site directly. The appointment details are set in each spec; `cura.cy.js` uses `30/09/2026` as its visit date.

## Reports and artifacts

Cypress is configured to use the Mochawesome reporter. Its HTML report output directory is `cypress/report/mochawesome-report/` (the reporter overwrites previous output). The repository also contains a CURA run summary at [`cypress/report/CURA-appointment-report.md`](cypress/report/CURA-appointment-report.md).

Screenshots are saved under `cypress/screenshots/`; the specs capture `finished-appointment` and `checkout-info`. Swag Labs also downloads an order PDF to `cypress/downloads/`.

## Project layout

```text
.
├── cypress.config.js
├── cypress/
│   ├── e2e/
│   │   ├── code/
│   │   │   ├── c.cy.js
│   │   │   ├── cura.cy.js
│   │   │   └── SwagLabs.cy.js
│   │   ├── 1-getting-started/
│   │   └── 2-advanced-examples/
│   ├── downloads/
│   ├── fixtures/
│   ├── report/
│   ├── screenshots/
│   └── support/
├── package.json
└── package-lock.json
```

The `baseUrl` is `https://katalon-demo-cura.herokuapp.com`. Component testing is configured with Next.js and webpack. The demo sites are third-party services, so their availability and page changes can affect these specs.
# Cypress_QA_1
