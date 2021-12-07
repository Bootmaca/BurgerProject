import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-creation-burger',
  templateUrl: './creation-burger.component.html',
  styleUrls: ['./creation-burger.component.css']
})
export class CreationBurgerComponent implements OnInit {

  vuePain : boolean = true;
  vueViande : boolean = false;
  vueSauce : boolean = false;
  vueSupplements : boolean = false;
  
  burger: any | undefined;


  constructor() {}

  


  ngOnInit(): void {

    this.burger = {};
    
  }

  choixPainBaguette() :void{
    
    this.vuePain = false;
    this.vueViande = true;
    this.burger['pain'] = "Baguette";
    console.log(this.burger);
  }

  choixPainBurger() : void{

    this.vuePain = false;
    this.vueViande = true;
    this.burger["pain"] = "Burger";
    console.log(this.burger);
    
  }

  choixViandePoulet() :void{

    this.burger["viande"] = "Poulet";
    this.vueViande = false;
    this.vueSauce = true;
    console.log(this.burger);
  }

  choixViandeSteack() :void{

    this.burger["viande"] = "Steack";
    this.vueViande = false;
    this.vueSauce = true;
    console.log(this.burger);
  }

  choixViandePoisson() :void{

    this.burger["viande"] = "Poisson";
    this.vueViande = false;
    this.vueSauce = true;
    console.log(this.burger);
    
  }

  choixViandeVeggie() :void{

    this.burger["viande"] = "Veggie";
    this.vueViande = false;
    this.vueSauce = true;
    console.log(this.burger);
    
  }

  choixSauceKetchup() :void{

    this.burger["sauce"] = "Ketchup";
    this.vueSauce = false;
    this.vueSupplements = true;
    console.log(this.burger);
  }

  choixSauceBurger() :void{

    this.burger["sauce"] = "Burger";
    this.vueSauce = false;
    this.vueSupplements = true;
    console.log(this.burger);
  }

  choixSauceMayo() :void{

    this.burger["sauce"] = "Mayonnaise";
    this.vueSauce = false;
    this.vueSupplements = true;
    console.log(this.burger);
  }

  choixSauceBiggie() :void{

    this.burger["sauce"] = "Biggie";
    this.vueSauce = false;
    this.vueSupplements = true;
    console.log(this.burger);
  }



  

}
