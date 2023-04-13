import { CreateTodoDTO } from "../../DTO/CreateTodoDTO";
import { ITodoRepositories } from "../ITodoRepositories";
import { Todo } from "../ITodoRepositories";

export class TodoRepositories implements ITodoRepositories{
    private todoList:Todo[]=[];
    public count=0;

    async create({name,description,status}:CreateTodoDTO){
        const todo=new Todo(name,description,status);

        Object.assign(todo,{
            name,
            description,
            status
        })

        this.todoList.push(todo);
        this.count++;
    }
    async update(id:string){

    }
    async delete(id:string){
        this.todoList=this.todoList.filter((item)=>item.id===id);       
    }
    async get(){
        return this.todoList;
    }
}