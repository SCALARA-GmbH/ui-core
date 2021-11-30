import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  error: {
    boxShadow: `inset ${theme.spacing(0.5)}px 0 0 ${theme.colors.error.main}`,
    borderRadius: 0,
    color: theme.colors.secondary['50'],
  },
  info: {
    boxShadow: `inset ${theme.spacing(0.5)}px 0 0 ${theme.colors.text.main}`,
    borderRadius: 0,
    color: theme.colors.secondary['50'],
  },
  success: {
    boxShadow: `inset ${theme.spacing(0.5)}px 0 0 ${theme.colors.success.main}`,
    borderRadius: 0,
    color: theme.colors.secondary['50'],
  },
  warning: {
    backgroundColor: theme.colors.requiredInstruction['50'],
    boxShadow: `inset ${theme.spacing(0.5)}px 0 0 ${theme.colors.warning.main}`,
    borderRadius: 0,
    color: theme.colors.neutral['2'],
  },
  iconError: {
    color: theme.colors.error.main,
  },
  iconInfo: {
    color: theme.colors.text.main,
  },
  iconSuccess: {
    color: theme.colors.success.main,
  },
  iconWarning: {
    color: theme.colors.warning.main,
  },
}));
