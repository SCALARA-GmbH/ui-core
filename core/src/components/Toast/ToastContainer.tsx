import cx from 'classnames';
import * as React from 'react';
import {
  cssTransition,
  ToastContainer as ToastifyToastContainer,
} from 'react-toastify';

import { makeStyles, createStyles } from '../..';
import { useStyles as useTypographyStyles } from '../Typography/styles';

import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles(
  ({ colors, spacing, shadows, zIndex }) =>
    createStyles({
      container: {
        display: 'flex',
        flexDirection: 'column',
        width: 'auto',
        height: 'auto',
        padding: 0,
        boxSizing: 'content-box',
        zIndex: zIndex.toast,
      },
      root: {
        zIndex: zIndex.toast,
        boxSizing: 'content-box',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: spacing(1),
        border: `1px solid ${colors.border.main}`,
        backgroundColor: colors.background.primary,
      },
      body: {
        display: 'flex',
        borderRadius: 1,
        alignItems: 'center',
        boxShadow: shadows[0],
        cursor: 'pointer',
      },
      fadeInAnimation: {
        animation: '$fade-to-left 0.4s ease 0s 1 backwards',
      },
      fadeOutAnimation: {
        animation: '$fade-to-right 0.4s ease 0s 1 backwards',
      },
      '@keyframes fade-to-left': {
        '0%': {
          opacity: 0,
          transform: 'translateX(100%)',
        },
        '100%': {
          opacity: 1,
          transform: 'translateX(0)',
        },
      },
      '@keyframes fade-to-right': {
        '0%': {
          opacity: 1,
        },
        '100%': {
          opacity: 0,
          transform: 'translateX(100%)',
        },
      },
    }),
  { name: 'SCA__Toast-Container' }
);

const ToastContainer: React.FunctionComponent = () => {
  const classes = useStyles();
  const typographyClasses = useTypographyStyles({
    color: 'initial',
    variant: 't3',
    align: 'left',
    linkColor: 'secondary',
    linkVariant: 't3',
  });

  const transition = cssTransition({
    duration: 400,
    enter: classes.fadeInAnimation,
    exit: classes.fadeOutAnimation,
  });

  return (
    <ToastifyToastContainer
      className={classes.container}
      toastClassName={cx(classes.root, typographyClasses.root)}
      bodyClassName={classes.body}
      position="top-right"
      autoClose={5000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={transition}
      closeButton={false}
    />
  );
};

export default (): React.ReactElement => <ToastContainer />;
