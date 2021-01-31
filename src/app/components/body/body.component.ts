import { Component, OnInit } from '@angular/core';
import { BodyService } from 'src/app/service/body.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public title:string='';
  public notes:string='';
  public allNotes:any;
  public trash:any;
  constructor(private bs:BodyService) { }

  ngOnInit(): void {
    this.getNotes();
    this.getTrash()
  }
  getNotes(){
    this.bs.getNotes().subscribe((data)=>{
      console.log(data);
      this.allNotes=data;
      
    })
  }
  addNotes(){
    let notes={
     title:this.title,
     notes:this.notes
    }
    this.bs.addNotes(notes).subscribe((data)=>{
      this.getNotes();
    })
  }
  deleteNotes(item:any)
  {
    this.bs.deleteNotes(item.id).subscribe((data)=>{
      this.getNotes();
      this.getTrash();
    })
  }
  addTrash(x:any)
  {
    let y={
      title:x.title,
      notes:x.notes
    }
   
     
    this.bs.addTrash(y).subscribe((data)=>{
      console.log("data is added in trash");
      
    })
  }
  getTrash(){
    this.bs.getTrash().subscribe((data)=>{
      console.log(data);
      this.trash=data;
      
    })
  }
  update(item:any)
  {
    item.title=this.title;
    item.notes=this.notes;
    this.bs.update(item.id,item).subscribe((data)=>{
      console.log("update");
      
    })
  }
 deleteTrash(item:any)
  {
    console.log(item);
    
    this.bs.deleteTrash(item.id).subscribe((data)=>{
      this.getTrash();
    })
}
addNotesTrash(u:any){
  let notes={
   title:u.title,
   notes:u.notes
  }
  this.bs.addNotes(notes).subscribe((data)=>{
    this.getNotes();
  })
}
}

