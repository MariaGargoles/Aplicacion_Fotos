import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetImagesThunk = createAsyncThunk("Search/GetImages", async () => {
  try {
    const request = await fetch("https://api.unsplash.com/photos?per_page=20", {
      method: "GET",
      headers: {
        Authorization: "Client-ID T-UKRbKpAszHgiQ2YOzW132ApK0QRo6Hcsg4dVM10rY",
      },
    });
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
