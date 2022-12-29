import { Entreprise } from "./Entreprise";

export class Project {
    idProject : number;
    description : string;
    libelle : string;
    nom : string;
    documents : string;
    dateDebut : Date;
    dateFin : Date;
    budget : number;
    intervenant : number;
    nbreTaskInTime : number;
    nbreTaskLate : number;
    nbreTask : number;
    entreprise:Entreprise= new Entreprise();
	
}