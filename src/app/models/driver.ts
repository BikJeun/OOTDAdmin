import { SaleTransaction } from "./sale-transaction";

export class Driver {
    driverId: number;
    firstName: string;
    lastName: string;
    age: number;
    username: string;
    password: string;
    profilePicture: string;
    salt: string;
    monthlyEarnings: number;
    active: boolean;

    saleTransaction: SaleTransaction[];


    constructor(
        driverId: number,
        firstName: string,
        lastName: string,
        age: number,
        username: string,
        password: string,
        profilePicture: string,
        salt: string,
        monthlyEarnings: number,
        active: boolean,
        saleTransaction: SaleTransaction[]
    ) {
        this.driverId = driverId
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.username = username
        this.password = password
        this.profilePicture = profilePicture
        this.salt = salt
        this.monthlyEarnings = monthlyEarnings
        this.active = active
        this.saleTransaction = saleTransaction
    }

}
