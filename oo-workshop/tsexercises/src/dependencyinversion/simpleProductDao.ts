import {Product} from './product'
import { ProductDao } from './productdao'

export class SimpleProductDao implements ProductDao{
    private products: Map<number, Product>

    constructor(products: Map<number, Product>){
        this.products = products
    }

    findById(id: number): Product | undefined{
        return this.products.get(id)
    }

    findAll(): Product[] {
        return Array.from(this.products.values())
    }

}

export class SomethingElseDao implements ProductDao{
    private products: Product[]

    constructor(products: Product[]){
        this.products = products
    }

    findById(id: number): Product | undefined{
        return new Product('Any String Value')
    }

    findAll(): Product[] {
        return Array.from(this.products.values())
    }
}