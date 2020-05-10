import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  
  quizlist= [
    {
      ID: 1,  question: " Which is the largest country in the world by population?", anslistobj: ["India", "USA", "China", "Russia"], answer: "China"
    },
    {
      ID: 2, question: "When did the second world war end?", anslistobj: ["1945", "1939", "1944", "1942"], answer: "1945"
    },
    {
      ID: 3,  question: "Which was the first country to issue paper currency?", anslistobj: ["USA", "France", "Italy"," China"], answer: "China"
    },
    {
      ID: 4,  question: " Which city hosted the 1996 Summer Olympics?", anslistobj: ["Atlanta", "Sydney", "Athens", "Beijing"], answer: "Atlanta"
    } ,
    {
      ID: 5, question: " Who invented telephone?", anslistobj: [ "Albert","Einstein", "Alexander Graham Bell", "Isaac Newton", "Marie Curie"], answer: "Alexander Graham Bell"
    }
  ];
  answerkey = [];
  check(e, str: String,ID) {
    debugger;
    if (e.target.checked) {
        this.answerkey.push({id:ID,value:e.target.defaultValue});
           }
   
    this.answerkey = this.answerkey.reduce((acc, current) => {
  const x = acc.find(item => item.id === current.id);
  if (!x) {
    return acc.concat([current]);
  } else {
    return acc;
  }
}, []);
    console.log(this.answerkey);
    
  }
  showquiz:boolean=false;
  showQuiz(){
this.showquiz=true;
  }
   marks: number = 0;
  generatemark() {
    for (var i = 0; i < this.answerkey.length; i++) {
      for(var j=0;j<this.quizlist.length;j++){
        if((this.answerkey[i].id==this.quizlist[j].ID)&&(this.answerkey[i].value==this.quizlist[j].answer)){
          if(this.marks==0){
            this.marks=1;
          }
          this.marks++;
        }
      }
      
    }
    //alert("your score is "+JSON.stringify(this.marks));
    document.writeln("your score is " + this.marks);
  } 
}
