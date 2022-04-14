# Test Engineer Exercise
**Bug Report - Todo List application**

1.  Bug title: Max date can't be set beyond one year by selecting from date picker.
    Description: Date from the form page can only be set up to one year from current date by using date picker.
    Steps to reproduce: 
      •	Open NBS Todolist (nbs-todolist-interview-389909.s3-website.eu-west-2.amazonaws.com)
      •	From Date input box, click on Date picker icon
      •	Navigate to 2023 April month
    Actual result: From Date picker the dates from April 13th 2023 (Exactly 1year + 1day from current date) have been greyed out.
    Expected result: Date picker should allow to select any future dates.
    
2.  Bug title: Allows to set 'Due Date' to previous day
    Description: Date from the form page can be set to previous day whereas created 'ToDO' is today.
    Steps to reproduce: 
      •	Open NBS Todolist (nbs-todolist-interview-389909.s3-website.eu-west-2.amazonaws.com)
      •	From Date input box, click on Date picker icon
      •	Check the dates before current date
    Actual result: Previous day’s date is not greyed out.
    Expected result: Should allow you to set the minimum date to current date.
    
3.	Bug title: Create ToDo button is active even when Date input field is cleared
    Description: When the Date input filed is cleared then it allows you to add a new ToDo sets with Due Date set to empty.
    Steps to reproduce: 
      •	Open NBS Todolist (nbs-todolist-interview-389909.s3-website.eu-west-2.amazonaws.com)
      •	Populate valid details for ‘ToDo content’ input field
      •	From Date input box, clear the existing current date
    Actual result: Create ToDo button is active and allows you to add a new ToDo sets with Due Date set to empty.
    Expected result: Create ToDo button should be inactive.

4.	Bug title: ToDo content is accepting 101 chars whereas max is 100
    Description: The max char length allowed to enter for ToDo content is 100, but MAX is set to 110, for 111th char it’s not accepting.
    Steps to reproduce: 
      •	Open NBS Todolist (nbs-todolist-interview-389909.s3-website.eu-west-2.amazonaws.com)
      •	From ToDO Content input field, populate 101 characters
    Actual result: It allows to populate 101th character.
