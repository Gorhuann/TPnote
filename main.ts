class Pokemon{
    private nom:string;
    private pointsDeVie:number;
    private pointsAttaque:number;
    private type:string;

    constructor(nom:string, pointsDeVie:number, pointsAttaque:number, type:string){
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.pointsAttaque = pointsAttaque;
        this.type = type;
    }

    estMort():boolean{
        if(this.pointsDeVie == 0)
            return true;
        else
            return false;
    }

    attaquer(p:Pokemon):void{
        console.log(`${this.nom} attaque ${p.nom} !`)
        if(this.estMort())
            console.log(`${this.nom} est mort il ne peut plus attaquer !`)
        else if(p.estMort())
            console.log(`${p.nom} est mort il ne peut plus attaquer !`)
        else{
            if(this.type == "Feu"){
                if(p.type == "Plante")
                {
                    p.pointsDeVie -= (this.pointsAttaque * 2);
                    console.log("C'est super efficace !")
                }
                else if(p.type == "Eau" || p.type == "Feu")
                {
                    p.pointsDeVie -= (this.pointsAttaque / 2);
                    console.log("Ce n'est pas très efficace...")
                }
                else
                {
                    p.pointsDeVie -= this.pointsAttaque;
                    console.log("L'attaque est normale");
                }
            }
            else if(this.type == "Eau"){
                if(p.type == "Plante")
                {
                    p.pointsDeVie -= (this.pointsAttaque * 2);
                    console.log("C'est super efficace !")
                }
                else if(p.type == "Eau" || p.type == "Plante")
                {
                    p.pointsDeVie -= (this.pointsAttaque / 2);
                    console.log("Ce n'est pas très efficace...")
                }
                else
                {
                    p.pointsDeVie -= this.pointsAttaque;
                    console.log("L'attaque est normale");
                }
            }
            else if(this.type == "Plante"){
                if(p.type == "Eau")
                {
                    p.pointsDeVie -= (this.pointsAttaque * 2);
                    console.log("C'est super efficace !")
                }
                else if(p.type == "Feu" || p.type == "Plante")
                {
                    p.pointsDeVie -= (this.pointsAttaque / 2);
                    console.log("Ce n'est pas très efficace...")
                }
                else
                {
                    p.pointsDeVie -= this.pointsAttaque;
                    console.log("L'attaque est normale");
                }
            }
            else{
                p.pointsDeVie -= this.pointsAttaque;
                console.log("L'attaque est normale");
            }
        }
    }

    afficherInformations():void{
        console.log(`Ce pokemon se nomme ${this.nom}, il possède ${this.pointsDeVie} points de vie et ${this.pointsAttaque} de point d'attaque, il est de type ${this.type}.`);
    }
}

let dracofeu = new Pokemon("Dracofeu", 32, 10, "Feu");
let carapuce = new Pokemon("Carapuce", 30, 16, "Eau");
let bulbizarre = new Pokemon("Bulbizarre", 30, 12, "Plante");

dracofeu.afficherInformations();
carapuce.afficherInformations();

dracofeu.attaquer(carapuce);

carapuce.afficherInformations();

carapuce.attaquer(dracofeu);

dracofeu.afficherInformations();

