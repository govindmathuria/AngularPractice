export class NoteService {
    
    noteLists=[{
        title:'WakeUp at 5 Am',
        type:'home',
        description:'Wake Up Early in the morning at 5am'
      },
      {
        title:'Leave for  Office  at 9 Am',
        type:'office',
        description:'Leave for  Office  at 9 Am so you can reach on time'
      },
      {
        title:'Sleep  at 10 pm',
        type:'home',
        description:'Sleep at 10 pm so you can wakeup at 5 am'
      }]

      onDelete(media){
        console.log(media);
      };

      AddNote(note){
       console.log(note.title +'its from service')
       this.noteLists =[...this.noteLists,note];
       console.log(this.noteLists);
      }
      Get(){
        return this.noteLists;
      }
      GetByType(type:string){
        return this.noteLists.filter(x=>x.type==type);
      }
}