export interface OnlineStoreInterface {
    acceptOnlineOrder(): string
    payOnline(): string
  
}
export interface InPersonInterface {
    walkInCustomerOrder(): string
    payInPerson(): string
}

//potential solution for abstracting interface
export interface AcceptOrder {

}
//potential solution for abstracting interface
export interface AcceptPayment {

}