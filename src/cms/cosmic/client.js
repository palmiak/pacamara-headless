import { createBucketClient } from '@cosmicjs/sdk'

const BUCKET_SLUG = import.meta.env.PUBLIC_COSMIC_BUCKET_SLUG
const READ_KEY = import.meta.env.PUBLIC_COSMIC_READ_KEY

export const cosmic = createBucketClient({
    bucketSlug: BUCKET_SLUG,
    readKey: READ_KEY
})