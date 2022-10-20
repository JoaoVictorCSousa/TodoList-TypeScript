import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { TodoList } from "../entities/todo.entities";

@Injectable()
export class TodoListService {
    constructor(
        @InjectRepository(TodoList)
        private todolistRepository: Repository<TodoList>
    ){}

    async findAll(): Promise<TodoList[]> {
        return await this.todolistRepository.find()

    }

    async findById(id: number): Promise<TodoList>{
        let list = await this.todolistRepository.findOne({
        where: {id}
        });
        if(!list)
        throw new HttpException('To Do List not found', HttpStatus.NOT_FOUND);
        return list
    }

    async create(TodoList: TodoList) : Promise<TodoList>{
        return await this.todolistRepository.save(TodoList);
    }

    async update (TodoList: TodoList) : Promise<TodoList>{
    let searchTodoList = await this.findById(TodoList.id);

    if(!searchTodoList || !TodoList.id)
    throw new HttpException('To Do List ID not found', HttpStatus.NOT_FOUND);

    return await this.todolistRepository.save(TodoList); 

    }

    async delete (id: number) : Promise <DeleteResult> {
        let searchTodoList = await this.findById(id)

        if(!searchTodoList)
            throw new HttpException('To Do List not found', HttpStatus.NOT_FOUND);
        return await this.todolistRepository.delete(id)
    }
}