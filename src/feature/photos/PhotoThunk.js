import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetImagesThunk = createAsyncThunk("Search/GetImages", async () => {
  try {
    const request = await fetch(
      "https://api.unsplash.com/photos?per_page=100",
      {
        method: "GET",
        headers: {
          Authorization:
            "Client-ID T-UKRbKpAszHgiQ2YOzW132ApK0QRo6Hcsg4dVM10rY",
        },
      }
    );
    if (request.ok) {
      const Images = await request.json();
      console.log(Images);
      return Images;
    }
    throw new Error("Failed to fetch images");
  } catch (error) {
    console.log(error);
    return [];
  }
});

export const GetSearchPhotoThunk = createAsyncThunk('search/getSearchPhoto', async (text) => {
  try {
      const response = await fetch(`https://api.unsplash.com/search/photos/?per_page=100&query=${text}`, {
          headers: {
              'Authorization': 'Client-ID GDB-GYncQ00EpHB_wLtZqdnyIVfoQi2Ym3FarJ9_JaQ'
          }
      })
      if (response.ok) {
          const dataSearch = await response.json()
          console.log(dataSearch)
          return dataSearch.results
      }
      return false
  } catch (error) {
      console.log (error)
  }
})