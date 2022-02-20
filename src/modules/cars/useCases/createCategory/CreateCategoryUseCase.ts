import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreatecategoryUseCase {
    constructor( private categoriesRepository: ICategoriesRepository ) {}

    execute({ name, description }: IRequest): void {
        
        const categoryAlreadyExists = this.categoriesRepository.findByname(name);

        if(categoryAlreadyExists) {
            throw new Error('Category already exists');
        }
    
        this.categoriesRepository.create({ name, description })
    }
}

export { CreatecategoryUseCase };