const fs=require('fs');
const path="./tasks.json";

if(command==="add"){
    addtask(task);
}else if(command=="list"){
    listtasks();
}else if(command==="remove"){
    removetask(parseInt(taskno));
}else{
    console.log("command not found");
}