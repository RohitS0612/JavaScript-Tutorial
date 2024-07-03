const current_date = new Date();
let user_date = new Date("2002-05-24");

if(user_date < current_date){
    let add = current_date - user_date;
    console.log(add);
} 
else {
    console.log("current adte is older then user date ");
}