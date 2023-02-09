/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
 /* A+ A A- B C D E F */
//    ()
import React, { useState } from 'react';

export default function RejultShit(){



   
   const Subjact = [

                    "বাংলা ১ম",
                    "বাংলা 2য়",
                    "ইংলিশ ১ম",
                    "ইংলিশ ২য়",
                    "গণিত",
                    "শারীরিক শিক্ষা",
                    "পদাথ",
                    "রসায়ন",
                    "জীববিজ্ঞান"

                ]

   
                const SubjactAllInfo = {
                    names:[
                        "Saddam",
                        "Sherin",
                        "Shakib",
                        "Arif",
                        "Shati",
                    ],
                    Roll:[
                        "555555",
                        "425151",
                        "235145",
                        "256342",
                        "546185",
                    ],
                    Rgn:[
                        "6666666666",
                        "5645458764",
                        "5857564464",
                        "5464687545",
                        "5687454645",

                    ]
                }


                const StudentSubjectNumber = {

                    "Saddam":{
                        B1:"40",
                        B2:"56",
                        E1:"77",
                        E2:"60",
                        M:"30",
                        S:"85",
                        P:"73",
                        R:"90",
                        J:"91",
                        
                    },
                    "Sherin":{
                        B1:"60",
                        B2:"65",
                        E1:"85",
                        E2:"71",
                        M:"67",
                        S:"64",
                        P:"86",
                        R:"78",
                        J:"96",
                        
                    },
                    "Shakib":{
                        B1:"65",
                        B2:"65",
                        E1:"54",
                        E2:"64",
                        M:"30",
                        S:"86",
                        P:"82",
                        R:"92",
                        J:"64",
                        
                    },
                    "Arif":{
                        B1:"84",
                        B2:"24",
                        E1:"86",
                        E2:"85",
                        M:"64",
                        S:"45",
                        P:"56",
                        R:"44",
                        J:"65",
                        
                    },
                    "Shati":{
                        B1:"84",
                        B2:"97",
                        E1:"86",
                        E2:"85",
                        M:"65",
                        S:"45",
                        P:"56",
                        R:"68",
                        J:"62",
                        
                    }
                }
               
  

             
const [StudentNames, StudentInfoSetting]= useState('')
const [StudentRoll, StudentRollSetting]= useState('')
const [StudentRgn, StudentRgbSetting]= useState('')


const [Saddam_B1, SaddamB1Setting]=useState('')
const [Saddam_B2, SaddamB2Setting]=useState('')
const [Saddam_E1, SaddamE1Setting]=useState('')
const [Saddam_E2, SaddamE2Setting]=useState('')
const [Saddam_M, SaddamMSetting]=useState('')
const [Saddam_S, SaddamSSetting]=useState('')
const [Saddam_P, SaddamPSetting]=useState('')
const [Saddam_R, SaddamRSetting]=useState('')
const [Saddam_J, SaddamJSetting]=useState('')




const [great_B1, greatB1Setting]=useState('')
const [great_B2, greatB2Setting]=useState('')
const [great_E1, greatE1Setting]=useState('')
const [great_E2, greatE2Setting]=useState('')
const [great_M, greatMSetting]=useState('')
const [great_S, greatSSetting]=useState('')
const [great_P, greatPSetting]=useState('')
const [great_R, greatRSetting]=useState('')
const [great_J, greatJSetting]=useState('')



        function RejultCheck (){
            
            
            let StudentName =       document.getElementById("name")
            let StudentRollnumber =  document.getElementById("RollNumber")
            let StudentRgnNumber =   document.getElementById("RgnNumber")

            StudentInfoSetting(StudentName.value)
            StudentRollSetting(StudentRollnumber.value)
            StudentRgbSetting(StudentRgnNumber.value)

            let userName = SubjactAllInfo.names.indexOf(StudentName.value)
            let userRoll = SubjactAllInfo.Roll.indexOf(StudentRollnumber.value)
            let userRgn = SubjactAllInfo.Rgn.indexOf(StudentRgnNumber.value)


            if (SubjactAllInfo.names[userName]===StudentName.value && SubjactAllInfo.Roll[userRoll]===StudentRollnumber.value &&SubjactAllInfo.Rgn[userRgn]===StudentRgnNumber.value) {

            let studentObj  = StudentName.value

            SaddamB1Setting(StudentSubjectNumber[studentObj].B1)
            SaddamB2Setting(StudentSubjectNumber[studentObj].B2)
            SaddamE1Setting(StudentSubjectNumber[studentObj].E1)
            SaddamE2Setting(StudentSubjectNumber[studentObj].E2)
            SaddamMSetting(StudentSubjectNumber[studentObj].M)
            SaddamSSetting(StudentSubjectNumber[studentObj].S)
            SaddamPSetting(StudentSubjectNumber[studentObj].P)
            SaddamRSetting(StudentSubjectNumber[studentObj].R)
            SaddamJSetting(StudentSubjectNumber[studentObj].J)





   
            
            if (StudentSubjectNumber[studentObj].B1<="33") {
                greatB1Setting("F");               
             }
            else if (StudentSubjectNumber[studentObj].B1>="33"  && StudentSubjectNumber[studentObj].B1<="39") {
                greatB1Setting("E");               
             }
             else if (StudentSubjectNumber[studentObj].B1>="40"  && StudentSubjectNumber[studentObj].B1<="49") {
                greatB1Setting("D");                
             }
             else if (StudentSubjectNumber[studentObj].B1>="50"  && StudentSubjectNumber[studentObj].B1<="59") {
                greatB1Setting("B");
             }
             else if (StudentSubjectNumber[studentObj].B1>="60"  && StudentSubjectNumber[studentObj].B1<="69") {
                greatB1Setting("A-");
             }
             else if (StudentSubjectNumber[studentObj].B1>="70"  && StudentSubjectNumber[studentObj].B1<="79") {
                greatB1Setting("A");
             }
             else if (StudentSubjectNumber[studentObj].B1>="80"  && StudentSubjectNumber[studentObj].B1<=100) {
                greatB1Setting("A+");
                
             }else{
                greatB1Setting(" "); }



                if (StudentSubjectNumber[studentObj].B2<="33") {
                    greatB2Setting("F");               
                 }
                else if (StudentSubjectNumber[studentObj].B2>="33"  && StudentSubjectNumber[studentObj].B2<="39") {
                    greatB2Setting("E");               
                 }
                 else if (StudentSubjectNumber[studentObj].B2>="40"  && StudentSubjectNumber[studentObj].B2<="49") {
                    greatB2Setting("D");                
                 }
                 else if (StudentSubjectNumber[studentObj].B2>="50"  && StudentSubjectNumber[studentObj].B2<="59") {
                    greatB2Setting("B");
                 }
                 else if (StudentSubjectNumber[studentObj].B2>="60"  && StudentSubjectNumber[studentObj].B2<="69") {
                    greatB2Setting("A-");
                 }
                 else if (StudentSubjectNumber[studentObj].B2>="70"  && StudentSubjectNumber[studentObj].B2<="79") {
                    greatB2Setting("A");
                 }
                 else if (StudentSubjectNumber[studentObj].B2>="80"  && StudentSubjectNumber[studentObj].B2<=100) {
                    greatB2Setting("A+");
                    
                 }else{
                    greatB2Setting(" "); }



                    if (StudentSubjectNumber[studentObj].E1<="33") {
                        greatE1Setting("F");               
                     }
                    else if (StudentSubjectNumber[studentObj].E1>="33"  && StudentSubjectNumber[studentObj].E1<="39") {
                        greatE1Setting("E");               
                     }
                     else if (StudentSubjectNumber[studentObj].E1>="40"  && StudentSubjectNumber[studentObj].E1<="49") {
                        greatE1Setting("D");                
                     }
                     else if (StudentSubjectNumber[studentObj].E1>="50"  && StudentSubjectNumber[studentObj].E1<="59") {
                        greatE1Setting("B");
                     }
                     else if (StudentSubjectNumber[studentObj].E1>="60"  && StudentSubjectNumber[studentObj].E1<="69") {
                        greatE1Setting("A-");
                     }
                     else if (StudentSubjectNumber[studentObj].E1>="70"  && StudentSubjectNumber[studentObj].E1<="79") {
                        greatE1Setting("A");
                     }
                     else if (StudentSubjectNumber[studentObj].E1>="80"  && StudentSubjectNumber[studentObj].E1<=100) {
                        greatE1Setting("A+");
                        
                     }else{
                        greatE1Setting(" "); }




                        if (StudentSubjectNumber[studentObj].E2<="33") {
                            greatE2Setting("F");               
                         }
                        else if (StudentSubjectNumber[studentObj].E2>="33"  && StudentSubjectNumber[studentObj].E2<="39") {
                            greatE2Setting("E");               
                         }
                         else if (StudentSubjectNumber[studentObj].E2>="40"  && StudentSubjectNumber[studentObj].E2<="49") {
                            greatE2Setting("D");                
                         }
                         else if (StudentSubjectNumber[studentObj].E2>="50"  && StudentSubjectNumber[studentObj].E2<="59") {
                            greatE2Setting("B");
                         }
                         else if (StudentSubjectNumber[studentObj].E2>="60"  && StudentSubjectNumber[studentObj].E2<="69") {
                            greatE2Setting("A-");
                         }
                         else if (StudentSubjectNumber[studentObj].E2>="70"  && StudentSubjectNumber[studentObj].E2<="79") {
                            greatE2Setting("A");
                         }
                         else if (StudentSubjectNumber[studentObj].E2>="80"  && StudentSubjectNumber[studentObj].E2<=100) {
                            greatE2Setting("A+");
                            
                         }else{
                            greatE2Setting(" "); }




                            if (StudentSubjectNumber[studentObj].M<="33") {
                                greatMSetting("F");               
                             }
                            else if (StudentSubjectNumber[studentObj].M>="33"  && StudentSubjectNumber[studentObj].M<="39") {
                                greatMSetting("E");               
                             }
                             else if (StudentSubjectNumber[studentObj].M>="40"  && StudentSubjectNumber[studentObj].M<="49") {
                                greatMSetting("D");                
                             }
                             else if (StudentSubjectNumber[studentObj].M>="50"  && StudentSubjectNumber[studentObj].M<="59") {
                                greatMSetting("B");
                             }
                             else if (StudentSubjectNumber[studentObj].M>="60"  && StudentSubjectNumber[studentObj].M<="69") {
                                greatMSetting("A-");
                             }
                             else if (StudentSubjectNumber[studentObj].M>="70"  && StudentSubjectNumber[studentObj].M<="79") {
                                greatMSetting("A");
                             }
                             else if (StudentSubjectNumber[studentObj].M>="80"  && StudentSubjectNumber[studentObj].M<=100) {
                                greatMSetting("A+");
                                
                             }else{
                                greatMSetting(" "); }





                                
                            if (StudentSubjectNumber[studentObj].S<="33") {
                                greatSSetting("F");               
                             }
                            else if (StudentSubjectNumber[studentObj].S>="33"  && StudentSubjectNumber[studentObj].S<="39") {
                                greatSSetting("E");               
                             }
                             else if (StudentSubjectNumber[studentObj].S>="40"  && StudentSubjectNumber[studentObj].S<="49") {
                                greatSSetting("D");                
                             }
                             else if (StudentSubjectNumber[studentObj].S>="50"  && StudentSubjectNumber[studentObj].S<="59") {
                                greatSSetting("B");
                             }
                             else if (StudentSubjectNumber[studentObj].S>="60"  && StudentSubjectNumber[studentObj].S<="69") {
                                greatSSetting("A-");
                             }
                             else if (StudentSubjectNumber[studentObj].S>="70"  && StudentSubjectNumber[studentObj].S<="79") {
                                greatSSetting("A");
                             }
                             else if (StudentSubjectNumber[studentObj].S>="80"  && StudentSubjectNumber[studentObj].S<=100) {
                                greatSSetting("A+");
                                
                             }else{
                                greatSSetting(" "); }




                                     
                     








                                           
                            if (StudentSubjectNumber[studentObj].R<="33") {
                                greatRSetting("F");               
                             }
                            else if (StudentSubjectNumber[studentObj].R>="33"  && StudentSubjectNumber[studentObj].R<="39") {
                                greatRSetting("E");               
                             }
                             else if (StudentSubjectNumber[studentObj].R>="40"  && StudentSubjectNumber[studentObj].R<="49") {
                                greatRSetting("D");                
                             }
                             else if (StudentSubjectNumber[studentObj].R >= "50"  && StudentSubjectNumber[studentObj].R<="59") {
                                greatRSetting("B");
                             }
                             else if (StudentSubjectNumber[studentObj].R>="60"  && StudentSubjectNumber[studentObj].R<="69") {
                                greatRSetting("A-");
                             }
                             else if (StudentSubjectNumber[studentObj].R>="70"  && StudentSubjectNumber[studentObj].R<="79") {
                                greatRSetting("A");
                             }
                             else if (StudentSubjectNumber[studentObj].R>="80"  && StudentSubjectNumber[studentObj].R<=100) {
                                greatRSetting("A+");
                                
                             }else{
                                greatRSetting(" "); }




                                if (StudentSubjectNumber[studentObj].J<="33") {
                                    greatJSetting("F");               
                                 }
                                else if (StudentSubjectNumber[studentObj].J>="33"  && StudentSubjectNumber[studentObj].J<="39") {
                                    greatJSetting("E");               
                                 }
                                 else if (StudentSubjectNumber[studentObj].J>="40"  && StudentSubjectNumber[studentObj].J<="49") {
                                    greatJSetting("D");                
                                 }
                                 else if (StudentSubjectNumber[studentObj].J >= "50"  && StudentSubjectNumber[studentObj].J<="59") {
                                    greatJSetting("B");
                                 }
                                 else if (StudentSubjectNumber[studentObj].J>="60"  && StudentSubjectNumber[studentObj].J<="69") {
                                    greatJSetting("A-");
                                 }
                                 else if (StudentSubjectNumber[studentObj].J>="70"  && StudentSubjectNumber[studentObj].J<="79") {
                                    greatJSetting("A");
                                 }
                                 else if (StudentSubjectNumber[studentObj].J>="80"  && StudentSubjectNumber[studentObj].J<=100) {
                                    greatJSetting("A+");
                                    
                                 }else{
                                    greatJSetting(" "); }





                                    
                                if (StudentSubjectNumber[studentObj].P<="33") {
                                    greatPSetting("F");               
                                 }
                                else if (StudentSubjectNumber[studentObj].P>="33"  && StudentSubjectNumber[studentObj].P<="39") {
                                    greatPSetting("E");               
                                 }
                                 else if (StudentSubjectNumber[studentObj].P>="40"  && StudentSubjectNumber[studentObj].P<="49") {
                                    greatPSetting("D");                
                                 }
                                 else if (StudentSubjectNumber[studentObj].P >= "50"  && StudentSubjectNumber[studentObj].P<="59") {
                                    greatPSetting("B");
                                 }
                                 else if (StudentSubjectNumber[studentObj].P>="60"  && StudentSubjectNumber[studentObj].P<="69") {
                                    greatPSetting("A-");
                                 }
                                 else if (StudentSubjectNumber[studentObj].P>="70"  && StudentSubjectNumber[studentObj].P<="79") {
                                    greatPSetting("A");
                                 }
                                 else if (StudentSubjectNumber[studentObj].P>="80"  && StudentSubjectNumber[studentObj].P<=100) {
                                    greatPSetting("A+");
                                    
                                 }else{
                                    greatPSetting(" "); }





        }
        else{



            greatB1Setting(" ")
            greatB2Setting(" ")
            greatE1Setting(" ")
            greatE2Setting("")
            greatMSetting(" ")
            greatSSetting(" ")
            greatPSetting(" ")
            greatRSetting(" ")
            greatJSetting(" ")

            SaddamB1Setting(" ")
            SaddamB2Setting(" ")
            SaddamE1Setting(" ")
            SaddamE2Setting(" ")
            SaddamMSetting(" ")
            SaddamSSetting(" ")
            SaddamPSetting(" ")
            SaddamRSetting(" ")
            SaddamJSetting(" ")


            StudentInfoSetting("null")
            StudentRollSetting("null")
            StudentRgbSetting("null")
        }



            
          StudentName.value=""
          StudentRollnumber.value=""
          StudentRgnNumber.value=""
                }

                      
          
          
              
  
      
     const downloadPdf = ()=>{
      let StudentName =       document.getElementById("name").value

      // const pdfContent = document.getElementById("rejultList")
      // html2().set({filename:StudentName + AutoCode()+'.pdf',margin:1, html2canvas:{scole:4}}).from(pdfContent)
     console.log(StudentName);
   }   
          
       
                

                



        return( 

<div className='studentBody'>

        <div className='RejultForms' >
        <h1 className='RejultHadding'>Rejult searching</h1>
      <center >  <input type={'name'} name={'name'} id={'name'} required placeholder='Student Name...'></input>
        <input type={'number'}   name={'number'} id={'RollNumber'} required placeholder='Roll Number...'></input>
        <input type={'number'}   name={'number'} id={'RgnNumber'} required placeholder='Rgn Number...'></input></center>
        <button onClick={RejultCheck}> Submit</button>        
        </div>


        <table className='rejultList'>
        <tr className='studentInfo'>
            <td>Student: {StudentNames}</td>
            <td>Roll: {StudentRoll}</td>
            <td>Rgn: {StudentRgn}</td>
        </tr>
       <tr className='Sng'>
            <td>{"Subjact"}</td>
            <td>{"Number"}</td>
            <td>{"Grat"}</td>
        </tr>          
        
       
        
         <tr>
            <td>{Subjact[0]}</td>
            <td>{Saddam_B1}</td> 
            <td>{great_B1}</td>
        </tr>

        <tr>
            <td>{Subjact[1]}</td>
            <td>{Saddam_B2}</td>
            <td>{great_B2}</td>
        </tr>


        <tr>
            <td>{Subjact[2]}</td>
            <td>{Saddam_E1}</td>
            <td>{great_E1}</td>
        </tr>


        <tr>
            <td>{Subjact[3]}</td>
            <td>{Saddam_E2}</td>
            <td>{great_E2}</td>
        </tr>

        <tr>
            <td>{Subjact[4]}</td>
            <td>{Saddam_M}</td>
            <td>{great_M}</td>
        </tr>


        <tr>
            <td>{Subjact[5]}</td>
            <td>{Saddam_S}</td>
            <td>{great_S}</td>
        </tr>

        <tr>
            <td>{Subjact[6]}</td>
            <td>{Saddam_P}</td>
            <td>{great_P}</td>
        </tr>

        <tr>
            <td>{Subjact[7]}</td>
            <td>{Saddam_R}</td>
            <td>{great_R}</td>
        </tr>
        <tr>
            <td>{Subjact[8]}</td>
            <td>{Saddam_J}</td>
            <td>{great_J}</td>
            
        </tr> 
        </table>
       <br></br>
       <button className='DownloadBtn' onClick={downloadPdf}>Download</button>
</div>

            
            )
           
     
 
}
