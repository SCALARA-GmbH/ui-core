import { ListItemAvatar, ListItemText } from '@material-ui/core';
import MuiAutocomplete, {
  AutocompleteProps as MuiAutocompleteProps,
  createFilterOptions
} from '@material-ui/lab/Autocomplete';
import * as React from 'react';

import { Avatar, Icon, TextField, Typography, useTheme } from '../..';
import { SelectOption } from '../Select/Select';
import { TextColor } from '../Typography/types';

import ListboxComponentVirtualized from './ListboxComponentVirtualized';
import PaperComponent from './PaperComponent';
import { useStyles } from './styles';

const filter = createFilterOptions<SelectOption>();

export interface AutocompleteProps {
  className?: string;
  color?: TextColor;
  value?: SelectOption;
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  helperText?: string;
  label?: string;
  clearLabel?: string;
  name: HTMLInputElement['name'];
  noOptionsText?: string;
  options: MuiAutocompleteProps<
    SelectOption,
    boolean,
    boolean,
    boolean
  >['options'];
  style?: React.CSSProperties;
  testId?: string;
  onChange?: (option: SelectOption) => void;
  onClear?: () => void;
  onNewOptionClick?: (option: SelectOption) => void;
  renderNewOptionTitle?: (value: string) => string;
  ariaLabel?: string;
  /**
   * If true, the options will be virtualized with react-window
   */
  virtualized?: boolean;
}

const Autocomplete: React.FunctionComponent<AutocompleteProps> = ({
  className = '',
  color = 'initial',
  disabled = false,
  error = false,
  errorText,
  helperText,
  label,
  ariaLabel,
  clearLabel,
  noOptionsText = '',
  options,
  value,
  style = {},
  name,
  testId,
  onChange,
  onNewOptionClick,
  renderNewOptionTitle,
  onClear,
  virtualized
}) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <MuiAutocomplete
      autoComplete={false}
      classes={{
        popupIndicator: classes.popupIndicator
      }}
      className={className}
      clearText={clearLabel}
      closeIcon={
        <Icon color={theme.colors.icon.control} name={'close'} size={'small'} />
      }
      disabled={disabled}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        if (onNewOptionClick) {
          // Suggest the creation of a new value
          if (params.inputValue !== '') {
            filtered.push({
              value: params.inputValue,
              title:
                renderNewOptionTitle?.(params.inputValue) ||
                `New "${params.inputValue}"`
            });
          }
        }

        return filtered;
      }}
      getOptionLabel={(option) => option.title}
      getOptionSelected={(option, value) => option.value === value.value}
      onChange={(event, newValue: SelectOption | null) => {
        if (newValue) {
          if (options.map(({ value }) => value).includes(newValue.value)) {
            onChange?.(newValue);
          } else {
            onNewOptionClick?.(newValue);
          }
        } else {
          onClear?.();
        }
      }}
      openOnFocus
      noOptionsText={noOptionsText}
      options={options}
      popupIcon={<Icon color={theme.colors.icon.control} name={'arrow-down'} />}
      renderInput={(params) => (
        <TextField
          endAdornment={params.InputProps.endAdornment}
          color={color}
          disabled={params.disabled}
          error={error}
          errorText={errorText}
          helperText={helperText}
          inputProps={{
            ...params.inputProps,
            'aria-label': ariaLabel || label || name,
            autoComplete: 'new-password'
          }}
          label={label}
          ref={params.InputProps.ref}
          testId={testId}
          name={name}
        />
      )}
      renderOption={({ avatarProps, subtitle, title }) => (
        <>
          {avatarProps && (
            <ListItemAvatar>
              <Avatar size={'small'} {...avatarProps} />
            </ListItemAvatar>
          )}
          <ListItemText
            disableTypography
            primary={<Typography>{title}</Typography>}
            secondary={<Typography variant={'c3'}>{subtitle}</Typography>}
          />
        </>
      )}
      style={style}
      value={value}
      PaperComponent={PaperComponent}
      ListboxComponent={
        virtualized
          ? (ListboxComponentVirtualized as React.ComponentType<
              React.HTMLAttributes<HTMLElement>
            >)
          : undefined
      }
    />
  );
};

export default Autocomplete;
