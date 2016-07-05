import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  host: 'https://api.spotify.com/',
  namespace: 'v1/artists'

    // var url ='https://spreadsheets.google.com/feeds/list/1QLgq6dnihCayR2plG3m560ShKokhchxcInfWImCeyY0/od6/public/values?alt=json'
    // return $.getJSON(url).then(
    // 			json =>{
    // 				console.log(json.feed.entry)
    // 				for (var i=0; i<json.feed.entry.length; i++)
    // 				{
    // 					json.feed.entry[i].text = json.feed.entry[i].gsx$text.$t
    // 				}
    // 				return json.feed.entry
    // 				}
    //
    // 		);
    // var url = 'https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6';
    // //var url ='https://spreadsheets.google.com/feeds/list/1QLgq6dnihCayR2plG3m560ShKokhchxcInfWImCeyY0/od6/public/values?alt=json'
    // var artists={}
    // artists.artists=[{name: 'Beyonce'}, {name: 'Jayzee'}];
    // console.log(artists);
    // //return artists;
    //
    // return new Ember.RSVP.Promise(function(resolve,reject) {
    //   Ember.$.getJSON(url).then(function(data){
    //     Ember.run(function() {
    //       console.log(data)
    //       resolve(data.artists)
    //     });
    //   });
    // });
  //}
});
// var url ='https://spreadsheets.google.com/feeds/list/'+params.spreadsheet+'/od6/public/values?alt=json'
// 		return $.getJSON(url).then(
// 			json =>{
// 				console.log(json.feed.entry)
// 				for (var i=0; i<json.feed.entry.length; i++)
// 				{
// 					json.feed.entry[i].text = json.feed.entry[i].gsx$text.$t
// 				}
// 				return json.feed.entry
// 				}
//
// 		);
// 	}
