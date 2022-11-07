import { BASE_URL } from '@/constants'

export const ROUTES = {
  HOME: `${BASE_URL}/`,
  ABOUT_US: `${BASE_URL}/about-us`,
  PRODUCTS_PILLAR: `${BASE_URL}/products/pillar`,
  PRODUCTS_COUPLING: `${BASE_URL}/products/coupling`,
  CONTACT: `${BASE_URL}/contact`,
  ENQUIRY: `${BASE_URL}/enquiry`,
} as const
