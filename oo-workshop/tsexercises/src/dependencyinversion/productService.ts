import {Product} from './product'
import { ProductDao } from './productdao'
export class ProductService {
    private productDao: ProductDao

    public constructor(productDao: ProductDao){
        this.productDao = productDao
    }

    public findById(id: number): Product | undefined{
        return this.productDao.findById(id)
    }

    public findAll(): Product[]{
        return this.productDao.findAll()
    }

}