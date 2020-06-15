import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  Dimensions,
  Image,
  
} from 'react-native'

import Constants from 'expo-constants';

import api from '../../services/api'


const { width } = Dimensions.get('window');
const height = width * 0.2844;

const width2 = (width - Constants.statusBarHeight * 0.8);





export default class Propaganda extends Component {
   
     
    setRef = (c) => {
        this.listRef = c;
        
      }

      
     
      scrollToIndex = (index, animated) => {
        this.listRef && this.listRef.scrollToIndex({ index, animated })
       
        
      }
     
      UNSAFE_componentWillMount() {
        /*
        fetch('http://192.168.0.100:3000/imagens/')
      .then(response => response.data)
      .then(response => this.state.banners.push(response))
*/     
       async function linimage() {
       const response = await api.get('imagens');
       const result = response.data
       return result
}

       linimage()
       .then(result=> this.state.banners.push(...result))
       

       /*this.state.banners.push({id: 1, linksimagens: 'https://i.ibb.co/bsKywXM/Banner-Linkedin-Divulg-Vagas-01-01-400x150.jpg'},
        {id: 2, linksimagens: 'https://i.ibb.co/rFfSGc5/400x150.png'},
        {id: 3, linksimagens: 'https://i.ibb.co/bsKywXM/Banner-Linkedin-Divulg-Vagas-01-01-400x150.jpg'})
       
       */
        
        setInterval(function() {
         
          const { sliderIndex, maxSlider } = this.state
          let nextIndex = 0
     
          if (sliderIndex < maxSlider) {
            nextIndex = sliderIndex + 1
          }
     
          this.scrollToIndex(nextIndex, true)
          this.setState({sliderIndex: nextIndex})
        }.bind(this), 3000)
        
       
      } 
      componentWillUnmount(){}
      

  constructor(props) {
    
    
     super(props);
     
       
     

      

    this.state = {
      //search: '',
      sliderIndex: 0,
      maxSlider: 5,
      banners:[ 
       
        
        //{id: 1, linksimagens: 'https://mediarealm.com.au/wp-content/uploads/2019/07/MetaRadio-System-List-v5.png'},
        //{id: 2, linksimagens: 'https://i1194.photobucket.com/albums/aa372/untoldwishes/Requests/tensa.png'},
        //{linksimagens: 'https://instagram.fssa3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/75595302_586742638558416_6436154732397461504_n.jpg?_nc_ht=instagram.fssa3-1.fna.fbcdn.net&_nc_ohc=myoCR9TFB94AX94YEV8&oh=ac3a191667f60016d2b07f6ad084516b&oe=5ED6F273', id: 8,},
        //{id: 3, linksimagens: 'https://i1194.photobucket.com/albums/aa372/untoldwishes/Requests/tensa.png'}, 
      ]
    }

    
 }

 
 

 render() {
   return (
     
       

    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <FlatList
        ref={this.setRef}
        data={this.state.banners}
        horizontal
        //initialScrollIndex={props.activeIndex}  
        onScrollToIndexFailed={info => {
          const wait = new Promise(resolve => setTimeout(resolve, 2000));
          wait.then(() => {
            FlatList.current?.scrollToIndex({ index: info.index, animated: true });
    });
  }}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={item => String(item.id)}
        
        renderItem={({item, i}) => (
          <View key={i} style={{ height, width: width2, }}>
            <Image style={{ height, width: width2, 
                borderRadius: Constants.statusBarHeight * 0.4, 
                 }} 
              source={{ uri: item.linksimagens }} />
          </View>
        )}
        onMomentumScrollEnd={(event) => {
          let sliderIndex = event.nativeEvent.contentOffset.x ? event.nativeEvent.contentOffset.x/width : 0
          this.setState({sliderIndex})
        }}
      />
      <View style={styles.sliderContainer}>
        {
          this.state.banners.map(function(item, index) {
            return (
              <View key={index} style={styles.sliderBtnContainer}>
                <View style={styles.sliderBtn}>
                  {
                    this.state.sliderIndex == index ? <View style={styles.sliderBtnSelected}/> : null
                  }
                </View>
              </View>
            )
          }.bind(this))
        }
      </View>
    </ScrollView>
  
);
   }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    //paddingHorizontal: Constants.statusBarHeight * 0.4,
    borderRadius: 15
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: Constants.statusBarHeight * 0.4,
    marginTop: Constants.statusBarHeight * 0.2,
    borderRadius: 15
    
  },
  sliderContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: Constants.statusBarHeight * 4,
    alignSelf: 'center'
  },
  sliderBtn: {
    height: Constants.statusBarHeight * 0.3,
    width: Constants.statusBarHeight * 0.3,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  sliderBtnSelected: {
    height: Constants.statusBarHeight * 0.35,
    width: Constants.statusBarHeight * 0.35,
    borderRadius: 6,
    backgroundColor: 'white',
  },
  sliderBtnContainer: {
    flexDirection: 'row', marginBottom: 24
  },
});