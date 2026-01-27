import { z } from "zod";

/* ───────────── Reusable primitives ───────────── */

const Username = z.string().min(1, "Username cannot be empty");
const Path = z.string().min(1, "Path cannot be empty");
const Url = z.url("Invalid URL");
const Email = z.email("Invalid email address");

const SocialPlatformSchema = z.object({
  enabled: z.boolean(),
  username: Username.optional(),
  url: Url.optional(),
});

/* ───────────── Main schema ───────────── */

export const APIConfigSchema = z
  .object({
    integrations: z.object({
      github: z.object({
        enabled: z.boolean(),
        username: Username,
        token: z.string().optional(),
      }),

      leetcode: z.object({
        enabled: z.boolean(),
        username: Username,
      }),
    }),

    blogs: z.object({
      enabled: z.boolean(),

      medium: z.object({
        enabled: z.boolean(),
        username: Username.optional(),
      }),

      devto: z.object({
        enabled: z.boolean(),
        username: Username.optional(),
      }),

      mdx: z.object({
        enabled: z.boolean(),
        contentPath: Path,
      }),
    }),

    projects: z.object({
      enabled: z.boolean(),
      source: z.enum(["github", "local"]),
      contentPath: Path.optional(),
    }),

    experience: z.object({
      enabled: z.boolean(),
      source: z.enum(["local", "linkedin", "peerlist"]),
      contentPath: Path.optional(),
      username: Username.optional(),
    }),

    socials: z.object({
      enabled: z.boolean(),

      github: SocialPlatformSchema,
      linkedin: SocialPlatformSchema,
      twitter: SocialPlatformSchema,
      peerlist: SocialPlatformSchema,
      youtube: SocialPlatformSchema,

      email: z.object({
        enabled: z.boolean(),
        address: Email.optional(),
      }),
    }),
  })

  /* ───────────── Cross-field validation ───────────── */
  .superRefine((config, ctx) => {
    /* ───────────── Projects rules ───────────── */
    if (config.projects.enabled) {
      if (
        config.projects.source === "github" &&
        !config.integrations.github.enabled
      ) {
        ctx.addIssue({
          path: ["projects", "source"],
          message: "GitHub must be enabled to use GitHub projects",
          code: "custom",
        });
      }

      if (config.projects.source === "local" && !config.projects.contentPath) {
        ctx.addIssue({
          path: ["projects", "contentPath"],
          message: "contentPath is required for local projects",
          code: "custom",
        });
      }
    }

    /* ───────────── Experience rules ───────────── */
    if (config.experience.enabled) {
      if (
        config.experience.source === "local" &&
        !config.experience.contentPath
      ) {
        ctx.addIssue({
          path: ["experience", "contentPath"],
          message: "contentPath is required for local experience",
          code: "custom",
        });
      }

      if (config.experience.source !== "local" && !config.experience.username) {
        ctx.addIssue({
          path: ["experience", "username"],
          message:
            "Username is required for LinkedIn or Peerlist experience sources",
          code: "custom",
        });
      }
    }

    /* ───────────── Blogs rules ───────────── */
    if (config.blogs.enabled) {
      const anyBlogEnabled =
        config.blogs.medium.enabled ||
        config.blogs.devto.enabled ||
        config.blogs.mdx.enabled;

      if (!anyBlogEnabled) {
        ctx.addIssue({
          path: ["blogs"],
          message: "At least one blog source must be enabled",
          code: "custom",
        });
      }

      if (config.blogs.medium.enabled && !config.blogs.medium.username) {
        ctx.addIssue({
          path: ["blogs", "medium", "username"],
          message: "Username is required when Medium is enabled",
          code: "custom",
        });
      }

      if (config.blogs.devto.enabled && !config.blogs.devto.username) {
        ctx.addIssue({
          path: ["blogs", "devto", "username"],
          message: "Username is required when Dev.to is enabled",
          code: "custom",
        });
      }
    }

    /* ───────────── Socials rules ───────────── */
    if (config.socials.enabled) {
      const platforms = [
        "github",
        "linkedin",
        "twitter",
        "peerlist",
        "youtube",
      ] as const;

      const anySocialEnabled =
        platforms.some((p) => config.socials[p].enabled) ||
        config.socials.email.enabled;

      if (!anySocialEnabled) {
        ctx.addIssue({
          path: ["socials"],
          message: "At least one social must be enabled",
          code: "custom",
        });
      }

      for (const platform of platforms) {
        const social = config.socials[platform];
        if (social.enabled) {
          if (!social.username) {
            ctx.addIssue({
              path: ["socials", platform, "username"],
              message: "Username is required when this social is enabled",
              code: "custom",
            });
          }

          if (!social.url) {
            ctx.addIssue({
              path: ["socials", platform, "url"],
              message: "URL is required when this social is enabled",
              code: "custom",
            });
          }
        }
      }

      if (config.socials.email.enabled && !config.socials.email.address) {
        ctx.addIssue({
          path: ["socials", "email", "address"],
          message: "Email address is required when email is enabled",
          code: "custom",
        });
      }
    }
  });

/* ───────────── Inferred type ───────────── */

export type APIConfig = z.infer<typeof APIConfigSchema>;
