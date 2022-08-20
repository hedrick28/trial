import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { NxMyLibService } from './nx-my-lib.service';

@Component({
  selector: 'nx-nx-my-lib',
  template: `
  
  `,
  styles: [
  ]
})
export class NxMyLibComponent implements OnInit {
  @Input() id : number | undefined;
  constructor(private service: NxMyLibService) { }

  ngOnInit(): void {
  
    
  }



}


