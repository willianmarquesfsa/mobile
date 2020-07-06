import {StyleSheet, StatusBar} from 'react-native';
import Constants from 'expo-constants';





import { RFPercentage, RFValue } from "react-native-responsive-fontsize"; 





export default StyleSheet.create({
    
    
    container: {
        flex: 1,
        paddingHorizontal: Constants.statusBarHeight * 0.5,
        paddingTop: Constants.statusBarHeight,
        justifyContent: "center"
        
        //backgroundColor: '#0A1F30'
        

    },

    header: {
       
        marginTop: - Constants.statusBarHeight*0.35,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
         
        

    },

    headerText: {
        fontSize: RFValue(11, 580),
        color: '#203242',
        fontFamily: 'Inter-BlackC',
        
    },

    

    title:{
        fontSize: RFValue(24, 580),
         
         paddingHorizontal: 45,
         color: '#203242',
         fontFamily: 'Inter-Black',
         textShadowColor: '#000',
         textShadowOffset: { width: 0.5, height: 0.5 }, 
         textShadowRadius: 1,
         

    },

    description: {
        fontSize: RFValue(11, 580),
        lineHeight: 18,
        color: '#203242',
       
        
    },

    incidentsList: {
        marginTop: Constants.statusBarHeight * 0.13,
        margin: - Constants.statusBarHeight * 0.13,
        marginRight: - Constants.statusBarHeight * 0.3

        
        
        
        
    },

    incidentsList5: {
        marginTop: 1,
        flexDirection: 'row',
       

        
        
    },



    incidentsList3: {
        marginTop: Constants.statusBarHeight * 0.265,
        margin: Constants.statusBarHeight * 0.13,
        
        backgroundColor: '#FFF',
        paddingVertical: Constants.statusBarHeight * 0.15,
        //padding: 5,
        //paddingHorizontal: Constants.statusBarHeight * 0.1,
        flex: 1/2,
        //flexDirection: 'row',
        justifyContent: 'space-between',
        //alignItems: 'center',
        
    borderWidth: 1,
    borderRadius: Constants.statusBarHeight * 0.35,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    
    //marginTop: 10,
  
    },

    incidents: {
        //padding: 24,
        
        //marginBottom: 16,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        
        
    },
    
    incidentsProperty:{
        fontSize: RFValue(10, 580),
        color: '#1D2B44',
        //color: '#41414d',
        //fontWeight: 'bold',
        padding: 6,
        marginTop: -Constants.statusBarHeight*0.5,
        fontFamily: 'Inter-BlackC'
    },

    incidentsValue: {
        color: '#1D2B44',
        flex: 1,
        //justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        marginTop: -5,
        fontSize:  RFPercentage(2),
        fontFamily: 'Inter-Black'

               
    },

    detailButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailButtonText: {
        fontSize: 15,
        color: '#e02041',
        fontWeight: 'bold',
    },

    headerTextBold : {
        marginLeft: Constants.statusBarHeight * 0.53,
        padding: 5,
        //marginTop: 7,
        fontSize: RFValue(16, 580),
        fontFamily: 'Inter-Black',
        color: '#1D2B44',
        textShadowColor: '#000',
         textShadowOffset: { width: 0.5, height: 0.5 }, 
         textShadowRadius: 1,
    },

    actions: {
        //marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 8
        
 },

 action1: {
    //paddingLeft: 30,
    
    //height: 50,
    //width: '28%',
    
},
action2: {
    //paddingHorizontal: 30
    
    //height: 50,
    width: '50%',
    alignItems: 'center',
    
},
action3: {
    //paddingRight:30
   // width: '28%',
    //height: 50,
    
    
},

centrolojistico: {
    fontSize: 20, 
    fontWeight: 'bold'
},




   /* instagram: {
        overflow: 'hidden',
    },
    
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