import React,{useState,useEffect} from "react";
import firebase from "../components/firebase";


var db=firebase.firestore(firebase);


export default function RetStudent(){

   



    const [students, setStudent] = useState([]);
    const [upstud, setUpdate] = useState([]);
    const [upID, setID] = useState([]);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [marks, setMarks] = useState("");
   
    //const history = useHistory();

    const [stuid, setId] = useState();

    const ref = firebase.firestore().collection("stud_Dir");
  
    function retStudent(student){
      const editdb = firebase.firestore().collection("stud_Dir").doc(student);
      editdb.get().then(snapshot => setUpdate(snapshot.data()));
      setID(student);
      setName(upstud.Name);
      setAge(upstud.Age);
      setMarks(upstud.Mark);
   
    }

    

    function RetData(e){

   
        ref.get().then((item) => {
          const items = item.docs.map((doc) => ({
            id:doc.id,
            data:doc.data()
          }));
          setStudent(items);
      
        });
       
    }
    useEffect(() => {
      RetData();
     
    }, [loading]);
  
    
  function loader(){
    if(loading==true){
      setLoading(false);
    }
    else{
      setLoading(true);
    }
    
  }
  
    function editStudent(e) {
      e.preventDefault();

      const Student={
        name,
        age,
        marks
      }
     
      ref.doc(upID).update({
        Name: Student.name,
        Age: Student.age,
        Mark:Student.marks
      }).then(() => {
        alert("Data updated: ");
        loader();
      })
        .catch((err) => {
          console.error(err);
        });
    }
   
    
  
      return(
   <div>
      <div>
        <table>
          <tr>
          <th>Student Name</th>
          <th>Age</th>
          <th>Marks</th>
          </tr>

          
            {students.map(student=>(
              
              
              <tr> <td>

                {student.id}&nbsp;&nbsp;
                {student.data.Name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {student.data.Age} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {student.data.Mark}&nbsp;&nbsp;
                <button onClick={() =>retStudent(student.id)} class="btn btn-outline-danger">Edit</button>
                
                </td>
              </tr>
            ))}
          



        </table>
      </div>
      <div>

              
          
            
            <div>
         <form onSubmit={editStudent}  class="form-group">
              <label for="formGroupExampleInput" >
               Document ID
                <input type="text" class="form-control"  value={upID} disabled/>
              </label><br/>

              <label>
                Student name
                <input type="text" value={name} class="form-control" onChange={e => setName(e.target.value)}/>
              </label><br/><br/>


              <label>
                Student Age
                <input type="text" value={age} class="form-control" onChange={e => setAge(e.target.value)}/>
              </label><br/><br/>

              <label>
                Student Mark
                <input type="text" value={marks} class="form-control" onChange={e => setMarks(e.target.value)} />
              </label><br/>
              <input type="submit"  class="btn btn-outline-success"  value="Update" />
            </form>
            </div>
          
         </div>
      </div>
      );
  }
  