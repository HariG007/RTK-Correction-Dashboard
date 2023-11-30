// assets
import { LoginOutlined, ProfileOutlined ,DatabaseOutlined,SettingOutlined,TagOutlined,AimOutlined} from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
  DatabaseOutlined,
  SettingOutlined,
  TagOutlined,
  AimOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Authentication',
  type: 'group',
  children: [
    {
      id: 'login1',
      title: 'Login',
      type: 'item',
      url: '/login',
      icon: icons.LoginOutlined,
      target: true
    },
    {
      id: 'register1',
      title: 'Register',
      type: 'item',
      url: '/register',
      icon: icons.ProfileOutlined,
      target: true
    },
    {
      id: 'Product',
      title: 'Log Status',
      type: 'item',
      url: '/Product',
      icon: icons.DatabaseOutlined,
      target: true
    },
    {
      id: 'DataSubscription',
      title: 'DataSubscription',
      type: 'item',
      url: '/DataSubscription',
      icon: icons.TagOutlined,
      target: true
    },
    {
      id: 'UserSettings',
      title: 'UserSettings',
      type: 'item',
      url: '/UserSettings',
      icon: icons.SettingOutlined,
      target: true
    },
    {
      id: 'MapView',
      title: 'MapView',
      type: 'item',
      url: 'https://armrus.org/extranet/proj/',
      icon: icons.AimOutlined,
      target: true
    }
  ]
};

export default pages;
