/* eslint-disable max-len */
import { useTheme } from '@mui/material';
import React, { ReactElement } from 'react';

/**
 * TringleSvg svg
 * @param {IProps} props
 * @return {ReactElement}
 */
export function TringleSvg(): ReactElement {
  const theme = useTheme();

  return (
    <svg
      width="131"
      height="123"
      viewBox="0 0 131 123"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M52.3009 8.44737C57.9689 -2.05101 73.0311 -2.05104 78.6991 8.44734L128.465 100.624C133.861 110.618 126.624 122.75 115.266 122.75H15.7339C4.37642 122.75 -2.86097 110.618 2.53476 100.624L52.3009 8.44737Z"
        fill={theme.palette.primary.main}
      />
    </svg>
  );
}
