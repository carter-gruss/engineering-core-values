import {Product} from './product'

export interface ProductDao {

    findById(id: number): Product | undefined

    findAll(): Product[]

}