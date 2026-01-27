import { API_CONFIG, EXPERIENCE } from "@/data";
import { Experience } from "@/types";
import { getLocalExperience } from "./mdx";
import { APIConfig } from "@/schema/config";

const config = API_CONFIG as unknown as APIConfig;

export async function getExperience(): Promise<Experience[]> {
  if (!config.experience.enabled) return [];

  const { source, contentPath, username } = config.experience;

  switch (source) {
    case "local":
      if (contentPath) {
        const localExp = await getLocalExperience(contentPath);
        return localExp.length > 0 ? localExp : EXPERIENCE;
      }
      return EXPERIENCE;

    case "linkedin":
      // User requested: "if linkedIn url is given then we must integrate it through medium"
      // Assuming this refers to a specific fetcher for LinkedIn.
      // For now, we'll return local data with a warning or a fetch skeleton.
      console.warn(
        "LinkedIn integration requested. Ensure 'medium' proxy/service is configured.",
      );
      return EXPERIENCE; // Fallback to local data for now

    case "peerlist":
      // Placeholder for Peerlist experience integration
      console.warn(`Peerlist integration for username ${username} requested.`);
      return EXPERIENCE;

    default:
      return EXPERIENCE;
  }
}
