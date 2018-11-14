import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { Fonts } from "../../Utility/Fonts";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("ios-restaurant", 30),
    Icon.getImageSource("md-cart", 30),
    Icon.getImageSource("ios-menu", 30, (color = "white"))
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "potrcko.ScreenOne",
          label: "Ponuda",
          title: "Će Doneseš?",
          icon: sources[0],
          navigatorStyle: {
            navBarBackgroundColor: "#2E8B57",
            navBarTitleTextCentered: true,
            navBarTextColor: "#ffffff",
            statusBarColor: "#2E8B57",
            navBarTextFontFamily: Fonts.GloriaHallelujah,
            navBarTextFontSize: 25
            // navBarHidden: true
            // screenBackgroundColor: "#f2f2f2"
          },
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        }
        // {
        //   screen: "potrcko.ScreenTwo",
        //   label: "Korpa",
        //   title: "Gebajzla",
        //   icon: sources[1],
        //   navigatorStyle: {
        //     navBarBackgroundColor: "#2E8B57",
        //     navBarTitleTextCentered: true,
        //     navBarTextColor: "#ffffff",
        //     statusBarColor: "#2E8B57",
        //     navBarTextFontFamily: Fonts.GloriaHallelujah,
        //     navBarTextFontSize: 25
        //   },
        //   navigatorButtons: {
        //     leftButtons: [
        //       {
        //         icon: sources[2],
        //         title: "Menu",
        //         id: "sideDrawerToggle"
        //       }
        //     ]
        //   }
        // }
      ],
      drawer: {
        left: {
          screen: "potrcko.SideDrawer"
        }
      },
      appStyle: {
        tabBarSelectedButtonColor: "#ffffff",
        tabBarBackgroundColor: "#2E8B57",
        tabBarButtonColor: "#ffffff",
        tabBarHidden: true
      }
    });
  });
};

export default startTabs;
