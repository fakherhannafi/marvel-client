import { Model } from "vue-mc";

/**
 * Task model
 */
class SuperHeroModel extends Model {
  // Default attributes that define the "empty" state.
  defaults() {
    return {
      id: null,
      name: "",
      description: "",
      imageUrl: "",
      extension:"",
      numberComics: null,
      comic1Title: "",
      comic2Title: "",
      comic3Title: ""
    };
  }

  // Attribute mutations.
  mutations() {
    return {
      id: id => Number(id) || null,
      name: String,
      description: String,
      imageUrl: String,
      extension:String,
      numComics: Number,
      comic1Title: String,
      comic2Title: String,
      comic3Title: String
    };
  }
}

export default SuperHeroModel;
