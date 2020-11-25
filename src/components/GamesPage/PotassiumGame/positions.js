import React from "react";
var y1 = 370;
var x = 380;
var y2 = 320;
var xspace = 200;
var pos1 = [
    {
        style :{
            position: "absolute",
            left: (x+0*xspace)+"px",
            top: y2+"px"
        }
    },
    {
       style :{
        position: "absolute",
        left: (x+1*xspace) + "px",
        top: y1+"px"
       }
    },
    {
        style :{
            position: "absolute",
            left: (x+2*xspace)+"px",
            top: y1+"px"
        }

    },
    {
        style :{
            position: "absolute",
            left: (x+3*xspace)+"px",
            top: y2+"px"
        }

    }        
]
y1 = 150;
y2 = 120;
x = 480;
xspace = 100;
var pos2 = [
    {
        style :{
            position: "absolute",
            left: (x+0*xspace)+"px",
            top: y2+"px"
        }

    },
    {
       style :{
        position: "absolute",
        left: (x+1*xspace) + "px",
        top: y1+"px"
       }
    },
    {
        style :{
            position: "absolute",
            left: (x+2*xspace)+"px",
            top: y1+"px"
        }

    },
    {
        style :{
            position: "absolute",
            left: (x+3*xspace)+"px",
            top: y2+"px"
        }

    }        
]

for(let i = 0; i<pos2.length;i++)
    pos1.push(pos2[i]);   

const pos = pos1;
export default pos;