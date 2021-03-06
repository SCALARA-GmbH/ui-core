import * as React from 'react';

import { Paper, useTheme } from '../..';

import Comment from './Comment';

export default {
  title: 'Components/Comment',
  component: Comment,
};

export const CommentStorySBS = (): JSX.Element => {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.colors.background.primary,
        padding: '16px',
      }}
    >
      <Paper style={{ padding: '16px' }}>
        <Comment text={'this is a comment'} />
        <Comment
          text={'this is another a comment \n with multilines'}
          extra={'2020-01-01'}
        />
        <Comment
          text={
            'this is another a comment \n with multilines \n and yet another line \n and more \n and more \n and more \n and more'
          }
          extra={'2020-01-01'}
        />
        <Comment
          title={'SCALARA GmbH'}
          text={'this is another a comment with name'}
          extra={'2020-01-01'}
        />
        <Comment
          avatarProps={{ active: true }}
          title={'Registered User 1337'}
          text={'Hey I am registered!'}
        />
        <Comment
          avatarProps={{ active: true, image: 'elmar.jpeg' }}
          title={'Registered User with an image'}
          text={'Hey I am registered and have an image!'}
        />
      </Paper>
    </div>
  );
};
CommentStorySBS.storyName = 'Overview';
