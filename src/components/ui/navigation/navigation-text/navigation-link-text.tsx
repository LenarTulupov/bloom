import { ICONS } from '@/constants/icons';
import Icon from '../../../icon/icon';
import styles from './navigation-link-text.module.scss';

interface INavigationLinkText {
  name: string;
  hasDropdown: boolean;
  icon?: boolean;
}

export default function NavigationLinkText({ 
  name, 
  hasDropdown, 
  icon = false }: INavigationLinkText) {
  const upperName = name.slice(0,1).toUpperCase() + name.slice(1);
  return (
    <div className={styles['navigation__link-text']}>
      {!icon ? upperName : ICONS[name] 
        ? <Icon name={name}/> 
        : null
      }
      {/* dropdown arrow */}
      { hasDropdown && (
        <Icon name="arrow" size='sm'/> 
      )}
    </div>
  )
}
