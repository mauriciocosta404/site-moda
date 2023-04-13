import { CreateTodoDTO } from '../DTO/CreateTodoDTO';
import { Todo } from '../model/Todo';

export interface ITodoRepositories{
    create(data:CreateTodoDTO):Promise<void>;
    delete(id:string):Promise<void>;
    update(id:string):Promise<void>;
    get():Promise<Todo[]>;
    count:number;
}

export { Todo };
