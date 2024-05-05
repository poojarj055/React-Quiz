function StartScreen({numberOfQuestions, dispatch}) {
    return (
        <div className="start">
            <h2>Welcome to react Quiz !!</h2>
            <h3>{numberOfQuestions} Questions to test your react mastery</h3>
            <button className="btn btn-ui" onClick={()=> dispatch({type:'start'})}>Let's start</button>
        </div>
    )
}

export default StartScreen
