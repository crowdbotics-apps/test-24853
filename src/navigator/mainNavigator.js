import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
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
