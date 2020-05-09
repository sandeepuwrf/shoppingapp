import React from 'react'
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';

import { Platform } from 'react-native';

import Colors from '../constants/Colors';
import ProductsOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import AuthScreen from '../screens/user/AuthScreen';

import { Ionicons } from '@expo/vector-icons'

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
}

const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => (<Ionicons name={Platform.OS == 'android' ? 'md-cart' : 'ios-cart'}
            size={23}
            color={drawerConfig.tintColor}
        />)
    },
    defaultNavigationOptions: defaultNavOptions
});

const OrdersNavigator = createStackNavigator({
    Orders: OrdersScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => (<Ionicons name={Platform.OS == 'android' ? 'md-list' : 'ios-list'}
            size={23}
            color={drawerConfig.tintColor}
        />)
    },
    defaultNavigationOptions: defaultNavOptions
}
);

const AdminNavigator = createStackNavigator({
    UserProducts: UserProductsScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => (<Ionicons name={Platform.OS == 'android' ? 'md-create' : 'ios-create'}
            size={23}
            color={drawerConfig.tintColor}
        />)
    },
    defaultNavigationOptions: defaultNavOptions
}
);

const ShopNavigator = createDrawerNavigator({
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator
},
    {
        contentOptions: {
            activeTintColor: Colors.primary
        }
    })

const AuthNavigator = createStackNavigator({
    Auth: AuthScreen
}, {
    defaultNavigationOptions: defaultNavOptions
});

const MainNavigator = createSwitchNavigator({
    Auth: AuthNavigator,
    Shop: ShopNavigator
});

export default createAppContainer(MainNavigator);