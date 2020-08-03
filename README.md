# Work-Day-Scheduler

# 05 Third-Party APIs: Work Day Scheduler

## Process
First, had to create the HTML, JS, CSS files with the already existing code. And then linked a moment.js file to add the library in order to add the needed dates onto the page. 

Since, this will exist mostly in the javascript file. I first created variables to call tho moment.js function in a more condensed manner. Plus I started by adding the current day to the header of the page to where it updates according to the actual current date. 

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

``` 
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```