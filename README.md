# Cypress Task

End-to-end testing automation using Cypress with Page Object Model.

## Installation

```bash
git clone https://github.com/Veerendras2004/Cypress_task.git
cd Cypress_task
npm install
```

## Project Structure

```
Cypress_task/
├── downloads/
├── e2e/
│   └── test.cy.js              # Test specifications
├── fixtures/
│   └── example.json            # Test data
├── screenshots/                # Test screenshots
├── support/                    # Support files
├── PageObjects/                # Page Object Models
│   ├── AutomationPage.js
│   ├── BotEditorPage.js
│   ├── LearningInstances.js
│   └── LoginPage.js
├── cypress.config.js           # Cypress configuration
├── package-lock.json
└── package.json
```

## Running Tests

**Open Test Runner:**
```bash
npx cypress open
```

**Run Headless:**
```bash
npx cypress run
```

## Page Objects

The project uses Page Object Model with the following pages:
- **LoginPage.js** - Login functionality
- **AutomationPage.js** - Automation features
- **BotEditorPage.js** - Bot editor interface
- **LearningInstances.js** - Learning instances management

## Test Files

- `test.cy.js` - Main test specifications
- `example.json` - Test data fixtures

## Configuration

Update `cypress.config.js` with your application URL and test settings.

## Usage

1. Install dependencies: `npm install`
2. If require install iframe dependencies
3. Cypress
4. fixtures
