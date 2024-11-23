"use server";
import axiosInstance from "@/src/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";

export const createContactUs = async (contactData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(
      "/post/send-feedback",
      contactData
    );

    return data;
  } catch (error) {
    throw new Error("Failed to send your feedback!");
  }
};
