import * as React from 'react';

import { Avatar, makeStyles, Typography, useTheme } from '../..';

import SearchSelect, { SearchSelectOption } from './SearchSelect';

export default {
  title: 'Elements/Input/SearchSelect',
  component: SearchSelect,
  parameters: {
    grid: {
      gridOn: false,
      columns: 12,
      maxWidth: '1158px',
      gap: '22px',
      gutterLeft: '172px',
      gutterRight: '172px',
    },
  },
};

const teamMembers: SearchSelectOption[] = [
  {
    value: '0',
    title: 'Armin Jazi',
    cells: ['CTO', 'the know-it-all ', 'aka the overconfident'],
    avatarProps: {
      type: 'person',
      image: 'armin.png',
    },
  },
  {
    value: '1',
    title: 'Piotr Milobedzki',
    cells: ['Devops specialist', 'the just', 'aka captain obvious'],
    avatarProps: {
      type: 'person',
      image: 'piotr.jpeg',
    },
  },
  {
    value: '2',
    title: 'Liane Walter',
    avatarProps: {
      type: 'person',
      image: 'liane.jpeg',
    },
    cells: ['Fullstack Dev', 'the punctilious one ', 'aka the talker'],
  },
  {
    value: '3',
    title: 'Elmar Hufenbach',
    avatarProps: {
      type: 'person',
      image: 'elmar.jpeg',
    },
    cells: ['CPO', 'the sleeping bear', 'aka the 3CPO'],
  },
  {
    value: '4',
    title: 'Lamina Amatyakul Vedder',
    avatarProps: {
      type: 'person',
      image: 'lamina.jpeg',
    },
    cells: ['Fullstack Developer', 'the unbiased ', 'aka the cheerful one'],
  },
  {
    value: '5',
    title: 'Ferdinand Von Klocke',
    avatarProps: {
      type: 'person',
      image: 'ferdi.png',
    },
    cells: ['CFO', 'the wise', 'aka that old dude'],
  },
  {
    value: '6',
    title: 'Shari Heep',
    avatarProps: {
      type: 'person',
      image: 'shari.png',
    },
    cells: ['CEO', 'the one with fire', 'aka snow white'],
  },
  {
    value: '7',
    title: 'Stefanie Fleischer',
    avatarProps: {
      type: 'person',
      image: 'stefie.png',
    },
    cells: ['UX Designer', 'the one with eagle-eyes', 'aka Scully'],
  },
  {
    value: '8',
    title: 'Lisa Laagland',
    avatarProps: {
      type: 'person',
      image: 'lisa.jpeg',
    },
    cells: ['UI Designer', 'the yogi', 'aka -'],
  },
  {
    value: '9',
    title: 'Anonymous',
    avatarProps: {
      type: 'person',
    },
    cells: ['Unknown', 'hidden force', 'is with you'],
  },
];

export const SearchSelectStory = (): JSX.Element => {
  const theme = useTheme();
  const [value, setValue] = React.useState<SearchSelectOption | null>(null);
  const onChange = (data: SearchSelectOption | null) => {
    setValue(data);
    alert(JSON.stringify(data));
  };

  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        padding: 16,
        maxWidth: '1096px',
      }}
    >
      <div style={{ paddingTop: '16px' }}>
        <SearchSelect
          placeholder={'enter name, role or nickname'}
          header={'select team member'}
          name="team members"
          value={value}
          options={teamMembers}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
SearchSelectStory.storyName = 'Overview';

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

export const SearchSelectLongStory = (): JSX.Element => {
  const theme = useTheme();
  const [value, setValue] = React.useState<SearchSelectOption | null>(null);
  const onChange = (data: SearchSelectOption | null) => {
    setValue(data);
    alert(JSON.stringify(data));
  };

  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        padding: 16,
        minWidth: 680,
      }}
    >
      <div style={{ paddingTop: '16px' }}>
        <SearchSelect
          placeholder={'enter name or year'}
          header={'select film'}
          name="film"
          value={value}
          options={top100Films.map(({ title, year }, index) => ({
            value: index.toString(),
            title,
            cells: [year.toString()],
          }))}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
SearchSelectLongStory.storyName = 'Long List';

