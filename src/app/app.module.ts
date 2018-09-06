import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotesComponent } from "./notes.component";
import {NoteListComponent  } from "./noteList.component";
import { HeaderPipe } from "./header.pipe";
// Form Module is for Template Driven and Reactive Form Module is for Model Driven
import { ReactiveFormsModule } from "@angular/forms";
import { AddNote } from "./addNote.component";
import { NoteService } from "./note.service";
import { routing } from "./app-routing";

@NgModule({
  declarations: [
    AppComponent,NotesComponent,NoteListComponent,HeaderPipe,AddNote
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,routing
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
