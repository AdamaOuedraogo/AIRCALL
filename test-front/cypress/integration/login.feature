Feature: perform successful login

    This Feature perform the login function to aircall dashboard
    Scenario: Test login feature
        Given I visit aircall login page
        Given I set user login "demsyadama@yahoo.fr" and password "0adcca33"
        When I click on sign in Button
        Then I log in the dashboard