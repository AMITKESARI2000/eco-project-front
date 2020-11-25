import React from "react";
var y1 = 370;
var x = 380;
var y2 = 320;
var pos1 = [
    {
        style :{
            position: "absolute",
            left: x+"px",
            top: y2+"px"
        }
    },
    {
       style :{
        position: "absolute",
        left: (x+200) + "px",
        top: y1+"px"
       }
    },
    {
        style :{
            position: "absolute",
            left: (x+400)+"px",
            top: y1+"px"
        }

    },
    {
        style :{
            position: "absolute",
            left: (x+600)+"px",
            top: y2+"px"
        }

    }        
]
y1 = 150;
y2 = 120;
x = 480;
var pos2 = [
    {
        style :{
            position: "absolute",
            left: x+"px",
            top: y2+"px"
        }

    },
    {
       style :{
        position: "absolute",
        left: (x+100) + "px",
        top: y1+"px"
       }
    },
    {
        style :{
            position: "absolute",
            left: (x+200)+"px",
            top: y1+"px"
        }

    },
    {
        style :{
            position: "absolute",
            left: (x+300)+"px",
            top: y2+"px"
        }

    }        
]

for(let i = 0; i<pos2.length;i++)
    pos1.push(pos2[i]);   

const pos = pos1;
export default pos;