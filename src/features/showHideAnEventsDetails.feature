Feature: Show/Hide an events details

    Scenario: When the user clicks the details button on an event, the event will show/hide its details

        Given the app is rendered
        When the user clicks on the show details button
        Then the details of the clicked event should be seen