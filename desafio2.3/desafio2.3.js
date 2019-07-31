/*
Vamos a construir un juego de test en la consola!
1. Construir un constructor Question que descreiba la pregunta. Debde incluir:
- question
- array de answers (u objeto)
- respuesta correcta
2 Crear un par de preguntas utilizando el constructor
3. Guardar las preguntas en un array
4. Seleccionar una pregunta aleatoria del array, y crear un método (mediante prototype) displayQuestion para pintarla por consola y a continuación las posibles respuestas (pista: para crear un número de pregunta aleatorio de un array: var n = Math.floor(Math.random() * questions.length);)
5. Usar prompt para que el usuario pueda elegir una opción. (pista: se debe cambiar el tipo del valor devuelto por prompt: parseInt)
6. Crear un método mediante prototype que corriga la respuesta e indique si hemos acertado o no.
*/


(function() {
  function Question(question, answers, correct) {
      this.question = question;
      this.answers = answers;
      this.correct = correct;
  }
  Question.prototype.displayQuestion = function() {
      console.log(this.question);
      for (var i = 0; i < this.answers.length; i++) {
          console.log(i + ': ' + this.answers[i]);
      }
  }
  Question.prototype.checkAnswer = function(ans) {
      if (ans === this.correct) {
          console.log('Correct answer!');
      } else {
          console.log('Wrong answer. Try again :)')
      }
  }
  var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                        ['Yes', 'No'],
                        0);
  var q2 = new Question('What is the name of this course\'s teacher?',
                        ['John', 'Micheal', 'Jonas'],
                        2);
  var q3 = new Question('What does best describe coding?',
                        ['Boring', 'Hard', 'Fun', 'Tediuos'],
                        2);
  var questions = [q1, q2, q3];
  var n = Math.floor(Math.random() * questions.length);
  questions[n].displayQuestion();
  var answer = parseInt(prompt('Please select the correct answer.'));
  questions[n].checkAnswer(answer);
})();