"use server";

import { getSubscriptionTier } from "../services/subscription-service";
import { SubscriptionTier } from "../types/subscription-types";

// Subscription write operations removed — managed via mobile app only.
// This action now only exposes a read-only getter for server components.

export async function getSubscriptionTierAction(): Promise<SubscriptionTier> {
    return getSubscriptionTier();
}
