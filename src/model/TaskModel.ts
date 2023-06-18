export default class TaskModel {
    name: string;
    complete: boolean;
    id?: number

    constructor(name: string) {
        this.name = name; this.complete = false;
    }
}