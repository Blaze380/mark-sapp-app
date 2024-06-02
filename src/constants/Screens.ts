import { Href, LinkProps } from "expo-router";

enum Paths {
    AUTHORIZATIONS = "(auth)",
    SETTINGS = "(settings)",
    USER_CONFIGURATION = `${ SETTINGS }/(user)`,
    TAB_CHAT_SCREENS = "(chat)",
    MESSAGES = "(message)",
}
export const Screens = {
    AUTH: {
        INSERT_PHONE_NUMBER: "auth" as Href<any>,
        VALIDATE_OTP_CODE: "ValidateOtpCode" as Href<any>,
        CREATE_PROFILE: "/auth/CreateProfile" as Href<any>,
    },
    WELCOME: {
        INDEX: "index" as Href<any>,
        MAIN_TAB: {
            INDEX: "main_tab" as Href<any>,
            PRIVATE_CHATS_TAB: {
                INDEX: "private_chats_tab" as Href<any>,
                PRIVATE_CHAT_PAGE: "" as Href<any>,
            },
            GROUP_CHATS_TAB: {
                INDEX: "group_chats_tab" as Href<any>,
                GROUPS_CHAT_PAGE: "" as Href<any>,
            },
            STATUS_TAB: {
                INDEX: "status_tab" as Href<any>,
            },
            CALLS_TAB: {
                INDEX: "calls_tab" as Href<any>,
            }
        }
    },
}

export enum Screens1 {
    WELCOME = "index",
    INSERT_PHONE_NUMBER = `${ Paths.AUTHORIZATIONS }/insert-phone-number`,
    VALIDATE_OTP_CODE = `${ Paths.AUTHORIZATIONS }/validate-otp-code`,
    CREATE_USER_PROFILE = `${ Paths.USER_CONFIGURATION }/CreateProfile`,
    SETTINGS = `${ Paths.SETTINGS }/Settings`,
    PRIVATE_CHAT_SCREEN = `${ Paths.TAB_CHAT_SCREENS }/PrivateChatScreen`,
    GROUPS_CHAT_SCREEN = `${ Paths.TAB_CHAT_SCREENS }/GroupsChatScreen`,
    CALLS = `${ Paths.MESSAGES }/Calls`,
    STATUS = `${ Paths.MESSAGES }/Status`,
    PRIVATE_CHAT_PAGE = `${ Paths.MESSAGES }/PrivateChat`,
    GROUP_CHAT_PAGE = `${ Paths.MESSAGES }/GroupChat`,
    USER_PROFILE = `${ Paths.MESSAGES }/UserProfile`,
}

export enum ScreensRoutes {
    PRIVATE_CHAT_SCREEN = "PrivateChatScreen",
    GROUPS_CHAT_SCREEN = "GroupsChatScreen",
    PRIVATE_CHAT_PAGE = `PrivateChat`,
    GROUP_CHAT_PAGE = `GroupChat`,
    STATUS = 'Status',
    CALLS = 'Calls',
    USER_PROFILE = 'UserProfile',
}