import { View, Text, TouchableOpacity } from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import React from 'react'

const json = {
  "2021-04-01" :[
    {
      "title":"Finales de la CapGame Arena",
      "content": "Ce format de compétition inclusif invite les équipes à être composées de personnes en situation de handicap. Après des qualifications ayant pris place durant le mois d’octobre, la Scène PGW accueille les finales sur les jeux eFootball PES 2020, Forza Motorsport 7 et Street Fighter V Arcade Edition.",
      "start":"14:00:00",
      "end":"18:00:00",
      "categories":[ "Handicap", "Esport"],
      "check":"0"
    },
    {
      "title":"Coupe Silver Geek PGW",
      "content": "Le jeu vidéo c’est pour tout le monde quel que soit l’âge, et l’association Silver Geek est bien décidée à le démontrer à travers la coupe Silver Geek PGW. Venant de la France entière, 4 équipes de seniors s’affronteront sur Wii Bowling pour se départager et remporter le titre de champion de France Silver Geek.",
      "start":"10:00:00",
      "end":"12:00:00",
      "categories":["Handicap", "Esport"],
      "check":"0"
    },
    {
      "title":"MO5 World Cup",
      "content": "La Scène PGW accueillera l’association MO5 pour une compétition sur SEGA Saturn pour revivre avec nostalgie vos meilleurs moments sur cette console emblématique. Ce tournoi sera également l’occasion de faire découvrir aux plus jeunes les merveilles de l’Esport rétro !",
      "start":"12:00:00",
      "end":"14:00:00",
      "categories":["Handicap", "Esport", "Retro"],
      "check":"0"
    },
  ],

  "2021-04-02" :[
    {
      "title":"Dragonium - MINI TOURNOI STREET FIGHTER 5",
      "content": "Venez affronter Davsnot, joueur professionnel sur Street Fighter V et malvoyant.Pour corser les choses, Davsnot jouera avec un bandeau sur les yeux et le challengeur jouera avec des lunettes simulant des problèmes de vision.Pour relever le défi, participez au tirage au sort sur la scène PGW !",
      "start":"16:00:00",
      "end":"18:00:00",
      "categories":["Handicap", "Esport", "Versus"],
      "check":"0"
    },
    {
      "title":"Teamfight Tactics (ESWC, ACER)",
      "content": "La Coupe Kennen réunit les meilleurs joueurs européens de Teamfight Tactics. Rendez-vous dimanche 3 novembre sur la grande scène de l’ESWC pour la finale à partir de 12 h 30.",
      "start":"10:00:00",
      "end":"11:00:00",
      "categories":["Riot Games", "Esport" , "ESWC"],
      "check":"0"
    },
    {
      "title":"Just Dance 2019 (ESWC)",
      "content": "La Coupe Kennen réunit les meilleurs joueurs européens de Teamfight Tactics. Rendez-vous dimanche 3 novembre sur la grande scène de l’ESWC pour la finale à partir de 12 h 30.",
      "start":"12:00:00",
      "end":"14:00:00",
      "categories":["Danse", "Esport", "ESWC"],
      "check":"0"
    },

  ],
  "2021-04-03" :[
    {
      "title":"EA Sports FIFA 20",
      "content": "La scène principale dédiée aux compétitions d’Esport sera également le théâtre de showmatches, mettant en scène les intervenants professionnels de chaque jeu, soit les uns contre les autres, soit contre des visiteurs du salon. Le planning des showmatches sera disponible sur l’application PlayStation Experience.",
      "start":"10:00:00",
      "end":"14:00:00",
      "categories":["EA Sports", "Esport"],
      "check":"0"
    },
    {
      "title":"Super Smash Bros. Ultimate/Splatoon 2 (ESWC, Nintendo)",
      "content": "Nintendo vous donne rendez-vous à l’European Smash Ball Team Cup ! Les 12 meilleures équipes européennes se disputent le premier titre le vendredi 1er novembre à partir de 16 h.",
      "start":"10:00:00",
      "end":"12:00:00",
      "categories":["Nintendo","ESWC","Esport"],
      "check":"0"
    }
  ],
  "2021-04-04" :[
    {
      "title":"EA Sports FIFA 20",
      "content": "La scène principale dédiée aux compétitions d’Esport sera également le théâtre de showmatches, mettant en scène les intervenants professionnels de chaque jeu, soit les uns contre les autres, soit contre des visiteurs du salon. Le planning des showmatches sera disponible sur l’application PlayStation Experience.",
      "start":"10:00:00",
      "end":"14:00:00",
      "categories":["EA Sports", "Esport"],
      "check":"0"
    },
    {
      "title":"Super Smash Bros. Ultimate/Splatoon 2 (ESWC, Nintendo)",
      "content": "Nintendo vous donne rendez-vous à l’European Smash Ball Team Cup ! Les 12 meilleures équipes européennes se disputent le premier titre le vendredi 1er novembre à partir de 16 h.",
      "start":"10:00:00",
      "end":"12:00:00",
      "categories":["Nintendo","ESWC","Esport"],
      "check":"0"
    }
  ],
  "2021-04-05" :[
    {
      "title":"EA Sports FIFA 20",
      "content": "La scène principale dédiée aux compétitions d’Esport sera également le théâtre de showmatches, mettant en scène les intervenants professionnels de chaque jeu, soit les uns contre les autres, soit contre des visiteurs du salon. Le planning des showmatches sera disponible sur l’application PlayStation Experience.",
      "start":"10:00:00",
      "end":"14:00:00",
      "categories":["EA Sports", "Esport"],
      "check":"0"
    },
    {
      "title":"Super Smash Bros. Ultimate/Splatoon 2 (ESWC, Nintendo)",
      "content": "Nintendo vous donne rendez-vous à l’European Smash Ball Team Cup ! Les 12 meilleures équipes européennes se disputent le premier titre le vendredi 1er novembre à partir de 16 h.",
      "start":"10:00:00",
      "end":"12:00:00",
      "categories":["Nintendo","ESWC","Esport"],
      "check":"0"
    }
  ],
  "2021-04-06" :[
    {
      "title":"EA Sports FIFA 20",
      "content": "La scène principale dédiée aux compétitions d’Esport sera également le théâtre de showmatches, mettant en scène les intervenants professionnels de chaque jeu, soit les uns contre les autres, soit contre des visiteurs du salon. Le planning des showmatches sera disponible sur l’application PlayStation Experience.",
      "start":"10:00:00",
      "end":"14:00:00",
      "categories":["EA Sports", "Esport"],
      "check":"0"
    },
    {
      "title":"Super Smash Bros. Ultimate/Splatoon 2 (ESWC, Nintendo)",
      "content": "Nintendo vous donne rendez-vous à l’European Smash Ball Team Cup ! Les 12 meilleures équipes européennes se disputent le premier titre le vendredi 1er novembre à partir de 16 h.",
      "start":"10:00:00",
      "end":"12:00:00",
      "categories":["Nintendo","ESWC","Esport"],
      "check":"0"
    }
  ],
  "2021-04-07" :[
    {
      "title":"EA Sports FIFA 20",
      "content": "La scène principale dédiée aux compétitions d’Esport sera également le théâtre de showmatches, mettant en scène les intervenants professionnels de chaque jeu, soit les uns contre les autres, soit contre des visiteurs du salon. Le planning des showmatches sera disponible sur l’application PlayStation Experience.",
      "start":"10:00:00",
      "end":"14:00:00",
      "categories":["EA Sports", "Esport"],
      "check":"0"
    },
    {
      "title":"Super Smash Bros. Ultimate/Splatoon 2 (ESWC, Nintendo)",
      "content": "Nintendo vous donne rendez-vous à l’European Smash Ball Team Cup ! Les 12 meilleures équipes européennes se disputent le premier titre le vendredi 1er novembre à partir de 16 h.",
      "start":"10:00:00",
      "end":"12:00:00",
      "categories":["Nintendo","ESWC","Esport"],
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

    const reorder = () => {
      this.state.items.sort((a, b) => (a.start < b.start) ? 1 : -1)
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
          //loadItemsForMonth={loadItems}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2021-04-01'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2021-04-07'}
          // Specify how each item should be rendered in agenda
          renderItem={renderItem}
      />
    </View>
  }
}
