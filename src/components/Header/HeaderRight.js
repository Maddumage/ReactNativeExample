import React, { Component } from 'react';
import {
    Dimensions,
    View,
    TouchableOpacity,
    Icon
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Icon } from 'native-base';
import NavigationService from '../../services/NavigationService';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });


class HeaderRight extends Component {

    onProfilePress = () => {
        NavigationService.navigate('ProfileScreen');
    }

    onNotificationsPress = () => {
        NavigationService.navigate('NotificationsScreen');
    }

    onSettingsPress = () => {
        NavigationService.navigate('SettingsScreen');
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <TouchableOpacity style={styles.iconContainer} onPress={this.onProfilePress}>
                    <Icon type="FontAwesome" name="user-circle-o" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={this.onNotificationsPress}>
                    <Icon type="Ionicons" name="md-notifications" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={this.onSettingsPress}>
                    <Icon type="Ionicons" name="md-settings" />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '5rem'
    },
    iconContainer: {
        paddingHorizontal: '15rem'
    }
});

export { HeaderRight };
