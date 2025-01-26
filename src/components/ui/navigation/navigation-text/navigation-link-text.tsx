import { ICONS } from '@/constants/icons';
import Icon from '../../icon/icon';
import styles from './navigation-link-text.module.scss';

interface INavigationLinkText {
  name: string;
  hasDropdown: boolean;
  isHovered: boolean;
}

export default function NavigationLinkText({ name, hasDropdown, isHovered }: INavigationLinkText) {
  return (
    <div className={styles['navigation__link-text']}>
      { name.slice(0,1).toUpperCase() + name.slice(1) }
      { hasDropdown && (
        <Icon 
          icon={ICONS.down} 
          color="black" 
          isHovered={isHovered} 
          isHoverIcon={isHovered}
        /> 
      )}
    </div>
  )
}
