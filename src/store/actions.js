import * as types from './mutation-types'

export const addressIDFun = function ({commit}, {istf, index}) {
	commit(types.ISTF, istf)
	commit(types.ADDRESS_ID, index)
}
