console.log("*****WELCOME TO OLA*****")
const r=require("readline-sync")
var current_location=r.question("*write your current location,(katraj/pune/satara)*")
if (current_location=="katraj"||current_location=="pune"|| current_location=="satara"){
    console.log("its avaiable**")
}else{
    console.log("not avaiable any service")
    console.log("try again")

// user input for your drop location**
var drop_location=r.question("* your drop location(tulsi bag/flora/khopi* ")
if (drop_location=="tuli bag"||drop_location=="flora"||drop_location=="khopi"){
    console.log(drop_location,"yes servies is avaiale ")

}else{
    console.log("servies is not avaiale")
}
// user input for vehichal
var vehichal=r.question("which vehichal do whant.car/auto * ")
var Driver_datails=[
    {"name":"ramesh",
    "mobile_no":4387965432,
    "location":"khedshivapur",
    "feedback":"drive sholo and safe",
    "rayte":450,
    "type":"car"},

    {"name":"raju",
    "mobile_no":4387980442,
    "location":"katraj",
    "feedback":"drive sholo and safe",
    "rayte":250,
    "type":"car"},
    
    {"name":"mohit",
    "mobile_no":4422778866,
    "location":"katraj",
    "feedback":"drive first and safe",
    "rayte":450,
    "type":"auto"},

    {"name":"amit",
    "mobile_no":6287965432,
    "location":"khedshivapur",
    "feedback":"drive first and safe",
    "rayte":500,
    "type":"car"},

    {"name":"ajay",
    "mobile_no":6280965436,
    "location":"khedshivapur",
    "feedback":"drive sholo and safe",
    "rayte":200,
    "type":"auto"},

]
// using for loop and (compair)
for(i in Driver_datails){
    if(Driver_datails[i]["type"]==vehichal){
        console.log(Driver_datails[i])

    }
    
}
DriverName=r.question("choose driver name * ")
for (i in Driver_datails){
    if (Driver_datails[i]["name"]==DriverName){
        otp=r.question("enter the otp")
        if (otp>="0 to 9"){
            console.log("carrect")
            pay=r.question("enter the paimant")
            if(pay=="goole pay"|| pay=="case"){
                amount=r.question("Enter your amount")
                if(amount>="0 t0 9"){
                    console.log("😊paimant is sesfull😊")
                    console.log("🚗🚕🚕🛺🛺🛺VEHICAL COME IN 10 MIN")
                    console.log("😀😀😀😀THANK YOU FOR BOOKING\N HAPPY JOURNEY")
                }
            }
        }
    }
}