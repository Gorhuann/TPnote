class Pokemon {
    constructor(nom, pointsDeVie, pointsAttaque) {
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.pointsAttaque = pointsAttaque;
    }
    estMort() {
        if (this.pointsDeVie == 0)
            return true;
        else
            return false;
    }
    attaquer(p) {
        p.pointsDeVie - this.pointsAttaque;
    }
    afficherInformations() {
        console.log(`Ce pokemon se nomme ${this.nom}, il possède ${this.pointsDeVie} points de vie et ${this.pointsAttaque} de point d'attaque.`);
    }
}
