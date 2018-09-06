import { Routes,RouterModule } from "@angular/router";
import { AddNote } from "./addNote.component";
import {NoteListComponent  } from "./noteList.component";
const appRoutes:Routes=[
    {path:'add',component:AddNote},
    {path:'notes/:medium',component:NoteListComponent},
    {path:'',pathMatch:'full',redirectTo:'notes/all'}
];

export const routing=RouterModule.forRoot(appRoutes);