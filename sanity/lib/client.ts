import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId,token } from '../env';
export const client = createClient({
  projectId: "e9m1najx",
  dataset:"production",
  apiVersion:"2024-02-05",
  token,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
console.log({ projectId, dataset, apiVersion });