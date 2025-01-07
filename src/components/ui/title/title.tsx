import { ElementType } from 'react';
import { ITitle } from '@/types/title.interface';
import cn from 'classnames'
import styles from './title.module.scss';

export default function Title({
  title,
  children,
  className,
  color = 'black',
  size = 'md',
  background = false,
  h = 2,
  rounded = false,
  border = false,
  ...props }: ITitle) {
    const Tag: ElementType = `h${h}`
  return (
    <Tag
      className={cn(
        styles.title,
        className || '',
        styles[color],
        styles[size],
        background ? styles.background : '',
        rounded ? styles.rounded : '',
        border ? styles.border : ''
      )}
      {...props}
    >
      {title || children }
    </Tag>
  )
};
