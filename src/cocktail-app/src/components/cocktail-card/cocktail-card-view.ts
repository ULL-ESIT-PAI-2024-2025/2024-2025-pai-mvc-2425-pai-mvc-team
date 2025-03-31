/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * Patrón Modelo Vista Controlador
 *
 * @since Tue 25 Mar 2025
 * @desc Controller class for the shopping list
 * @author Guillermo Silva González
 * @author Himar Edhey Hernández Alonso
 * @author Samuel Rodríguez Cuesta
 * @see {@link https://github.com/ULL-ESIT-PAI-2024-2025/2024-2025-pai-mvc-2425-pai-mvc-team}
 * @see {@link https://github.com/taniarascia/mvc}
 */

import type { Cocktail } from '../../cocktail';
import type { View } from '../../core/view';

/**
 * @class CocktailCardView
 * @implements View<Cocktail>
 * @description Represents the view component responsible for rendering individual cocktail cards.
 */
export class CocktailCardView implements View<Cocktail> {
  /**
   * Registers an event listener for interactions within the cocktail card.
   * (Currently, this method is a placeholder and does not handle any events.)
   *
   * @param {string} event - The event type.
   * @param {(eventInfo: {}) => void} callback - The callback function to execute when the event occurs.
   */
  public onEvent(event: string, callback: (eventInfo: {}) => void): void {}

  /**
   * Renders a cocktail card containing the cocktail image, name, ingredients, and instructions.
   *
   * @param {Cocktail} cocktail - The cocktail data to be displayed.
   * @returns {HTMLElement} The generated HTML structure representing the cocktail card.
   */
  public render(cocktail: Cocktail): HTMLElement {
    // <div class="card">
    // <div class="card-image">
    //   <figure class="image is-4by3">
    //     <img
    //       src="https://bulma.io/assets/images/placeholders/1280x960.png"
    //       alt="Placeholder image"
    //     />
    //   </figure>
    // </div>
    // <div class="card-content">
    //   <div class="media">
    //     <div class="media-left">
    //       <figure class="image is-48x48">
    //         <img
    //           src="https://bulma.io/assets/images/placeholders/96x96.png"
    //           alt="Placeholder image"
    //         />
    //       </figure>
    //     </div>
    //     <div class="media-content">
    //       <p class="title is-4">John Smith</p>
    //     </div>
    //   </div>
    //   <div class="content">
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
    //   </div>
    // </div>
    // </div>
    const card = document.createElement('div');
    card.className = 'card';

    const cardImage = document.createElement('div');
    cardImage.className = 'card-image';

    const figureImage = document.createElement('figure');
    figureImage.className = 'image is-4by3';

    const img = document.createElement('img');
    img.src = cocktail.image;
    img.alt = 'Cocktail image';

    figureImage.appendChild(img);
    cardImage.appendChild(figureImage);
    card.appendChild(cardImage);

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    const media = document.createElement('div');
    media.className = 'media';

    const mediaLeft = document.createElement('div');
    mediaLeft.className = 'media-left';

    const figureMedia = document.createElement('figure');
    figureMedia.className = 'image is-48x48';

    const imgMedia = document.createElement('img');
    imgMedia.src = cocktail.image;
    imgMedia.alt = 'Cocktail thumbnail';

    figureMedia.appendChild(imgMedia);
    mediaLeft.appendChild(figureMedia);

    const mediaContent = document.createElement('div');
    mediaContent.className = 'media-content';

    const title = document.createElement('p');
    title.className = 'title is-4';
    title.textContent = cocktail.name;

    mediaContent.appendChild(title);
    media.appendChild(mediaLeft);
    media.appendChild(mediaContent);

    const content = document.createElement('div');
    content.className = 'content';
    content.innerHTML =
      `Ingredients:<br>${cocktail.ingredients
        .map(({ name, measure }) => `${name}: ${measure}`)
        .join('<br>')}` +
      '<br><br>' +
      cocktail.instructions;

    cardContent.appendChild(media);
    cardContent.appendChild(content);
    card.appendChild(cardContent);

    return card;
  }
}
