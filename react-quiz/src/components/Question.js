import Options from "./Options"

function Question({question, answer, dispatch}) {
    return (
        <div>
            <h4>{question.question}</h4>
            <div className="options">
               <Options question={question} dispatch={dispatch} answer={answer}/>
            </div>
        </div>
    )
}

export default Question
