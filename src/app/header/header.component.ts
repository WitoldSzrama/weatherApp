import { Component, OnInit } from '@angular/core';
import { AccessService } from '../shared/access.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private acessService:AccessService) { }

  ngOnInit() {
  }

  lookFor(val){
    this.acessService.searchRes(val);
    
  }

}
