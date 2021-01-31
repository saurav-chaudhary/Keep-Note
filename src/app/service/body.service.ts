import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BodyService {

  constructor(private http: HttpClient) { }
  getNotes(){
    return this.http.get(" http://localhost:3000/notes");
  }
  addNotes(item:any){
    return this.http.post(" http://localhost:3000/notes",item);
  }
  deleteNotes(id:number)
  {
    return this.http.delete(`http://localhost:3000/notes/${id}`)
  }
  addTrash(item:any)
  {
    console.log(item);
    
    return this.http.post("http://localhost:3000/trash",item)
  }
  getTrash()
  {
    return this.http.get(" http://localhost:3000/trash");
  }
  update(id:number,item:any)
  {
    return this.http.put(`http://localhost:3000/notes/${id}`,item)
  }
  deleteTrash(id:number)
  {
    return this.http.delete(`http://localhost:3000/trash/${id}`)
  }
}
