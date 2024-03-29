import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {messege:"enter your first num",type : "number",name:"firstNum"}, 
    {messege:"enter your second num",type : "number",name:"secondNum"},
    {
messege:" select one opreator to perform action", 
type : "list",
name:"opreator",
choices : ["add","sub","multiply","divide"],
    },

])

    
    //conditional opreator//
    if (answer.opreator === "add"){
console.log(answer.firstNum + answer.secondNum );
    }else if(answer.opreator === "sub"){
        console.log(answer.firstNum - answer.secondNum );
            }else if (answer.opreator === "multiply"){
                console.log(answer.firstNum * answer.secondNum );
                    }else if
                    (answer.opreator === "divide"){
                        console.log(answer.firstNum / answer.secondNum );
                            }
                            else("pls select correct opreator")
    
    



