import createOl from './createOl';
import { isTweetFr } from '../typescript/utils';

let isFr = false;

export default function(tweets, ol) {
  const filterButton = document.createElement('button');
  filterButton.textContent = 'Filtre';

  filterButton.addEventListener('click', function() {
    const tweetsToDisplay = isFr ? tweets : tweets.filter(isTweetFr);

    const newOl = createOl(tweetsToDisplay);

    ol.replaceWith(newOl);
    ol = newOl;
    isFr = !isFr;
  });

  return filterButton;
}
