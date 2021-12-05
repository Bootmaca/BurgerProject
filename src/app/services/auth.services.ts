import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthServices{
  isAuth : string = "";
  identificationFalse : boolean = false;
  urlDeBase : string = "http://localhost/burgerProject/src/app/_classes/"
  user =[];

  constructor(private http: HttpClient) {}


  signIn(mail: String, password: String){
    console.log(mail);
    console.log(password);

    this.http
      .get(this.urlDeBase+'test.php?email='+mail+'&password='+password)
      .subscribe((laData) => {
        // @ts-ignore
        this.user = laData;
        if(this.user[0]['typeUtil'] == 1){
          this.isAuth = "admin";
        }else{
          this.isAuth = "client";
        }
        this.identificationFalse = false;
      }, (error) => {
        console.log("Utilisateur non trouvé");
        this.identificationFalse = true;
        this.isAuth = "";
      });
  }


  signOut(){
    this.isAuth = "";
  }
}
