import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-page-selector',
  templateUrl: './page-selector.component.html',
  styleUrls: ['./page-selector.component.scss'],
})
export class PageSelectorComponent implements OnChanges {
  @Input() public page = 1;
  @Input() public numberOfPages!: number;
  @Output() public pageChange = new EventEmitter<number>();

  public pages: number[] = [];

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['numberOfPages']) {
      this.pages = Array(this.numberOfPages)
        .fill(1)
        .map((x, index) => index + 1);
    }
  }

  public onPreviousPage() {
    if (this.page > 1) {
      this.page--;
      this.pageChange.emit(this.page);
    }
  }

  public onNextPage() {
    if (this.page < this.numberOfPages) {
      this.page++;
      this.pageChange.emit(this.page);
    }
  }

  public onPageChange(page: number) {
    if (page !== this.page) {
      this.page = page;
      this.pageChange.emit(this.page);
    }
  }
}
