import React,{useState} from "react";
import './AppNitro.css';

function Question(props){
 ///////////////////////////////////////////////////////////////////////////////////////////////
    const [ques,setQues] = useState([
        {
            q: "Farmers augment soil with fertilizers to help provide the necessary phosphorus for optimal plant growth. In what form do farmers add phosphorus to soil?",
            o1: "Elemental phosphorus",
            o2: "Phospholipid",
            o3: "Granular phosphate",
            o4: "Phospho-protein",
            ans : 3,
            marked : -1,
            correctSubmission: false
        },
        {
            q: "Excess Phosphorus in the soil can run off in the water and cause __",
            o1: "Sublimation",
            o2: "Immobilization",
            o3: "Eutrophication",
            o4: "Fertilization",
            ans :3 ,
            marked : -1,
            correctSubmission: false
        },
        {
            q: "How is atmospheric deposition part of the phosphorus cycle?",
            o1: "Rainfall",
            o2: "Organic dust",
            o3: "Lightning",
            o4: "Sunlight",
            ans :2 ,
            marked : -1,
            correctSubmission: false
        },
        {
            q: "How does nature release phosphorus from primary minerals",
            o1: "Immobilization",
            o2: "Condensation",
            o3: "Evaporation",
            o4: "Weathering",
            ans : 4,
            marked : -1,
            correctSubmission: false
        },
        {
            q: "What is leaching?",
            o1: "Removal of dissolved P from soil",
            o2: "When wind carries particles in eroded sediment",
            o3: "Surface flow of water that carries available P to new locations",
            o4: "When water turns to vapor",
            ans : 1,
            marked : -1,
            correctSubmission: false
        },
        {
            q: "After soyabeans are harvested, the leaves, the stalks and pods are left to decompose in the field. This is known as",
            o1: "Silage",
            o2: "Sediments",
            o3: "Plant Residue",
            o4: "Minerals",
            ans :3 ,
            marked : -1,
            correctSubmission: false
        },
        {
            q: "Harvestable Product is essential in providing phosphorus for which of the following?",
            o1: "Soil",
            o2: "Plants",
            o3: "Atmosphere",
            o4: "Animals",
            ans : 4,
            marked : -1,
            correctSubmission: false
        },
    ]);
////////////////////////////////////////////////////////////////////////////////////////////////
    var ID = props.id;
    function mark(ID,opt){
        var newQues = [...ques];
        if(!ques[ID].submitted)newQues[ID].marked = opt;
        setQues(newQues);
    }
    
    function check(){
        var newQues = [...ques];
        if(ques[ID].marked === ques[ID].ans){
            props.updateScore(20);
            props.nextQuestion(true);
            newQues[ID].correctSubmission = true;
            Extra(ID);
        }
        else{
            if(!ques[ID].submitted)props.updateScore(-10);
        }
        newQues[ID].submitted = true;
        setQues(newQues);
    }
    function close(){
        if(ques[ID].submitted){
            props.nextQuestion(false);
        }
        else{
            props.closeQuestion();
        }
    }
    function Extra(){
        var message = "";
        var something = false;
        if(ques[ID].correctSubmission){
            message = "Correct";
            something = true;
        }
        else if(ques[ID].submitted){
            message = "Wrong!! [Correct Option: "+ques[ID].ans+"]";
            something = true;
        }
        return <h3 className={something?"message":""}>{message}</h3>
    }
    return <div className = "question" style ={props.style}>
                <div className="bgHead"><div className="quesionHead">{ques[ID].q}</div></div>
                <div className="block">
                    <div className="Option" onClick={() => mark(ID,1)} style={{backgroundColor:ques[ID].marked===1?"rgba(214, 214, 214, 0.705)":""}}>{ques[ID].o1}</div>
                    <div className="Option" onClick={() => mark(ID,2)} style={{backgroundColor:ques[ID].marked===2?"rgba(214, 214, 214, 0.705)":""}}>{ques[ID].o2}</div>                               
                </div>
                <div className="block">
                    <div className="Option " onClick={() => mark(ID,3)} style={{backgroundColor:ques[ID].marked===3?"rgba(214, 214, 214, 0.705)":""}}>{ques[ID].o3}</div>
                    <div className="Option" onClick={() => mark(ID,4)} style={{backgroundColor:ques[ID].marked===4?"rgba(214, 214, 214, 0.705)":""}}>{ques[ID].o4}</div>
                </div>
                <div className="buttons">
                    <button type="submit" onClick={() => check()} style={{cursor:ques[ID].submitted || ques[ID].marked == -1?"no-drop":"    "}} disabled = {ques[ID].submitted || ques[ID].marked == -1} className={ques[ID].correctSubmission?"disabledButton":""}>Submit</button>
                    <button type="close" onClick={() => close()}>Close</button>
                </div>
                <Extra />
            </div>
}

export {Question};