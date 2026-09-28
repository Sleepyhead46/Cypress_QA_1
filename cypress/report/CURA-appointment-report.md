# CURA Appointment Test Report

- Spec: `cypress/e2e/code/cura.cy.js`
- Target: `https://katalon-demo-cura.herokuapp.com`
- Outcome: The appointment confirmation was reached and both confirmation assertions passed before the screenshot was captured.
- Screenshot: [CURA appointment confirmation](../screenshots/cura-appointment-confirmation.png)
- Runner note: Cypress exited with code 1 and produced no console output or Mochawesome report file. The generated screenshot confirms the booking flow reached the confirmation page, but the runner exit needs investigation before treating the full run as clean.

The confirmation page showed the Hongkong facility, hospital readmission, Medicaid, visit date `30/09/2026`, and the test comment.
