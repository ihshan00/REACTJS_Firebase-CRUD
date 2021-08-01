import React,{useState,useEffect} from "react";
import firebase from "../components/firebase";
import image from "./images/teach.jpg";
import style from "./home.css";
import {Line} from "react-chartjs-2";


function Home(){

 
    const [students, setStudent] = useState([]);
    
   



    
    
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
    RetData();
       
     

    const data = {
        labels: [
           students.Name
        ],
        datasets: [
          {
            label: 'Student Marks',
            data: [ 
                students.Mark
                ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
      



    return(
        <div align="center">
        <head>
            <link rel="stylesheet" href={style}></link>
        </head>
        <body>
           
        
        <div class="check">
            <div class="hovereffect">
                <div align="center">
                <img  class="img-responsive" src={image} alt=""/></div>
                <div class="overlay">
                    <h2>Student Page</h2>
                    <button onClick={() => RetData()}>Click Here</button>
                    <div class="info" >Student Marks Graph
                    
                    </div>
                </div>
            </div>
        </div>
              <Line data={data} options={options} />
        </body>
        </div>        
    )
}

export default Home;