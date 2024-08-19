<strong>Project Title:</strong> On-Screen Calculator

<strong>Project Overview:</strong>
This project is an on-screen calculator built using JavaScript, HTML, and CSS. The calculator performs basic arithmetic operations like addition, subtraction, multiplication, and division. The primary challenge of the project was to handle user input and manage the logic of the calculator in a way that reflects real-world usage. The project combined JavaScript fundamentals with DOM manipulation and event handling to create a fully functional, interactive calculator.

<strong>Technologies and Skills Used:</strong>

<ul>
  <li><strong>JavaScript (ES6+):</strong> Implemented the core logic for arithmetic operations, event handling, and updating the calculator’s display.</li>
  <li><strong>HTML5:</strong> Structured the calculator interface, including buttons, display elements, and layout.</li>
  <li><strong>CSS3 (Flexbox):</strong> Styled the calculator layout for responsiveness and visual appeal, ensuring a user-friendly interface.</li>
  <li><strong>DOM Manipulation:</strong> Utilized JavaScript to dynamically update the display, manage user interactions, and perform calculations based on button clicks.</li>
  <li><strong>Event Listeners:</strong> Set up event listeners for handling button clicks and triggering corresponding operations.</li>
  <li><strong>Version Control (Git):</strong> Managed project progress and tracked changes with regular commits.</li>
</ul>

<strong>Features:</strong>

<ul>
  <li><strong>Basic Arithmetic Operations:</strong>
    <ul>
      <li>Created individual functions for addition, subtraction, multiplication, and division.</li>
      <li>The calculator can handle basic operations such as 3 + 5 or 7 * 2.</li>
    </ul>
  </li>
  <li><strong>Operate Function:</strong>
    <ul>
      <li>Developed a central operate function that takes in an operator and two numbers. The function determines which operation to perform and returns the result.</li>
      <li>The function is used to evaluate the numbers when the user presses the “equals” button.</li>
    </ul>
  </li>
  <li><strong>User Interface (UI):</strong>
    <ul>
      <li>The calculator interface features buttons for digits (0-9), operations (+, -, *, /), an equals button, and a clear button.</li>
      <li>A display shows the current input and results of calculations.</li>
    </ul>
  </li>
  <li><strong>Display Management:</strong>
    <ul>
      <li>The display dynamically updates based on user input, showing numbers and results of operations.</li>
      <li>Implemented logic to update the display with the result after each operation.</li>
    </ul>
  </li>
  <li><strong>Input Handling:</strong>
    <ul>
      <li>Managed user inputs with three main variables: the first number, the operator, and the second number.</li>
      <li>Ensured that pressing an operator automatically triggers evaluation if a previous operation has already been performed.</li>
    </ul>
  </li>
  <li><strong>Chained Operations Handling:</strong>
    <ul>
      <li>The calculator evaluates operations in sequence by performing the current operation before continuing with the next one.</li>
      <li>For example, if a user inputs 12 + 7 - 3, the calculator first adds 12 and 7, then uses the result (19) for the subtraction, yielding the final answer (16).</li>
    </ul>
  </li>
  <li><strong>Clear Functionality:</strong>
    <ul>
      <li>Added a clear button that resets all variables and the display, allowing users to start fresh.</li>
    </ul>
  </li>
  <li><strong>Edge Case Handling:</strong>
    <ul>
      <li>Rounded answers with long decimals to prevent overflow on the display.</li>
      <li>Implemented a check to avoid evaluating incomplete operations (e.g., pressing equals before inputting all necessary values).</li>
      <li>Displayed a custom error message for division by zero and prevented crashes by blocking the operation.</li>
    </ul>
  </li>
  <li><strong>Responsive Design:</strong> 
    <ul>
      <li>The calculator is designed to be responsive, ensuring usability across different device sizes and orientations.</li>
    </ul>
  </li>
</ul>
