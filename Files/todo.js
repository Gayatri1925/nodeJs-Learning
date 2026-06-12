const fs=require('fs');
const filepath="./tasks.json";

const command=process.argv[2];
const argument=process.argv[3];

// writing arrow function
const loaddata=()=>{
    try{
        const databuffer=fs.readFileSync(filepath)
        const data=databuffer.toString()
        return JSON.parse(data);
    }catch(error){
        return []
    }
}
const savetasks=(tasks)=>{
    const datajson=JSON.stringify(tasks)
    fs.writeFileSync(filepath,datajson);
}
const addtask =(task)=>{
    const tasks=loaddata()
    tasks.push({task});
    savetasks(tasks);
    console.log("task added successfully",task);
}
const listtasks=()=>{
    const list=loaddata();
    list.forEach((item,index)=>console.log(`${index+1} - ${item.task}`));
}
const removetask=(idx)=>{
    const list=loaddata();
    const original_idx=idx-1;
    list.splice(original_idx,1);
    savetasks(list);
}

if(command==="add"){
    addtask(argument);
}else if(command==="list"){
    listtasks();
}else if(command==="remove"){
    removetask(parseInt(argument));
}else{
    console.log("command not found");
}