import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
	@Input() imageAssetUrl: string | undefined;
	@Input() image1Url: string | undefined;
	@Input() image2Url: string | undefined;
	@Input() image3Url: string | undefined;
	@Input() aboutText: string | undefined;
	@Input() advantages: string[] | undefined;
	@Input() price: string | undefined;
	@Input() rating: string | undefined;

	@Input() availability: string | undefined;
	@Input() additionalImageUrl: string | undefined;
	@Input() services: string[] | undefined;
	@Input() reviewRating: string | undefined;
	@Input()reviewCount!: string;
	@Input() reviewStars: string[] | undefined;
	@Input() reviewProgress: number[] | undefined;
}
