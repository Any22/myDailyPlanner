export default class Card {
        constructor(id,cname,description,assignee,dDate,stat)
        {
        this.id = id ;
        this.cname  = cname ;
        this.description=description;
        this.assignee = assignee;
        this.dDate=dDate;
        this.stat= stat;
        }
        htmlString() {
            let html="";
                    html = `<div id ="cList_${this.id}" class="card">
                    <h1 class="heading">${this.cname}</h1>
                    <p>${this.description}</p>
                    <p>${this.assignee}</p>
                    <p>${this.dDate}</p>
                    <p>${this.stat}</p>
                    <p><button class="Edit"    id="ebutton_${this.id}"><i class="fa fa-edit"></i></button></p>
                    <p><button class="delete"  id="dbutton_${this.id}"><i class="fa fa-trash"></i></button></p>
                     </div>`;
                     return html;
         }
         toElement(edifunc,delfunc) {
            const htmlElement = this.htmlString(); 
            const element = document.createRange().createContextualFragment(htmlElement);
            element.querySelector("button.Edit").addEventListener("click", edifunc);
            element.querySelector("button.delete").addEventListener("click", delfunc);
            return element;
        }
    }
    