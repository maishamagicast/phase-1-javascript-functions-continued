// code your solution here
function saturdayFun( activity ='roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity ='go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(x){
    if (x === '*'){
        return function(y='unique'){
            return `You are *${y}*!`
        }
    }
    else if (x==='||'){
        return function(y='amazing'){
            return `You are ||${y}||!`
        }
    } 
}