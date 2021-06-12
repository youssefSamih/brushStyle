import 'slick-carousel/slick/slick.css';
import { isMaxWidth } from 'utils/hooks/useWindow';
import Slick, { Settings } from 'react-slick';
import { ArrowRight } from 'ui/Icons/ArrowRight';
import { ArrowLeft } from 'ui/Icons/ArrowLeft';
import Image from 'next/image';
import { ImageType, SliderProps } from 'interfaces';
import { SlickContainer } from './style';

const Slider = ({
  images,
  slidesToShow = 1,
  showDots = true,
  slidesToScroll = 1,
  marginBottom,
  marginRightSlideItem,
}: SliderProps) => {
  const isMobile = isMaxWidth('sm');

  const settings: Settings = {
    nextArrow: (
      <ArrowRight
        shadow
        borderColor={'white'}
        color={'white'}
        opacity={0}
        width={isMobile ? undefined : '3.75rem'}
        height={isMobile ? undefined : '3.75rem'}
      />
    ),
    prevArrow: (
      <ArrowLeft
        shadow
        borderColor={'white'}
        color={'white'}
        opacity={0}
        width={isMobile ? undefined : '3.75rem'}
        height={isMobile ? undefined : '3.75rem'}
      />
    ),
    dots: showDots,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
  };

  if (!isMobile) {
    settings.customPaging = (i: number) => (
      <Image src={images[i].uri} width={91} height={55} loading="lazy" />
    );
  }
  return (
    <SlickContainer {...{ marginBottom }} marginRight={marginRightSlideItem}>
      <Slick {...settings}>
        {images.map(({ uri, alt }: ImageType, i) => (
          <div key={i}>
            <picture>
              <source srcSet={`${uri}?webp`} type="image/webp" />
              <source srcSet={`${uri}`} type="image/jpeg" />
              <Image
                src={uri}
                alt={alt}
                layout="responsive"
                width={100}
                height={50}
                loading="lazy"
              />
            </picture>
          </div>
        ))}
      </Slick>
    </SlickContainer>
  );
};

export default Slider;
