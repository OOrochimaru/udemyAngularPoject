import {Component} from '@angular/core';


@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
})

export class ServerComponent{
    id: Number = 10;
    isActive = false;
    serverStatus = 'server is not created yet';
    inputTeext = 'Hello';
    constructor(){
        setTimeout(()=>{
            this.isActive = true;
        },2000)
    }

    onClickEvent(){
        this.serverStatus = 'server is created now';
    }
    onInput(event: Event){
        this.inputTeext = (<HTMLInputElement> event.target).value;
    }

}