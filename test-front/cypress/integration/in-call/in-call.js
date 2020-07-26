/// <reference types="Cypress" />
import {Given , When, And, Then} from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../pages/login/loginPage';
import OnbordingPage from '../pages/onbording/onbordingPage';
import Keyboard from '../pages/Keyboard/keyboardPage';
import TodoPage from '../pages/todo/todoPage'



const loginPage = new LoginPage();
const onbordingPage = new OnbordingPage();
const todoPage = new TodoPage();
const keyboard = new Keyboard();


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

    keyboard.call(num);

})

When(`User1 take the call`,()=>{

})
When(`I Press the mute button`,()=>{

})

Then(`The mute button will light up white to indicate the call is muted`,()=>{

})



// Scenario: Turn the Mute function of
When(`I press the mute button again.`,()=>{

})
Then(`The white color desappear and the mute button become as before.`,()=>{

})

//Scenario: Hold a call
When(`I press the hold button`,()=>{

})

Then(`the Hold button will light up to indicate the call is Hold and you can heard music`,()=>{

})

//Scenario: Turn hold function of

When(`I press the hold button again`;()=>{

})


Then(`the light up desappear and the Hold button become like before`,()=>{

})


//Scenario: Assign a call
When(`I click on Assign this call button`;()=>{

})


Then(`a new modal should appear and you can assign to teammate`,()=>{

})
When(`clicking on an agent,`,()=>{

})

Then(`view changes and we comeback on calling page`,()=>{

})

//Scenario: Tag a call

// When I click on tag button
// Then Then a new modal should appear and you can select a tag to categorize your call
// When I clicking on an agent,
// Then Then view changes, tag is selected and we comeback on calling page

// Scenario: Take Note in call
// When I click on notes button
// When I Click on done button after add note
// Then a new modal should appear and you can quickly add notes znd notes is save

// Scenario: Take Note in call
// When a call the number "+33689434778"
// When i click on Add button
// When I fill in the necessary fields "first name", "Last Name", "company name"
// When I click on save button
// Then it should go back to in-call view and update the view

