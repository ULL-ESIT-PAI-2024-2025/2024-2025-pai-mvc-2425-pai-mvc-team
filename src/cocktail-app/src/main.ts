import { CocktailAppBuilder } from './components/cocktail-app/cocktail-app-builder.ts';

const app = new CocktailAppBuilder().build();

app.onUpdate((element) => {
  document.body.replaceChildren();
  document.body.appendChild(element);
});

app.render();
