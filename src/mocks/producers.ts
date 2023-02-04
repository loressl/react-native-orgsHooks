import green from '../assets/produtores/green.png';
import salad from '../assets/produtores/salad.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import grow from '../assets/produtores/grow.png';
import potager from '../assets/produtores/potager.png';

const createRandomNumbers = (min: number, max:number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const producers = {
  title: 'Produtores',
  list: [
    {
      name: 'Green',
      image: green,
      distance: `${createRandomNumbers(1, 500)}m`,
      stars: createRandomNumbers(1, 5),
    },
    {
      name: 'Salad',
      image: salad,
      distance: `${createRandomNumbers(1, 500)}m`,
      stars: createRandomNumbers(1, 5),
    },
    {
      name: 'Jenny Jack Farm',
      image: jennyJack,
      distance: `${createRandomNumbers(1, 500)}m`,
      stars: createRandomNumbers(1, 5),
    },
    {
      name: 'Grow',
      image: grow,
      distance: `${createRandomNumbers(1, 500)}m`,
      stars: createRandomNumbers(1, 5),
    },
    {
      name: 'Potager',
      image: potager,
      distance: `${createRandomNumbers(1, 500)}m`,
      stars: createRandomNumbers(1, 5),
    },
  ],
};
