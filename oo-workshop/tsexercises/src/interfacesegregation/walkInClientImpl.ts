import {InPersonInterface} from './storeInterface'

export class WalkInClientImpl implements InPersonInterface{
    //a more complete solution may use the shopping cart from the domain modeling exercise
    public customer: string
    public product: string
    public price: string

    public constructor(name: string, food: string, price: string){
        this.customer = name
        this.product = food
        this.price = price
    }
    
    public walkInCustomerOrder(): string{
        const message = "Walk-in order from " + this.customer + " for " + this.product
        return message
    }

    public payInPerson(): string{
        const message = "In-person payment for $" + this.price + " processed"
        return message
    }
}
