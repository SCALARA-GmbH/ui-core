import { createStyles, makeStylesWithProps } from '../..';

export const useStyles = makeStylesWithProps<{
  img: string;
}>(({ breakpoints, spacing }) =>
  createStyles({
    root: {
      borderRadius: 2,
      overflow: 'hidden',
      display: 'flex',
      cursor: 'pointer',
      [breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
      [breakpoints.up('md')]: {
        flexDirection: 'row',
      },
    },
    content: {
      flex: 1,
      padding: spacing(3),
    },
    title: {
      marginBottom: spacing(1),
    },
    text: {
      marginBottom: spacing(3),
    },
    image: {
      backgroundImage: ({ img }) => `url(${img})`,
      backgroundSize: 'cover',
      [breakpoints.down('sm')]: {
        height: 100,
      },
      [breakpoints.up('md')]: {
        flex: 1,
      },
    },
  }),
);
