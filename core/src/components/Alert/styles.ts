import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, colors }) => ({
  root: {
    padding: spacing(1, 5, 1, 1.5),
  },
  disableElevation: {
    boxShadow: 'none',
  },
  error: {
    backgroundColor: colors.destructive['50'],
    color: colors.secondary['50'],
    borderLeft: `${spacing(0.5)}px solid ${colors.error.main}`,
    borderRadius: 0,
  },
  info: {
    backgroundColor: colors.optionalInstruction['50'],
    color: colors.secondary['50'],
    borderLeft: `${spacing(0.5)}px solid ${colors.optionalInstruction.default}`,
    borderRadius: 0,
  },
  warning: {
    backgroundColor: colors.requiredInstruction['50'],
    color: colors.neutral['2'],
    borderLeft: `${spacing(0.5)}px solid ${colors.warning.main}`,
    borderRadius: 0,
  },
  iconError: {
    color: colors.error.main,
  },
  iconInfo: {
    color: colors.optionalInstruction.default,
  },
  iconWarning: {
    color: colors.warning.main,
  },
}));
