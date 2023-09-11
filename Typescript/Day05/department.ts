export class Department{

    private role:string;

    constructor(r:string){
        this.role=r;
    }

    //setter & getter
    getRole(){
        return this.role;
    }

    setRole(r:string){
        this.role=r;
    }

}