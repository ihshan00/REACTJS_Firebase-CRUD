import React,{useState,useEffect} from "react";
import firebase from "../components/firebase";


var db=firebase.firestore(firebase);


export default function RetStudent(){

    const [name, setName] = useState("");
    const [students, setStudent] = useState([]);
    const [age, setAge] = useState("");
    const [marks, setMarks] = useState("");
    const [loading, setLoading] = useState(false);
    //const history = useHistory();

    const [stuid, setId] = useState();

    const ref = firebase.firestore().collection("stud_Dir");
  
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
    const handleSubmit = (evt) => {
  
      evt.preventDefault();
      alert(`Submitting Name :${name}, Age ${age}, Mark ${marks}`);
      
    
    }


    function deleteStudent(student){  
      
      ref.doc(student).delete().then(() => {
        console.log("Document successfully deleted! ");
 
        alert(`Document Deleted Successfull ${student}`);

        loader();
          
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
    }


    
 

  
  
   /* const handleProceed = (e) => {
      //id && history.push(generatePath("../componets/updateStud/:id", { id }));
      window.open(`../componets/updateStud/${stuid}`); 
    };*/
    
    

  
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
                {student.data.Age} &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {student.data.Mark}&nbsp;&nbsp;
                <button onClick={() => deleteStudent(student.id)} class="btn btn-outline-danger">Delete</button>
                
                
                </td>
              </tr>
            ))}
          



        </table>
      </div>
      
      </div>
      );
  }
  