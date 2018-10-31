import { Component, OnInit } from '@angular/core';
import { AllfetchdataService } from 'src/app/service/allfetchdata.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public headers = ["ID", "Name", "Type", "Weight", "Status", "Sender Zipcode", "Recevier ZipCode"]
  private values = [];
  pager: any = {};
  pagedItems: any[];
  private shipment = null;

  constructor(private allfetchdataService: AllfetchdataService,
    private route: Router,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.Name) {
        console.log("Shipment",params);
        this.shipment = params;
      }
    });
  }

  ngOnInit() {
    this.allfetchdataService.getShippemntList().subscribe(data => {
      this.values = data;
      if (this.shipment != null) {
        this.values.push(this.shipment);
      }
      console.log(this.values);
      this.setPage(1);
    });
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.allfetchdataService.getPager(this.values.length, page);

    // get current page of items
    this.pagedItems = this.values.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  onRemove(id: number) {
    this.values = this.values.filter(value => value.ID !== id);
    this.setPage(this.pager.currentPage);
  }

  addShipment() {
    this.route.navigate(['../addshipmet'], { relativeTo: this.activatedRoute });
  }
}
