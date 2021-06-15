## My Daily Planner
### Introduction
- A task planning web application which helps you in maintaining your schedule by keeping the record of your to do, in progress,review and completed tasks.
- 
### Build with:

### HTML5
- Footer Element 
  It is added at the bottom of the webpage . It contains social media links , some navigational items and copyright information. 
- Section Element
  It helps to organize webpage content into thematic groups.

### CSS3
- Box-Shadow
  This property that adds a shadow to an element.
- Opacity
  This property makes elements see-through or completely transparent.
- Rounded corner
  This property enables to apply the border-radius CSS3 property to HTML elements in a simple single line.
- New Colors 
   RGBA and Gradient color 
   
### Bootstrap4 
- Card-layout 

### Javascript
- JSON 
- Classes 
- LocalStorage API 

### Jquery
- .show()
- .hide()

## Test 
- Unit testing is done with Jest. 

## Developement Methodology 
### Agile 
-There were 3 sprints and 10 tasks.

### Sprint 1
#### Task#1
#### Objective 
- Create the app wireframes to understand how it will look.
#### Design you App Wireframes
- Contains a Task Form with the required information (Name, Description, AssignedTo, DueDate, Status)
- Contains a Task Layout (check this Card Layout example) with the required information (Name, Description, AssignedTo, DueDate, Status)
- Wireframe solves all the UI challenges to represent the Task Planner and a clear view of a Task with the required fields(Name, Description, AssignedTo, DueDate, Status)

#### Task#2
#### Objective 
- Implement the basic HTML structure of your Wireframes design.
#### Implement your Wireframes using Bootstrap
- Implement the basic HTML structure of the Wireframes design.
- All input fields are mapped in the Task Form (Name, Description, AssignedTo, DueDate, Status).
- A Select type is used for the different Status options (TODO, IN PROGRESS, REVIEW, DONE).
 
#### Task#3
#### Objective 
- Implement the card layout bootstrap component that represents a task.
#### Create a Task Card layout and a Task List component
- The Card Layout contains all the task information (Name, Description, AssignedTo, DueDate, Status).
- The List group organizes multiple Card Layouts accordingly.

### Sprint 2
#### Task#4
#### Objective 
- Implement a form that captures the fields required to create a task.
#### Task Form Inputs Validation
- All form fields are validated on form submission(Name, Description, AssignedTo, DueDate, Status).
- A meaningful error message is displayed when a form field is invalid.
- The JavaScript code is in a separate file and the file is included in the HTML page with no errors.

#### Task#5
#### Objective
- Implement a JavaScript class that represents a task using a JavaScript object.
#### Create the Tasks Model using JavaScript
- The JSON format represents objects in JavaScript.
- Classes are correctly defined using JavaScript.
- Class functions are correctly defined using JavaScript.
- 
#### Task#6
#### Objective 
- Implement a JavaScript function and logic that will handle the tasks model.
#### Add Tasks programmatically
- When a new task is added with valid information, the task data must be stored in an array variable inside the JavaScript file.
- The added task should be visible on the current tasks list and should display the task information.
- When adding a new task, the task id should be incremented and unique.
- 
#### Task#7
#### Objective 
- Implement a JavaScript function that allows tasks deletion on the data structure used to store the tasks on memory.
#### Delete a task
- The delete button deletes the task card.
- The delete button deletes the task object from the task array inside the TaskManager class.
- The task id finds the task that the user wants to delete.

## Sprint 3
#### Task 8
#### Objective 
- Implement a JavaScript function that updates the task information into the data structure used to store the tasks in memory.
#### Update a task
- When clicking a task from the task list, the task information is displayed on the task form and the save button is renamed to “update”.
- When the update button is clicked, both the task card and the task object inside the TaskManger class is updated.
- When the task is updated, the button on the form should be renamed to “save” and the form fields are empty again.

#### Task 9 
#### Objective 
- Implement a function that allows the application to persist data using the LocalStorage API.
#### Persisting Tasks with LocalStorage API
- The application persists the task data, meaning that when the browser is closed and reopened, the data should remain in the page.
- All operations to modify the data (add, delete and update) on the TaskManager class, are consistent with the data store in Local Storage.

#### Task 10
#### Objective 
- Implement as many unit tests as possible in order to verify the correct behavior of the different functionality of your Task Planner.
#### Unit testing for the Task Manager component
- Has a unit test for each of the functions on the TaskManager class:
- Add
- Delete
- Update
- Assign To"
- Has a test function for the UI functions to verify that adding a task is included in the HTML list component group.
- Has a test function for the UI functions to verify that removing a task is deleted from the HTML list component group.





