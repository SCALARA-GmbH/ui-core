import MuiLabPagination from '@material-ui/lab/Pagination';
import * as React from 'react';

interface Props {
  /**
   * Number of always visible pages at the beginning and end.
   * @default 1
   */
  boundaryCount?: number;
  /**
   * If set, override styles
   */
  className?: string;
  /**
   * The active color.
   */
  color?: 'primary' | 'secondary' | 'standard';
  /**
   * The shape of the pagination items.
   */
  shape?: 'round' | 'rounded';
  /**
   * The size of the pagination component.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The variant to use.
   */
  variant?: 'text' | 'outlined';
  /**
   * The total number of pages.
   * @default 1
   */
  count?: number;
  /**
   * The page selected by default when the component is uncontrolled.
   * @default 1
   */
  defaultPage?: number;
  /**
   * If `true`, the pagination component will be disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, hide the next-page button.
   * @default false
   */
  hideNextButton?: boolean;
  /**
   * If `true`, hide the previous-page button.
   * @default false
   */
  hidePrevButton?: boolean;
  /**
   * Callback fired when the page is changed.
   *
   * @param {object} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onChange?: (event: React.ChangeEvent<unknown>, page: number) => void;
  /**
   * The current page.
   */
  page?: number;
  /**
   * If `true`, show the first-page button.
   * @default false
   */
  showFirstButton?: boolean;
  /**
   * If `true`, show the last-page button.
   * @default false
   */
  showLastButton?: boolean;
  /**
   * Number of always visible pages before and after the current page.
   * @default 1
   */
  siblingCount?: number;
}

const Pagination: React.FunctionComponent<Props> = ({
  className,
  boundaryCount = 1,
  color = 'standard',
  count = 1,
  defaultPage = 1,
  disabled = false,
  hideNextButton = false,
  hidePrevButton = false,
  onChange,
  page,
  shape = 'round',
  showFirstButton = false,
  showLastButton = false,
  siblingCount,
  size = 'medium',
  variant = 'text'
}) => {
  return (
    <MuiLabPagination
      boundaryCount={boundaryCount}
      className={className}
      color={color}
      count={count}
      defaultPage={defaultPage}
      disabled={disabled}
      hideNextButton={hideNextButton}
      hidePrevButton={hidePrevButton}
      onChange={onChange}
      page={page}
      shape={shape}
      showFirstButton={showFirstButton}
      showLastButton={showLastButton}
      siblingCount={siblingCount}
      size={size}
      variant={variant}
    />
  );
};

export default Pagination;
