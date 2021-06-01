
import CardManager from './taskmanager'

        const taskcontainer = document.querySelector("#taskcontainer"); 
        const cardDeck=new CardManager(taskcontainer); 
        
        // view all tasks
        const allTask=document.querySelector("#allTasks");

        allTask.addEventListener("click",displayallTasks);
        function displayallTasks(){
          cardDeck.displayTask(edifunc,delfunc);
        }
        //taking inputs for adding the tasks
        let tname    = document.querySelector("#text1");               
        let tdes     = document.querySelector("#des"); 
        let assignee = document.querySelector("#assignee");
        let dDate = document.querySelector("#dDate");  
        let sTatus = document.querySelector("#sTatus");
        let addButton=document.querySelector("#addButton");
        // validation
        let nmErrMsg = document.querySelector("#nmErrMsg"); 
        let nmErrMsg1 = document.querySelector("#nmErrMsg1");
        let nmErrMsg2 = document.querySelector("#nmErrMsg2");
        let checkvalidDate = false;
        let validname ,validdes,validassignee;
     
// Adding the task to the object array if valiadtion completes 
addButton.onclick = function(){
  datevalidation(dDate,nmErrMsg3);                                              //calling function to validate the date 
   
  if (validname && validdes && validassignee && checkvalidDate){
    cardDeck.addcard(tname.value,tdes.value,assignee.value,dDate.value,sTatus.value);
    location.reload();
    cardDeck.displayTask(edifunc,delfunc);
    $("#myModal").modal("hide");
    resetFields();  
  }
else
{
   alert("Fill all mandatory fields correctly");
}
}

// Validation of all mandatory fields 
tname.addEventListener("input",function(event)
{
   if (event.target.value && event.target.value.length <=8){
         nmErrMsg.innerHTML="Please ,fill this field with atleast 8 characters";
         nmErrMsg.style.color="red";
         tname.style.borderColor = "red";
         tname.focus();
         validname = false;
         // break;
      } else 
      {
        nmErrMsg.innerHTML="looks good!";
        nmErrMsg.style.color="green";
        tname.style.borderColor = "green";
        validname=true;
      }
   }
);


tdes.addEventListener("input",function(event){
   if (event.target.value && event.target.value.length <= 15) {
      nmErrMsg1.innerHTML="*Please ,fill this field with atleast 15 characters";
      nmErrMsg1.style.color="red";
      des.style.borderColor = "red"; 
      des.focus();
      validdes=false; 
   } else{
       des.style.borderColor = "green";
       nmErrMsg1.innerHTML="looks good";
       nmErrMsg1.style.color="green";
       validdes=true;
         
   } 
});

assignee.addEventListener("input",function(event){
   if (event.target.value && event.target.value.length <= 8) { 
        nmErrMsg2.innerHTML="Please ,fill this field with atleast 8 characsters";
        nmErrMsg2.style.color="red";
        assignee.style.borderColor = "red"; 
        assignee.focus(); 
        validassignee=false;
        } 
        else 
        {
               
        assignee.style.borderColor = "green";
        nmErrMsg2.innerHTML="looks good";
        nmErrMsg2.style.color="green";
        validassignee=true;
        }
});  
//Date Validation to restrict the user to choose a date from today's date or onwards 
// date is not a mandatory field , the user may leave it empty 

function datevalidation (dateElement,errorElement){
       var currentDate= new Date();
       let dueDate = new Date(dateElement.value);
       if (dueDate ==""){
        dueDate.value = new Date().toISOString().slice(0,10);
        checkValidDate = true;
        
      }
      else if (dueDate < currentDate){
        errorElement.innerHTML = "*Please choose a date from today";
        errorElement.style.color = "red";
        dateElement.focus();
        checkValidDate = false; 
     } 
      else if (dueDate >= currentDate){
        errorElement.innerHTML= " "
        checkvalidDate=true; 
      }
  }      
    //  Refreshing the fields for new entries
    function resetFields(){
        tname.value     = null;
        tdes.value      = null;
        assignee.value  = null;
        dDate.value     = null;
        sTatus.value    = null;
        nmErrMsg.innerHTML="";
        nmErrMsg1.innerHTML="";
        nmErrMsg2.innerHTML="";
        tname.style.borderColor = "lightgrey";
        tdes.style.borderColor = "lightgrey"; 
        assignee.style.borderColor = "lightgrey";  
    }
    

    // editing the fields 
    function edifunc(event){
      let taskElement = event.target.closest(".Edit");                       
      let edtIdArr = taskElement.id.split("_");                                         //spliting the id by underscore. i.e . dbuton_id 
      const retreiveId = edtIdArr[1];
      // const retreiveId=event.target.value;
    //   alert(retreiveId);
      for (let i=0; i<cardDeck.cardArr.length ; i++){
          if (retreiveId == cardDeck.cardArr[i].id) {
          document.querySelector("#tId").value    =cardDeck.cardArr[i].id;
          document.querySelector("#ename").value    = cardDeck.cardArr[i].cname ; 
          document.querySelector("#edes").value      = cardDeck.cardArr[i].description;
          document.querySelector("#eAssignee").value = cardDeck.cardArr[i].assignee;  
          document.querySelector("#edDate").value   = cardDeck.cardArr[i].dDate;    
          document.querySelector("#esTatus").value  = cardDeck.cardArr[i].stat;  
          break;
          }    
      }
      $('#ediTModal').modal('show');
  }
  
      let upDateButton = document.querySelector("#upDateButton");
      
      upDateButton.onclick = function() {
      
      let tempId = document.querySelector("#tId").value; 
      let tempname = document.querySelector("#ename").value; //accepting user input from form
      let tempdesc = document.querySelector("#edes").value; 
      let tempassign = document.querySelector("#eAssignee").value; 
      let tempdueDate = document.querySelector("#edDate").value;
      let tempstatus = document.querySelector("#esTatus").value;  
      cardDeck.updateTask(tempId, tempname,tempdesc,tempassign,tempdueDate,tempstatus);
      cardDeck.displayTask(edifunc,delfunc);
      $('#ediTModal').modal('hide');
    }

      // deleting the particular record 
       function delfunc(event){
        let taskElement = event.target.closest(".delete");                      
        let delIdArr = taskElement.id.split("_");                              
        let retreiveId = delIdArr[1];
        // alert(retreiveId);
        cardDeck.deletFunc(retreiveId);
        cardDeck.displayTask(edifunc,delfunc);
        }
 
        // displaying by status
        // const todo =   document.querySelector("#toDo");
        // todo.addEventListener("click", statusSel);
        // const inProgress = document.querySelector("#inProgress");
        // inProgress.addEventListener("click", statusSel);
        // const review=document.querySelector("#review");
        // review.addEventListener("click", statusSel);
        // const done=  document.querySelector("#done"); 
        // done.addEventListener("click", statusSel);        
        
        // function statusSel(event){
        //  let sel=event.target.value;
        //
        //  alert(sel);
        //   cardDeck.selByStatus(sel);
        //  }
        
         
      
