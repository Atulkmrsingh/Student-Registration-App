import { Component, OnInit, OnDestroy } from '@angular/core';
import { JsonDataserviceService, IData } from '../json-dataservice.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-json-data-display',
  templateUrl: './json-data-display.component.html',
  styleUrls: ['./json-data-display.component.css']
})
export class JsonDataDisplayComponent implements OnInit, OnDestroy {
  
  public jsonData: any[] = [];
  private jsonSub: Subscription;
  constructor(private jsondataservice: JsonDataserviceService) { }

  ngOnInit() {
    this.jsonSub = this.jsondataservice.getData().subscribe((data: any[]) => {
      this.jsonData = data;
      console.log(this.jsonData);
    });
  }

  ngOnDestroy(): void {
    this.jsonSub.unsubscribe();
  }

}
