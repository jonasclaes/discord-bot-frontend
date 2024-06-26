import { CommonObject } from './CommonObject'
import { GuildMember } from './GuildMember'

export type Report = CommonObject & {
  // Discord Guild Channel Snowflake.
  channelId: string

  // Description of the report.
  description: string

  // Has the report been submitted anonymously?
  anonymous: boolean

  // Has the report been resolved?
  resolved: boolean

  // User in the database that submitted the report.
  guildMember: GuildMember

  // User in the database that was reported.
  reportedGuildMember: GuildMember
}
