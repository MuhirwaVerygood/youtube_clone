import { createSlice } from "@reduxjs/toolkit"

interface VideoSchema {
    video: string
    description: string
    isLiked: boolean
    isTobeWatchedLater : boolean 
    isSavedToPlaylist : boolean
    isOpened: boolean 
    views: number 
    totalViews: number,
    isAddedToQeue: boolean
    totalDownloads: number,
    isDownloaded: boolean
}

const initialState = [ 
 { 
    video:"hello",
    description:"hello",
    isLiked: false,
    totalViews: 0,
    isTobeWatchedLater: false,
    isSavedToPlaylist: false,
    isOpened: false,
    views:0,
    totalDownloads: 0,
    isAddedToQeue: false,
    isDownloaded: false
 }
] satisfies VideoSchema[] as VideoSchema[]

const videoSlice = createSlice({
   name:"video",
   initialState,
   reducers:{
    incrementLikes(state){

    },

    decrementLikes(state){

    },

    incrementViews(state){

    },

    
   }
})


export const {incrementLikes, incrementViews, decrementLikes} = videoSlice.actions
export default videoSlice.reducer;