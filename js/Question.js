class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No....");
    this.question = createElement('h3');
    this.option1 = createElement('h1');
    this.option2 = createElement('h2');
    this.option3 = createElement('h3');
    this.option4 = createElement('h4');
    this.button = createButton('Submit');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("My Quiz Game");
    this.title.position(350, 0);

    this.question.html("Question : What starts and ends with a letter E but has only one letter ?");
    this.question.position(150,80);
    
    this.option1.html("1: Everyone");
    this.option1.position(150,100);

    this.option2.html("2: Envelope");
    this.option2.position(150,130);

    this.option3.html("3: Estimate");
    this.option3.position(150,160);

    this.option4.html("4: Eample");
    this.option4.position(150,190);

    this.input1.position(150, 400);
    this.input2.position(500, 400);
    this.button.position(400, 450);

    this.button.mousePressed(()=>{
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.html("Thank you, your answer has been submitted");
    this.message.position(200,500);
    })


  }
}
