import { Component, OnInit } from '@angular/core';
import { AllfetchdataService } from 'src/app/service/allfetchdata.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-addshipment',
  templateUrl: './addshipment.component.html',
  styleUrls: ['./addshipment.component.css']
})
export class AddshipmentComponent implements OnInit {
  private model: any = {};
  private locations = [];

  constructor(private allFetchDataService: AllfetchdataService,
    private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.allFetchDataService.getLocation().subscribe(data => {
      this.locations = data;
    });
  }

  onSubmit() {
    //this.allFetchDataService.addShipment(JSON.stringify(this.model));
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "ID":0,
        "Name": this.model.name,
        "Type": this.model.type,
        "Weight": this.model.weight,
        "Status": "Received and processed in the parcel center of origin",
        "Sender": this.model.Sender,
        "Recevier": this.model.Recevier
      }
    };
    this.route.navigate(["home"], navigationExtras);
  }

}
