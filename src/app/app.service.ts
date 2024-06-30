import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class AppService {

    public behaviourSub = new BehaviorSubject(false);

    updateMode(value: boolean) {
        this.behaviourSub.next(value);
        console.log(value)
    }

}
