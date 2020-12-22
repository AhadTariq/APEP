import React from "react";

import {createAppContainer} from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer"
import { Dimensions } from "react-native";

import { Feather } from "@expo/vector-icons";

import { ProfileScreen, MessageScreen, ActivityScreen, ListScreen, ReportScreen, StatisticScreen, SignOutScreen} from './CourseSelection';

const DrawerNavigator = createDrawerNavigator({
    ProfileScreen,
    MessageScreen, ActivityScreen, ListScreen, ReportScreen, StatisticScreen, SignOutScreen
})

export default createAppContainer(DrawerNavigator);