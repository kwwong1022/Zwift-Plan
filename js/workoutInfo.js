const workoutPlanSubSession = document.querySelector(".workout-plan-session-sub");
let workoutIsEmpty = true;

let CheckWorkoutIsEmpty = () => {
    workoutIsEmpty = planCardArray.length === 1 ? true : false;
    updateWorkoutSub();
}

let updateWorkoutSub = () => {
    while (workoutPlanSubSession.lastElementChild) {
        workoutPlanSubSession.removeChild(workoutPlanSubSession.lastElementChild);
    }

    if (workoutIsEmpty) {
        workoutPlanSubSession.innerText = "";
    } else {

    }
}

CheckWorkoutIsEmpty();