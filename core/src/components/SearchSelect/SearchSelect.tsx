import { Collapse, InputBase, List } from '@material-ui/core';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import cx from 'classnames';
import * as React from 'react';

import { Area, Icon, Typography, useTheme } from '../..';
import { AvatarProps } from '../Avatar/Avatar';
import DefaultDivider from '../DefaultDivider';

import { DefaultOptionComponent, DefaultSelectedComponent } from './defaults';
import { useStyles } from './styles';

export interface SearchSelectOption {
  avatarProps?: AvatarProps;
  title: string;
  cells: string[];
  value: string;
}

export interface SearchSelectProps {
  name: string;
  header?: string;
  options: SearchSelectOption[];
  value: SearchSelectOption | null;
  onChange: (option: SearchSelectOption) => void;
  SelectedComponent?: React.ComponentType<SearchSelectOption>;
  OptionComponent?: React.ComponentType<SearchSelectOption>;
  placeholder?: string;
  maxHeight?: string;
  notFoundText?: string;
  testId?: string;
}

const SearchSelect: React.FunctionComponent<SearchSelectProps> = ({
  placeholder,
  header,
  options,
  name,
  onChange,
  maxHeight = '744px',
  SelectedComponent = DefaultSelectedComponent,
  OptionComponent = DefaultOptionComponent,
  value,
  notFoundText = 'Not Found',
  testId
}) => {
  const classes = useStyles({ maxHeight });
  const [open, setOpen] = React.useState<boolean>(false);
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value: autoCompleteValue,
    setAnchorEl
  } = useAutocomplete({
    id: name,
    multiple: false,
    open,
    options,
    onChange: (event, value) => {
      event.preventDefault();
      value && onChange(value);
    },
    getOptionLabel: (option) => `${option.title} ${option.cells.join(' ')}`,
    getOptionSelected: (option, value) => option.value === value.value,
    value,
    onClose: () => setOpen(false)
  });

  const theme = useTheme();

  return (
    <div className={classes.root}>
      <div
        {...getRootProps()}
        aria-label={name}
        aria-haspopup={'listbox'}
        aria-expanded={open}
        aria-owns={name}
        onClick={() => setOpen(true)}
      >
        <label
          {...getInputLabelProps()}
          ref={setAnchorEl}
          className={cx(classes.label, {
            [classes.hidden]: open,
            [classes.visible]: !open
          })}
        >
          {autoCompleteValue && <SelectedComponent {...autoCompleteValue} />}
          {!autoCompleteValue && (
            <Typography variant={'c1'}>{header}</Typography>
          )}
          <Icon
            name={'up-down'}
            color={theme.colors.icon.control}
            className={classes.icon}
          />
        </label>
        <InputBase
          placeholder={placeholder}
          inputProps={{
            ...getInputProps(),
            type: open ? 'text' : 'hidden',
            'aria-labelledby': `${name}-label`,
            'aria-controls': name
          }}
          classes={{
            input: classes.inputBase
          }}
          className={cx(classes.input, {
            [classes.hidden]: !open,
            [classes.visible]: open
          })}
        />
      </div>
      <DefaultDivider />
      <Area
        testId={testId && `${testId}-area`}
        border={groupedOptions.length > 0 || open}
        elevated
        className={classes.area}
      >
        <Collapse in={groupedOptions.length > 0 || open}>
          <Typography variant={'c1'} className={classes.header}>
            {header}
          </Typography>
          {groupedOptions.length < 1 && (
            <Typography variant={'c2'} color={'label'} className={classes.row}>
              {notFoundText}
            </Typography>
          )}
          <List {...getListboxProps()} className={classes.list}>
            {groupedOptions.map((option, index) => (
              <li
                {...getOptionProps({ option, index })}
                key={option.value}
                className={cx(classes.row, {
                  [classes.selected]: autoCompleteValue?.value === option.value
                })}
              >
                <OptionComponent {...option} />
              </li>
            ))}
          </List>
        </Collapse>
      </Area>
    </div>
  );
};

export default SearchSelect;
