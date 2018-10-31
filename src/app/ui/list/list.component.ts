import { Component, OnInit } from '@angular/core';
import { AllfetchdataService } from 'src/app/service/allfetchdata.service';

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

  constructor(private allfetchdataService: AllfetchdataService) {

  }

  ngOnInit() {
    this.allfetchdataService.getShippemntList().subscribe(data => {
      this.values = data;
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
    const shipment = {
      "ID": 8,
      "Name": "Package8",
      "Type": "Packages",
      "Weight": "Between 1kg and 5kg,",
      "Status": "Received and processed in the parcel center of origin",
      "Sender": 123456,
      "Recevier": 456789
    }
   
  }
}
