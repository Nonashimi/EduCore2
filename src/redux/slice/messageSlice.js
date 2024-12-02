import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    messages: [
        { name: "New Course Available!", text: "Mastering Cloud SecurityThis course covers essential skills in cloud security, including threat prevention, risk management, and best practices for cloud environments.", id: "1", isOpen: false, time: "2024-12-02T10:00:00Z" },
        { name: "Discount Alert!", text: "Get 20% off on all courses for the next 24 hours!", id: "2", isOpen: false, time: "2024-12-02T11:00:00Z" },
        { name: "Webinar Reminder", text: "Join our live webinar tomorrow at 6 PM.", id: "3", isOpen: false, time: "2024-12-02T12:00:00Z" },
        { name: "New Blog Post!", text: "Read our latest blog on JavaScript best practices.", id: "4", isOpen: false, time: "2024-12-02T13:00:00Z" },
        { name: "System Maintenance", text: "Scheduled maintenance on Saturday from 12 AM to 3 AM.", id: "5", isOpen: false, time: "2024-12-02T14:00:00Z" },
        { name: "Quiz Available!", text: "Test your skills with our new JavaScript quiz.", id: "6", isOpen: false, time: "2024-12-02T15:00:00Z" },
        { name: "Certificate Update", text: "Certificates for completed courses have been updated.", id: "7", isOpen: false, time: "2024-12-02T16:00:00Z" },
        { name: "Special Offer!", text: "Exclusive offer: Buy one course, get one free!", id: "8", isOpen: false, time: "2024-12-02T17:00:00Z" },
        { name: "Feature Update", text: "We’ve added new features to our learning platform!", id: "9", isOpen: false, time: "2024-12-02T18:00:00Z" },
        { name: "Happy Holidays!", text: "Wishing you a joyful holiday season and a prosperous New Year!", id: "10", isOpen: false, time: "2024-12-02T19:00:00Z" }
    ]
}


const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers:{
        clickBtn: (state, actions) =>{
            state.messages = state.messages.filter(message =>{
                if(message.id === actions.payload.id){
                    message.isOpen = !message.isOpen;
                }else{
                    message.isOpen = false;
                }
                return message;
            })
        }
    }
})


export const {clickBtn} = messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;






