/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/baseApi";

export const parcelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addParcel: builder.mutation({
      query: (data) => ({
        url: "/parcels",
        method: "POST",
        data,
      }),
      invalidatesTags: ["PARCEL"],
    }),
    getParcels: builder.query<any[], void>({
      // <-- void means no argument
      query: () => ({ url: "/Parcels/my", method: "GET" }),
      providesTags: ["PARCEL"],
      transformResponse: (response: any) => response.data,
    }),
  }),
});

export const { useGetParcelsQuery, useAddParcelMutation } = parcelApi;
