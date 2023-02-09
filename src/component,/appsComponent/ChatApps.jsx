import React, { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line
export default function ChatApps() {
  // servarSitePHP/Chats.php
  const ChatBox = styled.div`
                  background:white;
                  color:white;
                  width:279px;
                  height:279px;
                  margin: auto;
  
  `
  const AppsTitle = styled.h2`  
                  color:blue; 
                  background-color: deepskyblue;
  `
  const InputBox = styled.input`
                  width: 217px;
                  height: 31px;
                  color: black;
                  border-bottom-left-radius: 10px;
                  outline: none;
                  border: 0px;
                  border-top-left-radius: 10px;
                  padding:0px 10px;
  `
  const FormButton = styled.div`
                    background-color: deepskyblue;
                    width: 278px;
                    margin: auto;
                    height: 30px;
                    border-radius: 11px;
                    overflow: hidden;
  `
  const MyForm = styled.form`
                  background: cadetblue;
                  padding: 3px 0px;
  
  `
  const Button = styled.button`
                  color: white;
                  background: #140368;
                  padding: 5px 7px;
                  border-radius: 0px;
                  border-top-right-radius: 10px;
                  border-bottom-right-radius: 10px;
  `
const MessageBody = styled.div`
                  width:100;
                  height:220px;
                  padding:10px;
                  color:black;
                  overflow: overlay;
                  background: white;
                  
`
const MassageOneParson = styled.p`
  text-align: left;
  background-color: deepskyblue;
  margin: 0px 10px 0px 87px;
  padding: 5px 8px;
  user-select:none;         
`

const MassageTwoParson = styled.p`
  text-align: right;
  background-color: deepskyblue;
  margin: 14px 99px 15px 0px;
  padding: 5px 8px;
  user-select:none;

                  
`


const [userFristMeassage ,userFristMeassageSetting ] = useState('')
const [userLastMeassage ,userLastMeassageSetting ] = useState("")
const MassageSendHandeling= (e)=>{
  // e.preventDefault()
const massageingClass = document.querySelector(".massageing")
       const message =  massageingClass.value

       let random = Math.floor(Math.random() * 1011100)
       let currentValue = "localStoreSendMessage"+random
       localStorage.setItem( currentValue, message)

       let resivedMessage = localStorage.getItem( currentValue)
       userFristMeassageSetting(resivedMessage)
      let valueKey =  localStorage.key( currentValue)

console.log(valueKey);
console.log(currentValue);

const xml = new XMLHttpRequest()
      xml.onload= function () {
        console.log("Send Message");
      
      }
        
    
  userLastMeassageSetting("resivedMessage")

}


  return (
    <div>
      <ChatBox>
        <AppsTitle>Live Chat</AppsTitle>
        <MessageBody className="messageScrollStyle">
              <MassageOneParson>
              {userFristMeassage}
              </MassageOneParson>
                          
              <MassageTwoParson>
              {userLastMeassage}
              </MassageTwoParson>
         </MessageBody>
        <MyForm >
            <FormButton>
            <InputBox className="massageing" name="massage" ></InputBox>
              <Button onClick={MassageSendHandeling}> Send</Button>
            </FormButton>
        </MyForm>
     
      </ChatBox>
    
    </div>
  )

}
