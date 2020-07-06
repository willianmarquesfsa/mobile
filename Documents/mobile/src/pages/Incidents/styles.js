import {StyleSheet, StatusBar} from 'react-native';
import Constants from 'expo-constants';





import { RFPercentage, RFValue } from "react-native-responsive-fontsize"; 





export default StyleSheet.create({
    
    
    container: {
        flex: 1,
        paddingHorizontal: Constants.statusBarHeight * 0.5,
        paddingTop: Constants.statusBarHeight,
        
        //backgroundColor: '#FFF'
        

    },

    header: {
        marginTop: - Constants.statusBarHeight*0.35,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        
        

    },

    headerText: {
        fontSize: RFPercentage(2.3),
        color: '#FCAD02',
        fontFamily: 'Inter-BlackC'
        
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
        marginTop: 5,
        
    },

    incidentsList2: {
        marginTop: 18,
        
        backgroundColor: '#FFF',
        paddingVertical: 15,
        padding: 10,
        borderWidth: 1,
    borderRadius: 15,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
   
    marginTop: 10,
        
    },

    incidents: {
        //padding: 24,
        
        //marginBottom: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        
        
    },
    
    incidentsProperty:{
        fontSize: RFPercentage(1.85),
        color: '#0B2031',
        //color: '#41414d',
        //fontWeight: 'bold',
        padding: Constants.statusBarHeight,
        marginTop: -Constants.statusBarHeight,
        fontFamily: 'Inter-BlackC',
        

       
    },

    incidentsValue: {
        color: '#0B2031',
        flex: 1,
        //justifyContent: 'space-between',
        alignItems: 'center',
        padding: Constants.statusBarHeight*0.5,
        marginTop: -Constants.statusBarHeight,
        fontSize: RFPercentage(2.3),
        fontFamily: 'Inter-Black',
        
        

               
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
        marginTop: 7,
        fontSize: RFPercentage(2.3),
        fontFamily: 'Inter-Black',
        color: '#FCAD02'
    },

    actions: {
        //marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        
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
    fontSize: RFPercentage(2), 
    fontWeight: 'bold'
},




   instagram: {
    width: Constants.statusBarHeight*3.4, 
    height: Constants.statusBarHeight*3.4, 
    borderRadius: Constants.statusBarHeight*1.5
        
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