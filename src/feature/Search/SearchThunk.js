import { createAsyncThunk } from "@reduxjs/toolkit";

const GetImagesThunk = createAsyncThunk("Search/GetImages", async () => {
  try {
    const request = await fetch("https://api.unsplash.com/photos?per_page=20", {
      method: "GET",
      headers: {
        Authorization: "Client-ID T-UKRbKpAszHgiQ2YOzW132ApK0QRo6Hcsg4dVM10rY",
      },
    });
    if (request.ok) {
      const Images = await request.json();
      return Images;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
});
