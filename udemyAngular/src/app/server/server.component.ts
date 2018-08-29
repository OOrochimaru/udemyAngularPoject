import {Component} from '@angular/core';


@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
        .origin{
            color: green;
        
    }`]
})

export class ServerComponent{
    id: Number = 10;
    isActive = false;
    serverStatus = 'server is not created yet';
    inputTeext = 'Hello';
    serverCreated = false;
    servers = [];
    constructor(){
        setTimeout(()=>{
            this.isActive = true;
        },2000)
    }

    onClickEvent(){
        this.serverCreated = true;
        this.servers.push(this.inputTeext);
        this.serverStatus = 'server '+this.inputTeext+ ' is now created';
    }
    onInput(event: Event){
        this.inputTeext = (<HTMLInputElement> event.target).value;
    }

    getCreatedStatus(){
        return this.serverCreated ? 'red':'greed';
    }

}