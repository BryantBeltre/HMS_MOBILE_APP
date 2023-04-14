import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuetiongameService } from 'src/app/services/quetiongame.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  questions: any = [];
  questiontitle: any;
  answer: any;
  help: any;
  questionNumber: any;
  formSendAnswer: FormGroup;


  urlImg: string = '../../assets/img/minion-bienvenido.gif';
  correctAnswer: string = '';
  siguiente = false;

  answer1: number = 0;
  answer2: number = 1;
  answer3: number = 2;

  option1: any;
  option2: any;
  option3: any;

  constructor(
    private question: QuetiongameService,
    public formBuilder: FormBuilder,
    private alertController: AlertController
  ) {
    this.formSendAnswer = this.formBuilder.group({
      answer: ["", Validators.required],
    });
  }



  ngOnInit() {
    this.questionNumber = localStorage.getItem("questionNumber");
    if(!this.questionNumber){
      this.questionNumber = 0;

    }
    this.getQuestion();
    this.getAnswer();

  }

  getAnswer() {
    this.question.getQuestions().subscribe(
      (res) => {
        this.option1 = this.questions[this.answer1].answer;
        this.option2 = this.questions[this.answer2].answer;
        this.option3 = this.questions[this.answer3].answer;
      }, (err) => {
        console.log("Error: ", err)
      });
  }

  getQuestion() {
    this.question.getQuestions().subscribe(
      (res) => {
        this.questions = res;
        this.questiontitle = this.questions[this.questionNumber].question;
        this.answer = this.questions[this.questionNumber].answer;
        this.help = this.questions[this.questionNumber].help;
        console.log(this.questions)
      }, (err) => {
        console.log("Error: ", err)

      });
  }
  next() {
    this.questionNumber = ++this.questionNumber;
    localStorage.setItem("questionNumber", this.questionNumber);
    this.getQuestion();
    this.siguiente = false;
    this.answer1 = ++this.answer1;
    this.answer2 = ++this.answer2;
    this.answer3 = ++this.answer3;
    this.getAnswer();
  }

  helpaction() {
    this.presentAlert();

  }

  sendAnswer() {
    let value = this.formSendAnswer.value;
    console.log("Respuesta enviada: ", value);

    if (value.answer == this.answer) {
      this.correctAnswer = 'Respuesta Correcta!!!!!';
      this.urlImg = '../../assets/img/miniounscongrats.gif';
      this.siguiente = true;
    } else {
      this.correctAnswer = 'Respuesta Incorrecta';
      this.urlImg = '../../assets/img/nocongratsminiuns.gif';
      this.siguiente = false;
    }

  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Ayuda',
      subHeader: 'Pista de la pregunta',
      message: this.help,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
