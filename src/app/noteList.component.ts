import { Component } from "@angular/core";
import { NoteService } from "./note.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:'note-list',
    templateUrl:'./noteList.component.html' ,
    styleUrls:['./note.css']   
    
})
export class NoteListComponent{
  noteLists;
  constructor(private noteService:NoteService ,private activatedRoute:ActivatedRoute){}
  ngOnInit(){
   
    this.activatedRoute.params.subscribe(params=>{
      let medium= params["medium"];
      if(medium=="all"){
        this.noteLists=this.noteService.Get();
      }
      else{
        this.noteLists=this.noteService.GetByType(medium);
      }
    
    })
  }
    // noteLists=[{
    //     title:'WakeUp at 5 Am',
    //     type:'home',
    //     description:'Wake Up Early in the morning at 5am'
    //   },
    //   {
    //     title:'Leave for  Office  at 9 Am',
    //     type:'office',
    //     description:'Leave for  Office  at 9 Am so you can reach on time'
    //   },
    //   {
    //     title:'Sleep  at 10 pm',
    //     type:'home',
    //     description:'Sleep at 10 pm so you can wakeup at 5 am'
    //   }]

      onDelete(media){
        console.log(media);
      };

      AddNote(note){
       console.log(note.title)
       this.noteLists =[...this.noteLists,note];
       console.log(this.noteLists);
      }
}