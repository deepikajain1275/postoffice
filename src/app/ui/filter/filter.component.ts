import { Component, OnInit } from '@angular/core';
import { AllfetchdataService } from 'src/app/service/allfetchdata.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  public weights = [
    "Less than 1kg",
    "Between 1kg and 5kg",
    "More than 5kg"];

  public status = [
    "Received and processed in the parcel center of origin",
    "Received and processed in the destination parcel center",
    "Delivered"];

  private locations = [];

  constructor(private allFetchDataService: AllfetchdataService) {
  }

  ngOnInit() {
    this.allFetchDataService.getLocation().subscribe(data => {
      this.locations = data;
    });
  }

}
