import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public makeSearch(textValue:string):void{
    let text:string=textValue.split(' ')
    .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join('+');
    console.log(text)
    //this.router.navigateByUrl(`/search/${text}`);
    this.router.navigateByUrl(`/search/${text}`);
  }
}
