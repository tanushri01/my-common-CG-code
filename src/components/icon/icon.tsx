import React, { memo, useMemo } from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  IconButton,
  IconButtonProps,
  Theme,
  Tooltip,
  TooltipProps,
  useTheme,
} from '@mui/material';

export interface IProps extends IconButtonProps {
  icon: IconProp;
  title?: string;
  label?: string;
  size?: IconButtonProps['size'];
  color?: IconButtonProps['color'];
  iconSize?: FontAwesomeIconProps['size'];
  disabled?: boolean;
  iconProps?: Omit<FontAwesomeIconProps, 'icon'>;
  disableButton?: boolean;
  enableGutter?: boolean;
  tooltipProps?: Omit<Omit<TooltipProps, 'children'>, 'title'>;
}

/**
 * Icon Component - This component is using for Icon.
 * @param {IProps} props
 * @return {JSX.Element}
 */
export const Icon = (props: IProps): JSX.Element => {
  const {
    title,
    label,
    icon,
    iconSize,
    iconProps,
    disableButton,
    tooltipProps,
    enableGutter,
    ...rest
  } = props;

  const theme: Theme = useTheme();

  const fontAwesomeProps: FontAwesomeIconProps = useMemo(
    () => ({
      icon,
      size: iconSize,
    }),
    [icon, iconSize],
  );

  /**
   * display icon
   */
  const displayIcon = (
    <FontAwesomeIcon
      {...fontAwesomeProps}
      {...iconProps}
      style={{
        padding: theme.spacing(0, enableGutter ? 1 : 0),
        ...iconProps?.style,
      }}
    />
  );

  /**
   * show the tooltip on Icon
   */
  const tooltip = useMemo(() => {
    if (label) {
      return label;
    }

    return title;
  }, [label, title]);

  /**
   * Display Button
   * @return {JSX.Element}
   */
  const displayButton = (): JSX.Element => (
    <IconButton
      sx={{
        p: disableButton ? 0 : 1,
        cursor: disableButton ? 'default' : 'pointer',
        ...rest.sx,
      }}
      disableRipple={disableButton}
      disableTouchRipple={disableButton}
      disableFocusRipple={disableButton}
      {...rest}
    >
      {displayIcon}
    </IconButton>
  );

  return (
    <Tooltip title={tooltip} arrow followCursor {...tooltipProps}>
      {displayButton()}
    </Tooltip>
  );
};

Icon.defaultProps = {
  iconSize: 'sm',
  size: 'small',
  color: 'primary',
  title: undefined,
  label: undefined,
  disabled: false,
  iconProps: {},
  disableButton: false,
  tooltipProps: {},
  enableGutter: false,
};

export default memo(Icon);
