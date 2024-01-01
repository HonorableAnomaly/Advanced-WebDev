import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

// Dev mode only
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    // Dev mode only
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    }
  }),
  endpoints(builder) {
    return {
      addAlbum: builder.mutation({
        invalidatesTags: (res, error, user) => {
          return [{ type: "Album", id: user.id }];
        },
        query: (user) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              userId: user.id,
              title: faker.commerce.productName()
            }
          };
        }
      }),
      fetchAlbums: builder.query({
        providesTags: (res, error, user) => {
          return [{ type: "Album", id: user.id }];
        },
        query: (user) => {
          return {
            url: "/albums",
            params: {
              userId: user.id
            },
            method: "GET"
          };
        }
      })
    };
  }
});

export const { useFetchAlbumsQuery, useAddAlbumMutation } = albumsApi;
export { albumsApi };
