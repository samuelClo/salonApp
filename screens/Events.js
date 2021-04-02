import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Agenda, LocaleConfig} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import React from 'react';
import moment from 'moment';
import ModalDetailed from "./ModalDetailed";

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
  today: 'Aujourd\'hui'
};

LocaleConfig.defaultLocale = 'fr';

const json = {
  "2021-04-01": [
    {
      "title": "Finales de la CapGame Arena",
      "content": "Ce format de compétition inclusif invite les équipes à être composées de personnes en situation de handicap. Après des qualifications ayant pris place durant le mois d'octobre, la Scène PGW accueille les finales sur les jeux eFootball PES 2020, Forza Motorsport 7 et Street Fighter V Arcade Edition.",
      "start": "140000",
      "end": "180000",
      "categories": ["Handicap", "Esport"],
      "check": "0"
    },
    {
      "title": "Coupe Silver Geek PGW",
      "content": "Le jeu vidéo c'est pour tout le monde quel que soit l'âge, et l'association Silver Geek est bien décidée à le démontrer à travers la coupe Silver Geek PGW. Venant de la France entière, 4 équipes de seniors s'affronteront sur Wii Bowling pour se départager et remporter le titre de champion de France Silver Geek.",
      "start": "100000",
      "end": "120000",
      "categories": ["Handicap", "Esport"],
      "check": "0"
    },
    {
      "title": "MO5 World Cup",
      "content": "La Scène PGW accueillera l'association MO5 pour une compétition sur SEGA Saturn pour revivre avec nostalgie vos meilleurs moments sur cette console emblématique. Ce tournoi sera également l'occasion de faire découvrir aux plus jeunes les merveilles de l'Esport rétro !",
      "start": "120000",
      "end": "140000",
      "categories": ["Handicap", "Esport", "Retro"],
      "check": "0"
    },
  ],
  "2021-04-02": [
    {
      "title": "Dragonium - MINI TOURNOI STREET FIGHTER 5",
      "content": "Venez affronter Davsnot, joueur professionnel sur Street Fighter V et malvoyant.Pour corser les choses, Davsnot jouera avec un bandeau sur les yeux et le challengeur jouera avec des lunettes simulant des problèmes de vision.Pour relever le défi, participez au tirage au sort sur la scène PGW !",
      "start": "160000",
      "end": "180000",
      "categories": ["Handicap", "Esport", "Versus"],
      "check": "0"
    },
    {
      "title": "Teamfight Tactics (ESWC, ACER)",
      "content": "La Coupe Kennen réunit les meilleurs joueurs européens de Teamfight Tactics. Rendez-vous dimanche 3 novembre sur la grande scène de l'ESWC pour la finale à partir de 12 h 30.",
      "start": "100000",
      "end": "110000",
      "categories": ["Riot", "Esport", "ESWC"],
      "check": "0"
    },
    {
      "title": "Just Dance 2019 (ESWC)",
      "content": "La Coupe Kennen réunit les meilleurs joueurs européens de Teamfight Tactics. Rendez-vous dimanche 3 novembre sur la grande scène de l'ESWC pour la finale à partir de 12 h 30.",
      "start": "120000",
      "end": "140000",
      "categories": ["Danse", "Esport", "ESWC"],
      "check": "0"
    },
  ],
  "2021-04-03": [
    {
      "title": "EA Sports FIFA 20",
      "content": "La scène principale dédiée aux compétitions d'Esport sera également le théâtre de showmatches, mettant en scène les intervenants professionnels de chaque jeu, soit les uns contre les autres, soit contre des visiteurs du salon. Le planning des showmatches sera disponible sur l'application PlayStation Experience.",
      "start": "100000",
      "end": "140000",
      "categories": ["EASports", "Esport"],
      "check": "0"
    },
    {
      "title": "Super Smash Bros. Ultimate/Splatoon 2 (ESWC, Nintendo)",
      "content": "Nintendo vous donne rendez-vous à l'European Smash Ball Team Cup ! Les 12 meilleures équipes européennes se disputent le premier titre le vendredi 1er novembre à partir de 16 h.",
      "start": "100000",
      "end": "120000",
      "categories": ["Nintendo", "ESWC", "Esport"],
      "check": "0"
    }
  ]
};

export default class Events extends React.Component {
  state = {
    items: json,
    modalData: {
      categories: []
    },
    showModal: false
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
      for (let k in json) {
        json[k].sort((a, b) => (moment(a.start, 'HHmmss') > moment(b.start, 'HHmmss')) ? 1 : -1)
      }
    }

    reorder()

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
