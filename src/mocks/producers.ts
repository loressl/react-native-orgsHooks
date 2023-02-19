import green from '../assets/produtores/green.png';
import salad from '../assets/produtores/salad.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import grow from '../assets/produtores/grow.png';
import potager from '../assets/produtores/potager.png';

import asparagus from '../assets/verduras/Aspargos.png';
import tomato from '../assets/verduras/Tomate.png';
import broccoli from '../assets/verduras/Brocolis.png';
import potato from '../assets/verduras/Batata.png';
import cucumber from '../assets/verduras/Pepino.png';
import pumpkin from '../assets/verduras/Abobora.png';
import carrot from '../assets/verduras/Cenouras.png';
import carrot2 from '../assets/verduras/Cenouras2.png';
import vegetables from '../assets/verduras/Verduras.png';

const createRandomNumbers = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const producers = {
  title: 'Produtores',
  list: [
    {
      name: 'Green',
      image: green,
      distance: createRandomNumbers(1, 500),
      stars: createRandomNumbers(1, 5),
      baskets: [
        {
          details: {
            name: 'Brócolis e Pepino',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',
            image: cucumber,
          },
          items: [
            {
              name: 'Brócolis',
              image: broccoli,
            },
            {
              name: 'Pepino',
              image: cucumber,
            },
          ],
        },
        {
          details: {
            name: 'Brócolis',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',

            image: broccoli,
          },
          items: [
            {
              name: 'Brócolis',
              image: broccoli,
            },
          ],
        },
      ],
    },
    {
      name: 'Salad',
      image: salad,
      distance: createRandomNumbers(1, 500),
      stars: createRandomNumbers(1, 5),
      baskets: [
        {
          details: {
            name: 'Salada completa',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',

            image: vegetables,
          },
          items: [
            {
              name: 'Tomate',
              image: tomato,
            },
            {
              name: 'Brócolis',
              image: broccoli,
            },
            {
              name: 'Pepino',
              image: cucumber,
            },
          ],
        },
        {
          details: {
            name: 'Tomate e pepino',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',

            image: tomato,
          },
          items: [
            {
              name: 'Tomate',
              image: tomato,
            },
            {
              name: 'Pepino',
              image: cucumber,
            },
          ],
        },
      ],
    },
    {
      name: 'Jenny Jack Farm',
      image: jennyJack,
      distance: createRandomNumbers(1, 500),
      stars: createRandomNumbers(1, 5),
      baskets: [
        {
          details: {
            name: 'Muita Batata',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',

            image: potato,
          },
          items: [
            {
              name: 'Batata',
              image: potato,
            },
          ],
        },
        {
          details: {
            name: 'Tomate e Brócolis',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',

            image: broccoli,
          },
          items: [
            {
              name: 'Tomate',
              image: tomato,
            },
            {
              name: 'Brócolis',
              image: broccoli,
            },
          ],
        },
      ],
    },
    {
      name: 'Grow',
      image: grow,
      distance: createRandomNumbers(1, 500),
      stars: createRandomNumbers(1, 5),
      baskets: [
        {
          details: {
            name: 'Abobora e Aspargos',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',

            image: asparagus,
          },
          items: [
            {
              name: 'Abóbora',
              image: pumpkin,
            },
            {
              name: 'Aspargos',
              image: asparagus,
            },
          ],
        },
        {
          details: {
            name: 'Tomate e Abobora',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',

            image: pumpkin,
          },
          items: [
            {
              name: 'Tomate',
              image: tomato,
            },
            {
              name: 'Abóbora',
              image: pumpkin,
            },
          ],
        },
      ],
    },
    {
      name: 'Potager',
      image: potager,
      distance: createRandomNumbers(1, 500),
      stars: createRandomNumbers(1, 5),
      bakests: [
        {
          details: {
            name: 'Pepinos',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',

            image: cucumber,
          },
          items: [
            {
              name: 'Pepino',
              image: cucumber,
            },
          ],
        },
        {
          details: {
            name: 'Brócolis, Aspargos e Cenoura',
            description:
              'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
            price: 'R$ 40,00',

            image: carrot2,
          },
          items: [
            {
              name: 'Brócolis',
              image: broccoli,
            },
            {
              name: 'Aspargos',
              image: asparagus,
            },
            {
              name: 'Cenoura',
              image: carrot,
            },
          ],
        },
      ],
    },
  ],
};
