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
    getParcelTypes: builder.query({
      query: () => ({
        url: "/Parcels/Parcel-types",
        method: "GET",
      }),
      providesTags: ["PARCEL"],
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetParcelTypesQuery, useAddParcelMutation } = parcelApi;