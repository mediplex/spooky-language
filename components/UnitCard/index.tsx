import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, Button, Card, Paragraph, Colors, ProgressBar } from 'react-native-paper';
// import { withNavigation } from 'react-navigation';

export const UnitCard = ({ navigation}) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card} onPress={() => {
        console.log('card pressed!')
        navigation.navigate('LessonScreen', {unitId:'unit-id'})
    }}>
        <Card.Cover
          style={styles.cardCover}
          source={{ uri: 'https://picsum.photos/id/1028/480/280' }}
        />

        <Card.Content>
          <View
            style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}
          >
            <Title>
              {`lessonTitle`}
              {` | `}
              {`unitTitle`}
            </Title>
          </View>
          <Paragraph>{`shortDescription`}</Paragraph>
          <ProgressBar progress={0.5} color={Colors.blue400} />
        </Card.Content>

        <Card.Actions
          style={{
            flexDirection: 'row-reverse'
          }}
        >
          <Button icon="arrow-right" color={Colors.blue400}>
            Continue
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingVertical: 8
  },
  card: {
    borderRadius: 24,
    backgroundColor: Colors.white
  },
  cardCover: {
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24
  }
});

export default UnitCard;
