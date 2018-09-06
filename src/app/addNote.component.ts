import { Component,Output,EventEmitter } from "@angular/core";
import { FormGroup,FormControl,Validators } from "@angular/forms";
import { NoteService } from "./note.service";
import { Router } from "@angular/router";
@Component({
    selector:"addNote",
    templateUrl:`./addNote.component.html`
})
export class AddNote{
    constructor(private noteService:NoteService,private router:Router ){}
    @Output() Add=new EventEmitter();
    form;
    ngOnInit(){
        this.form=new FormGroup({
            title:new FormControl('',Validators.required),
            description:new FormControl(''),
            type:new FormControl('')

        });
    }
    AddNote(note){
        //this code is commited for services
    //     console.log(note);
    //    this.Add.emit(note)
    this.noteService.AddNote(note);
    this.router.navigate(['/','notes',note.type]);
    console.log('Added')
      }
}