"use client"

import { useState } from "react";

interface Task {
    id: number;
    title: string;
    complited: boolean;
}

const Contact = () =>{
        const [tasks,setTasks] = useState<Task[]>([]);
        const [newTask,setNewTask] = useState('');

        const addTask = () => {
            setTasks([
                ...tasks,{id:Date.now() ,title:newTask ,complited:false}
            ])
            setNewTask("")
        }

        const deleteTask = (taskId:number) => {
            setTasks(tasks.filter(task => task.id !== taskId))
        }

        const complited = (tasksId:number) => {
            setTasks(tasks.map((task)=>{
                return task.id === tasksId ? {...task , complited:!task.complited } : task;
            }));
        } 
        return (
            <div>
                <input type="text" 
                value={newTask}
                onChange={(e:any)=>{setTasks(e.target.value)}}
                placeholder="enter the nubmer"

                />
                <button onClick={addTask}></button>
                <div>task</div>
                {tasks.map((task)=>(
                    <li key={task.id}>
                        <p>{task.title}</p>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                        <button>Complit</button>
                    </li>
                ))}
            </div>
        )
}

export default Contact;