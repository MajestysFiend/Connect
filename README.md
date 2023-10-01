<h1 align="center">Connect</h1>

![connect](https://github.com/MajestysFiend/Connect/assets/94727522/e8e1e099-312e-4da2-92c7-eea6ff378f72)

A serverless, progressive web application (PWA) built with React using a
test-driven development (TDD) technique. Users will be able to search for
upcoming events by city, and view event information. Cached information 
can even be viewed offline! The application uses the Google Calendar API 
to fetch upcoming events.

[Click here](https://Tristan-Lewis.github.io/Connect/) to check it out!

## Serverless Functionality 
Using AWS Lambda, Connect will use OAuth consuming serverless functions to request access to 
Google Calender API resources.

## User Stories

As a user,
I should be able to show and hide event details
So that I can have a better user experience

As a user,
I should be able to control the number of events I want to view
so that I can have an easier time viewing events

As a user,
I should be able to use the app when I have no internet connection
so that I can view information I have already entered

As a user,
I should be able to easily view upcoming events in each city
so that I can quickly visualize the data that is shown

## Scenarios

Given the event element is active
When the user clicks on the event element
Then the event element will show or hide its details

Given the user hasn't specified the number of events to view
When the user views the event listed
Then the user will view 32 events, unless the user changes the number of events listed

Given the user doesn't have an internet connection
When the user uses the apps features
Then only cached data will be shown, otherwise the user will receive an error message

Given the user is searching for events by city
When the user has specified a city within the app
Then a chart with the number of upcoming events will be shown

## 


## Credits

Big shout-out to [Career Foundry](https://careerfoundry.com/) for teaching me the technologies I needed to make this happen!
