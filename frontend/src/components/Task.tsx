import { useState } from "react";
import "./Task.css";
import { Form, Button } from "react-bootstrap";
import CaretUp from '../icons/caret-up.png'
import CaretDown from '../icons/caret-down.png'

interface Props {
    activeTimer : string,
}

const Task = ({ activeTimer }: Props) => {
    const [ completedTaskLists, setCompletedTaskLists ] = useState([])
    const [ newTaskLists, setNewTaskLists ] = useState([])
    const [currTaskNum, setCurrTaskNum ] = useState(1)
    const [ showSelections, setShowSelections ] = useState(false)
    const [ estimatedPomodoros, setEstimatedPomodoros ] = useState(0) 
    const [ showAddTask, setShowAddTask ] = useState(true)
    
    const taskInfo = () : Array<string> => {
        if (newTaskLists.length === 0){
            if (activeTimer === "pomodoro"){
                return ["# " + currTaskNum.toString(), "time to focus"]
            }   
            else if (activeTimer === "short"){
                return ["# " + currTaskNum.toString(), "time for a short break"]
            }   
            else {
                return ["# " + currTaskNum.toString(), "time for a long break"]
            }   
        }
        else{
            return [ "# " + currTaskNum.toString(), newTaskLists[0] ]
        }
    }

    const showDropdown = (e : any) => {
        e.preventDefault();
        setShowSelections(showSelections => !showSelections)
    }

    window.onclick = function(event : any) {
        if (!event.target.matches('.dropdownBtn')) {
          var dropdowns = document.getElementsByClassName("dropdownContent");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
        if (!event.target.matches('.addTaskBox') && !event.target.matches('.inputCard')){
            setShowAddTask(true)   
        }
    }
      

    return (
        <div className="d-flex flex-column align-items-center">
            {
                taskInfo().map((task, i) =>
                    <div key={ i }>{ task }</div>
                )
            }
            <div className="d-flex flex-row w-100">
                <div className="me-auto ms-4 fs-3 fontHeavier">
                    Tasks
                </div>
                <div className="d-flex flex-column ms-auto align-items-end justify-content-between">
                    <button className="dropdownBtn" onClick={ showDropdown } id="dropdownBtn"><img className="dropIcon" alt="drop icon" src="https://pomofocus.io/icons/threedots-white.png" />
                    </button>
                    <div id="dropdownContent" className="dropdownContent" style={{ display : `${ showSelections ? "block" : "none" }` }}>
                        <div className="d-flex flex-column">
                            <button>Clear finished tasks</button>
                            <button>Clear act pomodoros</button>
                            <button>Save as template</button>
                            <button>Add from templates</button>
                            <button>Clear all tasks</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-100 lineBreak"/>

            {
                showAddTask ?
                <button onClick={ () => setShowAddTask(false) } className="addTaskBox d-flex align-items-center justify-content-center mt-3">
                    Add task
                </button>
                :
                <Form className="bg-light inputCard rounded-3 d-flex justify-content-center align-items-center mt-3">
                    <div className="formWrapper">
                        <Form.Group className="mt-3 mb-4" controlId="formInputText">
                            <Form.Control className="taskInput" type="input" placeholder="What are you working on?" />
                        </Form.Group>

                        <Form.Label className="heavier">
                            Est. Pomodoros
                        </Form.Label>
                        <div className="d-flex flex-row align-items-center mb-4">
                            <Form.Control type="input" className="estimatedPomodoroInput me-4" placeholder={ estimatedPomodoros.toString() } />
                            <button type="button" className="me-1 caretIconBtn d-flex" onClick={ () => setEstimatedPomodoros(estimatedPomodoros + 1)} ><img src={ CaretUp } className="caretIcons mt-auto mb-auto" alt="increase estimated pomodoros"/></button>
                            <button type="button" className="caretIconBtn d-flex" onClick={ () => setEstimatedPomodoros(estimatedPomodoros => estimatedPomodoros > 0 ? estimatedPomodoros - 1 : 0)} ><img src={ CaretDown } className="caretIcons mt-auto mb-auto" alt="increase estimated pomodoros"/></button>
                        </div>
                        
                        <Button variant="primary" type="submit" className="mb-3">
                            Submit
                        </Button>
                        <Button onClick={ () => setShowAddTask(true) } variant="primary" className="mb-3">
                            Close
                        </Button>
                    </div>
                </Form> 
            }
        </div>
    )
}

export default Task;


// {/* <div class="dropdown">
//   <button onclick="myFunction()" class="dropbtn">Dropdown</button>
//   <div id="myDropdown" class="dropdown-content">
//     <a href="#">Link 1</a>
//     <a href="#">Link 2</a>
//     <a href="#">Link 3</a>
//   </div>
// </div>


// /* When the user clicks on the button,
// toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
//   // Close the dropdown menu if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }
//    */}