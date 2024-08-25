import { createBrowserRouter } from "react-router-dom";



import Calendar from "../pages/Calendar";
import Profile from "../pages/Profile";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import FormElements from "../pages/Form/FormElements";
import FormLayout from "../pages/Form/FormLayout";
import Tables from "../pages/Tables";
import Settings from "../pages/Settings";
import Chart from "../pages/Chart";
import Alerts from "../pages/UiElements/Alerts";

import SwingInput from "../pages/SwingInput/SwingInput";

import DefaultLayout from "../layout/DefaultLayout";
import CuttingDashboard from "../pages/Dashboard/CuttingDashboard";
import DatePickerTwo from "../components/Forms/DatePicker/DatePickerTwo";
import DatePickerOne from "../components/Forms/DatePicker/DatePickerOne";

export const Routes = createBrowserRouter([
    {
        path:'/',
        Component:DefaultLayout,
        children:[
            
            {
                path:'/',
                Component:CuttingDashboard 
            },
            {
                path: '/calendar',
                Component:  Calendar 
              
            }, 
            {
                path: '/SwingInput',
                Component:  SwingInput 
              
            },             
            {
                path:"/profile",
                Component:Profile
            },
                     
            {
                path:"/forms/form-elements",
                Component:FormElements

            },
            {
                path:"/forms/form-layout",
                Component:FormLayout 

            },
            {
                path:"/tables",
                Component:Tables 

            },
            {
                path:"/settings",
                Component:Settings 

            },
            {
                path:"/chart",
                Component:Chart 

            },
            {
                path:"/ui/alerts",
                Component:Alerts 

            },
            {
                path:"/DatePickerTwo",
                Component:DatePickerOne 

            },
            
            
        ]
    },    
    
    {
        path: "/auth/signin",
        Component: SignIn
      
    },

    {
        path: '"/auth/signup"',
        Component: SignUp 
    }
])
 