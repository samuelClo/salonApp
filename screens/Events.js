import { View, Text, TouchableOpacity } from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import React from 'react'

const json = {
  "2021-04-02": [
    {
      "title":"Finales de la CapGame Arena",
      "content": "Ce format de compétition inclusif invite les équipes à être composées de personnes en situation de handicap. Après des qualifications ayant pris place durant le mois d’octobre, la Scène PGW accueille les finales sur les jeux eFootball PES 2020, Forza Motorsport 7 et Street Fighter V Arcade Edition.",
      "start":"14:00:00",
      "end":"18:00:00",
      "categories":"handicap",
      "check":"0"
    },
    {
      "title":"Finales de la CapGame Arena",
      "content": "Ce format de compétition inclusif invite les équipes à être composées de personnes en situation de handicap. Après des qualifications ayant pris place durant le mois d’octobre, la Scène PGW accueille les finales sur les jeux eFootball PES 2020, Forza Motorsport 7 et Street Fighter V Arcade Edition.",
      "start":"10:00:00",
      "end":"12:00:00",
      "categories":"handicap",
      "check":"0"
    }
  ]
}

export default class Events extends React.Component {
  state = {
    items: json
  }

  render() {
    const timeToString = (time) => {
      const date = new Date(time);
      return date.toISOString().split('T')[0];
    };

    const loadItems = (day) => {
      const {items} = this.state;

      setTimeout(() => {
        for (let i = -15; i < 85; i++) {
          const time = day.timestamp + i * 24 * 60 * 60 * 1000;
          const strTime = timeToString(time);
          if (!items[strTime]) {
            items[strTime] = [];
            const numItems = Math.floor(Math.random() * 3 + 1);
            for (let j = 0; j < numItems; j++) {
              items[strTime].push({
                title: "Finales de la CapGame Arena",
                start: "10:00:00",
                end: "12:00:00"
              });
            }
          }
        }

        this.setState({items});
      }, 1000);
    }

    const renderItem = (item) => {
      return (
          <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
            <Card>
              <Card.Content>
                <View>
                  <Text>{item.start} - {item.end}</Text>
                  <Text>{item.title}</Text>
                  {/*<Avatar.Text label="A" />*/}
                </View>
              </Card.Content>
            </Card>
          </TouchableOpacity>
      );
    };

    return <View style={{flex: 1, marginTop: 40}}>
      <Agenda
          // considered that the date in question is not yet loaded
          items={this.state.items}
          // Callback that gets called when items for a certain month should be loaded (month became visible)
          loadItemsForMonth={loadItems}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2021-04-01'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2021-04-30'}
          // Specify how each item should be rendered in agenda
          renderItem={renderItem}
      />
    </View>
  }
}
