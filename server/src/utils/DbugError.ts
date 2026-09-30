export class DbugError extends Error{
    /** This error accepts a message and an HTTP Status Code  */
    statusCode: number

    constructor(message: string, statusCode: number){
        super(message);

        this.name = "DbugError"
        this.message = message;
        this.statusCode = statusCode;
    }

}
