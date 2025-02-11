const TodoData = (props) => {

    console.log(">.. check props: ", props)
    return (
        <div className='todo-data'>
            <div>Learning React</div>
            <div>Watching YoutubeYoutube</div>
            <div>

                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )

}

export default TodoData;