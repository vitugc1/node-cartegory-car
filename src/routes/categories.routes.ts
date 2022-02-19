import { Router } from 'express';
import { CreatecategoryService } from '../modules/cars/services/CreateCategoryService';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name , description } = request.body;

    const createCategoryService = new CreatecategoryService(categoriesRepository);

    createCategoryService.execute({ name, description })

    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => { 
    const all = categoriesRepository.list();

    return response.json(all);
})


export { categoriesRoutes };