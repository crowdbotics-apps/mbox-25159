import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Settings216729Navigator from '../features/Settings216729/navigator';
import Settings216714Navigator from '../features/Settings216714/navigator';
import NotificationList216713Navigator from '../features/NotificationList216713/navigator';
import Maps216712Navigator from '../features/Maps216712/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Settings216729: { screen: Settings216729Navigator },
Settings216714: { screen: Settings216714Navigator },
NotificationList216713: { screen: NotificationList216713Navigator },
Maps216712: { screen: Maps216712Navigator },

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
