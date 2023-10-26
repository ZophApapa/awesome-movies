import { Mutate, StoreApi } from 'zustand'

import { Mutators } from '../lib/zustand.lib'

export type MutatedSetState<T> = Mutate<StoreApi<T>, Mutators>['setState']

export type MutatedGetState<T> = StoreApi<T>['getState']
