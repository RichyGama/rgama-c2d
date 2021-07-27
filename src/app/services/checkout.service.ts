import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private apiKey: string = "G4UxrQ3YxKtAsA0qPB9jbh0Ycv80PAwW";
  //to do cambiar any por tipo correspondiete
  public resultado: any[] = [];

  constructor(private http:HttpClient) { }

  buscar(){
  this.http.get('http://api.giphy.com/v1/gifs/search?api_key=G4UxrQ3YxKtAsA0qPB9jbh0Ycv80PAwW&q=dragon ball z&limit=10')
  .subscribe((resp:any) =>{
    console.log(resp.data);
  });

  }
  

}
