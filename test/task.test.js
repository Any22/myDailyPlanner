import Card from "../task.js";

test("Task Constructor",() =>{
    const task=new Card("1","Testing with Jest", "unit testing with Jest","Saba Saeed","30-05-2021","in progress");
    expect(task.id).toBe("1");
    expect (task.cname).toBe("Testing with Jest");
    expect (task.description).toBe("unit testing with Jest");
    expect (task.assignee).toBe("Saba Saeed");
    expect (task.dDate).toBe("30-05-2021");
    expect (task.stat).toBe("in progress");
});

