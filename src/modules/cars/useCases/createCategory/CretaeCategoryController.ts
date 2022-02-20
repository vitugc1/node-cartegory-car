import { Request, Response } from 'express';

import { CreatecategoryUseCase } from './CreateCategoryUseCase';

class CreatecategoryController {
    constructor(private createcategoryUseCase: CreatecategoryUseCase) {

    }
    handle(request: Request, response: Response): Response {
        const { name , description } = request.body;

        this.createcategoryUseCase.execute({ name, description })

        return response.status(201).send();
    }
}

export { CreatecategoryController };