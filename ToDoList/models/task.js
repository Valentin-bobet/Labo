class Task {

    /** Constructeur*/
    /**
     *Instancie une nouvelle tache
     * @param {int} unid - id de la tache
     * @param {string} unNom  - libelle de la tache
     */
    constructor(unId, unNom) {
        this._id = unId;
        this._nom = unNom;
    }
    get nom(){
        return this._nom;
    }

    get id(){
        return this._id;
    }
}
module.exports = Task;