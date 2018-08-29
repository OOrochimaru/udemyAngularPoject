export class RecipeModel {
    public name: String;
    public title: String;
    public image: String;

    constructor(name: String, title: String, image: String){
        this.name = name;
        this.title = title;
        this.image = image;
    }
}