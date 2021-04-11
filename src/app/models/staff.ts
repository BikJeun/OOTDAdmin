import { AccessRightEnum } from "./access-right-enum.enum";

export class Staff {
    // staffId: number | undefined;
    // firstname: string | undefined;
    // lastName: string | undefined;
    // username: string | undefined;
    // password: string | undefined;
    // salt: string | undefined;
    // accessRightEnum: AccessRightEnum | undefined;

    staffId: number;
    firstname: string;
    lastName: string;
    username: string;
    password: string;
    type: AccessRightEnum;



    constructor(staffId: number, firstname: string, lastName: string, username: string, password: string, accessRightEnum: AccessRightEnum) {
        this.type = accessRightEnum;
        this.staffId = staffId;
        this.firstname = firstname;
        this.lastName = lastName;
        this.username = username;
        this.password = password;

    }



}
