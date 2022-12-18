import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaginationService } from 'src/app/service/pagination.service';


@Component({
  selector: 'app-pagination-unrouted',
  templateUrl: './pagination-unrouted.component.html',
  styleUrls: ['./pagination-unrouted.component.css']
})

export class PaginationUnroutedComponent implements OnInit {

  @Input()
  set nPage(value: number) {
    this.nnPage = value;
    this.aPaginationBar = this.oPaginationService.pagination(this.nnTotalPages, this.nnPage);
  }
  get nPage(): number {
    return this.nnPage;
  }

  @Input()
  set nTotalPages(value: number) {
    this.nnTotalPages = value;
    this.aPaginationBar = this.oPaginationService.pagination(this.nnTotalPages, this.nnPage);
  }
  get nTotalPages(): number {
    return this.nnTotalPages;
  }

  @Output() eePage = new EventEmitter<number>();

  nnPage: number;
  nnTotalPages: number;
  aPaginationBar: string[];

  constructor(
    private oPaginationService: PaginationService
  ) {
    this.nnPage = 1;
    this.nnTotalPages = 1;
    this.aPaginationBar = [];
  }

  ngOnInit() { }

  doJumpToPage() {
    this.eePage.emit(this.nnPage);
    return false;
  }

}
