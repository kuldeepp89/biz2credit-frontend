import {
    AfterViewInit,
    Component,
    ViewChild,
    OnInit,
    Output, EventEmitter
} from '@angular/core';

import {
    MatPaginator
} from '@angular/material/paginator';

import {
    MatTableDataSource
} from '@angular/material/table';

import {
    MatSort
} from '@angular/material/sort';

import {
    ServiceProviderService
} from './service-provider.service'

export interface Provider {
    name: string;
    lowest_price: number;
    max_speed: number;
    rating: string;
    description: string;
    image: string;
    url: string;
    email: string;
    contact_number: number;
}

@Component({
    selector: 'app-service-provider',
    templateUrl: './service-provider.component.html',
    styleUrls: ['./service-provider.component.css']
})


export class ServiceProviderComponent implements AfterViewInit {
    providers: Provider[];
    displayedColumns: string[] = ['name', 'lowest_price', 'max_speed', 'rating'];
    dataSource = new MatTableDataSource < Provider > (this.providers);

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    @Output() providerDetails = new EventEmitter<object>();

    ngAfterViewInit() {    	
    	//fetch the service provider details
        this.serviceProviderService.getServiceProviders()
            .subscribe((res) => {
                    if (res.response) {
                        this.dataSource = new MatTableDataSource(res.data);
                        console.log(this.providers);
                        this.dataSource.paginator = this.paginator;
				        // If the user changes the sort order, reset back to the first page.
				        this.dataSource.sort = this.sort;                       

                    } else {
                        console.log(res);
                        //show relevet message to user
                    }
                },
                error => {
                    console.log(error);
                    //show relevet message to user
                }
            );        
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    constructor(private serviceProviderService: ServiceProviderService) {}

    ngOnInit() {}

    showProivderDetails(provider_id){
    	//get the service details for selected provider
    	this.serviceProviderService.getServiceProviderDetails(provider_id)
            .subscribe((res) => {
                    if (res.response) {
                    	this.providerDetails = res.data;
                    } else {
                        console.log(res);
                        //show relevet message to user
                    }
                },
                error => {
                    console.log(error);
                    //show relevet message to user
                }
            );    	
    }
}