/// <reference types="Cypress" />
import {Given , When, And, Then} from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../pages/login/loginPage';
import OnbordingPage from '../pages/onbording/onbordingPage';
import KeyboardPage from '../pages/Keyboard/keyboardPage';
import TodoPage from '../pages/todo/todoPage'
import InCallPage from '../pages/in-call/incallPage';



const loginPage = new LoginPage();
const onbordingPage = new OnbordingPage();
const todoPage = new TodoPage();
const keyboardPage = new KeyboardPage();
const incallPage = new InCallPage();


Given(`User is logged with username {string} and password {string}`,(username,password)=>{
    loginPage.onLogin(username,password);
})

Given(`User choose is language`,()=>{
    onbordingPage.selectLanguageEN(); 
    onbordingPage.continuePage();   
})

Given(`User is on the to-do page`,()=>{
    onbordingPage.nextPage();
    onbordingPage.nextPage();
    onbordingPage.nextPage();
    onbordingPage.nextPage();

})

When(`I click on keyboard page`,()=>{
    todoPage.accesKeybord();



})

When(`I make call to user1 {string}`,(num)=>{
    keyboardPage.makeCall(num); 
})

When(`User1 take the call`,()=>{

    
    cy.url({timeout: 20000}).should('include', incallPage.getUrl());

})
When(`I Press the mute button`,()=>{

    incallPage.mute();

})

Then(`The mute button will light up white to indicate the call is muted`,()=>{

    incallPage.getunmunteButton().should('be.visible');

})



// Scenario: Turn the Mute function of
When(`I press the unmute button`,()=>{
    incallPage.unmute();

})
Then(`The white color desappear and the mute button become as before.`,()=>{

    incallPage.getmuteButton().should('be.visible');


})

//Scenario: Hold a call
When(`I press the hold button`,()=>{
    incallPage.hold();

})

Then(`the Hold button will light up to indicate the call is Hold and you can heard music`,()=>{
    incallPage.getunholdButton().should('be.visible');

})

//Scenario: Turn hold function of

When(`I press the unhold button`,()=>{
    incallPage.unhold();

})


Then(`Then the light up desappear and the Hold button become like before`,()=>{
    incallPage.getHoldbutton().should('be.visible');

})

//Scenario: Assign a call
When(`I click on Assign this call button`,()=>{
    incallPage.assign();

})


Then(`a new modal should appear and you can assign to teammate`,()=>{
    incallPage.getassignclosemodalButton().should('be.visible');
    incallPage.closeassignModal();

})


//Scenario: Tag a call

When(`I click on tag button`,()=>{
    incallPage.tags();

})
Then(`a new modal should appear and you can select a tag to categorize your call`,()=>{
    incallPage.getTagPanelDone().should('be.visible');
    incallPage.getTagPanelDone().click();

})


//Scenario: Take Note in call

When(`I click on notes button`,()=>{
    incallPage.openNotes();

})
When(`I add note {string} and save`,(message)=>{
    incallPage.setNotes(message);
    incallPage.saveNotes();

})

Then(`notes is save`,()=>{
    incallPage.openNotes();
    cy.contains('my note').should('be.visible');
    incallPage.saveNotes();
    incallPage.endCall();


})


