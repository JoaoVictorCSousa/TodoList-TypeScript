import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TodoList, TodoList } from "../entities/todo.entities";

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
        where: {
            id
        }
        });
        if(!TodoList)
        throw new HttpException('To Do List not found', HttpStatus.NOT_FOUND);
        return list
    }

    async create(TodoList: TodoList) : Promise<TodoList>{
        return await this.todolistRepository.save(TodoList);
    }
}