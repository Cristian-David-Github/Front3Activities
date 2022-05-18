const exercises = [
    { id: 1, name: "Introduction to JSX", url: "./SecondExercise/index.html" },


]

const displayIndex = () => {
    return (
        <div id="main">
            <span>All FrontEnd 3 Activities</span>
            <ul>
                {
                    exercises.map((exercise) => {
                        return (
                            <li key={exercise.id}><a href={exercise.url}>{exercise.name}</a> </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

//cada función debe retornar un elemento
const App = (


    <div>
        {displayIndex()}
    </div>


)

const hookedElement = document.getElementById("main");
ReactDOM.render(App, hookedElement)