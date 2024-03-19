const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    duplicated(workoutInput,workoutList);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);


// duplicates function
const duplicated = (input,itemList)=>{
    
    const listOfItems = Array.from(itemList.children); // create array from existing goals listed
    let isDuplicate = false;

    //check for duplicates
    for(let item of listOfItems){

        if (item.textContent.toLowerCase() === input.toLowerCase()) { 
            isDuplicate = true;
            break;
        }
    }
  
    //Prevent duplicates
    if (isDuplicate){
        //display this meessage if item is duplicated
        alert("Item already exists!");  

    } else{
        const newItem = document.createElement('li');
        newItem.textContent = input;
        itemList.appendChild(newItem);
    }
     // Event listener to remove items when clicked
}



const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelector('#goalList');
    duplicated(goalInput,goalList); //calls function that checks and prevents duplicates
    
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);

//----------------- Learnt new concepts-----------------
// array.from() which creates an array from what you specify
// arrow functions
// code refactoring

//--------Struggles---------
// I used for loop to loop through the list of items 
//but that didnt work until I Learnt about array.from and ul.children