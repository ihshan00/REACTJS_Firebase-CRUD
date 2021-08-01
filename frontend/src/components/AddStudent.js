import React,{useState,useEffect} from "react";

import firebase from "../components/firebase";

//import { Button } from 'react-bootstrap';
//import { Form } from 'react-bootstrap';

var db=firebase.firestore(firebase);
export default function AdddStudent(){

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [marks, setMarks] = useState("");
  const [loading, setLoading] = useState(false);

  function AddData(e){
    setLoading(true);
    e.preventDefault();

    const newStud={
      name,
      age,
      marks
    }
    db.collection("stud_Dir").add({
      Name: newStud.name,
      Age: newStud.age,
      Mark:newStud.marks
    }).then((docRef) => {
      
      console.log("Document written with ID: ", docRef.id);
      loader();

      setName("");
      setAge("");
      setMarks("");
      }).catch((error) => {
      console.error("Error adding document: ", error);
    });

  }

  function loader(){
    if(loading==true){
      setLoading(false);
    }
    else{
      setLoading(true);
    }
    
  }

  useEffect(() => {
  
   
  }, [loading]);
  

  const handleSubmit = (evt) => {

    evt.preventDefault();
    alert(`Submitting Name :${name}, Age ${age}, Mark ${marks}`);
    
  
  }

    return(
      <form onSubmit={AddData}  class="form-group">
      <label for="formGroupExampleInput" >
        First Name
        <input type="text" class="form-control" value={name} onChange={e => setName(e.target.value)} />
      </label><br/>

      <label>
        Age
        <input type="text" value={age} class="form-control" onChange={e => setAge(e.target.value)} />
      </label><br/>

      <label>
        Avg Marks
        <input type="text" value={marks} class="form-control" onChange={e => setMarks(e.target.value)} />
      </label><br/><br/>
      <input type="submit" class="btn btn-outline-danger" value="Submit" />
    </form>
      
    );
}

