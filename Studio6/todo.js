const todo = document.getElementById("todo");

// ListItem component now accepts a title prop
function ListItem({taskName, color, onClick}) {   
    return (
        <div
            style={{backgroundColor: color}}
            onClick={onClick}
        >
            {taskName}
        </div>
    );
}

function handleClick() {
    console.log("Clicked");
}

function handleChange(e) {
    console.log("Input changed:", e.target.value);
}

function Board() {
    const [tasks, setTasks] = React.useState(['Touch grass', 'Learn React', 'Sip boba']);
    const [newTask, setNewTask] = React.useState('');
    const [taskColors, setTaskColors] = React.useState({});
    
    const colors = [
        "#e8f5e9", // light green
        "#fff9c4", // light yellow
        "#ffebee", // light red
        "#e1f5fe", // light blue
    ];

    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const handleTaskClick = (task) => {
        setTaskColors({
            ...taskColors,
            [task]: getRandomColor(),
        });
    };


    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const handleClearTask = () => {
        setTasks([]);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };

    return (
        <div>
            <div>
                <input
                type="text"
                placeholder="Add a new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={handleKeyPress}
                />
                <button onClick={handleAddTask}>Add</button>
                <button onClick={handleClearTask}>Clear</button>
            </div>
            {tasks.map((task) => (
                <ListItem
                key={task}
                taskName={task}
                color={taskColors[task]}
                onClick={() => handleTaskClick(task)}
                />
            ))}
        </div>
    );
}

const root = ReactDOM.createRoot(todo);
// At the top level, return the board component
root.render(<Board />); 