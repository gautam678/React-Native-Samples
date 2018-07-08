import { Text, View, Image, Linking } from 'react-native';
import React from 'react';
import Card from './Card';
import CardItems from './CardItems';
import Button from './Button';

const AlbumDetails = ({ album }) => {
    const { title, artist, image, thumbnail_image, url } = album;
    const { textStyle, imageStyle, textHeaderStyle, albumStyle } = styles;
    return (


        <Card>
            <CardItems>
                <Image style={imageStyle} source={{ uri: thumbnail_image }} />
                <View style={textStyle}>
                    <Text style={textHeaderStyle}> {title} </Text>
                    <Text> {artist} </Text>
                </View>

            </CardItems>
            <CardItems>
                <Image style={albumStyle} source={{ uri: image }} />
            </CardItems>
            <Button onPress={() => Linking.openURL(url)} >
                Buy Now
            </Button>
        </Card>);
};

const styles = {
    textStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    textHeaderStyle:
    {
        fontSize: 18
    },
    imageStyle: {
        height: 35,
        width: 35,
        padding: 5,
        borderColor: '#ddd'
    },
    albumStyle:
    {
        height: 350,
        width: null,
        flex: 1


    }
};
export default AlbumDetails;
