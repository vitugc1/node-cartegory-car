import { CategoriesRepository } from "../../repositories/implamentations/CategoriesRepository";
import { CreatecategoryUseCase } from "./CreateCategoryUseCase";
import { CreatecategoryController } from "./CretaeCategoryController";

const categoryRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreatecategoryUseCase(categoryRepository);
const createCategoryController = new CreatecategoryController(createCategoryUseCase)

export { createCategoryController }