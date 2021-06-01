import CardManager from '../taskmanager.js';
import path from 'path';
import fs from 'fs';
const html=fs.readFileSync(path.resolve(__dirname,"../index.html"),"utf-8");

beforeEach(()=>{
    // localStorage.clear();
    // document.documentElement.innerHTML = html.toString();
});

// checking object of CardManager exists here 
test("object exists",() =>{
    const tm= new CardManager();
    tm.cardArr=[];
    tm.addcard("task1","testing the app", "testing with Jest is being done","Saba Saeed", "01-06-2021","In progress")
    expect(tm.cardArr.length).toBe(1);
});

 //Testing display 
    test("HTML element is added to page ",() => {
        let taskcontainer = document.querySelector("#taskcontainer");
        const testTm= new CardManager(taskcontainer);
        testTm.addcard ("shopping","gotocoles","Saba","03-09-2020","to do");
        testTm.displayListHtml();
        expect(taskcontainer.children.length).toBe(1);
    
});

//Test Add function here:
test("Task Addition", () => {
    const testTm = new CardManager();
    testTm.cardArr=[];
    //Add task first
    testTm.addcard("Task Name 1", "To buy groceries for this week", "Saba Akhtar", "20/08/2020", "todo");
    //Verify the task added
    expect (testTm.cardArr[0].cname).toBe("Task Name 1");
    expect (testTm.cardArr[0].description).toBe("To buy groceries for this week");
    expect (testTm.cardArr[0].assignee).toBe("Saba Akhtar");
    expect (testTm.cardArr[0].dDate).toBe("20/08/2020");
    expect (testTm.cardArr[0].stat).toBe("todo");
        
    //Verify the tasks array length
    expect(testTm.cardArr.length).toBe(1);
});

//Testing update function here:
//a. Testing the choosen card should be updated if the id matches
    test("card id should matches the task to update", () => {
        let id;
        const testTm= new CardManager();
        testTm.cardArr=[];
        testTm.updateTask ("nCard1","carwash","gotocarwash","Saee","04-09-2020","to do");
        expect(testTm.cardArr.id).toEqual(id);
    });

//b.Checking whether card is updating or not
    test("checking for updated values", () => {
        const testTm= new CardManager();
        testTm.cardArr=[];
        testTm.addcard("nCard1","Grocery","go to Woolies","Saba","02-09-2020","in progress");
        testTm.updateTask ("nCard1","carwash","go to carwash","Saeed","02-09-2020","to do");
        expect (testTm.cardArr[0].id).toBe("nCard1");
        expect (testTm.cardArr[0].cname).toBe("carwash");
        expect (testTm.cardArr[0].description).toBe("gotocarwash");
        expect (testTm.cardArr[0].assignee).toBe("Saeed");
        expect (testTm.cardArr[0].st).toBe("to do");
    });

    //Testing deletefunction here
    test("card id should matches the task to delete", () => {
        let id;
        const testTm= new CardManager();
        testTm.cardArr=[];
        testTm.deletFunc ("nCard1");
        //checking here exact or deep equality
        expect(testTm.cardArr.id).toEqual(id);                           
        });


    test("after deletion the array lenght should be reduced by one", () => {
        const testTm= new CardManager();
        testTm.cardArr=[];
        testTm.addcard("nCard1","Grocery","gotoWoolies","Saba","02-09-2020","to do later");
        testTm.addcard("nCard2","CarWash","gotoShell","Saeed","02-09-2020","to do");
        testTm.deletFunc ("nCard1");
        expect(testTm.cardArr.length).toBe(1);
    });
