import { Component, OnInit } from '@angular/core';
import { BodyService } from 'src/app/service/body.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private bs:BodyService) { }

  ngOnInit(): void {
  }
 
}
