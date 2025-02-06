export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skOAwwwcq3Llj0yTDNXCoj3Sol36PdVasypOwdfs80MTSgvytGgnvbr0KAD5J37hwDyotFmZA8eyuQ4SG36RxUz9ywOSArkKxpBIdjO3HRZIWaAk0KUF9xebI0tFNi3kcg0vDLPoSZWpefYHQj2sstSkF7ShEDA83HpCvO9mRtYLRKRnHTde",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
