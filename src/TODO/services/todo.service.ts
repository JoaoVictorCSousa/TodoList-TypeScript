import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
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
            where: id
        })
    }
}