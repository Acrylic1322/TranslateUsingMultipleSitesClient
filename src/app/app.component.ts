import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string = 'app';
  input: string = '';
  searchTimer: any = null;

  searchText: string = '';
  langFrom: string = '';
  langTo: string = ''

  constructor() {
    this.langFrom = 'en';
    this.langTo = 'jp';
  }

  inputSearch(input: string) {
    if(typeof this.searchTimer != null)
      clearTimeout(this.searchTimer);

    this.searchTimer = setTimeout(() => {
      this.searchText = input;
    }, 1000)
  }
}
