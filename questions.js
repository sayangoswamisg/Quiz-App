// Array of questions grouped by category (25 questions each)

const questions = [
  {
    category: "programming",
    questions: [
      {
        question: "What does HTML stand for?",
        options: ["Hyper Text Pre Processor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is a correct way to declare a variable in JavaScript?",
        options: ["var x = 10;", "variable x = 10;", "int x = 10;", "let 10 = x;"],
        correctAnswer: 0,
      },
      {
        question: "How do you write comment in Python?",
        options: ["// This is a comment", "# This is a comment", "/* This is a comment */", "<!-- This is a comment -->"],
        correctAnswer: 1,
      },
      {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Cascading Simple Sheets"],
        correctAnswer: 0,
      },
      {
        question: "In JavaScript, how do you create a function?",
        options: ["create function myFunction()", "def function myFunction()", "func myFunction()", "function myFunction()"],
        correctAnswer: 3,
      },
      {
        question: "What does the 'typeof' operator do in JavaScript?",
        options: ["Checks the type of a variable", "Declares a variable", "Assigns a value to a variable", "Converts a variable to another type"],
        correctAnswer: 0,
      },
      {
        question: "In C, how do you define a function?",
        options: ["function myFunction()", "def myFunction()", "void myFunction()", "func myFunction()"],
        correctAnswer: 2,
      },
      {
        question: "Which of the following is a characteristic of Python?",
        options: ["Compiled language", "Dynamic typing", "Low-level language", "Static typing"],
        correctAnswer: 3,
      },
      {
        question: "Which language is used for Android development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correctAnswer: 1,
      },
      {
        question: "What is the purpose of the 'forEach()' method in JavaScript?",
        options: ["Removes duplicate elements from an array", "Filters elements in an array", "Sorts an array", "Iterates through each element in an array"],
        correctAnswer: 3,
      },
      {
        question: "What does the 'return' keyword do in a function?",
        options: ["Ends the function and returns a value", "Continues the function", "Exits the function without value", "Ends the program execution"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is NOT a semantic HTML element?",
        options: ["<header>", "<footer>", "<div>", "<article>"],
        correctAnswer: 2,
      },
      {
        question: "What is the primary purpose of a 'for' loop in programming?",
        options: ["Repeat code for a specified number of times", "Repeat code until a condition is true", "Define a function", "Evaluate conditions in the loop"],
        correctAnswer: 0,
      },
      {
        question: "Which data structure is ideal for LIFO (Last In First Out)?",
        options: ["Queue", "Stack", "Linked list", "Array"],
        correctAnswer: 1,
      },
      {
        question: "Which command is used in Git to store changes in the repository?",
        options: ["git commit", "git push", "git pull", "git add"],
        correctAnswer: 0,
      },
      {
        question: "What does the 'map()' function do in JavaScript?",
        options: ["Sorts an array", "Filters out items", "Creates a new array", "Modifies the original array"],
        correctAnswer: 2,
      },
      {
        question: "What is an IDE?",
        options: ["An Integrated Development Environment", "A function for code execution", "An interpreter", "An input method for writing code"],
        correctAnswer: 0,
      },
      {
        question: "Which of the following is a feature of object-oriented programming?",
        options: ["Encapsulation", "Modularity", "Recursion", "Memory Management"],
        correctAnswer: 0,
      },
      {
        question: "What does SQL stand for?",
        options: ["Simple Question Language", "Systematic Query Language", "Standard Question Language", "Structured Query Language"],
        correctAnswer: 3,
      },
      {
        question: "Which of these is an example of a non-relational database?",
        options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
        correctAnswer: 0,
      },
      {
        question: "How do you write comment in CSS?",
        options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "<!-- This is a comment -->"],
        correctAnswer: 1,
      },
      {
        question: "Which of the following algorithms is used to sort an array by comparing elements?",
        options: ["Bubble sort", "Insertion sort", "Quick sort", "Merge sort"],
        correctAnswer: 0,
      },
      {
        question: "What does the 'finally' block in Java do?",
        options: ["Handles all exceptions", "Attempts to handle runtime exceptions", "Executes code after try-catch", "Defines execution start point"],
        correctAnswer: 2,
      },
      {
        question: "Which data structure is best for searching elements quickly?",
        options: ["Binary search tree", "Array", "Linked list", "Queue"],
        correctAnswer: 0,
      },
      {
        question: "What is the correct syntax for a JavaScript if statement?",
        options: ["if (condition) {}", "if condition {}", "if {} else", "if {condition}"],
        correctAnswer: 0,
      },
    ],
  },

  {
    category: "geography",
    questions: [
      {
        question: "Which is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correctAnswer: 1,
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "South Korea", "Japan", "Thailand"],
        correctAnswer: 2,
      },
      {
        question: "What is the largest ocean in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 3,
      },
      {
        question: "Which country has the largest population in the world?",
        options: ["India", "China", "United States", "Indonesia"],
        correctAnswer: 1,
      },
      {
        question: "Which country is known for the Great Barrier Reef?",
        options: ["Australia", "United States", "South Africa", "New Zealand"],
        correctAnswer: 0,
      },
      {
        question: "Which is the smallest country in the world?",
        options: ["Monaco", "Liechtenstein", "Vatican City", "San Marino"],
        correctAnswer: 2,
      },
      {
        question: "Which is the tallest mountain in the world?",
        options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
        correctAnswer: 2,
      },
      {
        question: "What is the capital of Canada?",
        options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
        correctAnswer: 0,
      },
      {
        question: "Which desert is the largest hot desert in the world?",
        options: ["Gobi Desert", "Atacama Desert", "Sahara Desert", "Karakum Desert"],
        correctAnswer: 2,
      },
      {
        question: "Which country is known as the Land of the Midnight Sun?",
        options: ["Sweden", "Finland", "Norway", "Denmark"],
        correctAnswer: 2,
      },
      {
        question: "What is the longest mountain range in the world?",
        options: ["Himalayas", "Rocky Mountains", "Andes", "Alps"],
        correctAnswer: 2,
      },
      {
        question: "Which river flows through Egypt?",
        options: ["Amazon River", "Yangtze River", "Nile River", "Ganges River"],
        correctAnswer: 2,
      },
      {
        question: "Which is the largest island in the world?",
        options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
        correctAnswer: 0,
      },
      {
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Hong Kong"],
        correctAnswer: 2,
      },
      {
        question: "Which country has the most time zones?",
        options: ["United States", "Russia", "Canada", "Australia"],
        correctAnswer: 1,
      },
      {
        question: "Which country is known for the Eiffel Tower?",
        options: ["Germany", "Italy", "Spain", "France"],
        correctAnswer: 3,
      },
      {
        question: "Which is the most populous city in the world?",
        options: ["Tokyo", "Shanghai", "New York City", "Delhi"],
        correctAnswer: 0,
      },
      {
        question: "Which mountain range is located in South America?",
        options: ["Himalayas", "Rocky Mountains", "Appalachian Mountains", "Andes"],
        correctAnswer: 3,
      },
      {
        question: "Which continent is known as the 'Dark Continent'?",
        options: ["Asia", "Africa", "South America", "Europe"],
        correctAnswer: 1,
      },
      {
        question: "What is the capital of Brazil?",
        options: ["Buenos Aires", "Rio de Janeiro", "Brasília", "Sao Paulo"],
        correctAnswer: 2,
      },
      {
        question: "What is the official language of Brazil?",
        options: ["Spanish", "English", "Portuguese", "French"],
        correctAnswer: 2,
      },
      {
        question: "Which country has the most volcanoes?",
        options: ["Japan", "Indonesia", "United States", "Italy"],
        correctAnswer: 1,
      },
      {
        question: "Which city is known as the Big Apple?",
        options: ["Los Angeles", "New York City", "Chicago", "San Francisco"],
        correctAnswer: 1,
      },
      {
        question: "Which ocean is located to the east of Africa?",
        options: ["Indian Ocean", "Pacific Ocean", "Southern Ocean", "Atlantic Ocean"],
        correctAnswer: 3,
      },
      {
        question: "Which is the second largest continent by area?",
        options: ["Asia", "Africa", "North America", "Europe"],
        correctAnswer: 1,
      },
    ],
  },

  {
    "category": "mathematics",
    "questions": [
      {
        "question": "What is the value of 12% of 500?",
        "options": ["50", "60", "70", "80"],
        "correctAnswer": 1
      },
      {
        "question": "A train travels 60 km in 45 minutes. What is its speed in km/h?",
        "options": ["80 km/h", "90 km/h", "100 km/h", "120 km/h"],
        "correctAnswer": 1
      },
      {
        "question": "What is the simple interest on Rs. 2000 at 5% per annum for 3 years?",
        "options": ["Rs. 300", "Rs. 400", "Rs. 500", "Rs. 600"],
        "correctAnswer": 0
      },
      {
        "question": "A number is increased by 25% and then decreased by 25%. What is the net percentage change?",
        "options": ["0%", "5%", "6.25%", "12.5%"],
        "correctAnswer": 2
      },
      {
        "question": "A man can complete a work in 12 days. He works for 5 days and then another person joins him. They complete the remaining work in 3 days. In how many days will the second person alone complete the work?",
        "options": ["15 days", "18 days", "20 days", "24 days"],
        "correctAnswer": 2
      },
      {
        "question": "What is the total cost price of 40 articles if the cost price of one article is Rs. 25?",
        "options": ["Rs. 900", "Rs. 1000", "Rs. 1100", "Rs. 1200"],
        "correctAnswer": 1
      },
      {
        "question": "If 3x + 2 = 11, what is the value of x?",
        "options": ["2", "3", "4", "5"],
        "correctAnswer": 0
      },
      {
        "question": "What is the average of the first 50 natural numbers?",
        "options": ["25", "30", "35", "40"],
        "correctAnswer": 0
      },
      {
        "question": "A sum of money becomes double in 10 years at simple interest. What will be the rate of interest per annum?",
        "options": ["10%", "12%", "15%", "20%"],
        "correctAnswer": 0
      },
      {
        "question": "What is the least number that must be added to 1014 to make it divisible by 12?",
        "options": ["2", "4", "6", "8"],
        "correctAnswer": 1
      },
      {
        "question": "The ratio of the present ages of A and B is 4:5. After 5 years, the ratio becomes 5:6. What is the present age of A?",
        "options": ["20", "24", "28", "30"],
        "correctAnswer": 1
      },
      {
        "question": "A person invests Rs. 5000 at 6% per annum compounded annually. What is the amount after 2 years?",
        "options": ["Rs. 5630", "Rs. 5800", "Rs. 5900", "Rs. 6000"],
        "correctAnswer": 0
      },
      {
        "question": "If a number is divisible by both 3 and 4, what is it divisible by?",
        "options": ["6", "8", "12", "24"],
        "correctAnswer": 2
      },
      {
        "question": "In a class of 40 students, 60% are boys. How many girls are there?",
        "options": ["12", "14", "16", "24"],
        "correctAnswer": 2
      },
      {
        "question": "The ratio of two numbers is 3:4. If the first number is 12, what is the second number?",
        "options": ["14", "16", "18", "20"],
        "correctAnswer": 1
      },
      {
        "question": "A shopkeeper sells an item at Rs. 250 with a profit of 25%. What is the cost price of the item?",
        "options": ["Rs. 180", "Rs. 200", "Rs. 210", "Rs. 220"],
        "correctAnswer": 1
      },
      {
        "question": "A car travels 120 km in 2 hours. What is the average speed of the car?",
        "options": ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
        "correctAnswer": 1
      },
      {
        "question": "The perimeter of a rectangle is 60 cm and its length is 20 cm. What is the width?",
        "options": ["10 cm", "15 cm", "12 cm", "18 cm"],
        "correctAnswer": 0
      },
      {
        "question": "A sum of Rs. 5000 is invested at 10% per annum compound interest for 2 years. What is the compound interest?",
        "options": ["Rs. 1000", "Rs. 1100", "Rs. 1200", "Rs. 1300"],
        "correctAnswer": 1
      },
      {
        "question": "If a number is divisible by 9, what will be its remainder when divided by 4?",
        "options": ["0", "1", "2", "3"],
        "correctAnswer": 1
      },
      {
        "question": "The average of 10 consecutive numbers is 15. What is the sum of these numbers?",
        "options": ["150", "135", "145", "155"],
        "correctAnswer": 0
      },
      {
        "question": "A number is increased by 20%. If the new value is 240, what was the original number?",
        "options": ["200", "180", "220", "210"],
        "correctAnswer": 0
      },
      {
        "question": "In how many years will Rs. 1200 become Rs. 1800 at 10% simple interest?",
        "options": ["5 years", "6 years", "7 years", "8 years"],
        "correctAnswer": 0
      },
      {
        "question": "What is the cost of 18 articles if the cost of one article is Rs. 12?",
        "options": ["Rs. 200", "Rs. 210", "Rs. 220", "Rs. 240"],
        "correctAnswer": 3
      },
      {
        "question": "A clock shows the time 3:15. What is the angle between the hour hand and the minute hand?",
        "options": ["15°", "30°", "45°", "90°"],
        "correctAnswer": 2
      },
      {
        "question": "The sum of the ages of a father and his son is 55 years. If the father is 5 times as old as the son, what is the age of the father?",
        "options": ["45", "40", "50", "60"],
        "correctAnswer": 0
      }
    ]
  },
  
  

  {
    category: "entertainment",
    questions: [
      {
        question: "Who won the National Award for Best Actor in 2021?",
        options: ["Ayushmann Khurrana", "Manoj Bajpayee", "Ranveer Singh", "Rajkummar Rao"],
        correctAnswer: 1,
      },
      {
        question: "Which movie won the Filmfare Award for Best Film in 2022?",
        options: ["Shershaah", "83", "Pushpa: The Rise", "Gangubai Kathiawadi"],
        correctAnswer: 0,
      },
      {
        question: "Who played the character of Vijay Deenanath Chauhan in Agneepath (2012)?",
        options: ["Amitabh Bachchan", "Hrithik Roshan", "Ajay Devgn", "Salman Khan"],
        correctAnswer: 1,
      },
      {
        question: "Which Bollywood movie featured the dialogue 'Mogambo Khush Hua'?",
        options: ["Sholay", "Deewaar", "Mr. India", "Don"],
        correctAnswer: 2,
      },
      {
        question: "Who is known as the 'King of Bollywood'?",
        options: ["Salman Khan", "Shah Rukh Khan", "Aamir Khan", "Ranbir Kapoor"],
        correctAnswer: 1,
      },
      {
        question: "Which Indian movie was the first to win an Oscar?",
        options: ["Lagaan", "Mother India", "Slumdog Millionaire", "The Elephant Whisperers"],
        correctAnswer: 2,
      },
      {
        question: "Which director is known for making movies like 'Devdas' and 'Bajirao Mastani'?",
        options: ["Karan Johar", "Sanjay Leela Bhansali", "Rajkumar Hirani", "Zoya Akhtar"],
        correctAnswer: 1,
      },
      {
        question: "Who played the role of Geet in the movie 'Jab We Met'?",
        options: ["Priyanka Chopra", "Deepika Padukone", "Kareena Kapoor", "Katrina Kaif"],
        correctAnswer: 2,
      },
      {
        question: "Which movie features the song 'Tum Hi Ho'?",
        options: ["Aashiqui 2", "Kabir Singh", "Yeh Jawaani Hai Deewani", "Raazi"],
        correctAnswer: 0,
      },
      {
        question: "Who composed the music for the movie 'Dil Se'?",
        options: ["A.R. Rahman", "Pritam", "Vishal-Shekhar", "Shankar-Ehsaan-Loy"],
        correctAnswer: 0,
      },
      {
        question: "Which Bollywood movie was based on the life of Milkha Singh?",
        options: ["Dangal", "Mary Kom", "Bhaag Milkha Bhaag", "Paan Singh Tomar"],
        correctAnswer: 2,
      },
      {
        question: "Who played the role of Sanjay Dutt in the biopic 'Sanju'?",
        options: ["Sushant Singh Rajput", "Ranveer Singh", "Ranbir Kapoor", "Varun Dhawan"],
        correctAnswer: 2,
      },
      {
        question: "Which movie featured the famous song 'Chaiyya Chaiyya'?",
        options: ["Guru", "Dil Se", "Bombay", "Roja"],
        correctAnswer: 1,
      },
      {
        question: "Which actor is known for his role as 'Circuit' in the Munna Bhai series?",
        options: ["Arshad Warsi", "Boman Irani", "Paresh Rawal", "Johnny Lever"],
        correctAnswer: 0,
      },
      {
        question: "Which Bollywood film is a remake of the Hollywood movie 'Knight and Day'?",
        options: ["Ek Tha Tiger", "Bang Bang!", "War", "Pathaan"],
        correctAnswer: 1,
      },
      {
        question: "Which Indian actor has worked in both Bollywood and Hollywood?",
        options: ["Amitabh Bachchan", "Nawazuddin Siddiqui", "Priyanka Chopra", "Ranbir Kapoor"],
        correctAnswer: 2,
      },
      {
        question: "Which Bollywood film features the character 'Jordan', played by Ranbir Kapoor?",
        options: ["Rockstar", "Tamasha", "Sanju", "Barfi!"],
        correctAnswer: 0,
      },
      {
        question: "Which Indian director is known for making '3 Idiots' and 'PK'?",
        options: ["Rohit Shetty", "Karan Johar", "Rajkumar Hirani", "Anurag Kashyap"],
        correctAnswer: 2,
      },
      {
        question: "Which actor played Alauddin Khilji in 'Padmaavat'?",
        options: ["Vicky Kaushal", "Ranveer Singh", "Shahid Kapoor", "Saif Ali Khan"],
        correctAnswer: 1,
      },
      {
        question: "Which Bollywood movie is based on the life of mathematician Anand Kumar?",
        options: ["Super 30", "Chhichhore", "Article 15", "M.S. Dhoni: The Untold Story"],
        correctAnswer: 0,
      },
      {
        question: "Who was the first Bollywood actor to receive an Oscar?",
        options: ["Amitabh Bachchan", "Shah Rukh Khan", "Bhanu Athaiya", "A.R. Rahman"],
        correctAnswer: 2,
      },
      {
        question: "Which Indian web series features the character Sartaj Singh?",
        options: ["Sacred Games", "Mirzapur", "Paatal Lok", "The Family Man"],
        correctAnswer: 0,
      },
      {
        question: "Which Indian film won the Best International Feature Film at the Oscars 2023?",
        options: ["Jai Bhim", "The Elephant Whisperers", "RRR", "Gully Boy"],
        correctAnswer: 1,
      },
      {
        question: "Which Bollywood actress played the role of Sehmat Khan in 'Raazi'?",
        options: ["Deepika Padukone", "Kangana Ranaut", "Alia Bhatt", "Katrina Kaif"],
        correctAnswer: 2,
      }
    ]
},

];
