import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddProductService } from '../../services/Product/AppProductService.service';
import { IProduct } from 'src/app/core/models/IProduct';
import { Product } from '../../services/Product/Product';

@Component({
  selector: 'app-add-produects',
  templateUrl: './add-produects.component.html',
  styleUrls: ['./add-produects.component.css']
})
export class AddProduectsComponent implements OnInit {

  constructor(private addproduct: AddProductService) {

  }
  reactiveForm: FormGroup;

  file: File;
  url: any;
  msg = "";
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      productName: new FormControl(null),
      productCategory: new FormControl(null),
      productBrand: new FormControl(null),
      productCountity: new FormControl(null),
      productPrice: new FormControl(null),
      productDescription: new FormControl(null)
    })
  }

  // product: IProduct = {} as IProduct;
  product: IProduct;
  onSubmite() {
    // console.log(this.reactiveForm);
    // console.log(this.reactiveForm.controls['productName'].value);
    this.product = {
      Name: this.reactiveForm.controls['productName'].value,
      CategoryID: this.reactiveForm.controls['productCategory'].value,
      Discription: this.reactiveForm.controls['productDescription'].value,
      Stock: this.reactiveForm.controls['productCountity'].value,
      UnitePrice: this.reactiveForm.controls['productPrice'].value,
      ShopID: 1,
    };
    this.addproduct.AddProduct(this.product)
    console.log(this.addproduct.products);
  }

  getFile(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = "";
      this.url = reader.result;
    }
  }
  removeFile() {
    this.file = null
  }
}
