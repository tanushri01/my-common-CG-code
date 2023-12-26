import React from 'react';
import Image from 'next/image';

import { ImageSectionLeft } from './manImageSection.style';
import Man from '../../assets/images/pages/home/woman.jpg';

interface IManImageSection {
  imageUrl: string;
}

/**
 * @component {ManImageSection} This is Component for showing Man Image Section.
 * @param {string} props
 * @return {JSX.Element}
 */
const ManImageSection = (props: IManImageSection): JSX.Element => {
  const { imageUrl } = props;

  return (
    <ImageSectionLeft>
      <Image src={imageUrl || Man} alt="Man" width={400} height={450} />
    </ImageSectionLeft>
  );
};

export default ManImageSection;
