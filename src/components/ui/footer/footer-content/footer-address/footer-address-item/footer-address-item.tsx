import Icon from '@/components/ui/icon/icon';
import styles from './footer-address-item.module.scss';
import Description from '@/components/ui/description/description';
import { ComponentType, SVGProps } from 'react';

interface IFooterAddressItem {
  icon: ComponentType<SVGProps<SVGSVGElement>>,
  description: string;
}

export default function FooterAddressItem({ icon, description }: IFooterAddressItem) {
  return (
    <li className={styles['footer-address__item']}>
      <Icon icon={icon}/>
      <Description size='sm' color='white'>{description}</Description>
    </li>
  )
}
