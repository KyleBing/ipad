export const lastOS: string
export const lastModifyDate: string
export const iPadPro: IpadModel[]
export const iPadAir: IpadModel[]
export const iPadMini: IpadModel[]
export const iPad: IpadModel[]

interface IpadModel {
  name: string
  name_short: string
  active?: boolean
  isPreview?: boolean
  isNew?: boolean
  screen: Record<string, unknown>
  width?: number
  height?: number
  thickness?: number
  os?: { init: string; last: string }
  geekbenchScore?: number
  cpu?: Array<{ name: string; model: string; rate: string; core: number }>
  gpu?: { model: string; core?: number }
  memory?: Array<{ size: number; type?: string; name?: string }>
  storage?: number[]
  battery?: { capacity?: number; capacityWH?: number; voltage?: number }
  connector?: string[]
  mechanicalKeys?: string[]
  pencil?: string[]
  unlockMethods?: string[]
  colors?: string[]
  models?: Array<{ id: number; name: string; model: string; weight: number }>
  cameras?: Record<string, unknown>
  release?: string
}
