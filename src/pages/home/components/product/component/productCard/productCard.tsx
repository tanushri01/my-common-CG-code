import React, { useEffect, useState } from 'react';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { Box, Spacing, SpacingEnum, Typography, PdfDialog } from '@/components';
import Triangle from '@/components/triangle';
import { RoutePathEnum, TriangleIconSizeEnum } from '@/enum';

import { ProductDeailCard, ProductLink } from './productCard.style';
import MultiplePdfDialog from '@/components/multiplePdfPopup';

interface IProps
  extends Readonly<{
    title: string;
    icon: IconDefinition;
  }> {}

/**
 * @component {ProductCard } - This component is using for Product Card.
 * @param {IProps} props
 * @return { JSX.Element}
 */
const ProductCard = (props: IProps): JSX.Element => {
  const { title, icon } = props;
  const [open, setOpen] = useState(false);
  const [openMultiple, setOpenMultiple] = useState(false);

  /**
   * For handling toggling of the pdf popup
   * @function handleToggle
   */
  const handleToggle = (): void => {
    setOpen(!open);
  };

  /**
   * For handling toggling of the pdf popup
   * @function handleToggle
   */
  const handleToggleMultiple = (): void => {
    setOpenMultiple(!open);
  };

  // For closing pdf popup after 2 seconds
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  }, [open]);

  // For closing pdf popup after 3 seconds
  useEffect(() => {
    if (openMultiple) {
      setTimeout(() => {
        setOpenMultiple(false);
      }, 4000);
    }
  }, [openMultiple]);

  const getCard = () => (
    <ProductDeailCard>
      <Triangle iconName={icon} size={TriangleIconSizeEnum.LG} />
      <Spacing spacing={2} variant={SpacingEnum.BOTTOM} />
      <Typography variant="h4" sx={{ textAlign: 'center', maxWidth: '200px' }}>
        {title}
      </Typography>
    </ProductDeailCard>
  );

  const getProduct = (text: string) => {
    switch (text) {
      case 'Cost Effective Results':
        return (
          <ProductLink
            href={{
              pathname: RoutePathEnum.BLOG_DETAIL,
              query: { blogId: 1 },
            }}
          >
            {getCard()}
          </ProductLink>
        );

      case 'Format of letter for DIY Violation Notice':
        return (
          <>
            <Box sx={{ width: '100%' }} onClick={handleToggle}>
              {getCard()}
            </Box>
            <PdfDialog handleClose={handleToggle} open={open} />
          </>
        );

      case 'Tactics to get money for Reporting Errors':
        return (
          <>
            <Box sx={{ width: '100%' }} onClick={handleToggleMultiple}>
              {getCard()}
            </Box>
            <MultiplePdfDialog
              handleClose={handleToggleMultiple}
              open={openMultiple}
            />
          </>
        );

      default:
        return getCard();
    }
  };

  return getProduct(title);
};

export default ProductCard;
