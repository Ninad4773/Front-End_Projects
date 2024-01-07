import { ApiService } from '../Service/api.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CurrencyService } from '../Service/currency.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss'],
})
export class CoinListComponent {
  currency: string = 'INR';
  bannerData: any = [];
  dataSource!: MatTableDataSource<any>;
  displayedColumns = [
    'symbol',
    'current_price',
    'price_change_percentage_24h',
    'market_cap',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private api: ApiService,
    private router: Router,
    private currencyService: CurrencyService
  ) {}

  ngOnInit(): void {
    console.log('on init')
    this.getBannerData();
    this.getAllData();
    this.currencyService.getCUrrency().subscribe((val) => {
      console.log('observable')
      this.currency = val;
      this.getBannerData();
      this.getAllData();
    });
  }

  getBannerData() {
    this.api.getTrendingCurrency(this.currency).subscribe((res) => {
      console.log(res);
      this.bannerData = res;
    });
  }

  getAllData() {
    this.api.getCurrency(this.currency).subscribe((res) => {
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  gotoDetails(row: any) {
    this.router.navigateByUrl(`coin-details/${row.id}`);
  }
}
