import config from "../../config.json";
import Webcom from "webcom/webcom";
import SuperHeroModel from "../model/SuperHeroModel";
let myRef = new Webcom(config.webcom_endpoint);

export default {
  getData() {
    let collectionModels = [];
    return new Promise(function(resolve) {
      myRef.once("value", function(snapshot) {
        let characters = snapshot.val();
        characters.forEach(character => {
          let comic1Title = "",
            comic2Title = "",
            comic3Title = "",
            numComics = character.comics.returned;
          if (numComics >= 1) {
            comic1Title = character.comics.items["0"].name;
            if (numComics >= 2) {
              comic2Title = character.comics.items["1"].name;
            }
            if (numComics >= 3) {
              comic3Title = character.comics.items["2"].name;
            }
          }
          collectionModels.push(
            new SuperHeroModel({
              id: character.id,
              name: character.name,
              description: character.description,
              imageUrl: character.thumbnail.path + config.image_size,
              extension: character.thumbnail.extension,
              numComics: numComics,
              comic1Title: comic1Title,
              comic2Title:comic2Title,
              comic3Title:comic3Title
            })
          );
        });
        resolve(collectionModels);
      });
    });
  }
};
