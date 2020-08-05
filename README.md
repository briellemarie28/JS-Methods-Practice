Task: Create a Car class. Then create an instance and call various methods to alter the object.
Submit: Zip up only the car.js file and submit the zip file.
Build Specifications:

● Create a file called car.js, which will contain all of your code.
● Declare a class named Car with a constructor that accepts one parameter named
fuelLevel. Give the parameter fuelLevel a default value of 100 if no argument is
supplied.

    ○ Properties
    1. speed - initialized to the value of 0
    2. engineOn - initialized to the value of false
    3. fuelLevel - initialized to the fuelLevel parameter
    ○ Methods
    1. accelerate - if fuelLevel is more than or equal to 1 then decrease
    fuelLevel by 1 and increase speed by 1
    2. brake - decreases speed by 1. speed cannot go below 0.
    3. turnCarOn - sets engineOn to true
    4. turnCarOff - sets engineOn to false
    5. refillFuel - sets fuelLevel to 100
    
● Create an instance of Car called myCar with 60 as the argument for fuelLevel. Call the
following methods in order. (You may also include any console.log’s you want.)
○ refillFuel
○ turnCarOn
○ accelerate
○ accelerate
○ accelerate
○ brake
○ brake
○ brake
○ turnCarOf