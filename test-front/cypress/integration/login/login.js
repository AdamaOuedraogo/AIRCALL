/// <reference types="Cypress" />

import {Given , When, And, Then} from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../pages/login/loginPage';

const loginPage= new LoginPage();

Given(`I visit aircall login page`,()=>{

    loginPage.visit();

})

Given(`I set user login {string} and password {string}`,(username,password)=>{
    loginPage.setUsername(username);
    loginPage.setPassword(password);
})

Given(`I click on sign in Button`,()=>{
    loginPage.submit();
})
Given(`I log in the dashboard`,()=>{
    cy.url().should('contains','onboarding')
})