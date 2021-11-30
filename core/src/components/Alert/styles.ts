import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  error: {
    borderLeft: `${theme.spacing(0.5)}px ${theme.colors.error.main} solid`,
    borderRadius: 0,
    '&  *': {
      color: theme.colors.secondary['50'],
    },
  },
  info: {
    borderLeft: `${theme.spacing(0.5)}px ${theme.colors.text.main} solid`,
    borderRadius: 0,
    '&  *': {
      color: theme.colors.secondary['50'],
    },
  },
  success: {
    color: theme.colors.secondary['50'],
    borderLeft: `${theme.spacing(0.5)}px ${theme.colors.success.main} solid`,
    borderRadius: 0,
    '&  *': {
      color: theme.colors.secondary['50'],
    },
  },
  warning: {
    backgroundColor: theme.colors.requiredInstruction['50'],
    borderLeft: `${theme.spacing(0.5)}px ${theme.colors.warning.main} solid`,
    borderRadius: 0,
    '&  *': {
      color: theme.colors.neutral['2'],
    },
  },
}));
