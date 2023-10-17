import classes from './index.module.scss';
import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const Avatar = ({ src, alt, width, height }: Props) => (
  <Image className={classes.avatar} src={src} alt={alt} width={width ?? 40} height={height ?? 40} />
);

export default Avatar;
