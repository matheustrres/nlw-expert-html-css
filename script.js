const questions = [
  {
    question: "Qual é a forma correta de declarar uma variável em JavaScript?",
    answers: ["var myVar;", "let myVar;", "const myVar;"],
    correctAnswer: 1,
  },
  {
    question:
      "Qual destes métodos é utilizado para adicionar um elemento ao final de um array em JavaScript?",
    answers: ["push()", "append()", "addToEnd()"],
    correctAnswer: 0,
  },
  {
    question: "Qual é a saída do seguinte código?\n\nconsole.log(2 + '2');",
    answers: ["'22'", "4", "'4'"],
    correctAnswer: 0,
  },
  {
    question: "Qual é o operador de comparação estrita em JavaScript?",
    answers: ["==", "===", "!="],
    correctAnswer: 1,
  },
  {
    question:
      "Como você chama uma função que é definida dentro de um objeto em JavaScript?",
    answers: ["Método", "Função externa", "Método de objeto"],
    correctAnswer: 0,
  },
  {
    question: "Qual é o resultado de 5 + '5' em JavaScript?",
    answers: ["10", "'10'", "55"],
    correctAnswer: 1,
  },
  {
    question:
      "Qual método JavaScript é usado para remover o último elemento de um array e retorná-lo?",
    answers: ["pop()", "shift()", "removeLast()"],
    correctAnswer: 0,
  },
  {
    question:
      "Qual é a forma correta de fazer um comentário de uma linha em JavaScript?",
    answers: [
      "/* This is a comment */",
      "// This is a comment",
      "<!-- This is a comment -->",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Qual é a função utilizada para converter uma string em um número em JavaScript?",
    answers: ["toInt()", "parseInteger()", "parseInt()"],
    correctAnswer: 2,
  },
  {
    question: "Qual é o operador lógico 'E' em JavaScript?",
    answers: ["&&", "||", "!"],
    correctAnswer: 0,
  },
]

const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")

for (const item of questions) {
  const quizItemClone = template.content.cloneNode(true)
  quizItemClone.querySelector("h3").textContent = item.question

  for (const answer of item.answers) {
    const dtClone = quizItemClone.querySelector("dl dt").cloneNode(true)
    dtClone.querySelector("span").textContent = answer

    quizItemClone.querySelector("dl").appendChild(dtClone)
  }

  quizItemClone.querySelector("dl dt").remove()

  quiz.appendChild(quizItemClone)
}
