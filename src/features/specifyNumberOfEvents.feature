Feature: Specify number of events rendered

    Scenario: When the user changes the input, that many events are rendered

        Given the user hasnt specified the number of events to view
        When the user enters "10" in the input
        Then the user will view 10 rendered events