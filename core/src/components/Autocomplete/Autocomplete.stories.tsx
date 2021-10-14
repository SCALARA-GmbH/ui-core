import { action } from '@storybook/addon-actions';
import * as React from 'react';

import { Autocomplete, useTheme } from '../..';
import { SelectOption } from '../Select/Select';

// Top 100 films as rated by IMDb users. http:/ / www.imdb.com / chart / top;
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: ' 12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title:
      'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];

const teamMembers: SelectOption[] = [
  {
    value: '1',
    title: 'Armin Jazi',
    subtitle: 'CTO',
    avatarProps: {
      registered: true,
      image:
        'https://media-exp1.licdn.com/dms/image/C4D03AQHOVO2QjkzNEA/profile-displayphoto-shrink_200_200/0/1581937441755?e=1612396800&v=beta&t=28v-zA2TLatECb9OnybCacuw1bSbz-6qqohADJ633Ns',
    },
  },
  {
    value: '2',
    title: 'Sascha Becker',
    avatarProps: {
      registered: true,
      image:
        'https://media-exp1.licdn.com/dms/image/C4D03AQGrFXISv4g-gg/profile-displayphoto-shrink_200_200/0?e=1612396800&v=beta&t=r_qp5IeojHdjudhN0GtU3dW6kYX_uPcFdzghCCswFzc',
    },
    subtitle: 'Frontend Hero',
  },
  {
    value: '3',
    title: 'Elmar Hufenbach',
    avatarProps: {
      registered: true,
      image:
        'https://media-exp1.licdn.com/dms/image/C4D03AQE0WGsrMkyfKg/profile-displayphoto-shrink_200_200/0?e=1612396800&v=beta&t=eHT24e-nVE3LqC1OoRhhBx_G0qYIXAMWPggj2dAfcMY',
    },
    subtitle: 'CPO',
  },
  {
    value: '4',
    title: 'Lamina Amatyakul Vedder',
    avatarProps: {
      registered: true,
      image:
        'https://media-exp1.licdn.com/dms/image/C4D03AQGJV4a4kX-SxQ/profile-displayphoto-shrink_200_200/0?e=1612396800&v=beta&t=ykwN2F1R7WPItq5EF_X7bnciU7jPmguVxULLiPp-q5E',
    },
    subtitle: 'Devops Specialist',
  },
  {
    value: '5',
    title: 'Lorem ipsum',
    avatarProps: {
      type: 'person',
    },
    subtitle: 'Lorem ipsum',
  },
  {
    value: '5',
    title: 'Lorem ipsum',
    avatarProps: {
      type: 'company',
    },
    subtitle: 'Lorem ipsum',
  },
];

export default {
  title: 'Elements/Input/Autocomplete',
  component: Autocomplete,
};

export const AutocompleteStorySBS = (): JSX.Element => {
  const theme = useTheme();
  const onChange = (data: SelectOption) => alert(JSON.stringify(data));
  const clickOnClear = action('cleared');

  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        padding: 16,
        minWidth: 300,
      }}
    >
      <div style={{ paddingTop: '16px' }}>
        <Autocomplete
          onChange={onChange}
          onClear={clickOnClear}
          label={'Movie'}
          clearLabel={'clear-movie'}
          name={'movie'}
          noOptionsText={'Movie not found'}
          ariaLabel={'Movies-aria-label'}
          options={top100Films.map(({ title, year }) => ({
            title,
            subtitle: `${year}`,
            value: `${title}-${year}`,
          }))}
        />
      </div>
      <div style={{ paddingTop: '16px' }}>
        <Autocomplete
          label={'Team Members'}
          name={'teamMembers'}
          options={teamMembers}
          onNewOptionClick={onChange}
          onChange={onChange}
          renderNewOptionTitle={(value) => `Create person ${value}`}
        />
      </div>
    </div>
  );
};
AutocompleteStorySBS.storyName = 'Overview';

export const AutocompleteVirtStory = (): JSX.Element => {
  const theme = useTheme();
  const onChange = (data: SelectOption) => alert(JSON.stringify(data));

  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        padding: 16,
        maxWidth: 500,
      }}
    >
      <Autocomplete
        label={'Movies virtualized'}
        name={'virtual-movies'}
        options={top100Films.map(({ title, year }) => ({
          title,
          subtitle: `${year}`,
          value: `${title}-${year}`,
        }))}
        onNewOptionClick={onChange}
        onChange={onChange}
        renderNewOptionTitle={(value) => `Create movie ${value}`}
        virtualized
      />
    </div>
  );
};
AutocompleteVirtStory.storyName = 'Virtualization';
