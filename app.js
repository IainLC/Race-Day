let raceNumber = Math.floor(Math.random() * 1000);
let regEarly = false;
let runnerAge = 20;

if (runnerAge > 18 && regEarly === true ) {
  raceNumber += 1000;}


if (runnerAge > 18 && regEarly === true ) {
  console.log(`your racenumber is: ${raceNumber}. You will race at 09:30.`);
} else if (runnerAge > 18 && !regEarly) {
console.log(`Adult runners who have regisetered late will race at 11:00. your racenumber is ${raceNumber}`);
} else if (runnerAge < 18){
  console.log(`all youth runners will race at 12:00. your race number is ${raceNumber}`);
} else {
  console.log("18 year old runners should see the registration desk");
}

