/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/baseApi";

export const parcelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // sender query
    getParcels: builder.query<any[], void>({
      query: () => ({ url: "/Parcels/my", method: "GET" }),
      providesTags: ["PARCEL"],
      transformResponse: (response: any) => response.data,
    }),
    addParcel: builder.mutation({
      query: (data) => ({
        url: "/parcels",
        method: "POST",
        data,
      }),
      invalidatesTags: ["PARCEL"],
    }),
    cancelParcel: builder.mutation({
      query: (id: string) => ({
        url: `/parcels/cancel/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["PARCEL"], // automatically refresh getParcels
    }),
    // receiver query
    getIncomingParcels: builder.query<any[], void>({
      query: () => ({ url: "/Parcels/incoming", method: "GET" }),
      providesTags: ["PARCEL"],
      transformResponse: (response: any) => response.data,
    }),
    // ✅ confirm delivery mutation
    confirmDelivery: builder.mutation({
      query: (id: string) => ({
        url: `/Parcels/confirmDelivery/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["PARCEL"], // refresh after confirm
    }),
    getDeliveredParcels: builder.query<any[], void>({
      query: () => ({ url: "/parcels/delivered", method: "GET" }),
      providesTags: ["PARCEL"],
      transformResponse: (response: any) => response.data,
    }),
  }),
});

export const {
  useGetParcelsQuery,
  useAddParcelMutation,
  useCancelParcelMutation,
  useGetIncomingParcelsQuery,
  useConfirmDeliveryMutation,
  useGetDeliveredParcelsQuery,
} = parcelApi;
