# XILO Technical Assessment

Thank you for your interest in XILO! In order to get a sense of your technical abilities, we would like you to complete this technical assessment. Please read the overview and guidelines, then choose a use case to implement.

## Guidelines

Our goal in this assessment is to evaluate your technical abilities in as close to a "real world" context as possible. We want you to approach this assessment as if the features you implement will be used in production. This means we expect you to do the following:
- Make use of any resources available to you. Feel free to use Google, Stack Overflow, documentation websites, etc. If you would use it on the job, you can use it here.
- Communicate with your team if you have questions or need clarification. We are happy to answer any questions you may have - the email we send you with the link to this assessment will contain the contact information of team members you may reach out to with questions.
- Use the right tools for the job. If there is a third-party library or framework that you would like to use, you may do so. 
- Code with quality in mind. We are looking for code that is not just functional, but is also easy to understand and maintain, and has at least a few unit tests covering the main use cases.

## Overview

You will be adding functionality to an online storage application, similar to Google Drive or Dropbox. Users of this application can upload files to be stored and organize their files in folders. Choose one of the following use cases to implement for the application:


### Frontend Use Case - display filesystem

You will be implementing a feature that allows a user to view their files and folders in a web browser. Add functionality to the `ViewFilesComponent` to display the filesystem for a user.

#### Main Objective

Implement the following design:

![xilo-tech-interview-objective-1](https://user-images.githubusercontent.com/12035748/114325335-2c8c7680-9af5-11eb-8588-2825a69b51a9.png)

Requirements:
- For each level of the filesystem, folders should be displayed before files
- For each level of the filesystem, the list of folders and the list of files should each be alphabetized
- The contents of each folder should initially be hidden. Clicking on the arrow should show the contents of the folder. Clicking on the arrow again should hide the contents of the folder
- The arrow icon for a folder should change based on whether the contents of the folder are shown or hidden
- Load data from the `getUserData` method on `AppService`

#### Optional Objectives

- Show different icons for each file type
- Add the ability to search/filter the fileroom based on keywords
- Add the ability to add or remove folders and files. You do not have to worry about persisting these changes to the backend
