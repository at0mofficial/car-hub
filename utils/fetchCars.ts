"use server"

import { fetchCarsProps } from "@/types";

export async function fetchCars(filters: fetchCarsProps) {
    const { model, manufacturer, fuel, year, limit } = filters;
    const headers = {
      "X-RapidAPI-Key": `${process.env.RAPID_API_KEY}`,
      "X-RapidAPI-Host": `${process.env.RAPID_API_HOST}`,
    };

    try {
      const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}&limit=${limit}`,
        {
          method: "GET",
          headers: headers,
        }
      );
  
      const result = response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }