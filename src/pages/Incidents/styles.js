import {StyleSheet, StatusBar, Dimensions} from 'react-native';
import Constants from 'expo-constants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



import { RFPercentage, RFValue } from "react-native-responsive-fontsize"; 





export default StyleSheet.create({
    
    
    container: {
        flex: 1,
        paddingHorizontal: Dimensions.get('window').width*0.015,
        paddingTop: Constants.statusBarHeight,
        //flexDirection: 'column',
        
        //backgroundColor: '#FFF'
        

    },

    header: {
        marginTop: - Constants.statusBarHeight*0.35,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: Dimensions.get('window').width*0.015,
        
        

    },

    headerText: {
        fontSize: RFPercentage(2.6),
        color: '#203242',
        fontFamily: 'Inter-Black',
        //paddingVertical: Dimensions.get('window').width*0.08,
        paddingHorizontal: windowHeight*0.007,
        alignSelf: 'flex-start',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        //width: windowWidth*0.5,
        //flex: 1/2

        
        
    },

    headerText2: {
        fontSize: RFPercentage(2.9),
        color: '#203242',
        fontFamily: 'Inter-Black',
        paddingVertical: Dimensions.get('window').width*0.01,
        //paddingHorizontal: windowHeight*0.007,
        justifyContent: 'space-between',
        flex:1
        
    },

    

    title:{
        fontSize: RFPercentage(2.5),
         
         paddingHorizontal: 45,
         color: '#FCAD02',
         fontFamily: 'Inter-Black',
         textShadowColor: '#000',
         textShadowOffset: { width: 0.5, height: 0.5 }, 
         textShadowRadius: 1,

    },

    description: {
        fontSize: RFPercentage(2),
        lineHeight: 18,
        color: '#2B2B2B',
       
        
    },

    incidentsList: {
        //marginTop: 5,
        
    },

    incidentsList2: {
        //marginTop: 18,
        
        backgroundColor: '#FFF',
        //paddingVertical: Dimensions.get('window').width*0.01,
        paddingHorizontal: Dimensions.get('window').width*0.02,
        borderWidth: 1,
    borderRadius: Dimensions.get('window').width*0.01,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: Dimensions.get('window').width*0.002 },
    shadowOpacity: Dimensions.get('window').width*0.002,
    shadowRadius: Dimensions.get('window').width*0.002,
    elevation: Dimensions.get('window').width*0.01,
   
    marginTop: Dimensions.get('window').width*0.02,
        
    },

    incidents: {
        //padding: 24,
        
        //marginBottom: 16,
        justifyContent: 'space-between',
        //alignItems: 'center',
        flexDirection: 'row',
        
        
    },
    
    incidentsProperty:{
        fontSize: Dimensions.get('window').width*0.035, //RFPercentage(1.85),
        color: '#0B2031',
        //color: '#41414d',
        //fontWeight: 'bold',
        paddingVertical: Dimensions.get('window').width*0.02,
        paddingHorizontal: Dimensions.get('window').width*0.06,
        //marginTop: -Constants.statusBarHeight,
        fontFamily: 'Inter-BlackC',
        alignContent: 'center',
    //alignItems: 'center',
    alignSelf: 'center'
          
    },

    incidentsValue: {
        color: '#203242',
        //flex: 1,
        //justifyContent: 'space-between',
        //alignItems: 'center',
        alignContent: 'center',
        //padding: Constants.statusBarHeight*0.5,
        marginTop: - Constants.statusBarHeight*0.4,
        //marginTop: -Constants.statusBarHeight,
        fontSize: RFPercentage(2.2),
        fontFamily: 'Inter-Black',
        alignContent: 'center',
    //alignItems: 'center',
    alignSelf: 'center'
        

               
    },

    detailButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    

    headerTextBold : {
        marginTop: 7,
        fontSize: RFPercentage(2.4),
        fontFamily: 'Inter-Black',
        color: '#203242'
    },

    actions: {
        //marginTop: 16,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
        alignContent: 'center',
        paddingVertical: Dimensions.get('window').width*0.03
        
 },

 action1: {
    //paddingLeft: 30,
    
    //height: 50,
    //width: '28%',
    
},
action2: {
    //paddingHorizontal: 30
    
    //height: 50,
    //width: '50%',
    //alignItems: 'center',
    
},
action3: {
    //paddingRight:30
   // width: '28%',
    //height: 50,
    
    
},

centrolojistico: {
    fontSize: RFPercentage(2), 
    fontWeight: 'bold'
},




   instagram: {
    width: Constants.statusBarHeight*3.4, 
    height: Constants.statusBarHeight*3.4, 
    borderRadius: Constants.statusBarHeight*1.5,
    alignContent: 'center',
    //alignItems: 'center',
    alignSelf: 'center'
        
    },

    instagram2: {
        width: Constants.statusBarHeight*3, 
        height: Constants.statusBarHeight*3, 
        borderRadius: Constants.statusBarHeight*1.5,
        //margin: Dimensions.get('window').width*0.03 ,
        //marginTop: -Dimensions.get('window').width*0.09
        //justifyContent:'flex-start'
            
        },
        animatedView: {
            backgroundColor: '#E0315E',
            position: "absolute",
            flexWrap: "wrap",
            flexDirection: "row"
          },
        instagram3: {
        color: '#FCAD02', 
                         fontSize: RFPercentage(5/2),  
                         fontFamily: 'Inter-Black', 
                         paddingHorizontal: Dimensions.get('window').width*0.03
        },
    /*
    instagram: { wrap: {
        bordertop: '1px solid #eee',
        marginleft: 'auto',
        marginright: 'auto',
        maxwidth: 1280,
        paddingbottom: 30,
        paddingtop: 40,
        textalign: 'center',
    },},
    
    instagram: {widgettitle: {
        fontfamily: 'Playfair Display serif',
        fontsize: 24,
        fontsize: 2.4,
        fontstyle: 'italic',
        marginbottom: 20
    },},
    
    instagram: {ul: {
        display: inline-block,
        marginleft: 'auto',
        marginright: 'auto',
    },},
    
    instagram: {ul: {li: {
        float: left,
        marginleft: 15,
        marginright: 15,
    },},},
    
    instagram: {img: {
        height: 160,
        verticalalign: top,
        width: 160,
    },}


*/





}) 