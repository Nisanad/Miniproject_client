import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";

const Order = () => {
  let initTasks = [{ id: 1, name: "Pizza Hawaiian",
                     id: 2, name: "Pizza Double Pepperoni",
                      id: 3, name: "Pizza Double Cheese" 
                    }];

  const [name, setName] = useState("");
  const [tasks, setTasks] = useState(initTasks);
  const [pictur, setpictur] = useState(initTasks);
  const [idEdit, setIdEdit] = useState(-1);

  const addTask = () => {
    console.log("add");
    if (name == "") return;
    if (tasks.length == 0) setTasks([{ id: 1, name }]);
    else setTasks([...tasks, { id: tasks[tasks.length - 1].id + 1, name }]);
    console.log("new task: ", tasks);
  };



  const deleteTask = (id) => {
    console.log("Delete", id);
    const newTasks = tasks.filter((item) => +item.id !== +id);
    setTasks(newTasks);
  };


 

  const renderTask = () => {
    // if( tasks !== null)
    console.log(idEdit);
    return tasks.map((item, index) => (
      <div key={index} className="relative m-4 border-2  p-8">
       
        {+idEdit !== +item.id ? (
          <div className="text-3xl text-indigo-800 drop-shadow-lg max-w-xs">
            {item.name}
          </div>
        ) : (
          <input
            className="text-3xl text-indigo-800"
            type="task"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <div className="mt-8 flex justify-center">
          <button
            className="mr-4 p-2 bg-red-400 hover:text-indigo-500 rounded-lg drop-shadow-lg"
            onClick={() => deleteTask(item.id)}
          >
            Delete
          </button>
          
        </div>
      </div>
    ));
  };

  return (
    <body>
      <div className={styles.header}>
        <Navbar />
      </div>

      <div className="h-screen bg-yellow-200 flex flex-col items-center">
        <h1 className="m-8 text-indigo-800 text-4xl drop-shadow-lg">
          Your Order
        </h1>
        <div className="flex w-2/3 justify-center mb-8">
          <input
            className="w-1/3 rounded-lg border-2 pl-2 ml-2 mr-4"
            type="text"
            name="task"
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="bg-green-600 text-indigo-200 hover:text-indigo-500 p-2 rounded-lg "
            onClick={addTask}
          >
            Add Menu
          </button>
        </div>

        <ul className="flex flex-wrap mb-8">{renderTask()}</ul> 
        <div>
         <a href="./TotalOrder">
      <button  className="bg-yellow-600 text-black hover:text-white p-2 rounded-lg">Total Order</button> </a>
      </div>
   
      </div>
     
   
    </body>
  );
};

export default Order;
