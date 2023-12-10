import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { IProduct } from 'src/app/core/models/Product/IProduct';

@Component({
  selector: 'app-ngxchart2',
  templateUrl: './ngxchart2.component.html',
  styleUrls: ['./ngxchart2.component.css']
})
export class Ngxchart2Component implements OnInit {

  pieChartData: { name: string; value: any }[] = [];
  pieChartDatalist=[
		{ name: ' لحوم ', value: 40 },
		{ name: 'معلبات', value: 150 },
		{ name: 'مياه غازية ', value: 48},
		{ name: 'ألبان', value: 15 },
		{ name: 'ملابس', value: 180 },
		{ name: 'أدوات كهربائية', value: 250 },
		{ name: 'باقى المنتجات ', value: 350 },]
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB']
  };
  anmation:boolean=true
  view:[number,number]=[450,350];
  labels:boolean=false;
  showLegend = true;
  constructor(private adminSerives: AdminService) {

  }
  ngOnInit(): void {
    this.adminSerives.AllProducet().subscribe((product: IProduct[]) => {
      this.mapDataForPieChart(product); console.log(product)
    })
  }
  private mapDataForPieChart(products: IProduct[]) {
    const categorySumMap = new Map<string, string>();
    products.forEach(product => {
      const category = product.categoryID.catagory;
      const unitPrice = product.unitPrice;
      if (categorySumMap.has(category)) {
        categorySumMap.set(category, categorySumMap.get(category) + unitPrice);
      }
      else {
        categorySumMap.set(category, unitPrice);
      }


    });
    this.pieChartData = Array.from(categorySumMap.entries()).map(([category, sum]) => {
      return {
        name: `Category ${category}`,
        value: sum
      };
    });
  }
}
