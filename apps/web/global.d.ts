// Use type safe message keys with `next-intl`
type Messages = typeof import('../../packages/locales/en.json')

declare interface IntlMessages extends Messages {
}
