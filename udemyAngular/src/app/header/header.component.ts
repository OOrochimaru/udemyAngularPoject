import {Component, Output, EventEmitter} from '@angular/core';
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
})

export class HeaderComponent{
    @Output('rcpe') r = new EventEmitter<string>(); 
    
    onReciepes(recipe: string){
     this.r.emit(recipe);
    }
}