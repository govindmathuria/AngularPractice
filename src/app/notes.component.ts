import {Component,Input,Output,EventEmitter} from '@angular/core'

@Component({
    selector:'notes',
    templateUrl:'./note.component.html',
    styleUrls:['./note.css']
    
})
export class NotesComponent{
    @Input() mediaItem;
    @Output() delete=new EventEmitter(); 
    OnDeleteMediaItem(){
        console.log('Delete of Media Item')
        this.delete.emit(this.mediaItem)
    }
}