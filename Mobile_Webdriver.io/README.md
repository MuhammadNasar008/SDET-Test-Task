# WebdriverIO Android Test Project

This project is a test suite built with WebdriverIO for automating interactions with an Android application using Appium. The suite is designed to ensure that the application meets specified requirements through automated testing.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Folder Structure](#folder-structure)
- [Writing Tests](#writing-tests)

## Overview

WebdriverIO is a custom implementation of Selenium's WebDriver API. This project aims to automate testing for an Android application to ensure robust functionality and user experience.

## Features

- Automated testing of Android applications using WebdriverIO and Appium.
- Support for running multiple instances of tests simultaneously.
- Integration with Android emulators.
- Ability to reset the app state between test cases.

## Technologies Used

- [Node.js](https://nodejs.org/) - JavaScript runtime.
- [WebdriverIO](https://webdriver.io/) - Automation framework for mobile and web applications.
- [Appium](https://appium.io/) - Open-source test automation framework for mobile applications.
- [Mocha](https://mochajs.org/) - JavaScript test framework.
- [Chai](https://www.chaijs.com/) - Assertion library for Node.js and browsers.

## Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-directory>

2. **Install dependencies**:   

    npm install

3. **Set up Appium and Android environment**    

- Ensure that you have Appium installed and your Android environment set up properly, including the necessary SDKs and emulators.

## Technologies Used

- The main configuration for WebdriverIO is defined in `wdio.android.app.conf.js`, which includes:

**Capabilities**
   
- Configured to run tests on Android devices with the following options:
        
        `capabilities: [
    {
        maxInstances: 5,
        platformName: 'Android',
        platformVersion: '11', // Specify your Android version
        deviceName: 'Android Emulator',
        app: '<path-to-your-apk>', // Path to your APK file
        automationName: 'UiAutomator2',
    },
], `

## Running Tests

- To execute the test suite, run the following command:
    `npm run android.app`

## Folder Structure

- The project is organized as follows:

.
├── apps                            # Contains APK files
│   ├── app-1.apk                  # Example APK file
│   └── ...
├── configuration                   # Contains configuration files
│   ├── wdio.shared.local.appium.conf.js # Shared configuration for Appium
│   └── wdio.conf.js                # Main WebdriverIO configuration
├── pageobjects                     # Contains page objects and steps
│   ├── login.page.js              # Page object for login
│   ├── login.step.js              # Steps for login functionality
│   └── ...
├── reports                         # Contains test reports generated after execution
│   ├── report.html                 # Example report file
│   └── ...
├── tests                           # Contains test case files
│   ├── specs                       # Test specification files
│   │   ├── app.signup.spec.js      # Contains sign-up test cases for the Android app
│   │   └── ...
└── .env

## Writing Tests

- To add a new test, create a new `.spec.js` file in the `tests/specs` directory. Each test file should export a Mocha describe block with it statements for each test case.