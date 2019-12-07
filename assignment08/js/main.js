const question = {
    stem: "Who is buried in Grant's Tomb?",
    option1: "Billy",
    option2: "Grant",
    correct: 2,
    display: () => {
        document.querySelector('#stem').textContent = question.stem
        //display the question options here
        document.querySelector('#answer1').textContent = question.option1
        document.querySelector('#answer2').textContent = question.option2
    },
    check: (userChoice) => {
        if (userChoice === question.correct) {
            document.querySelector(".feedback").textContent = "You are correct!"
        }
    }
}

document.querySelector('#answer1').addEventListener('click', () => question.check(1))
document.querySelector('#answer2').addEventListener('click', () => question.check(2))

question.display()
