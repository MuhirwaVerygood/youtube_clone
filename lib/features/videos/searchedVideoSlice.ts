import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllData } from '@/utils/fetchData';
import { VideoSchema } from '@/app/components/constants/constants';
export const fetchVideosByQuery = createAsyncThunk(
  'searchedVideos/fetchByQuery',
  async (query: string) => {
    const response = await fetchAllData(query);  
    return response as VideoSchema[];
  }
);

const searchedVideosSlice = createSlice({
  name: 'searchedVideos',
  initialState: {
    videos: [] as VideoSchema[],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideosByQuery.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchVideosByQuery.fulfilled, (state, action) => {
        state.videos = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchVideosByQuery.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default searchedVideosSlice.reducer;
