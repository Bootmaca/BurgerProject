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
  viandePouletSelected : boolean = false;
  viandeSteackSelected : boolean = false;
  viandePoissonSelected : boolean = false;
  viandeVeggieSelected : boolean = false;

  vueSauce : boolean = false;
  sauceKetchupSelected : boolean = false;
  sauceBurgerSelected : boolean = false;
  sauceMayoSelected : boolean = false;
  sauceBiggieSelected: boolean = false;


  vueSupplements : boolean = false;
  suppBacconSelected : boolean = false;
  suppCheddarSelected : boolean = false;
  suppEmmentalSelected : boolean = false;
  suppChevreSelected : boolean = false;

  countPain : number = 0;
  countViande : number = 0;
  countSauce : number = 0;
  countSupp : number = 0;
  
  
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

  

  choixViandePoulet() :void{

    this.viandeSteackSelected = false;
    this.viandePoissonSelected = false;
    this.viandeVeggieSelected = false;

    var otherBouton = document.getElementById("viandeSteack");
    if(otherBouton){
      otherBouton.style.borderStyle="none";
    }
    var otherBouton1 = document.getElementById("viandePoisson");
    if(otherBouton1){
      otherBouton1.style.borderStyle="none";
    }
    var otherBouton2 = document.getElementById("viandeVeggie");
    if(otherBouton2){
      otherBouton2.style.borderStyle="none";
    }

    var bouton = document.getElementById("viandePoulet");
    this.viandePouletSelected=true;

    if(bouton && this.viandePouletSelected == true){
      bouton.style.borderStyle="solid";
      bouton.style.borderColor="blue";
      bouton.style.borderWidth="3px";
    }

    this.countViande = 1;
    this.burger["viande"] = "Poulet";
    console.log(this.burger);
  }

  choixViandeSteack() :void{

    this.viandePouletSelected = false;
    this.viandePoissonSelected = false;
    this.viandeVeggieSelected = false;

    var otherBouton = document.getElementById("viandePoulet");
    if(otherBouton){
      otherBouton.style.borderStyle="none";
    }
    var otherBouton1 = document.getElementById("viandePoisson");
    if(otherBouton1){
      otherBouton1.style.borderStyle="none";
    }
    var otherBouton2 = document.getElementById("viandeVeggie");
    if(otherBouton2){
      otherBouton2.style.borderStyle="none";
    }

    var bouton = document.getElementById("viandeSteack");
    this.viandeSteackSelected=true;

    if(bouton && this.viandeSteackSelected == true){
      bouton.style.borderStyle="solid";
      bouton.style.borderColor="blue";
      bouton.style.borderWidth="3px";
    }

    this.countViande = 1;
    this.burger["viande"] = "Steack";
    console.log(this.burger);
  }

  choixViandePoisson() :void{

    this.viandePouletSelected = false;
    this.viandeSteackSelected = false;
    this.viandeVeggieSelected = false;

    var otherBouton = document.getElementById("viandePoulet");
    if(otherBouton){
      otherBouton.style.borderStyle="none";
    }
    var otherBouton1 = document.getElementById("viandeSteack");
    if(otherBouton1){
      otherBouton1.style.borderStyle="none";
    }
    var otherBouton2 = document.getElementById("viandeVeggie");
    if(otherBouton2){
      otherBouton2.style.borderStyle="none";
    }

    var bouton = document.getElementById("viandePoisson");
    this.viandePoissonSelected=true;

    if(bouton && this.viandePoissonSelected == true){
      bouton.style.borderStyle="solid";
      bouton.style.borderColor="blue";
      bouton.style.borderWidth="3px";
    }

    this.countViande = 1;
    this.burger["viande"] = "Poisson";
    console.log(this.burger);
    
  }

  choixViandeVeggie() :void{

    this.viandePouletSelected = false;
    this.viandeSteackSelected = false;
    this.viandePoissonSelected = false;

    var otherBouton = document.getElementById("viandePoulet");
    if(otherBouton){
      otherBouton.style.borderStyle="none";
    }
    var otherBouton1 = document.getElementById("viandeSteack");
    if(otherBouton1){
      otherBouton1.style.borderStyle="none";
    }
    var otherBouton2 = document.getElementById("viandePoisson");
    if(otherBouton2){
      otherBouton2.style.borderStyle="none";
    }

    var bouton = document.getElementById("viandeVeggie");
    this.viandeVeggieSelected=true;

    if(bouton && this.viandeVeggieSelected == true){
      bouton.style.borderStyle="solid";
      bouton.style.borderColor="blue";
      bouton.style.borderWidth="3px";
    }

    this.countViande = 1;

    this.burger["viande"] = "Veggie";
    console.log(this.burger);
    
  }


  selectViande():void{

    this.vueViande=false;
    this.vueSauce=true;

  }

  annulerViande() :void{

    this.vueViande = false;
    this.vuePain = true;

  }





  choixSauceKetchup() :void{

    this.sauceBurgerSelected = false;
    this.sauceMayoSelected = false;
    this.sauceBiggieSelected = false;

    var otherBouton = document.getElementById("sauceBurger");
    if(otherBouton){
      otherBouton.style.borderStyle="none";
    }
    var otherBouton1 = document.getElementById("sauceMayo");
    if(otherBouton1){
      otherBouton1.style.borderStyle="none";
    }
    var otherBouton2 = document.getElementById("sauceBiggie");
    if(otherBouton2){
      otherBouton2.style.borderStyle="none";
    }

    var bouton = document.getElementById("sauceKetchup");
    this.sauceKetchupSelected=true;

    if(bouton && this.sauceKetchupSelected == true){
      bouton.style.borderStyle="solid";
      bouton.style.borderColor="blue";
      bouton.style.borderWidth="3px";
    }

    this.countSauce = 1;

    this.burger["sauce"] = "Ketchup";
    console.log(this.burger);
  }

  choixSauceBurger() :void{

    this.sauceKetchupSelected = false;
    this.sauceMayoSelected = false;
    this.sauceBiggieSelected = false;

    var otherBouton = document.getElementById("sauceKetchup");
    if(otherBouton){
      otherBouton.style.borderStyle="none";
    }
    var otherBouton1 = document.getElementById("sauceMayo");
    if(otherBouton1){
      otherBouton1.style.borderStyle="none";
    }
    var otherBouton2 = document.getElementById("sauceBiggie");
    if(otherBouton2){
      otherBouton2.style.borderStyle="none";
    }

    var bouton = document.getElementById("sauceBurger");
    this.sauceBurgerSelected=true;

    if(bouton && this.sauceBurgerSelected == true){
      bouton.style.borderStyle="solid";
      bouton.style.borderColor="blue";
      bouton.style.borderWidth="3px";
    }

    this.countSauce = 1;

    this.burger["sauce"] = "Burger";
    console.log(this.burger);
  }

  choixSauceMayo() :void{

    this.sauceBurgerSelected = false;
    this.sauceKetchupSelected = false;
    this.sauceBiggieSelected = false;

    var otherBouton = document.getElementById("sauceBurger");
    if(otherBouton){
      otherBouton.style.borderStyle="none";
    }
    var otherBouton1 = document.getElementById("sauceKetchup");
    if(otherBouton1){
      otherBouton1.style.borderStyle="none";
    }
    var otherBouton2 = document.getElementById("sauceBiggie");
    if(otherBouton2){
      otherBouton2.style.borderStyle="none";
    }

    var bouton = document.getElementById("sauceMayo");
    this.sauceMayoSelected=true;

    if(bouton && this.sauceMayoSelected == true){
      bouton.style.borderStyle="solid";
      bouton.style.borderColor="blue";
      bouton.style.borderWidth="3px";
    }

    this.countSauce = 1;

    this.burger["sauce"] = "Mayonnaise";
    console.log(this.burger);
  }

  choixSauceBiggie() :void{

    this.sauceBurgerSelected = false;
    this.sauceKetchupSelected = false;
    this.sauceMayoSelected = false;

    var otherBouton = document.getElementById("sauceBurger");
    if(otherBouton){
      otherBouton.style.borderStyle="none";
    }
    var otherBouton1 = document.getElementById("sauceKetchup");
    if(otherBouton1){
      otherBouton1.style.borderStyle="none";
    }
    var otherBouton2 = document.getElementById("sauceMayo");
    if(otherBouton2){
      otherBouton2.style.borderStyle="none";
    }

    var bouton = document.getElementById("sauceBiggie");
    this.sauceBiggieSelected=true;

    if(bouton && this.sauceBiggieSelected == true){
      bouton.style.borderStyle="solid";
      bouton.style.borderColor="blue";
      bouton.style.borderWidth="3px";
    }

    this.countSauce = 1;
    

    this.burger["sauce"] = "Biggie";
    console.log(this.burger);
  }




  selectSauce() : void{
    this.vueSauce = false;
    this.vueSupplements = true;
  }

  annulerSauce() : void {

    this.vueSauce = false;
    this.vueViande = true;
    
  }








  choixSuppBaccon() :void{

    this.suppCheddarSelected = false;
    this.suppEmmentalSelected = false;
    this.suppChevreSelected = false;

    var otherBouton = document.getElementById("suppCheddar");
    if(otherBouton){
      otherBouton.style.borderStyle="none";
    }
    var otherBouton1 = document.getElementById("suppEmmental");
    if(otherBouton1){
      otherBouton1.style.borderStyle="none";
    }
    var otherBouton2 = document.getElementById("suppChevre");
    if(otherBouton2){
      otherBouton2.style.borderStyle="none";
    }

    var bouton = document.getElementById("suppBaccon");
    this.suppBacconSelected=true;

    if(bouton && this.suppBacconSelected == true){
      bouton.style.borderStyle="solid";
      bouton.style.borderColor="blue";
      bouton.style.borderWidth="3px";
    }

    this.countSupp = 1;

    this.burger["supplément"]="Baccon";
    console.log(this.burger);

  }

  choixSuppCheddar() :void{
    this.suppBacconSelected = false;
    this.suppEmmentalSelected = false;
    this.suppChevreSelected = false;

    var otherBouton = document.getElementById("suppBaccon");
    if(otherBouton){
      otherBouton.style.borderStyle="none";
    }
    var otherBouton1 = document.getElementById("suppEmmental");
    if(otherBouton1){
      otherBouton1.style.borderStyle="none";
    }
    var otherBouton2 = document.getElementById("suppChevre");
    if(otherBouton2){
      otherBouton2.style.borderStyle="none";
    }

    var bouton = document.getElementById("suppCheddar");
    this.suppCheddarSelected=true;

    if(bouton && this.suppCheddarSelected == true){
      bouton.style.borderStyle="solid";
      bouton.style.borderColor="blue";
      bouton.style.borderWidth="3px";
    }


    this.countSupp = 1;


    this.burger["supplément"]="Cheddar";
    console.log(this.burger);
  }

  choixSuppEmmental() :void{

    this.suppCheddarSelected = false;
    this.suppBacconSelected = false;
    this.suppChevreSelected = false;

    var otherBouton = document.getElementById("suppCheddar");
    if(otherBouton){
      otherBouton.style.borderStyle="none";
    }
    var otherBouton1 = document.getElementById("suppBaccon");
    if(otherBouton1){
      otherBouton1.style.borderStyle="none";
    }
    var otherBouton2 = document.getElementById("suppChevre");
    if(otherBouton2){
      otherBouton2.style.borderStyle="none";
    }

    var bouton = document.getElementById("suppEmmental");
    this.suppEmmentalSelected=true;

    if(bouton && this.suppEmmentalSelected == true){
      bouton.style.borderStyle="solid";
      bouton.style.borderColor="blue";
      bouton.style.borderWidth="3px";
    }

    this.countSupp = 1;



    this.burger["supplément"]="Emmental";
    console.log(this.burger);
  }

  choixSuppChevre() :void{

    this.suppCheddarSelected = false;
    this.suppBacconSelected = false;
    this.suppEmmentalSelected = false;

    var otherBouton = document.getElementById("suppCheddar");
    if(otherBouton){
      otherBouton.style.borderStyle="none";
    }
    var otherBouton1 = document.getElementById("suppBaccon");
    if(otherBouton1){
      otherBouton1.style.borderStyle="none";
    }
    var otherBouton2 = document.getElementById("suppEmmental");
    if(otherBouton2){
      otherBouton2.style.borderStyle="none";
    }

    var bouton = document.getElementById("suppChevre");
    this.suppChevreSelected=true;

    if(bouton && this.suppChevreSelected == true){
      bouton.style.borderStyle="solid";
      bouton.style.borderColor="blue";
      bouton.style.borderWidth="3px";
    }

    this.countSupp = 1;


    this.burger["supplément"]="Chevre";
    console.log(this.burger);
  }


  selectSupp() : void{
    
  }

  annulerSupp() : void {
    this.vueSauce = true;
    this.vueSupplements = false;
    
  }

  

}
