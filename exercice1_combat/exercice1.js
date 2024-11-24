//Declaration des attributs des guerriers
class Guerrier {
    //Attributs des guerriers
    constructor(Nom, PointDeVie, attack, precision) {
        this.Nom = Nom;
        this.PointDeVie = PointDeVie;
        this.attack = attack;
        this.precision = precision;
    }
    //Deroulement de l'attaque en fonction de la precision
    attaquer() {
        const proba = Math.random();
        if (proba < this.precision) {
            console.log(this.Nom + " a réussi son attaque !"); //L'adversaire perd des PointDeVie si l'attaque est reussie
        }
        else{
            this.PointDeVie = this.PointDeVie - 50;
            console.log(this.Nom + " a loupé son attaque.");//L'attaquant perd des PointDeVie si l'attaque est rate
        }
        console.log(this.Nom + " a maintenant " + this.PointDeVie + " points de vie.");
    }
}

//Initialisation des personnages
console.log("Nouveau combat entre Randolph et Francis");
// Instances de la class soit les personnages
let guerrier1 = new Guerrier("Francis",100,3,0.6);
let guerrier2 = new Guerrier("Randolph",100,5,0.4);

//permet de lier les guerriers à la fonction attaquer
guerrier1.attaquer();
guerrier2.attaquer();

while (guerrier1.PointDeVie > 0 && guerrier2.PointDeVie > 0){
    guerrier1.attaquer(guerrier2);
    guerrier2.attaquer(guerrier1);
}
//Resultat du combat
if (guerrier1.PointDeVie <= 0) {
    console.log(guerrier1.Nom + " a perdu le combat !");}
    else {
    console.log(guerrier2.Nom + " a perdu le combat !");
}






