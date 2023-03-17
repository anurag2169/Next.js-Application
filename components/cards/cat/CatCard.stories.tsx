import { ComponentMeta, ComponentStory } from '@storybook/react';
import CatCard, { ICatCard } from './CatCard';
import { mockCatCardProps } from './CatCard.mocks';

export default {
  title: 'Cards/CatCard',
  component: CatCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CatCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Cards: ComponentStory<typeof CatCard> = (args) => <CatCard {...args} />;

export const Cat = Cards.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Cat.args = {
  ...mockCatCardProps.Cat,
} as ICatCard;
