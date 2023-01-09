import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @Input() public countries: string[] = [];
  public selectedCountry = '';

  @Output() public onSearch = new EventEmitter<string>();
  @Output() public onCountryFilter = new EventEmitter<string>();

  public searchWord = '';

  public search() {
    this.onSearch.emit(this.searchWord);
  }

  public onSelectCountry() {
    this.onCountryFilter.emit(this.selectedCountry);
  }

  public onSelectClick() {
    if (this.selectedCountry) {
      this.selectedCountry = '';
      this.onSelectCountry();
    }
  }
}
