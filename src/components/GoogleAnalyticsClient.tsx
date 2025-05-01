'use client';

import { GoogleAnalytics } from 'nextjs-google-analytics';

export default function GoogleAnalyticsClient() {
    return (
        <GoogleAnalytics gaMeasurementId={process.env.NEXT_PUBLIC_GA_ID!} trackPageViews />
    );
}