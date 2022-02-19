import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreatecategoryService {
    constructor( private categoriesRepository: ICategoriesRepository ) {
        this.categoriesRepository = categoriesRepository;
    }

    execute({ name, description }: IRequest): void {
        
        const categoryAlreadyExists = this.categoriesRepository.findByname(name);

        if(categoryAlreadyExists) {
            throw new Error('Category already exists');
        }
    
        this.categoriesRepository.create({ name, description })
    }
}

export { CreatecategoryService };