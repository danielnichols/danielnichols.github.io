import type { PageData } from '~components/PortfolioItemPage';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import TestImage from '~assets/backgrounds/cartographer.png';

const data: PageData = {
  title: 'Test Page 2',
  path: 'testpage2',
  summary: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac condimentum libero. Nulla neque metus, sollicitudin sit amet euismod quis, vestibulum vitae metus.',
    image: TestImage,
  },
  content: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac condimentum libero. Nulla neque metus, sollicitudin sit amet euismod quis, vestibulum vitae metus.',
    attribution: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
};

export default data;
