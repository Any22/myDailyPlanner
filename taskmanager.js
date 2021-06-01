import Card from './task.js'
class CardManager{
    constructor(master) {
    this.cardArr = JSON.parse(localStorage.getItem("mytask")) || [] ;
    this.currentId = parseInt(localStorage.getItem("currentID")) || 1;
    localStorage.setItem('currentID',this.currentId);
    this.master =master;
        } 
            addcard(cname,description,assignee,dDate,stat){
                    const nCard=new Card(`nCard${this.currentId++}`,cname,description,assignee,dDate,stat);
                    localStorage.setItem('currentID',this.currentId);
                    // putting task into object array
                    let mynewtasks = JSON.parse(localStorage.getItem("mytasks")) || [];
                    mynewtasks.push(nCard);
                    // converting object array into string
                    localStorage.setItem("mytasks",JSON.stringify(mynewtasks));
                    this.cardArr.push(nCard);
            } 
                //  add is also synchronised


                //Function to update TASK
            updateTask(id,cname,description,assignee,dDate,stat) {                  
              let mynewtasks=JSON.parse(localStorage.getItem("mytasks"));
              // alert("I am in update function");
                for (let i=0; i<mynewtasks.length;i++) {
                    if(mynewtasks[i].id === id) 
                      {
                        mynewtasks[i].cname = cname;
                        mynewtasks[i].description = description;
                        mynewtasks[i].assignee = assignee;
                        mynewtasks[i].dDate = dDate;
                        mynewtasks[i].stat = stat;
                        localStorage.setItem("mytasks",JSON.stringify(mynewtasks));
                        this.cardArr[i].id = id;
                        this.cardArr[i].cname = cname;
                        this.cardArr[i].description = description;
                        this.cardArr[i].assignee = assignee;
                        this.cardArr[i].dDate = dDate;
                        this.cardArr[i].stat = stat;
                        break;
                      }
                }
              }
      
            deletFunc(id)
            {
                this.cardArr=this.cardArr.filter(m => m.id !== id);                       // filtering all tasks other than selected id which is passed throught function
                let mynewtasks=JSON.parse(localStorage.getItem("mytasks"));           // retrieving/reading tasks from localstorage 
                mynewtasks=mynewtasks.filter(m => m.id !== id);                       // filtering all tasks and saving it in mynewtasks
                localStorage.setItem("mytasks",JSON.stringify(mynewtasks));
            }     //deletion is synchronised in array and memory
            
            // displayListHtml(){
            //     this.master.innerHTML ="";
            //     if (this.cardArr ==='')
            //     {
            //       this.currentId=1;
            //     }
            //     else
            //     {
            //     for (let i=0 ; i< this.cardArr.length ; i++){
            //         const nCard = new Card (this.cardArr[i].id,
            //             this.cardArr[i].cname,
            //             this.cardArr[i].description 
            //         );
            //     let taskElement = nCard.toElement();
            //     this.master.append(taskElement);
            
            //       }
            //     } 
            //   }
            //   }

            //     displayTask(edifunc,delfunc){
            //       this.master.innerHTML ="";                                           //refreshing page content 
            //       let mynewtasks= JSON.parse(localStorage.getItem("mytasks"));   
            //        this.cardArr=mynewtasks;
                
            //     for (let i=0 ; i<mynewtasks.length ; i++){
            //                  const nCard = new Card (mynewtasks[i].id,
            //                   mynewtasks[i].cname,
            //                   mynewtasks[i].description,
            //                   mynewtasks[i].assignee,
            //                   mynewtasks[i].dDate,
            //                   mynewtasks[i].stat
            //               );
            //           let taskElement = nCard.toElement(edifunc,delfunc);
            //           this.master.append(taskElement);
              
            //     }
            //   }
              displayTask(edifunc,delfunc){
                  this.master.innerHTML ="";                                           //refreshing page content 
                  let mynewtasks= JSON.parse(localStorage.getItem("mytasks"));   
                   this.cardArr=mynewtasks;
                if (this.cardArr.length === 0)
                alert("Enter something , there is nothing saved previously");
                for (let i=0 ; i<this.cardArr.length ; i++){
                             const nCard = new Card (this.cardArr[i].id,
                              this.cardArr[i].cname,
                              this.cardArr[i].description,
                              this.cardArr[i].assignee,
                              this.cardArr[i].dDate,
                              this.cardArr[i].stat
                          );
                      let taskElement = nCard.toElement(edifunc,delfunc);
                      this.master.append(taskElement);
              
                }
              }
            
          //   selByStatus(sel){
          //   //  alert(sel);
          //   let taskElementByStatus;
          //   this.master.innerHTML = "";
          //   this.cardArr.forEach((nCard) => {
          //     if (nCard.status === sel){
          //      taskElementByStatus = nCard.toElement();
          //     this.master.append(taskElementByStatus);
          //     }
            
          // });

          //    }

              // displayFilter(tasks){
              // this.master.innerHTML="";
              //    for(let i=0; i< taskBs.length;i++){
              //         const nCard = new Card(
              //             taskBs[i].id,
              //             taskBs[i].cname,
              //             taskBs[i].description,
              //             taskBs[i].status         
                         
              //         );
              //    let taskElement = nCard.toElement();
              //    this.master.append(taskElement);
              //         }
              //       }
        
          }
          export default CardManager;