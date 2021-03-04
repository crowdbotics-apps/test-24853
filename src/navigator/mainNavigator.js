import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Tutorial211623Navigator from '../features/Tutorial211623/navigator';
import NotificationList211595Navigator from '../features/NotificationList211595/navigator';
import Settings211594Navigator from '../features/Settings211594/navigator';
import Settings211586Navigator from '../features/Settings211586/navigator';
import UserProfile211584Navigator from '../features/UserProfile211584/navigator';
import UserProfile211553Navigator from '../features/UserProfile211553/navigator';
import Tutorial211552Navigator from '../features/Tutorial211552/navigator';
import NotificationList211524Navigator from '../features/NotificationList211524/navigator';
import Settings211523Navigator from '../features/Settings211523/navigator';
import Settings211515Navigator from '../features/Settings211515/navigator';
import UserProfile211513Navigator from '../features/UserProfile211513/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Tutorial211623: { screen: Tutorial211623Navigator },
NotificationList211595: { screen: NotificationList211595Navigator },
Settings211594: { screen: Settings211594Navigator },
Settings211586: { screen: Settings211586Navigator },
UserProfile211584: { screen: UserProfile211584Navigator },
UserProfile211553: { screen: UserProfile211553Navigator },
Tutorial211552: { screen: Tutorial211552Navigator },
NotificationList211524: { screen: NotificationList211524Navigator },
Settings211523: { screen: Settings211523Navigator },
Settings211515: { screen: Settings211515Navigator },
UserProfile211513: { screen: UserProfile211513Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