const realestates = [
  {
    title: 'Anna Schneider',
    cells: ['Anna-Schneider-Steig 2', '50667', 'Köln'],
    avatarProps: { alt: `real estate image`, image: 'realestate-1.png' },
  },
  {
    title: 'Anna Schneider',
    cells: ['Anna-Schneider-Steig 3', '50667', 'Köln'],
    avatarProps: { alt: `real estate image`, image: 'realestate-1.png' },
  },
  {
    title: 'Anna Schneider',
    cells: ['Anna-Schneider-Steig 4', '50667', 'Köln'],
    avatarProps: { alt: `real estate image`, image: 'realestate-2.png' },
  },
  {
    title: 'Ursulakloster',
    cells: ['Ursulagartenstr 56', '50668', 'Köln'],
    avatarProps: { alt: `real estate image`, image: 'realestate-2.png' },
  },
  {
    title: 'Ursulakloster',
    cells: ['Ursulagartenstr 57', '50668', 'Köln'],
    avatarProps: { alt: `real estate image`, image: 'realestate-3.png' },
  },
  {
    title: 'Ursulakloster',
    cells: ['Ursulagartenstr 598', '50668', 'Köln'],
    avatarProps: { alt: `real estate image`, image: 'realestate-4.png' },
  },
  {
    title: 'Ursulakloster',
    cells: ['Ursulagartenstr 51', '50668', 'Köln'],
    avatarProps: { alt: `real estate image`, image: 'realestate-4.png' },
  },
  {
    title: 'Ursulakloster',
    cells: ['Ursulagartenstr 26', '50667', 'Köln'],
    avatarProps: { alt: `real estate image`, image: 'realestate-1.png' },
  },
];

const useCellStyle = makeStyles((theme) => ({
  cells: {
    paddingLeft: theme.spacing(1.5),
  },
  avatar: {
    marginRight: theme.spacing(2.5),
  },
}));

const SelectedComponent: React.FunctionComponent<SearchSelectOption> = ({
  cells,
  title,
  avatarProps,
}) => {
  const classes = useCellStyle();
  const lastCell = cells.slice(cells.length - 1);
  const firstCells = cells.slice(0, cells.length - 1);
  return (
    <>
      <Avatar size={'medium'} {...avatarProps} className={classes.avatar} />
      <Typography variant={'c1'}>{title}</Typography>
      <Typography color={'subtitle'} className={classes.cells} variant={'c3'}>
        {`${firstCells.join(', ')} ${lastCell}`}
      </Typography>
    </>
  );
};

const useOptionStyle = makeStyles((theme) => ({
  title: {
    display: 'flex',
    alignItems: 'center',
    flex: 4,
  },
  avatar: {
    marginRight: theme.spacing(2.5),
  },
  cell1: {
    flex: 3,
  },
  cell2: {
    flex: 2,
  },
  cell3: {
    flex: 3,
  },
}));

const OptionComponent: React.FunctionComponent<SearchSelectOption> = ({
  cells,
  title,
  avatarProps,
}) => {
  const classes = useOptionStyle();
  if (cells.length !== 3) throw new Error('cells not equal to 3');
  return (
    <>
      <div className={classes.title}>
        <Avatar size={'medium'} {...avatarProps} className={classes.avatar} />
        <Typography variant={'c1'}>{title}</Typography>
      </div>
      <Typography variant={'c3'} className={classes.cell1}>
        {cells[0]}
      </Typography>
      <Typography variant={'c3'} className={classes.cell2}>
        {cells[1]}
      </Typography>
      <Typography variant={'c3'} className={classes.cell3}>
        {cells[2]}
      </Typography>
    </>
  );
};

export const SearchSelectWithCustomSelectedComponent = (): JSX.Element => {
  const theme = useTheme();
  const [value, setValue] = React.useState<SearchSelectOption | null>(null);
  const onChange = (data: SearchSelectOption | null) => {
    setValue(data);
    alert(JSON.stringify(data));
  };

  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        maxWidth: 1096,
        paddingLeft: '48px',
        paddingRight: '48px',
      }}
      data-testid={'visual'}
    >
      <div style={{ paddingTop: '16px' }}>
        <SearchSelect
          SelectedComponent={SelectedComponent}
          OptionComponent={OptionComponent}
          placeholder={
            'Geben Sie die Bezeichnung, Straße, PLZ oder den Ort einer Immobilie ein'
          }
          header={'Wählen Sie ein Objekt aus dem Portfolio'}
          name="Immobilie"
          value={value}
          options={realestates.map(({ title, avatarProps, cells }, index) => ({
            value: index.toString(),
            avatarProps,
            title,
            cells,
          }))}
          notFoundText={'Keine Immobilie gefunden'}
          onChange={onChange}
          testId={'visual'}
        />
        <Typography style={{ padding: '16px' }}>
          This text is going to be covered since the search select area lays on
          top of it
        </Typography>
      </div>
    </div>
  );
};
SearchSelectWithCustomSelectedComponent.storyName = 'Custom Select Component';
