Feature: Test the phone logic call

    Feature description : This feature allows us to test all the logic of a call,
    from initiating the call, mute the call, putting your interlocutor on hold, assign call, tag call,
    transferring a call, creating a contact, and many more.

    Scenario: Mute a call
        Given User is logged with username "demsyadama@yahoo.fr" and password "0adcca33"
        Given User choose is language
        Given User is on the to-do page
        When I click on keyboard page
        When I make call to user1 "00330689434778"
        When User1 take the call
        When I Press the mute button.
        Then The mute button will light up white to indicate the call is muted


    Scenario: Turn the Mute function of
        When  I press the mute button again.
        Then  The white color desappear and the mute button become as before.

    Scenario: Hold a call
        When  I press the hold button
        Then the Hold button will light up to indicate the call is Hold and you can heard music

    Scenario: Turn hold function of
        When  I press the hold button again
        Then Then the light up desappear and the Hold button become like before


    Scenario: Assign a call
        When I click on Assign this call button
        Then a new modal should appear and you can assign to teammate
        When clicking on an agent,
        Then view changes and we comeback on calling page

    Scenario: Tag a call
        When I click on tag button
        Then Then a new modal should appear and you can select a tag to categorize your call
        When I clicking on an agent,
        Then Then view changes, tag is selected and we comeback on calling page

    Scenario: Take Note in call
        When I click on notes button
        When I Click on done button after add note
        Then a new modal should appear and you can quickly add notes znd notes is save

    Scenario: Take Note in call
        When a call the number "+33689434778"
        When i click on Add button
        When I fill in the necessary fields "first name", "Last Name", "company name"
        When I click on save button
        Then it should go back to in-call view and update the view

