
import axios from 'axios';

interface Todo{
  id:number;
  title:string;
  completed:boolean;
}
const url='https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response=>{
 const todo=response.data as Todo;
 const ID=todo.id;
 const Title=todo.title;
 const finished=todo.completed;

  logTodo(ID,Title,finished);
});

const logTodo=(ID:number,Title:string,completed:boolean)=>{

  
  console.log(`
  The Todo with ID:${ID}
  Has a title of : ${Title}
  Is it finished?: ${completed}
  `);
};