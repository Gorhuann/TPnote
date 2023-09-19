class Pokemon{
    private nom:string;
    private pointsDeVie:number;
    private pointsAttaque:number;

    constructor(nom:string, pointsDeVie:number, pointsAttaque:number){
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.pointsAttaque = pointsAttaque;
    }

    estMort():boolean{
        if(this.pointsDeVie == 0)
            return true;
        else
            return false;
    }

    attaquer(p:Pokemon):void{
        p.pointsDeVie - this.pointsAttaque;
    }

    afficherInformations():void{
        console.log(`Ce pokemon se nomme ${this.nom}, il possède ${this.pointsDeVie} points de vie et ${this.pointsAttaque} de point d'attaque.`);
    }
}