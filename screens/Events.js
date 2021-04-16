import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Agenda, LocaleConfig} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import React from 'react';
import moment from 'moment';
import ModalDetailed from "./ModalDetailed";
import {connect} from "react-redux";

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
  today: 'Aujourd\'hui'
};

LocaleConfig.defaultLocale = 'fr';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.events,
      modalData: {
        categories: []
      },
      showModal: false
    }
  }

  passDataToModal(event){
    this.setState({modalData: event, showModal: true});
  }

  render() {
    const timeToString = (time) => {
      const date = new Date(time);
      return date.toISOString().split('T')[0];
    };

    const reorder = () => {
      const items = this.state.items
      for (let k in items) {
        items[k].sort((a, b) => (moment(a.start, 'HHmmss') > moment(b.start, 'HHmmss')) ? 1 : -1)
      }
    }



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

        this.setState({items: reorder});
      }, 1000);
    }

    const renderItem = (item) => {
      return (
          <TouchableOpacity onPress={() => this.passDataToModal(item)} style={{marginRight: 10, marginTop: 17}}>
            <Card>
              <Card.Content>
                <View>
                  <Text style={[styles.fontMedium, {marginBottom: 10}]}>{moment(item.start, 'LT').format('HH:mm')} - {moment(item.end, 'LT').format('HH:mm')}</Text>
                  <Text style={[styles.fontBold, {fontSize: 17}]}>{item.title}</Text>
                  <View style={[{flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginTop: 20}]}>
                    {item.categories.map((value, index) => ( <View key={index} style={styles[value]}><Text style={[{color: 'white', fontWeight: 'bold', fontSize: 10, textAlign: 'center'}]}>{value}</Text></View> )) }
                  </View>
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
          //loadItemsForMonth={loadItems}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2021-04-01'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2021-04-07'}
          // Specify how each item should be rendered in agenda
          renderItem={renderItem}
          // Agenda theme
          theme={{
            agendaDayNumColor: 'black',
            'stylesheet.calendar.day.period': {
              todayText: {
                fontWeight: '900'
              }
            }
          }}

      />
      <ModalDetailed unShow={() => this.setState({showModal: false})} show={this.state.showModal} modalData={this.state.modalData} />
    </View>
  }
}

const mapStateToProps = state => {
  return {
    events: state.ParametersStore.events
  }
}

export default connect(
    mapStateToProps,
)(Events)

const styles = StyleSheet.create({
  fontBold: {
    fontWeight: '900'
  },
  fontMedium: {
    fontWeight: '600'
  },
  Nintendo: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginRight: 5
  },
  ESWC: {
    backgroundColor: 'green',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginRight: 5
  },
  Esport: {
    backgroundColor: 'purple',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginRight: 5
  },
  Handicap: {
    backgroundColor: 'pink',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginRight: 5
  },
  EASports: {
    backgroundColor: 'grey',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginRight: 5
  },
  Riot: {
    backgroundColor: 'blue',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginRight: 5
  },
  Danse: {
    backgroundColor: 'orange',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginRight: 5
  }
});
