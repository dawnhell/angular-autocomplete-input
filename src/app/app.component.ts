import { Component, ElementRef, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(document:click)': 'handleClick($event)',
  },
})
export class AppComponent implements OnInit {
  public query = '';
  public states = [];
  public filteredList = [];
  public elementRef;

  constructor(myElement: ElementRef, private _appService: AppService) {
    this.elementRef = myElement;
  }

  ngOnInit () {
    this._appService.getStates().subscribe(
      data => {
        this.states = data;
        console.log('Fetched states from service');
      },
      error => {
        console.log('Error: ', error);
      }
    );
  }

  filter() {
    if (this.query !== '') {
      this.filteredList = this.states.filter(function(el) {
        return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      }.bind(this));
    } else {
      this.filteredList = [];
    }
  }

  select(item) {
    this.query = item;
    this.filteredList = [];
  }

  handleClick(event) {
    let clickedComponent = event.target;
    let inside = false;
    do {
      if (clickedComponent === this.elementRef.nativeElement) {
        inside = true;
      }
      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
    if (!inside) {
      this.filteredList = [];
    }
  }
}
