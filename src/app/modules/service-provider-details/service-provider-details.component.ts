import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-service-provider-details',
  templateUrl: './service-provider-details.component.html',
  styleUrls: ['./service-provider-details.component.css']
})
export class ServiceProviderDetailsComponent implements OnInit {
	
	@Input() providerDetails: object;

	constructor() { }

	ngOnInit() {}

	OnChanges(){}

}
