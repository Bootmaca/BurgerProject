import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-creation-burger',
  templateUrl: './creation-burger.component.html',
  styleUrls: ['./creation-burger.component.css']
})
export class CreationBurgerComponent implements OnInit {

  vuePain : boolean = true;
  painBurgerSelected : boolean = false;
  painBaguetteSelected : boolean = false;
  

  vueViande : boolean = false;
  vueSauce : boolean = false;
  vueSupplements : boolean = false;
  

  countPain : number = 0;
  
  
  burger: any | undefined;


  constructor() {}

  


  ngOnInit(): void {

    this.burger = {};
    
  }
 
  choixPainBaguette() :void{
    
    this.painBurgerSelected = false;

    var otherBouton = document.getElementById("painBurger");
    if(otherBouton){
      otherBouton.style.borderStyle="none";
    }
      
    var bouton = document.getElementById("painBaguette");
    this.painBaguetteSelected=true;

    if(bouton && this.painBaguetteSelected == true){
      bouton.style.borderStyle="solid";
      bouton.style.borderColor="blue";
      bouton.style.borderWidth="3px";
    }
      
    
    this.countPain = 1;
    this.burger['pain'] = "Baguette";
    console.log(this.burger);
  }

  choixPainBurger() : void{

    this.painBaguetteSelected=false;


    var otherBouton = document.getElementById("painBaguette");
    if(otherBouton){
      otherBouton.style.borderStyle="none";
    }

    var bouton = document.getElementById("painBurger");
    this.painBurgerSelected=true;

    if(bouton && this.painBurgerSelected == true){
      bouton.style.borderStyle="solid";
      bouton.style.borderColor="blue";
      bouton.style.borderWidth="3px";
    }

    this.countPain = 1;
    this.burger["pain"] = "Burger";
    console.log(this.burger);
    
  }

  selectPain() :void{

    this.vuePain = false;
    this.vueViande = true;

  }

  annulerViande() :void{

    this.vueViande = false;
    this.vuePain = true;

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


  selectViande():void{

    this.vueViande=false;
    this.vueSauce=true;

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

  choixSuppBaccon() :void{

    this.burger["supplément"]="Baccon";
    
    console.log(this.burger);

  }

  choixSuppCheddar() :void{


  }

  choixSuppEmmental() :void{


  }

  choixSuppChevre() :void{


  }



  

}
