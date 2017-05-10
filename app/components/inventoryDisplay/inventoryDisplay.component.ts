import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Router, Params, Data, ActivatedRoute } from '@angular/router';
import {CartService} from '../../services/cart_service/cart.service';
import { InventoryService } from '../../services/inventory_services/inventory.service';
import { Item } from '../../../Item';


@Component({
    moduleId: module.id,
    selector: 'app-inventoryDisplay',
    templateUrl: 'inventoryDisplay.component.html'
})

export class InventoryDisplayComponent implements OnInit, OnDestroy{
    public invId;
    inventorys: any;
    name: string;
    constructor(private router: Router,
        private route: ActivatedRoute,
    private inventoryService: InventoryService,
    private cartService: CartService,
    ) {
        
    }

    ngOnInit(){
        this.invId = this.route.params.subscribe(params => {
        const inId = params['id'];
        this.inventoryService.getInventorys(inId)
            .subscribe(inventorys => {
                this.inventorys = inventorys;
            }); 
     });
      
           
    }

    ngOnDestroy(){
        console.log('Destroy Called');
    }

     addToCart(inv){
         this.cartService.addItem(inv);
     }
   
}


