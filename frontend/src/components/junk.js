 /* var docRef = db.collection("stud_Dir").doc();;

      docRef.get().then((doc) => {
          if (doc.exists) {
              console.log("Document data:", doc.data());
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });*/

     /* var docRef = db.collection("stud_Dir");

      docRef.get().then((doc) => {
          if (doc.exists) {
              console.log("Document data:", doc.data());
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });*/
 
     /* const fetchBlogs=async()=>{
        const response=db.collection('Blogs');
        const data=await response.get();
        data.docs.forEach(item=>{
         setBlogs([...blogs,item.data()])
        })



        <button onClick={() =>editStudent({ Name: student.data.Name,Age: student.data.Age,Mark: student.data.Mark, id: student.id })} >Edit</button>
      }*/
      



/*console.log(student);
        const editdb = firebase.firestore().collection("stud_Dir").doc(student);
   
        editdb.get().then((item) =>{
           const items=item.docs((doc)=>({
               data:doc.data(),

           }));
           setUpdate(items);
          });*/ 


     /* db.collection("stud_Dir").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            const student=[];
            student.push(querySnapshot.val());
<Link to={`updateStud/${student.id}`} class="btn btn-outline-danger">Update</Link>
                <Switch>
                  <Route path="../components/updateStud/:id" children={<update/>} />
                </Switch>
            
            console.log(`${doc.id} => ${doc.data()}`);
            setStudent(student);
        });
        
    });*/
    /*/* {students.map(data => {
                
                return (
                    <tr>     
                    <td>{data.Name}</td>
                    <td>{data.Age}</td>
                    <td>{data.Mark}</td>
                    
                    </tr>
                    
                );
               
         })}*/


         /*
      editdb.get().then(snapshot => setUpdate(snapshot.data()));
      setID(student);
      setName(upstud.Name);
      setAge(upstud.Age);
      setMarks(upstud.Mark);
         */

      /*<div>
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
         <form  class="form-group">
              <label for="formGroupExampleInput" >
               Document ID
                <input type="text" class="form-control"  value={upstud.upID} disabled/>
              </label><br/>

              <label>
                Student name
                <input type="text" value={name} class="form-control" onChange={e => setName(e.target.value)} />
              </label><br/><br/>


              <label>
                Student Age
                <input type="text" value={age} class="form-control" onChange={e => setAge(e.target.value)} />
              </label><br/><br/>

              <label>
                Student Mark
                <input type="text" value={marks} class="form-control" onChange={e => setMarks(e.target.value)} />
              </label><br/>
              <input type="submit" class="btn btn-outline-success" onClick={() =>editStudent(upID)} value="Update" />
            </form>
            </div>
          
         </div>
      </div> */